
import React, { useState } from 'react';
import { Users, Plus, FileText, Settings } from 'lucide-react';
import CharacterManager from './CharacterManager';
import CharacterSheet from './CharacterSheet';
import ThemeSelector from './ThemeSelector';
import StorageAlert from './StorageAlert';
import { generateCharacterPDF } from '../utils/pdfGenerator';
import { useTheme } from '../hooks/useTheme';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { toast } from './ui/use-toast';
import { Character } from '../utils/types';

const CharacterSheetApp = () => {
  const [characters, setCharacters] = useLocalStorage<Character[]>('dnd-characters', []);
  const [selectedCharacterId, setSelectedCharacterId] = useLocalStorage<string | null>('dnd-selected-character', null);
  const [showManager, setShowManager] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const { getBackgroundColor, getTextColor, getAccentColor } = useTheme();

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
