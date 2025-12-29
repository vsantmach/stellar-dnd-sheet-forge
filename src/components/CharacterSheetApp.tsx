
import React, { useState } from 'react';
import { Users, Plus, FileText, Settings, Minimize2, Maximize2 } from 'lucide-react';
import CharacterManager from './CharacterManager';
import CharacterSheet from './CharacterSheet';
import ThemeSelector from './ThemeSelector';
import StorageAlert from './StorageAlert';
import { generateCharacterPDF } from '../utils/pdfGenerator';
import { useTheme } from '../hooks/useTheme';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useCompactMode } from '../hooks/useCompactMode';
import { toast } from './ui/use-toast';
import { Character } from '../utils/types';

const CharacterSheetApp = () => {
  const [characters, setCharacters] = useLocalStorage<Character[]>('dnd-characters', []);
  const [selectedCharacterId, setSelectedCharacterId] = useLocalStorage<string | null>('dnd-selected-character', null);
  const [showManager, setShowManager] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const { getBackgroundColor, getTextColor, getAccentColor } = useTheme();
  const { isCompact, toggleCompact } = useCompactMode();

  const selectedCharacter = characters.find(c => c.id === selectedCharacterId) || null;

  const handleCharacterSelect = (character: Character) => {
    setSelectedCharacterId(character.id);
    setShowManager(false);
  };

  const handleCharacterCreate = (character: Character) => {
    setCharacters([...characters, character]);
    setSelectedCharacterId(character.id);
    setShowManager(false);
    toast({
      title: "Personagem criado!",
      description: `${character.name} foi salvo localmente`,
    });
  };

  const handleCharacterDelete = (characterId: string) => {
    setCharacters(characters.filter(c => c.id !== characterId));
    if (selectedCharacterId === characterId) {
      setSelectedCharacterId(null);
    }
    toast({
      title: "Personagem excluído",
      description: "O personagem foi removido permanentemente",
    });
  };

  const handleGeneratePDF = () => {
    if (selectedCharacter) {
      generateCharacterPDF(selectedCharacter);
      toast({
        title: "PDF gerado!",
        description: `Ficha de ${selectedCharacter.name} foi baixada`,
      });
    }
  };

  const handleClearStorage = () => {
    setCharacters([]);
    setSelectedCharacterId(null);
    localStorage.removeItem('dnd-custom-races');
    localStorage.removeItem('dnd-custom-classes');
    toast({
      title: "Armazenamento limpo",
      description: "Todos os dados foram removidos",
    });
  };

  if (showManager || !selectedCharacter) {
    return (
      <div className={getBackgroundColor()}>
        <div className="p-4">
          <StorageAlert 
            characters={characters} 
            onClearStorage={handleClearStorage}
          />
        </div>
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
          <StorageAlert 
            characters={characters} 
            onClearStorage={handleClearStorage}
          />
          <ThemeSelector />
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${getBackgroundColor()}`}>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-2 sm:p-4 border-b border-gray-800 gap-2 sm:gap-4">
        <div className="flex items-center justify-between w-full sm:w-auto">
          <button
            onClick={() => setShowManager(true)}
            className="flex items-center gap-1 sm:gap-2 dnd-button text-sm sm:text-base py-2 px-3 touch-manipulation min-h-[44px]"
          >
            <Users size={18} />
            <span className="hidden xs:inline">Personagens</span>
            <span className="xs:hidden">Lista</span>
          </button>
          <h1 className={`text-sm sm:text-xl font-bold ${getTextColor()} truncate max-w-[120px] sm:max-w-none mx-2 sm:hidden`}>
            {selectedCharacter.name}
          </h1>
        </div>
        
        <h1 className={`text-xl font-bold ${getTextColor()} hidden sm:block truncate`}>
          {selectedCharacter.name}
        </h1>
        
        <div className="flex gap-1 sm:gap-2 w-full sm:w-auto justify-end">
          <button
            onClick={toggleCompact}
            className="flex items-center gap-1 dnd-button text-xs sm:text-sm py-2 px-2 sm:px-3 touch-manipulation min-h-[44px] sm:hidden"
            title={isCompact ? "Modo normal" : "Modo compacto"}
          >
            {isCompact ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
          </button>
          <button
            onClick={() => setShowSettings(true)}
            className="flex items-center gap-1 dnd-button text-xs sm:text-sm py-2 px-2 sm:px-3 touch-manipulation min-h-[44px]"
          >
            <Settings size={16} />
            <span className="hidden sm:inline">Config</span>
          </button>
          <button
            onClick={handleGeneratePDF}
            className="flex items-center gap-1 dnd-button text-xs sm:text-sm py-2 px-2 sm:px-3 touch-manipulation min-h-[44px]"
          >
            <FileText size={16} />
            <span className="hidden sm:inline">PDF</span>
          </button>
        </div>
      </div>
      
      <CharacterSheet character={selectedCharacter} />
    </div>
  );
};

export default CharacterSheetApp;
