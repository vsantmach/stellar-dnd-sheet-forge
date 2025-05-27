
import React, { useState } from 'react';

interface Character {
  id: string;
  name: string;
  class: string;
  level: number;
  race: string;
}

interface BasicInfoProps {
  character: Character;
}

const BasicInfo: React.FC<BasicInfoProps> = ({ character }) => {
  const [characterData, setCharacterData] = useState({
    background: '',
    alignment: '',
    experiencePoints: 0,
    inspiration: false,
    proficiencyBonus: 2,
    armorClass: 10,
    initiative: 0,
    speed: 30,
    hitPointMaximum: 8,
    currentHitPoints: 8,
    temporaryHitPoints: 0,
    hitDice: '1d8',
    deathSaves: { successes: 0, failures: 0 }
  });

  return (
    <div className="p-4 space-y-6 bg-black">
      {/* Character Header */}
      <div className="dnd-card">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Nome do Personagem
            </label>
            <div className="dnd-input cursor-not-allowed opacity-75">
              {character.name}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Classe e Nível
            </label>
            <div className="dnd-input cursor-not-allowed opacity-75">
              {character.class} {character.level}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Raça
            </label>
            <div className="dnd-input cursor-not-allowed opacity-75">
              {character.race}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Background
            </label>
            <input
              type="text"
              value={characterData.background}
              onChange={(e) => setCharacterData({ ...characterData, background: e.target.value })}
              className="dnd-input w-full"
              placeholder="Ex: Soldado"
            />
          </div>
        </div>
      </div>

      {/* Character Stats */}
      <div className="dnd-card">
        <h3 className="text-lg font-semibold text-white mb-4">Informações Básicas</h3>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Tendência
            </label>
            <select
              value={characterData.alignment}
              onChange={(e) => setCharacterData({ ...characterData, alignment: e.target.value })}
              className="dnd-input w-full"
            >
              <option value="">Selecione</option>
              <option value="Leal e Bom">Leal e Bom</option>
              <option value="Neutro e Bom">Neutro e Bom</option>
              <option value="Caótico e Bom">Caótico e Bom</option>
              <option value="Leal e Neutro">Leal e Neutro</option>
              <option value="Neutro">Neutro</option>
              <option value="Caótico e Neutro">Caótico e Neutro</option>
              <option value="Leal e Mal">Leal e Mal</option>
              <option value="Neutro e Mal">Neutro e Mal</option>
              <option value="Caótico e Mal">Caótico e Mal</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Pontos de Experiência
            </label>
            <input
              type="number"
              value={characterData.experiencePoints}
              onChange={(e) => setCharacterData({ ...characterData, experiencePoints: parseInt(e.target.value) || 0 })}
              className="dnd-input w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Bônus de Proficiência
            </label>
            <input
              type="number"
              value={characterData.proficiencyBonus}
              onChange={(e) => setCharacterData({ ...characterData, proficiencyBonus: parseInt(e.target.value) || 0 })}
              className="dnd-input w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Classe de Armadura
            </label>
            <input
              type="number"
              value={characterData.armorClass}
              onChange={(e) => setCharacterData({ ...characterData, armorClass: parseInt(e.target.value) || 0 })}
              className="dnd-input w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Iniciativa
            </label>
            <input
              type="number"
              value={characterData.initiative}
              onChange={(e) => setCharacterData({ ...characterData, initiative: parseInt(e.target.value) || 0 })}
              className="dnd-input w-full"
            />
          </div>
        </div>
      </div>

      {/* Hit Points */}
      <div className="dnd-card">
        <h3 className="text-lg font-semibold text-white mb-4">Pontos de Vida</h3>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Máximo de PV
            </label>
            <input
              type="number"
              value={characterData.hitPointMaximum}
              onChange={(e) => setCharacterData({ ...characterData, hitPointMaximum: parseInt(e.target.value) || 0 })}
              className="dnd-input w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              PV Atuais
            </label>
            <input
              type="number"
              value={characterData.currentHitPoints}
              onChange={(e) => setCharacterData({ ...characterData, currentHitPoints: parseInt(e.target.value) || 0 })}
              className="dnd-input w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              PV Temporários
            </label>
            <input
              type="number"
              value={characterData.temporaryHitPoints}
              onChange={(e) => setCharacterData({ ...characterData, temporaryHitPoints: parseInt(e.target.value) || 0 })}
              className="dnd-input w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Dados de Vida
            </label>
            <input
              type="text"
              value={characterData.hitDice}
              onChange={(e) => setCharacterData({ ...characterData, hitDice: e.target.value })}
              className="dnd-input w-full"
              placeholder="Ex: 1d8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
