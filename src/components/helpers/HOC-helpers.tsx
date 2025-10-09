export function CustomeFallback({ onLogin }: { onLogin: () => void }) {
    return (
        <div className="fixed w-screen h-screen top-0 left-0 flex justify-center items-center bg-gradient-to-br from-blue-800 via-blue-600 to-blue-400 z-50 text-white flex-col gap-y-6">
            <div className="bg-white/10 p-8 rounded-xl shadow-lg flex flex-col items-center gap-y-4">
                <svg className="w-12 h-12 text-blue-300 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5s-3 1.343-3 3 1.343 3 3 3zm0 2c-2.67 0-8 1.337-8 4v2a1 1 0 001 1h14a1 1 0 001-1v-2c0-2.663-5.33-4-8-4z" />
                </svg>
                <p className="text-lg font-semibold">You must be logged in to view this content.</p>
                <button
                    onClick={onLogin}
                    className="mt-2 px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full shadow hover:scale-105 transition-transform font-medium"
                >
                    Login
                </button>
            </div>
        </div>
    )
}