// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly PUBLIC_PRIVY_APP_ID: string;
    readonly PUBLIC_SOLANA_NETWORK: 'mainnet-beta' | 'devnet';
    readonly PUBLIC_RECIPIENT_WALLET: string;
    readonly PUBLIC_SOLANA_RPC_URL?: string;
    readonly PUBLIC_SOLANA_RPC_URL_MAINNET?: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
