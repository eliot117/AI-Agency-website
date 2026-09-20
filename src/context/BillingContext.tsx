import React, { createContext, useContext, useState, useEffect } from 'react';

interface BillingContextType {
  isYearly: boolean;
  setIsYearly: React.Dispatch<React.SetStateAction<boolean>>;
  toggleBilling: () => void;
}

const BillingContext = createContext<BillingContextType | undefined>(undefined);

const STORAGE_KEY = 'aisync_billing_is_yearly';

export const BillingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isYearly, setIsYearlyState] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved !== null) {
          return saved === 'true';
        }
      } catch {
        // Ignore localStorage error (sandboxed iframe / cookies disabled)
      }
    }
    return false;
  });

  const setIsYearly: React.Dispatch<React.SetStateAction<boolean>> = (value) => {
    setIsYearlyState((prev) => {
      const next = typeof value === 'function' ? value(prev) : value;
      if (typeof window !== 'undefined') {
        try {
          localStorage.setItem(STORAGE_KEY, String(next));
        } catch {
          // Ignore
        }
        // Dispatch custom event for immediate sync across any mounted listeners
        window.dispatchEvent(new CustomEvent('aisync-billing-sync', { detail: next }));
      }
      return next;
    });
  };

  const toggleBilling = () => {
    setIsYearly((prev) => !prev);
  };

  useEffect(() => {
    const handleSync = (e: Event) => {
      const customEvent = e as CustomEvent<boolean>;
      if (typeof customEvent.detail === 'boolean') {
        setIsYearlyState(customEvent.detail);
      }
    };
    const handleStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && e.newValue !== null) {
        setIsYearlyState(e.newValue === 'true');
      }
    };

    window.addEventListener('aisync-billing-sync', handleSync);
    window.addEventListener('storage', handleStorage);
    return () => {
      window.removeEventListener('aisync-billing-sync', handleSync);
      window.removeEventListener('storage', handleStorage);
    };
  }, []);

  return (
    <BillingContext.Provider value={{ isYearly, setIsYearly, toggleBilling }}>
      {children}
    </BillingContext.Provider>
  );
};

export const useBilling = (): BillingContextType => {
  const context = useContext(BillingContext);
  if (!context) {
    throw new Error('useBilling must be used within a BillingProvider');
  }
  return context;
};
