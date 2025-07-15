
import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log('Error reading localStorage key "' + key + '":', error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log('Error setting localStorage key "' + key + '":', error);
    }
  };

  return [storedValue, setValue] as const;
}

export function getStorageUsage(): { used: number; total: number; percentage: number } {
  let total = 0;
  
  for (const key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      total += localStorage[key].length + key.length;
    }
  }
  
  // Estimate total storage (usually 5-10MB, we'll use 5MB as conservative estimate)
  const estimatedTotal = 5 * 1024 * 1024; // 5MB in bytes
  const percentage = (total / estimatedTotal) * 100;
  
  return {
    used: total,
    total: estimatedTotal,
    percentage: Math.min(percentage, 100)
  };
}
