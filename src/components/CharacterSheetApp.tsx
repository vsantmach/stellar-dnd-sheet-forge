
import React, { useState } from 'react';
import { Users, Plus } from 'lucide-react';
import CharacterManager from './CharacterManager';
import CharacterSheet from './CharacterSheet';

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

  if (showManager || !selectedCharacter) {
    return (
      <CharacterManager
        characters={characters}
        onCharacterSelect={handleCharacterSelect}
        onCharacterCreate={handleCharacterCreate}
        onCharacterDelete={handleCharacterDelete}
        onBack={() => setShowManager(false)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        <button
          onClick={() => setShowManager(true)}
          className="flex items-center gap-2 dnd-button"
        >
          <Users size={20} />
          Personagens
        </button>
        <h1 className="text-xl font-bold text-white">{selectedCharacter.name}</h1>
        <div className="w-24"></div>
      </div>
      
      <CharacterSheet character={selectedCharacter} />
    </div>
  );
};

export default CharacterSheetApp;
