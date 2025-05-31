
import React, { createContext, useContext, useState, useEffect } from 'react';

type ThemeColor = 'blue' | 'green' | 'cyan' | 'red' | 'purple';
type ThemeMode = 'dark' | 'light';

interface ThemeContextType {
  color: ThemeColor;
  mode: ThemeMode;
  setColor: (color: ThemeColor) => void;
  setMode: (mode: ThemeMode) => void;
  getAccentColor: () => string;
  getBackgroundColor: () => string;
  getCardColor: () => string;
  getTextColor: () => string;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [color, setColor] = useState<ThemeColor>('blue');
  const [mode, setMode] = useState<ThemeMode>('dark');

  useEffect(() => {
    // Load saved theme from localStorage
    const savedColor = localStorage.getItem('theme-color') as ThemeColor;
    const savedMode = localStorage.getItem('theme-mode') as ThemeMode;
    
    if (savedColor) setColor(savedColor);
    if (savedMode) setMode(savedMode);
  }, []);

  useEffect(() => {
    // Save theme to localStorage
    localStorage.setItem('theme-color', color);
    localStorage.setItem('theme-mode', mode);
  }, [color, mode]);

  const getAccentColor = () => {
    const colors = {
      blue: mode === 'dark' ? 'text-blue-400' : 'text-blue-600',
      green: mode === 'dark' ? 'text-green-400' : 'text-green-600',
      cyan: mode === 'dark' ? 'text-cyan-400' : 'text-cyan-600',
      red: mode === 'dark' ? 'text-red-400' : 'text-red-600',
      purple: mode === 'dark' ? 'text-purple-400' : 'text-purple-600',
    };
    return colors[color];
  };

  const getBackgroundColor = () => {
    return mode === 'dark' ? 'bg-black' : 'bg-white';
  };

  const getCardColor = () => {
    return mode === 'dark' ? 'bg-gray-900' : 'bg-gray-100';
  };

  const getTextColor = () => {
    return mode === 'dark' ? 'text-white' : 'text-gray-900';
  };

  return (
    <ThemeContext.Provider value={{
      color,
      mode,
      setColor,
      setMode,
      getAccentColor,
      getBackgroundColor,
      getCardColor,
      getTextColor,
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
