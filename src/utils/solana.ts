import { Connection, PublicKey } from '@solana/web3.js';

export const SOLANA_NETWORK = import.meta.env.PUBLIC_SOLANA_NETWORK || 'mainnet-beta';
export const RECIPIENT_WALLET = import.meta.env.PUBLIC_RECIPIENT_WALLET || 'vivgdu332GMEk3FaupQa92gQjYd9LX6TMgjMVsLaCu4';

export const getConnection = () => {
    const endpoint = SOLANA_NETWORK === 'mainnet-beta'
        ? 'https://api.mainnet-beta.solana.com'
        : 'https://api.devnet.solana.com';

    return new Connection(endpoint, 'confirmed');
};

export const validateSolanaAddress = (address: string): boolean => {
    try {
        new PublicKey(address);
        return true;
    } catch {
        return false;
    }
};

export const getSolToUsdRate = async (): Promise<number> => {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd');
        const data = await response.json();
        return data.solana.usd;
    } catch (error) {
        console.error('Failed to fetch SOL price:', error);
        return 100; // Fallback price
    }
};