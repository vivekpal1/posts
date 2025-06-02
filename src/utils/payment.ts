export interface PaymentRecord {
  signature: string;
  userWallet: string;
  contentTitle: string;
  amount: number;
  amountUsd: string;
  timestamp: number;
  type: 'lifetime_access';
  network: string;
}

export const storePaymentRecord = (record: PaymentRecord): void => {
  try {
    localStorage.setItem(`payment_${record.contentTitle}`, JSON.stringify(record));
    localStorage.setItem('premium_access', 'true');
  } catch (error) {
    console.error('Failed to store payment record:', error);
  }
};

export const getPaymentRecord = (contentTitle: string): PaymentRecord | null => {
  try {
    const record = localStorage.getItem(`payment_${contentTitle}`);
    return record ? JSON.parse(record) : null;
  } catch (error) {
    console.error('Failed to get payment record:', error);
    return null;
  }
};

export const hasPaymentAccess = (contentTitle?: string): boolean => {
  try {
    const globalAccess = localStorage.getItem('premium_access');
    if (globalAccess === 'true') return true;

    if (contentTitle) {
      const paymentRecord = getPaymentRecord(contentTitle);
      return !!paymentRecord;
    }

    return false;
  } catch {
    return false;
  }
};

export const clearPaymentData = (): void => {
  try {
    // Clear all payment-related data
    const keys = Object.keys(localStorage);
    keys.forEach(key => {
      if (key.startsWith('payment_') || key === 'premium_access') {
        localStorage.removeItem(key);
      }
    });
  } catch (error) {
    console.error('Failed to clear payment data:', error);
  }
};