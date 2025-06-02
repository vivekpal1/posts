import React from 'react';
import { PrivyProvider as BasePrivyProvider } from '@privy-io/react-auth';
import { toSolanaWalletConnectors } from '@privy-io/react-auth/solana';

interface PrivyProviderProps {
    children: React.ReactNode;
}

export function PrivyProvider({ children }: PrivyProviderProps) {
    const solanaNetwork = import.meta.env.PUBLIC_SOLANA_NETWORK || 'devnet';
    
    return (
        <BasePrivyProvider
            appId={import.meta.env.PUBLIC_PRIVY_APP_ID}
            config={{
                loginMethods: ['wallet', 'email', 'sms'],
                appearance: {
                    theme: 'light',
                    accentColor: '#9945FF',
                    walletChainType: 'solana-only',
                },
                embeddedWallets: {
                    createOnLogin: 'users-without-wallets',
                },
                solanaClusters: [
                    {
                        name: solanaNetwork === 'mainnet-beta' ? 'mainnet-beta' : 'devnet',
                        rpcUrl: solanaNetwork === 'mainnet-beta' 
                            ? 'https://api.mainnet-beta.solana.com'
                            : 'https://api.devnet.solana.com'
                    }
                ],
                externalWallets: {
                    solana: {
                        connectors: toSolanaWalletConnectors(),
                    },
                },
            }}
        >
            {children}
        </BasePrivyProvider>
    );
}