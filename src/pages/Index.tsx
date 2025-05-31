
import React from 'react';
import CharacterSheetApp from '../components/CharacterSheetApp';
import { ThemeProvider } from '../hooks/useTheme';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="dnd-container">
        <CharacterSheetApp />
      </div>
    </ThemeProvider>
  );
};

export default Index;
