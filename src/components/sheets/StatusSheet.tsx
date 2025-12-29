
import React, { useState, useEffect } from 'react';
import { Dice6 } from 'lucide-react';
import { Character } from '../../utils/types';

interface StatusSheetProps {
  character: Character;
}

interface CharacterStatus {
  attributes: {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
  };
  skills: Record<string, boolean>;
  savingThrows: Record<string, boolean>;
}

const getDefaultStatus = (): CharacterStatus => ({
  attributes: {
    strength: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10
  },
  skills: {
    acrobatics: false,
    animalHandling: false,
    arcana: false,
    athletics: false,
    deception: false,
    history: false,
    insight: false,
    intimidation: false,
    investigation: false,
    medicine: false,
    nature: false,
    perception: false,
    performance: false,
    persuasion: false,
    religion: false,
    sleightOfHand: false,
    stealth: false,
    survival: false
  },
  savingThrows: {
    strength: false,
    dexterity: false,
    constitution: false,
    intelligence: false,
    wisdom: false,
    charisma: false
  }
});

const StatusSheet: React.FC<StatusSheetProps> = ({ character }) => {
  const storageKey = `character-status-${character.id}`;
  
  const [status, setStatus] = useState<CharacterStatus>(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return getDefaultStatus();
      }
    }
    return getDefaultStatus();
  });

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(status));
  }, [status, storageKey]);

  const { attributes, skills, savingThrows } = status;

  const setAttributes = (newAttributes: typeof attributes) => {
    setStatus(prev => ({ ...prev, attributes: newAttributes }));
  };

  const setSkills = (newSkills: typeof skills) => {
    setStatus(prev => ({ ...prev, skills: newSkills }));
  };

  const setSavingThrows = (newSavingThrows: typeof savingThrows) => {
    setStatus(prev => ({ ...prev, savingThrows: newSavingThrows }));
  };

  const getModifier = (score: number) => {
    return Math.floor((score - 10) / 2);
  };

  const formatModifier = (modifier: number) => {
    return modifier >= 0 ? `+${modifier}` : `${modifier}`;
  };

  const skillsData = [
    { key: 'acrobatics', name: 'Acrobacia', attribute: 'dexterity' },
    { key: 'animalHandling', name: 'Lidar com Animais', attribute: 'wisdom' },
    { key: 'arcana', name: 'Arcanismo', attribute: 'intelligence' },
    { key: 'athletics', name: 'Atletismo', attribute: 'strength' },
    { key: 'deception', name: 'Enganação', attribute: 'charisma' },
    { key: 'history', name: 'História', attribute: 'intelligence' },
    { key: 'insight', name: 'Intuição', attribute: 'wisdom' },
    { key: 'intimidation', name: 'Intimidação', attribute: 'charisma' },
    { key: 'investigation', name: 'Investigação', attribute: 'intelligence' },
    { key: 'medicine', name: 'Medicina', attribute: 'wisdom' },
    { key: 'nature', name: 'Natureza', attribute: 'intelligence' },
    { key: 'perception', name: 'Percepção', attribute: 'wisdom' },
    { key: 'performance', name: 'Atuação', attribute: 'charisma' },
    { key: 'persuasion', name: 'Persuasão', attribute: 'charisma' },
    { key: 'religion', name: 'Religião', attribute: 'intelligence' },
    { key: 'sleightOfHand', name: 'Prestidigitação', attribute: 'dexterity' },
    { key: 'stealth', name: 'Furtividade', attribute: 'dexterity' },
    { key: 'survival', name: 'Sobrevivência', attribute: 'wisdom' }
  ];

  return (
    <div className="p-4 space-y-6 bg-black">
      {/* Attributes */}
      <div className="dnd-card">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <Dice6 className="text-blue-400" size={20} />
          Atributos
        </h3>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {Object.entries(attributes).map(([key, value]) => {
            const modifier = getModifier(value);
            const attributeNames: Record<string, string> = {
              strength: 'Força',
              dexterity: 'Destreza',
              constitution: 'Constituição',
              intelligence: 'Inteligência',
              wisdom: 'Sabedoria',
              charisma: 'Carisma'
            };

            return (
              <div key={key} className="text-center">
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  {attributeNames[key]}
                </label>
                <input
                  type="number"
                  value={value}
                  onChange={(e) => setAttributes({ ...attributes, [key]: parseInt(e.target.value) || 10 })}
                  className="dnd-input w-full text-center text-lg font-bold"
                  min="1"
                  max="30"
                />
                <div className="text-blue-400 font-semibold mt-1">
                  {formatModifier(modifier)}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Saving Throws */}
      <div className="dnd-card">
        <h3 className="text-lg font-semibold text-white mb-4">Testes de Resistência</h3>
        
        <div className="space-y-2">
          {Object.entries(savingThrows).map(([key, proficient]) => {
            const attributeNames: Record<string, string> = {
              strength: 'Força',
              dexterity: 'Destreza',
              constitution: 'Constituição',
              intelligence: 'Inteligência',
              wisdom: 'Sabedoria',
              charisma: 'Carisma'
            };

            const modifier = getModifier(attributes[key as keyof typeof attributes]);
            const bonus = modifier + (proficient ? 2 : 0);

            return (
              <div key={key} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={proficient}
                    onChange={(e) => setSavingThrows({ ...savingThrows, [key]: e.target.checked })}
                    className="w-4 h-4 text-blue-600 bg-gray-800 border-gray-600 rounded focus:ring-blue-500"
                  />
                  <span className="text-white">{attributeNames[key]}</span>
                </div>
                <span className="text-blue-400 font-semibold">
                  {formatModifier(bonus)}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Skills */}
      <div className="dnd-card">
        <h3 className="text-lg font-semibold text-white mb-4">Perícias</h3>
        
        <div className="space-y-2">
          {skillsData.map((skill) => {
            const proficient = skills[skill.key as keyof typeof skills];
            const attributeModifier = getModifier(attributes[skill.attribute as keyof typeof attributes]);
            const bonus = attributeModifier + (proficient ? 2 : 0);

            return (
              <div key={skill.key} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={proficient}
                    onChange={(e) => setSkills({ ...skills, [skill.key]: e.target.checked })}
                    className="w-4 h-4 text-blue-600 bg-gray-800 border-gray-600 rounded focus:ring-blue-500"
                  />
                  <span className="text-white text-sm">{skill.name}</span>
                </div>
                <span className="text-blue-400 font-semibold text-sm">
                  {formatModifier(bonus)}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StatusSheet;
