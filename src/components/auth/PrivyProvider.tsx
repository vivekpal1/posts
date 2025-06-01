import React from 'react';
import { PrivyProvider as PrivyAuthProvider } from '@privy-io/react-auth';

interface PrivyProviderProps {
    children: React.ReactNode;
}

export const PrivyProvider: React.FC<PrivyProviderProps> = ({ children }) => {
    // Get the app ID from environment variables
    const appId = import.meta.env.PUBLIC_PRIVY_APP_ID;

    // If no app ID is provided, render children without Privy wrapper
    if (!appId || appId === 'your-privy-app-id-here') {
        console.warn('Privy app ID not configured. Wallet features will be disabled.');
        return <>{children}</>;
    }

    return (
        <PrivyAuthProvider
            appId={appId}
            config={{
                appearance: {
                    theme: 'dark',
                    accentColor: '#676FFF',
                },
                embeddedWallets: {
                    createOnLogin: 'users-without-wallets',
                },
                loginMethods: ['wallet'],
                supportedChains: ['solana'],
            }}
        >
            {children}
        </PrivyAuthProvider>
    );
};