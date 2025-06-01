import React, { useState, useEffect } from 'react';
import { PaymentGateway } from './PaymentGateway';

interface PremiumContentWrapperProps {
    children: string;
    title: string;
    previewLength: number;
    price: number;
}

export const PremiumContentWrapper: React.FC<PremiumContentWrapperProps> = ({
    children,
    title,
    previewLength,
    price
}) => {
    const [hasAccess, setHasAccess] = useState(false);
    const [showPayment, setShowPayment] = useState(false);

    useEffect(() => {
        // Check if user has already paid for this content
        const paymentProof = localStorage.getItem(`payment_${title}`);
        const premiumAccess = localStorage.getItem('premium_access');

        if (paymentProof || premiumAccess === 'true') {
            setHasAccess(true);
        }
    }, [title]);

    const handlePaymentSuccess = () => {
        setHasAccess(true);
        setShowPayment(false);
    };

    if (hasAccess) {
        return <div dangerouslySetInnerHTML={{ __html: children }} />;
    }

    const previewContent = children.substring(0, previewLength);
    const premiumMarker = children.indexOf('<!-- PREMIUM_CONTENT_START -->');
    const premiumEndMarker = children.indexOf('<!-- PREMIUM_CONTENT_END -->');

    let freeContent = children;
    if (premiumMarker !== -1) {
        freeContent = children.substring(0, premiumMarker);
    }

    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: freeContent }} />

            <div className="my-8 border-2 border-dashed border-yellow-400 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6">
                <div className="text-center">
                    <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-2">
                        🔒 Premium Content Ahead
                    </h3>
                    <p className="text-yellow-700 dark:text-yellow-300 mb-4">
                        This is just the beginning! Get access to detailed reviews, exact locations,
                        insider tips, and exclusive spots for a one-time payment.
                    </p>

                    {!showPayment ? (
                        <button
                            onClick={() => setShowPayment(true)}
                            className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
                        >
                            Unlock Full Guide - ${price}
                        </button>
                    ) : (
                        <PaymentGateway
                            onPaymentSuccess={handlePaymentSuccess}
                            amount={price}
                            contentTitle={title}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};