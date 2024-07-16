import React, { useState, ReactNode, createContext, Dispatch, SetStateAction } from 'react';

interface LoadingProviderProps {
  children: ReactNode;
}

interface LoginContextProps {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

export const LoadingContext = createContext<LoginContextProps>({
  loading: false,
  setLoading: () => {},
});

export default function LoadingProvider({ children }: LoadingProviderProps) {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}