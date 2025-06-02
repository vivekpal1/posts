import React, { useState, useEffect } from 'react';

interface PaymentGateProps {
  children: React.ReactNode;
  requiredPayment?: {
    amount: number;
    currency: 'SOL' | 'USDC';
    recipientAddress: string;
  };
}

export const PaymentGate: React.FC<PaymentGateProps> = ({ 
  children, 
  requiredPayment = {
    amount: 0.5,
    currency: 'SOL',
    recipientAddress: 'vivgdu332GMEk3FaupQa92gQjYd9LX6TMgjMVsLaCu4'
  }
}) => {
  const [hasAccess, setHasAccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Check environment variables
  const privyAppId = import.meta.env.PUBLIC_PRIVY_APP_ID;
  const isPrivyConfigured = privyAppId && privyAppId !== 'your_privy_app_id_here';

  useEffect(() => {
    setIsLoading(true);
    
    // If Privy is not configured, show error
    if (!isPrivyConfigured) {
      setError('Privy is not configured. Please set PUBLIC_PRIVY_APP_ID in your .env file.');
      setIsLoading(false);
      return;
    }

    // Check for existing access
    const checkAccess = () => {
      try {
        const accessKey = `payment_access_${requiredPayment.recipientAddress}`;
        const storedAccess = localStorage.getItem(accessKey);
        
        if (storedAccess) {
          const accessData = JSON.parse(storedAccess);
          if (accessData.signature && accessData.timestamp) {
            setHasAccess(true);
            setIsLoading(false);
            return;
          }
        }
      } catch (error) {
        console.error('Error checking access:', error);
      }
      
      setIsLoading(false);
    };

    checkAccess();
  }, [isPrivyConfigured, requiredPayment.recipientAddress]);

  const handlePaymentSuccess = (signature: string) => {
    try {
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
    } catch (error) {
      console.error('Error storing payment proof:', error);
    }
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading payment system...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-[400px] bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            <h3 className="font-bold">Configuration Error</h3>
            <p className="text-sm mt-2">{error}</p>
          </div>
          
          <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-3 rounded">
            <h4 className="font-semibold mb-2">Setup Instructions:</h4>
            <ol className="text-sm text-left space-y-1">
              <li>1. Create a <code className="bg-yellow-200 px-1 rounded">.env</code> file in your project root</li>
              <li>2. Add: <code className="bg-yellow-200 px-1 rounded">PUBLIC_PRIVY_APP_ID=your_privy_app_id</code></li>
              <li>3. Get your App ID from <a href="https://dashboard.privy.io/" className="underline">Privy Dashboard</a></li>
              <li>4. Restart the development server</li>
            </ol>
          </div>
        </div>
      </div>
    );
  }

  // If user has access, show content
  if (hasAccess) {
    return <>{children}</>;
  }

  // Show payment interface
  return (
    <div className="min-h-[400px] bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Premium Content
          </h1>
          <p className="text-gray-600 mb-6">
            This content requires a one-time payment to access.
          </p>
          
          <div className="space-y-4 mb-6">
            <div className="flex justify-between">
              <span className="text-gray-600">Amount:</span>
              <span className="font-semibold">{requiredPayment.amount} {requiredPayment.currency}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Access:</span>
              <span className="font-semibold">Lifetime</span>
            </div>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 text-blue-700 px-4 py-3 rounded mb-4">
            <p className="text-sm">
              ⚠️ Payment system is ready but requires Privy configuration.
              <br />
              Please contact the site administrator.
            </p>
          </div>
          
          <button
            disabled
            className="w-full bg-gray-400 text-white py-3 px-4 rounded-lg cursor-not-allowed"
          >
            Payment System Not Ready
          </button>
        </div>
      </div>
    </div>
  );
};

// Extend window interface for TypeScript
declare global {
  interface Window {
    unlockPremiumContent?: () => void;
  }
} 