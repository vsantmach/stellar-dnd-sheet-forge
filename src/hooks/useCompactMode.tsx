import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface CompactModeContextType {
  isCompact: boolean;
  toggleCompact: () => void;
  setCompact: (value: boolean) => void;
}

const CompactModeContext = createContext<CompactModeContextType | undefined>(undefined);

export const CompactModeProvider = ({ children }: { children: ReactNode }) => {
  const [isCompact, setIsCompact] = useState(() => {
    const saved = localStorage.getItem('dnd-compact-mode');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('dnd-compact-mode', JSON.stringify(isCompact));
    
    // Add or remove compact class from body
    if (isCompact) {
      document.body.classList.add('compact-mode');
    } else {
      document.body.classList.remove('compact-mode');
    }
  }, [isCompact]);

  const toggleCompact = () => setIsCompact((prev: boolean) => !prev);
  const setCompact = (value: boolean) => setIsCompact(value);

  return (
    <CompactModeContext.Provider value={{ isCompact, toggleCompact, setCompact }}>
      {children}
    </CompactModeContext.Provider>
  );
};

export const useCompactMode = () => {
  const context = useContext(CompactModeContext);
  if (!context) {
    throw new Error('useCompactMode must be used within CompactModeProvider');
  }
  return context;
};
