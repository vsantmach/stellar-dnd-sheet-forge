import React, { useState } from 'react';
import { Plus, Trash2, Edit, ArrowLeft } from 'lucide-react';
import RaceSelector from './forms/RaceSelector';

interface Character {
  id: string;
  name: string;
  class: string;
  level: number;
  race: string;
}

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

  if (showCreateForm) {
    return (
      <div className="min-h-screen bg-black p-4">
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={() => setShowCreateForm(false)}
            className="text-blue-400 hover:text-blue-300"
          >
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-2xl font-bold text-white">Criar Personagem</h1>
        </div>

        <div className="space-y-4 max-w-md">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Nome do Personagem
            </label>
            <input
              type="text"
              value={newCharacter.name}
              onChange={(e) => setNewCharacter({ ...newCharacter, name: e.target.value })}
              className="dnd-input w-full"
              placeholder="Digite o nome"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Classe
            </label>
            <select
              value={newCharacter.class}
              onChange={(e) => setNewCharacter({ ...newCharacter, class: e.target.value })}
              className="dnd-input w-full"
            >
              <option value="">Selecione uma classe</option>
              <option value="Bárbaro">Bárbaro</option>
              <option value="Bardo">Bardo</option>
              <option value="Bruxo">Bruxo</option>
              <option value="Clérigo">Clérigo</option>
              <option value="Druida">Druida</option>
              <option value="Feiticeiro">Feiticeiro</option>
              <option value="Guerreiro">Guerreiro</option>
              <option value="Ladino">Ladino</option>
              <option value="Mago">Mago</option>
              <option value="Monge">Monge</option>
              <option value="Paladino">Paladino</option>
              <option value="Patrulheiro">Patrulheiro</option>
            </select>
          </div>

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
              className="dnd-input w-full"
              min="1"
              max="20"
            />
          </div>

          <button
            onClick={handleCreate}
            className="dnd-button w-full mt-6"
          >
            Criar Personagem
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black p-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-white">Meus Personagens</h1>
        <button
          onClick={() => setShowCreateForm(true)}
          className="flex items-center gap-2 dnd-button"
        >
          <Plus size={20} />
          Novo
        </button>
      </div>

      {characters.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg mb-4">Nenhum personagem criado ainda</p>
          <button
            onClick={() => setShowCreateForm(true)}
            className="dnd-button"
          >
            Criar Primeiro Personagem
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {characters.map((character) => (
            <div key={character.id} className="dnd-card flex items-center justify-between">
              <div
                onClick={() => onCharacterSelect(character)}
                className="flex-1 cursor-pointer"
              >
                <h3 className="text-lg font-semibold text-white">{character.name}</h3>
                <p className="text-gray-300">
                  {character.race} {character.class} - Nível {character.level}
                </p>
              </div>
              <button
                onClick={() => onCharacterDelete(character.id)}
                className="text-red-400 hover:text-red-300 p-2"
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
