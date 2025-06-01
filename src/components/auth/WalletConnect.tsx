import React from 'react';

// Conditional import to handle when Privy is not available
let usePrivy: any;
try {
    ({ usePrivy } = require('@privy-io/react-auth'));
} catch (error) {
    // Fallback if Privy is not properly configured
    usePrivy = () => ({
        login: () => alert('Wallet connection not configured'),
        logout: () => { },
        authenticated: false,
        user: null
    });
}

export const WalletConnect: React.FC = () => {
    const appId = import.meta.env.PUBLIC_PRIVY_APP_ID;

    // Show disabled state if Privy is not configured
    if (!appId || appId === 'your-privy-app-id-here') {
        return (
            <div className="bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200 text-sm px-3 py-2 rounded">
                Wallet not configured
            </div>
        );
    }

    const { login, logout, authenticated, user } = usePrivy();

    if (authenticated) {
        return (
            <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600 dark:text-gray-300">
                    Connected: {user?.wallet?.address?.slice(0, 8)}...
                </span>
                <button
                    onClick={logout}
                    className="bg-red-600 hover:bg-red-700 text-white text-sm px-3 py-1 rounded"
                >
                    Disconnect
                </button>
            </div>
        );
    }

    return (
        <button
            onClick={login}
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg"
        >
            Connect Solana Wallet
        </button>
    );
};