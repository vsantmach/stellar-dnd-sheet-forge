
import React, { useState } from 'react';
import { Users, Plus, FileText, Settings } from 'lucide-react';
import CharacterManager from './CharacterManager';
import CharacterSheet from './CharacterSheet';
import ThemeSelector from './ThemeSelector';
import { generateCharacterPDF } from '../utils/pdfGenerator';
import { useTheme } from '../hooks/useTheme';

interface Character {
  id: string;
  name: string;
  class: string;
  level: number;
  race: string;
}

const CharacterSheetApp = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [showManager, setShowManager] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const { getBackgroundColor, getTextColor, getAccentColor } = useTheme();

  const handleCharacterSelect = (character: Character) => {
    setSelectedCharacter(character);
    setShowManager(false);
  };

  const handleCharacterCreate = (character: Character) => {
    setCharacters([...characters, character]);
    setSelectedCharacter(character);
    setShowManager(false);
  };

  const handleCharacterDelete = (characterId: string) => {
    setCharacters(characters.filter(c => c.id !== characterId));
    if (selectedCharacter?.id === characterId) {
      setSelectedCharacter(null);
    }
  };

  const handleGeneratePDF = () => {
    if (selectedCharacter) {
      generateCharacterPDF(selectedCharacter);
    }
  };

  if (showManager || !selectedCharacter) {
    return (
      <div className={getBackgroundColor()}>
        <CharacterManager
          characters={characters}
          onCharacterSelect={handleCharacterSelect}
          onCharacterCreate={handleCharacterCreate}
          onCharacterDelete={handleCharacterDelete}
          onBack={() => setShowManager(false)}
        />
      </div>
    );
  }

  if (showSettings) {
    return (
      <div className={`min-h-screen ${getBackgroundColor()}`}>
        <div className="max-w-2xl mx-auto p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className={`text-2xl font-bold ${getTextColor()}`}>Configurações</h1>
            <button
              onClick={() => setShowSettings(false)}
              className={`px-4 py-2 ${getAccentColor()} hover:opacity-80 transition-opacity`}
            >
              Voltar
            </button>
          </div>
          <ThemeSelector />
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${getBackgroundColor()}`}>
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        <button
          onClick={() => setShowManager(true)}
          className="flex items-center gap-2 dnd-button"
        >
          <Users size={20} />
          Personagens
        </button>
        <h1 className={`text-xl font-bold ${getTextColor()}`}>{selectedCharacter.name}</h1>
        <div className="flex gap-2">
          <button
            onClick={() => setShowSettings(true)}
            className="flex items-center gap-2 dnd-button"
          >
            <Settings size={20} />
            Configurações
          </button>
          <button
            onClick={handleGeneratePDF}
            className="flex items-center gap-2 dnd-button"
          >
            <FileText size={20} />
            PDF
          </button>
        </div>
      </div>
      
      <CharacterSheet character={selectedCharacter} />
    </div>
  );
};

export default CharacterSheetApp;
