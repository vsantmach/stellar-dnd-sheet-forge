import React, { useState } from 'react';
import { Plus, Trash2, Edit, ArrowLeft } from 'lucide-react';
import RaceSelector from './forms/RaceSelector';
import ClassSelector from './forms/ClassSelector';
import { Character } from '../utils/types';

interface CharacterManagerProps {
  characters: Character[];
  onCharacterSelect: (character: Character) => void;
  onCharacterCreate: (character: Character) => void;
  onCharacterDelete: (characterId: string) => void;
  onBack: () => void;
}

const CharacterManager: React.FC<CharacterManagerProps> = ({
  characters,
  onCharacterSelect,
  onCharacterCreate,
  onCharacterDelete,
  onBack
}) => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newCharacter, setNewCharacter] = useState({
    name: '',
    class: '',
    level: 1,
    race: ''
  });

  const handleCreate = () => {
    if (newCharacter.name && newCharacter.class && newCharacter.race) {
      const character: Character = {
        id: Date.now().toString(),
        ...newCharacter
      };
      onCharacterCreate(character);
      setNewCharacter({ name: '', class: '', level: 1, race: '' });
      setShowCreateForm(false);
    }
  };

  const handleRaceChange = (race: string) => {
    setNewCharacter({ ...newCharacter, race });
  };

  const handleClassChange = (className: string) => {
    setNewCharacter({ ...newCharacter, class: className });
  };

  if (showCreateForm) {
    return (
      <div className="min-h-screen bg-black p-4 sm:p-6">
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={() => setShowCreateForm(false)}
            className="text-blue-400 hover:text-blue-300 touch-manipulation p-2"
          >
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-xl sm:text-2xl font-bold text-white">Criar Personagem</h1>
        </div>

        <div className="space-y-4 max-w-full sm:max-w-md mx-auto">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Nome do Personagem
            </label>
            <input
              type="text"
              value={newCharacter.name}
              onChange={(e) => setNewCharacter({ ...newCharacter, name: e.target.value })}
              className="dnd-input w-full text-base sm:text-sm"
              placeholder="Digite o nome"
            />
          </div>

          <ClassSelector
            selectedClass={newCharacter.class}
            onClassChange={handleClassChange}
          />

          <RaceSelector
            selectedRace={newCharacter.race}
            onRaceChange={handleRaceChange}
          />

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Nível
            </label>
            <input
              type="number"
              value={newCharacter.level}
              onChange={(e) => setNewCharacter({ ...newCharacter, level: parseInt(e.target.value) || 1 })}
              className="dnd-input w-full text-base sm:text-sm"
              min="1"
              max="20"
            />
          </div>

          <button
            onClick={handleCreate}
            className="dnd-button w-full mt-6 py-3 text-base font-medium touch-manipulation"
          >
            Criar Personagem
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <h1 className="text-xl sm:text-2xl font-bold text-white">Meus Personagens</h1>
        <button
          onClick={() => setShowCreateForm(true)}
          className="flex items-center justify-center gap-2 dnd-button py-3 sm:py-2 text-base sm:text-sm font-medium touch-manipulation"
        >
          <Plus size={20} />
          <span className="sm:inline">Novo Personagem</span>
        </button>
      </div>

      {characters.length === 0 ? (
        <div className="text-center py-12 px-4">
          <p className="text-gray-400 text-base sm:text-lg mb-6">Nenhum personagem criado ainda</p>
          <button
            onClick={() => setShowCreateForm(true)}
            className="dnd-button py-3 px-6 text-base font-medium touch-manipulation"
          >
            Criar Primeiro Personagem
          </button>
        </div>
      ) : (
        <div className="space-y-3 sm:space-y-4">
          {characters.map((character) => (
            <div key={character.id} className="dnd-card flex items-center justify-between touch-manipulation">
              <div
                onClick={() => onCharacterSelect(character)}
                className="flex-1 cursor-pointer py-2 pr-4"
              >
                <h3 className="text-base sm:text-lg font-semibold text-white mb-1">{character.name}</h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  {character.race} {character.class} - Nível {character.level}
                </p>
              </div>
              <button
                onClick={() => onCharacterDelete(character.id)}
                className="text-red-400 hover:text-red-300 p-3 touch-manipulation"
              >
                <Trash2 size={20} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CharacterManager;
