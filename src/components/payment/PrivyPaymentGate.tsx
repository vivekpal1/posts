import React, { useState, useEffect } from 'react';
import { usePrivy } from '@privy-io/react-auth';
import { useSolanaWallets } from '@privy-io/react-auth/solana';
import { SolanaPayment } from './SolanaPayment';

interface PrivyPaymentGateProps {
  children: React.ReactNode;
  requiredPayment?: {
    amount: number;
    currency: 'SOL' | 'USDC';
    recipientAddress: string;
  };
}

export const PrivyPaymentGate: React.FC<PrivyPaymentGateProps> = ({ 
  children, 
  requiredPayment = {
    amount: 0.5,
    currency: 'SOL',
    recipientAddress: 'vivgdu332GMEk3FaupQa92gQjYd9LX6TMgjMVsLaCu4'
  }
}) => {
  const { ready, authenticated } = usePrivy();
  const { wallets: solanaWallets } = useSolanaWallets();
  const [hasAccess, setHasAccess] = useState(false);
  const [showPayment, setShowPayment] = useState(false);

  // Check for existing access on component mount
  useEffect(() => {
    const checkAccess = () => {
      try {
        const accessKey = `payment_access_${requiredPayment.recipientAddress}`;
        const storedAccess = localStorage.getItem(accessKey);
        
        if (storedAccess) {
          const accessData = JSON.parse(storedAccess);
          if (accessData.signature && accessData.timestamp) {
            setHasAccess(true);
            return;
          }
        }
      } catch (error) {
        console.error('Error checking access:', error);
      }
      
      // If no valid access found, show payment
      setShowPayment(true);
    };

    if (ready) {
      checkAccess();
    }
  }, [ready, requiredPayment.recipientAddress]);

  const handlePaymentSuccess = (signature: string) => {
    try {
      // Store payment proof
      const accessKey = `payment_access_${requiredPayment.recipientAddress}`;
      const accessData = {
        signature,
        timestamp: Date.now(),
        amount: requiredPayment.amount,
        currency: requiredPayment.currency,
        recipientAddress: requiredPayment.recipientAddress,
      };
      
      localStorage.setItem(accessKey, JSON.stringify(accessData));
      setHasAccess(true);
      setShowPayment(false);
    } catch (error) {
      console.error('Error storing payment proof:', error);
    }
  };

  const handlePaymentError = (error: string) => {
    console.error('Payment error:', error);
    alert(`Payment failed: ${error}`);
  };

  // Show loading state while Privy is initializing
  if (!ready) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading payment system...</p>
        </div>
      </div>
    );
  }

  // If user has access, show the protected content
  if (hasAccess) {
    return <>{children}</>;
  }

  // Show payment interface
  if (showPayment) {
    return (
      <div className="min-h-[400px] bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Premium Content
            </h1>
            <p className="text-gray-600">
              This content requires a one-time payment to access.
            </p>
          </div>
          
          <SolanaPayment
            amount={requiredPayment.amount}
            recipientAddress={requiredPayment.recipientAddress}
            onSuccess={handlePaymentSuccess}
            onError={handlePaymentError}
          />
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Payment is processed on the Solana blockchain.
              <br />
              You'll have lifetime access after payment.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Fallback loading state
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
  );
}; 