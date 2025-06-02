import React, { useState, useEffect } from 'react';
import { usePrivy } from '@privy-io/react-auth';
import { useSolanaWallets } from '@privy-io/react-auth/solana';
import { Connection, PublicKey, Transaction, SystemProgram, LAMPORTS_PER_SOL } from '@solana/web3.js';

interface SolanaPaymentProps {
  amount: number; // Amount in SOL
  recipientAddress: string;
  onSuccess: (signature: string) => void;
  onError: (error: string) => void;
}

export const SolanaPayment: React.FC<SolanaPaymentProps> = ({
  amount,
  recipientAddress,
  onSuccess,
  onError,
}) => {
  const { ready, authenticated, user, login } = usePrivy();
  const { wallets: solanaWallets } = useSolanaWallets();
  const [isProcessing, setIsProcessing] = useState(false);
  const [solPrice, setSolPrice] = useState<number | null>(null);

  // Get SOL price from CoinGecko
  useEffect(() => {
    const fetchSolPrice = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd');
        const data = await response.json();
        setSolPrice(data.solana.usd);
      } catch (error) {
        console.error('Failed to fetch SOL price:', error);
      }
    };

    fetchSolPrice();
  }, []);

  const handleConnect = async () => {
    try {
      await login();
    } catch (error) {
      onError('Failed to connect wallet');
    }
  };

  const handlePayment = async () => {
    if (!authenticated || !user) {
      onError('Please connect your wallet first');
      return;
    }

    // Find a Solana wallet
    const solanaWallet = solanaWallets.find(wallet => wallet.address);
    
    if (!solanaWallet) {
      onError('No Solana wallet connected. Please connect a Solana wallet.');
      return;
    }

    setIsProcessing(true);

    try {
      // Create connection to Solana devnet
      const connection = new Connection('https://api.devnet.solana.com', 'confirmed');
      
      // Get wallet public key
      const fromPubkey = new PublicKey(solanaWallet.address);
      const toPubkey = new PublicKey(recipientAddress);
      
      // Get recent blockhash
      const { blockhash } = await connection.getLatestBlockhash();
      
      // Create transaction
      const transaction = new Transaction({
        recentBlockhash: blockhash,
        feePayer: fromPubkey,
      });

      // Add transfer instruction
      transaction.add(
        SystemProgram.transfer({
          fromPubkey,
          toPubkey,
          lamports: amount * LAMPORTS_PER_SOL,
        })
      );

      // Use the wallet's sendTransaction method for real transactions
      if (solanaWallet.sendTransaction) {
        const signature = await solanaWallet.sendTransaction(transaction, connection);
        
        // Wait for confirmation
        await connection.confirmTransaction(signature);
        
        onSuccess(signature);
      } else {
        onError('Wallet does not support sending transactions');
      }
    } catch (error) {
      console.error('Payment failed:', error);
      onError(error instanceof Error ? error.message : 'Payment failed');
    } finally {
      setIsProcessing(false);
    }
  };

  if (!ready) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!authenticated) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
        <h3 className="text-xl font-semibold mb-4">Connect Your Wallet</h3>
        <p className="text-gray-600 mb-6">
          Connect your Solana wallet to make a payment of {amount} SOL
          {solPrice && (
            <span className="text-sm text-gray-500 block">
              (≈ ${(amount * solPrice).toFixed(2)} USD)
            </span>
          )}
        </p>
        <button
          onClick={handleConnect}
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Connect Solana Wallet
        </button>
      </div>
    );
  }

  const solanaWallet = solanaWallets.find(wallet => wallet.address);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
      <h3 className="text-xl font-semibold mb-4">Complete Payment</h3>
      
      <div className="space-y-4 mb-6">
        <div className="flex justify-between">
          <span className="text-gray-600">Amount:</span>
          <span className="font-semibold">{amount} SOL</span>
        </div>
        
        {solPrice && (
          <div className="flex justify-between">
            <span className="text-gray-600">USD Value:</span>
            <span className="font-semibold">${(amount * solPrice).toFixed(2)}</span>
          </div>
        )}
        
        <div className="flex justify-between">
          <span className="text-gray-600">To:</span>
          <span className="font-mono text-sm">
            {recipientAddress.slice(0, 8)}...{recipientAddress.slice(-8)}
          </span>
        </div>

        {solanaWallet && (
          <div className="flex justify-between">
            <span className="text-gray-600">From:</span>
            <span className="font-mono text-sm">
              {solanaWallet.address.slice(0, 8)}...{solanaWallet.address.slice(-8)}
            </span>
          </div>
        )}
      </div>

      {!solanaWallet ? (
        <div className="space-y-4">
          <p className="text-amber-600 text-sm">
            No Solana wallet detected. Please connect a Solana wallet like Phantom or Solflare.
          </p>
          <button
            onClick={handleConnect}
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Connect Solana Wallet
          </button>
        </div>
      ) : (
        <button
          onClick={handlePayment}
          disabled={isProcessing}
          className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isProcessing ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Processing...
            </div>
          ) : (
            `Pay ${amount} SOL`
          )}
        </button>
      )}
    </div>
  );
}; 