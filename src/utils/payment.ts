export interface PaymentRecord {
  signature: string;
  userWallet: string;
  contentTitle: string;
  amount: number;
  timestamp: number;
  type: 'lifetime_access' | 'monthly_subscription';
}

export const savePaymentRecord = (payment: PaymentRecord): void => {
  try {
    localStorage.setItem(`payment_${payment.contentTitle}`, JSON.stringify(payment));
    localStorage.setItem('premium_access', 'true');
  } catch (error) {
    console.error('Failed to save payment record:', error);
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

export const hasLifetimeAccess = (): boolean => {
  try {
    return localStorage.getItem('premium_access') === 'true';
  } catch (error) {
    return false;
  }
};

export const getAllPaymentRecords = (): PaymentRecord[] => {
  try {
    const records: PaymentRecord[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith('payment_')) {
        const record = localStorage.getItem(key);
        if (record) {
          records.push(JSON.parse(record));
        }
      }
    }
    return records;
  } catch (error) {
    console.error('Failed to get payment records:', error);
    return [];
  }
};