import React, { useState } from 'react';

// Conditional imports to handle when dependencies are not available
let usePrivy: any;
let useSolanaKit: any;
let PublicKey: any;
let Transaction: any;
let SystemProgram: any;

try {
    ({ usePrivy } = require('@privy-io/react-auth'));
    ({ useSolanaKit } = require('@solana/kit'));
    ({ PublicKey, Transaction, SystemProgram } = require('@solana/web3.js'));
} catch (error) {
    // Fallback implementations
    usePrivy = () => ({ user: null, authenticated: false });
    useSolanaKit = () => ({ wallet: null, connection: null });
    PublicKey = class { constructor() { } };
    Transaction = class { add() { return this; } };
    SystemProgram = { transfer: () => ({}) };
}

interface PaymentGatewayProps {
    onPaymentSuccess: () => void;
    amount: number; // in USD
    contentTitle: string;
}

export const PaymentGateway: React.FC<PaymentGatewayProps> = ({
    onPaymentSuccess,
    amount,
    contentTitle
}) => {
    const [isProcessing, setIsProcessing] = useState(false);
    const [paymentStatus, setPaymentStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle');

    const appId = import.meta.env.PUBLIC_PRIVY_APP_ID;
    const isConfigured = appId && appId !== 'your-privy-app-id-here';

    // Only use hooks if properly configured
    const { user, authenticated } = isConfigured ? usePrivy() : { user: null, authenticated: false };
    const { wallet, connection } = isConfigured ? useSolanaKit() : { wallet: null, connection: null };

    const RECIPIENT_ADDRESS = 'vivgdu332GMEk3FaupQa92gQjYd9LX6TMgjMVsLaCu4';
    const SOL_TO_USD_RATE = 100; // This should be fetched from an API in production

    const handlePayment = async () => {
        if (!isConfigured) {
            alert('Payment system not configured. Please contact the site owner.');
            return;
        }

        if (!authenticated || !wallet) {
            alert('Please connect your wallet first');
            return;
        }

        setIsProcessing(true);
        setPaymentStatus('processing');

        try {
            const solAmount = amount / SOL_TO_USD_RATE;
            const lamports = solAmount * 1000000000; // Convert SOL to lamports

            const transaction = new Transaction().add(
                SystemProgram.transfer({
                    fromPubkey: wallet.publicKey,
                    toPubkey: new PublicKey(RECIPIENT_ADDRESS),
                    lamports: Math.floor(lamports),
                })
            );

            const signature = await wallet.sendTransaction(transaction, connection);
            await connection.confirmTransaction(signature, 'confirmed');

            // Store payment proof locally (in production, use a proper database)
            const paymentProof = {
                signature,
                userWallet: wallet.publicKey.toString(),
                contentTitle,
                amount,
                timestamp: Date.now(),
                type: 'lifetime_access'
            };

            localStorage.setItem(`payment_${contentTitle}`, JSON.stringify(paymentProof));
            localStorage.setItem('premium_access', 'true');

            setPaymentStatus('success');
            onPaymentSuccess();
        } catch (error) {
            console.error('Payment failed:', error);
            setPaymentStatus('error');
        } finally {
            setIsProcessing(false);
        }
    };

    if (!isConfigured) {
        return (
            <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded">
                <h3 className="font-bold">Payment System Configuration Required</h3>
                <p>The payment system needs to be configured. Please contact the site owner.</p>
            </div>
        );
    }

    if (paymentStatus === 'success') {
        return (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                <h3 className="font-bold">Payment Successful! 🎉</h3>
                <p>You now have lifetime access to premium content. Enjoy!</p>
            </div>
        );
    }

    return (
        <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-4">Unlock Premium Content</h3>
            <div className="mb-4">
                <p className="text-gray-600 dark:text-gray-300">
                    Get lifetime access to <strong>{contentTitle}</strong> and all future updates.
                </p>
                <div className="mt-2 text-lg font-semibold text-blue-600 dark:text-blue-400">
                    ${amount} USD (≈ {(amount / SOL_TO_USD_RATE).toFixed(2)} SOL)
                </div>
            </div>

            <div className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                Payment goes to: <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                    {RECIPIENT_ADDRESS.slice(0, 8)}...{RECIPIENT_ADDRESS.slice(-8)}
                </code>
            </div>

            {paymentStatus === 'error' && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                    Payment failed. Please try again or contact support.
                </div>
            )}

            <button
                onClick={handlePayment}
                disabled={isProcessing || !authenticated}
                className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${isProcessing || !authenticated
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                    }`}
            >
                {isProcessing ? 'Processing Payment...' : `Pay ${amount} USD with Solana`}
            </button>

            {!authenticated && (
                <p className="mt-3 text-sm text-gray-500 text-center">
                    Connect your Solana wallet to proceed with payment
                </p>
            )}
        </div>
    );
};