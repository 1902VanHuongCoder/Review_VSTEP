/**
 * Higher Order Components (HOCs) exports to add extra functionality to the components. 
 */

import React, { useCallback, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";


export function withLoading<P extends object>(WrappedComponent: React.ComponentType<P>) {
    return function WithLoadingComponent(props: P & { isLoading: boolean }) {
        const { isLoading, ...test } = props;
        if (isLoading) {
            return (
                <div className="fixed w-screen h-screen top-0 left-0 flex justify-center items-center bg-black/50 z-50 text-white flex-col gap-y-3">
                    <span className="w-[50px] h-[50px] border-4 border-t-white border-r-white border-b-transparent border-l-transparent  animate-spin rounded-full"></span>
                    <p>Loading...</p>
                </div>
            )
        }
        return <WrappedComponent {...test as P} />
    }
}


// withAuth HOC to protect parts of the app that require authentication

interface User {
    uid: string;
    email: string | null;
    username?: string;
    role?: 'admin' | 'user';
}

export interface AuthProps {
    requireAuth?: boolean;
    requiredRole?: 'admin' | 'user';
    fallback?: React.ComponentType<{ onLogin: () => void }>;
}


export function withAuth<P extends object>(WrappedComponent: React.ComponentType<P & { user?: User }>) {
    return function WithAuthComponent(props: P & AuthProps) {
        const { requireAuth = true, requiredRole, fallback: Fallback, ...restProps } = props;

        const [currentUser, setCurrentUser] = useState<User | null>(null);
        const [isAuthenticating, setIsAuthenticating] = useState(false);

        const handleLogin = () => {
            setIsAuthenticating(true);
            setTimeout(() => {
                setCurrentUser({ uid: '123', email: 'user@example.com', username: 'exampleUser', role: 'admin' });
                setIsAuthenticating(false);
            }, 3000);
        }

        const handleLogout = () => {
            setCurrentUser(null);
            setIsAuthenticating(false);
        }

        if (isAuthenticating) {
            return (
                <div className="fixed w-screen h-screen top-0 left-0 flex justify-center items-center bg-black/50 z-50 text-white flex-col gap-y-3">
                    <span className="w-[50px] h-[50px] border-4 border-t-white border-r-white border-b-transparent border-l-transparent  animate-spin rounded-full"></span>
                    <p>Authenticating...</p>
                </div>
            )
        }

        if (requireAuth && !currentUser) {
            if (Fallback) {
                return <Fallback onLogin={handleLogin} />;
            }

            return (
                <div className="fixed w-screen h-screen top-0 left-0 flex justify-center items-center bg-black/50 z-50 text-white flex-col gap-y-3">
                    <p>You must be logged in to view this content.</p>
                    <button onClick={handleLogin} className="mt-4 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition">Login</button>
                </div>
            )
        }

        if (requiredRole && currentUser?.role !== requiredRole) {
            return (
                <div className="fixed w-screen h-screen top-0 left-0 flex justify-center items-center bg-black/50 z-50 text-white flex-col gap-y-3">
                    <p>You do not have permission to view this content.</p>
                    <button onClick={handleLogout} className="mt-4 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition">Logout</button>
                </div>
            )
        }

        const componentProps = currentUser ? { ...restProps as P, user: currentUser } : { ...restProps as P };
        return <WrappedComponent {...componentProps} />
    }
}


// Analytics Tracking HOC 
export interface AnalyticsEvent {
    action: string;
    category: string;
    label?: string;
    value?: number
}

export function withAnalytics<P extends object>(WrappedComponent: React.ComponentType<P>, defaultEvents?: AnalyticsEvent[]) {
    return function ComponentWithAnalytics(props: P & { trackEvents?: AnalyticsEvent[] }) {
        const { trackEvents = defaultEvents || [], ...restProps } = props;

        const componentRef = useRef<HTMLDivElement>(null);

        const trackEvent = useCallback((event: AnalyticsEvent) => {
            console.log({
                timestamp: new Date().toISOString(),
                component: WrappedComponent.displayName || WrappedComponent.name,
                ...event
            })
        }, []);

        const handleClick = (e: React.MouseEvent) => {
            trackEvent({
                action: 'click',
                category: 'user_interaction',
                label: `${WrappedComponent.displayName || WrappedComponent.name}_clicked`
            });

            const originalOnClick = (restProps as P & { onClick?: (e: React.MouseEvent) => void }).onClick;

            if (originalOnClick) {
                originalOnClick(e);
            }
        }

        useEffect(() => {
            trackEvent({
                action: 'component_mounted',
                category: 'user_interaction',
                label: WrappedComponent.displayName || WrappedComponent.name
            });

            trackEvents.forEach((item: AnalyticsEvent) => trackEvent(item));

            return () => {
                trackEvent({
                    action: 'component_unmounted',
                    category: 'user_interaction',
                    label: WrappedComponent.displayName || WrappedComponent.name
                })
            }
        }, [trackEvents, trackEvent]);

        return (
            <div ref={componentRef} onClick={handleClick}>
                <WrappedComponent {...(restProps as P)} />
            </div>
        )
    }
}


// Error Boundary HOC to avoid app crash 
export interface ErrorBoundaryState {
    hasError: boolean,
    error: Error | undefined,
    errorInfo: React.ErrorInfo | undefined
}

export function withErrorBoundary<P extends object>(
    WrappedComponent: React.ComponentType<P>,
    FallbackComponent?: React.ComponentType<{ error: Error; resetError: () => void }>
) {
    return class WithErrorBoundary extends React.Component<P, ErrorBoundaryState> {
        constructor(props: P) {
            super(props);
            this.state = { hasError: false, error: undefined, errorInfo: undefined };
        }
        static getDerivedStateFromError(error: Error): ErrorBoundaryState {
            return {
                hasError: true,
                error,
                errorInfo: undefined
            }
        }

        componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
            this.setState({ error, errorInfo });
            console.log('💥 Component Error:', error, errorInfo)
        }

        resetError = () => {
            this.setState({
                hasError: false,
                error: undefined,
                errorInfo: undefined
            })
        }

        render() {
            if (this.state.hasError) {
                if (FallbackComponent && this.state.error) {
                    return <FallbackComponent error={this.state.error} resetError={this.resetError} />
                }

                return (
                    <div
                        style={{
                            padding: '2.5rem',
                            textAlign: 'center',
                            border: 'none',
                            borderRadius: '16px',
                            background: 'linear-gradient(135deg, #f8d7da 0%, #ffe5e9 100%)',
                            color: '#721c24',
                            boxShadow: '0 4px 24px rgba(220, 53, 69, 0.15)',
                            maxWidth: '400px',
                            margin: '2rem auto'
                        }}
                    >
                        <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>💥</div>
                        <h3 style={{ marginBottom: '0.5rem', fontWeight: 700, fontSize: '1.5rem' }}>
                            Oops! Something went wrong
                        </h3>
                        <p style={{ marginBottom: '1rem', fontSize: '1rem', color: '#842029' }}>
                            An unexpected error occurred in this component.
                        </p>
                        <details
                            style={{
                                marginTop: '1rem',
                                textAlign: 'left',
                                background: '#fff',
                                borderRadius: '8px',
                                padding: '0.75rem',
                                boxShadow: '0 2px 8px rgba(220,53,69,0.07)'
                            }}
                        >
                            <summary style={{ cursor: 'pointer', fontWeight: 600, color: '#dc3545' }}>
                                Show Error Details
                            </summary>
                            <pre
                                style={{
                                    fontSize: '0.85rem',
                                    overflow: 'auto',
                                    marginTop: '0.5rem',
                                    color: '#721c24'
                                }}
                            >
                                {this.state.error?.toString()}
                            </pre>
                        </details>
                        <button
                            onClick={this.resetError}
                            style={{
                                marginTop: '1.5rem',
                                padding: '0.75rem 1.5rem',
                                background: 'linear-gradient(90deg, #dc3545 0%, #ff6f91 100%)',
                                color: 'white',
                                border: 'none',
                                borderRadius: '8px',
                                fontWeight: 600,
                                fontSize: '1rem',
                                cursor: 'pointer',
                                boxShadow: '0 2px 8px rgba(220,53,69,0.10)',
                                transition: 'background 0.2s'
                            }}
                        >
                            Try Again
                        </button>
                    </div>
                )
            }

            return <WrappedComponent  {...this.props} />

        }
    }
}


// HOC to minotor basicly component's performance 
export function withPerformanceMonitoring<P extends object>(
    WrappedComponent: React.ComponentType<P>,
    options?: { logSlowRender?: boolean, threshold?: number }
) {
    return function ComponentWithPerformanceMonitoring(props: P) {
        const { logSlowRender = true, threshold = 16 } = options || {};
        const renderStartTime = useRef<number>();
        const renderCount = useRef(0);

        useEffect(() => {
            renderStartTime.current = performance.now();
        })

        useEffect(() => {
            if (renderStartTime.current) {
                const renderTime = performance.now() - renderStartTime.current;
                renderCount.current += 1;

                if (logSlowRender && renderTime > threshold) {
                    console.warn(`Slow Render Detected:`, {
                        component: WrappedComponent.displayName || WrappedComponent.name,
                        renderTime: `${renderTime.toFixed(2)}ms`,
                        renderCount: renderCount.current,
                        threshold: `${threshold}ms`
                    })
                }

                console.log(`Perfomance:`, {
                    component: WrappedComponent.displayName || WrappedComponent.name,
                    renderTime: `${renderTime.toFixed(2)}ms`,
                    renderCount: renderCount.current
                })
            }
        })

        return <WrappedComponent {...props} />
    }
}


// HOC to create Theme Provider for child components
export interface ThemeContextType {
    theme: 'light' | 'dark';
    toggleTheme: () => void
}


export function withTheme<P extends object>(WrappedComponent: React.ComponentType<P & { theme?: ThemeContextType }>) {
    return function ComponentWithTheme(props: P) {
        const [theme, setTheme] = useState<'light' | 'dark'>(() => {
            const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
            if (savedTheme) return savedTheme;

            // Check system preference 
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        });

        const toggleTheme = () => {
            setTheme(pre => {
                const newTheme = pre === 'light' ? 'dark' : 'light';

                if (newTheme === 'dark') {
                    document.documentElement.classList.add('dark');
                } else {
                    document.documentElement.classList.remove('light');
                }

                // Save to localStorage 
                localStorage.setItem('theme', newTheme);
                return newTheme;
            });
        }

        useEffect(() => {
            if (theme === 'dark') {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove('dark');
            }
        }, [theme]);

        const themeValue: ThemeContextType = { theme, toggleTheme };

        return (
            <ThemeContext.Provider value={themeValue}>
                <WrappedComponent {...props} theme={themeValue} />
            </ThemeContext.Provider>
        )
    }
}

// Data Fetching HOC to fetch data from API endpoints 

export interface WithDataFetchingProps<T> {
    data?: T | null;
    isLoading?: boolean;
    error?: string | undefined;
    refetch?: () => void;
}

export function withDataFetching<P extends object, T>(
    WrappedComponent: React.ComponentType<P & WithDataFetchingProps<T>>,
    fetchData: () => Promise<T>,
    options?: { refetchInterval?: number, retryCount?: number, timesToStopRefresh?: number }) {
    return function ComponentWithDataFetching(props: P) {
        const { refetchInterval = 0, retryCount: maxRetryCount = 3, timesToStopRefresh = 0 } = options || {};
        const [data, setData] = useState<T | null>(null);
        const [isLoading, setIsLoading] = useState<boolean>(false);
        const [error, setError] = useState<string | undefined>(undefined);
        const [retryCount, setRetryCount] = useState<number>(0);

        const fetchDataFromApi = useCallback(async () => {
            try {
                setIsLoading(true);
                setError(undefined);
                const result = await fetchData();
                setData(result);



                setRetryCount(0);
            } catch (error) {
                const errorMessage = error instanceof Error ? error.message : 'Failed to fetch data';
                setError(errorMessage);

                if (retryCount < maxRetryCount) {
                    setTimeout(() => {
                        setRetryCount(prev => prev + 1);
                        fetchDataFromApi();
                    }, 1000 * Math.pow(2, retryCount));
                }

            } finally {
                setIsLoading(false);
            }
        }, [retryCount, maxRetryCount]);

        useEffect(() => {
            fetchDataFromApi();

            if (refetchInterval) {
                let count = 0;
                const intervalID = setInterval(() => {
                    if (timesToStopRefresh !== 0) {
                        count += 1;
                        if (count > timesToStopRefresh) {
                            clearInterval(intervalID);
                            return;
                        }
                    }
                    fetchDataFromApi();
                }, refetchInterval);
                return () => clearInterval(intervalID);
            }

            return undefined; // We have to return undefined to satisfy the return type of useEffect, satisfy is a way to avoid linting error 
        }, [refetchInterval, fetchDataFromApi, timesToStopRefresh]);

        return (
            <WrappedComponent
                {...props}
                data={data}
                isLoading={isLoading}
                error={error}
                refetch={fetchDataFromApi}
            />
        )
    }
}