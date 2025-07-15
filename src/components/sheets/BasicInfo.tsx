import React, { useState, useEffect } from 'react';
import { Plus, X, Settings } from 'lucide-react';
import { getAvailableSubclasses } from '../../utils/classFeatures';
import ClassAbilitiesModal from './ClassAbilitiesModal';
import RaceSelector from '../forms/RaceSelector';

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

interface ClassLevel {
  class: string;
  level: number;
  subclass?: string;
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

  const [mainLevel, setMainLevel] = useState(character.level);
  const [mainSubclass, setMainSubclass] = useState<string>('');
  const [multiclass, setMulticlass] = useState<ClassLevel[]>([]);
  const [showAbilitiesModal, setShowAbilitiesModal] = useState(false);
  const [selectedClassForAbilities, setSelectedClassForAbilities] = useState<{
    className: string;
    subclass?: string;
    level: number;
  } | null>(null);
  const [raceSubrace, setRaceSubrace] = useState<string>('');

  const classes = [
    'Bárbaro', 'Bardo', 'Bruxo', 'Clérigo', 'Druida', 'Feiticeiro', 
    'Guerreiro', 'Ladino', 'Mago', 'Monge', 'Paladino', 'Patrulheiro'
  ];

  // Map Portuguese class names to English for the utility functions
  const classNameMap: Record<string, string> = {
    'Bárbaro': 'Barbarian',
    'Bardo': 'Bard',
    'Bruxo': 'Warlock',
    'Clérigo': 'Cleric',
    'Druida': 'Druid',
    'Feiticeiro': 'Sorcerer',
    'Guerreiro': 'Fighter',
    'Ladino': 'Rogue',
    'Mago': 'Wizard',
    'Monge': 'Monk',
    'Paladino': 'Paladin',
    'Patrulheiro': 'Ranger'
  };

  // Load saved data on component mount
  useEffect(() => {
    const savedData = localStorage.getItem(`character-${character.id}-basic-info`);
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        if (parsed.characterData) {
          setCharacterData(parsed.characterData);
        }
        if (parsed.mainLevel) {
          setMainLevel(parsed.mainLevel);
        }
        if (parsed.mainSubclass) {
          setMainSubclass(parsed.mainSubclass);
        }
        if (parsed.multiclass) {
          setMulticlass(parsed.multiclass);
        }
      } catch (error) {
        console.log('Error loading saved character data:', error);
      }
    }
  }, [character.id]);

  // Auto save function
  const saveData = () => {
    const dataToSave = {
      characterData,
      mainLevel,
      mainSubclass,
      multiclass,
      lastSaved: new Date().toISOString()
    };
    localStorage.setItem(`character-${character.id}-basic-info`, JSON.stringify(dataToSave));
  };

  // Auto save whenever data changes
  useEffect(() => {
    saveData();
  }, [characterData, mainLevel, mainSubclass, multiclass]);

  const getTotalLevel = () => {
    return mainLevel + multiclass.reduce((total, mc) => total + mc.level, 0);
  };

  const addMulticlass = () => {
    const newMulticlass = [...multiclass, { class: 'Guerreiro', level: 1 }];
    setMulticlass(newMulticlass);
  };

  const removeMulticlass = (index: number) => {
    const newMulticlass = multiclass.filter((_, i) => i !== index);
    setMulticlass(newMulticlass);
  };

  const updateMulticlass = (index: number, field: 'class' | 'level' | 'subclass', value: string | number) => {
    const updated = multiclass.map((mc, i) => 
      i === index ? { ...mc, [field]: value } : mc
    );
    setMulticlass(updated);
  };

  const getSubclassOptions = (className: string) => {
    const englishClassName = classNameMap[className] || className;
    return getAvailableSubclasses(englishClassName);
  };

  const shouldShowSubclass = (level: number) => {
    return level >= 3; // Most classes get subclasses at level 3
  };

  const openAbilitiesModal = (className: string, subclass?: string, level?: number) => {
    const englishClassName = classNameMap[className] || className;
    setSelectedClassForAbilities({
      className: englishClassName,
      subclass,
      level: level || mainLevel
    });
    setShowAbilitiesModal(true);
  };

  const handleRaceChange = (race: string) => {
    // Race is read-only in BasicInfo as it comes from character prop
    // This is just for display purposes
    console.log('Race change attempted:', race);
  };

  const handleSubraceChange = (subrace: string) => {
    setRaceSubrace(subrace);
  };

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
              Raça
            </label>
            <RaceSelector
              selectedRace={character.race}
              selectedSubrace={raceSubrace}
              onRaceChange={handleRaceChange}
              onSubraceChange={handleSubraceChange}
              disabled={true}
            />
          </div>
        </div>

        <div className="space-y-4">
          {/* Main Class and Level */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Classe Principal
              </label>
              <div className="flex gap-2">
                <div className="dnd-input cursor-not-allowed opacity-75 flex-1">
                  {character.class}
                </div>
                <button
                  onClick={() => openAbilitiesModal(character.class, mainSubclass, mainLevel)}
                  className="dnd-button px-3 py-2 flex items-center gap-1"
                  title="Ver habilidades da classe"
                >
                  <Settings size={16} />
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Nível da Classe Principal
              </label>
              <input
                type="number"
                value={mainLevel}
                onChange={(e) => setMainLevel(parseInt(e.target.value) || 1)}
                className="dnd-input w-full"
                min="1"
                max="20"
              />
            </div>
          </div>

          {/* Main Class Subclass */}
          {shouldShowSubclass(mainLevel) && (
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Subclasse Principal
              </label>
              <select
                value={mainSubclass}
                onChange={(e) => setMainSubclass(e.target.value)}
                className="dnd-input w-full"
              >
                <option value="">Selecione uma subclasse</option>
                {getSubclassOptions(character.class).map(subclass => (
                  <option key={subclass} value={subclass}>{subclass}</option>
                ))}
              </select>
            </div>
          )}

          {/* Multiclass Section */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-gray-300">
                Multiclasse
              </label>
              <button
                onClick={addMulticlass}
                className="flex items-center gap-1 text-blue-400 hover:text-blue-300 text-sm"
              >
                <Plus size={16} />
                Adicionar Classe
              </button>
            </div>
            
            {multiclass.map((mc, index) => (
              <div key={index} className="space-y-2 mb-4 p-3 bg-gray-800 rounded">
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex gap-2">
                    <select
                      value={mc.class}
                      onChange={(e) => updateMulticlass(index, 'class', e.target.value)}
                      className="dnd-input text-sm flex-1"
                    >
                      {classes.map(cls => (
                        <option key={cls} value={cls}>{cls}</option>
                      ))}
                    </select>
                    <button
                      onClick={() => openAbilitiesModal(mc.class, mc.subclass, mc.level)}
                      className="dnd-button px-2 py-1 flex items-center"
                      title="Ver habilidades da classe"
                    >
                      <Settings size={14} />
                    </button>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      value={mc.level}
                      onChange={(e) => updateMulticlass(index, 'level', parseInt(e.target.value) || 1)}
                      className="dnd-input text-sm flex-1"
                      min="1"
                      max="20"
                    />
                    <button
                      onClick={() => removeMulticlass(index)}
                      className="text-red-400 hover:text-red-300 p-1"
                    >
                      <X size={16} />
                    </button>
                  </div>
                </div>
                
                {/* Multiclass Subclass Selection */}
                {shouldShowSubclass(mc.level) && (
                  <div>
                    <select
                      value={mc.subclass || ''}
                      onChange={(e) => updateMulticlass(index, 'subclass', e.target.value)}
                      className="dnd-input text-sm w-full"
                    >
                      <option value="">Selecione uma subclasse</option>
                      {getSubclassOptions(mc.class).map(subclass => (
                        <option key={subclass} value={subclass}>{subclass}</option>
                      ))}
                    </select>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Total Level Display */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Nível Total
            </label>
            <div className="dnd-input cursor-not-allowed opacity-75 text-blue-400 font-semibold">
              {getTotalLevel()}
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

      {/* Class Abilities Modal */}
      {selectedClassForAbilities && (
        <ClassAbilitiesModal
          isOpen={showAbilitiesModal}
          onClose={() => setShowAbilitiesModal(false)}
          className={selectedClassForAbilities.className}
          subclass={selectedClassForAbilities.subclass}
          characterLevel={selectedClassForAbilities.level}
        />
      )}
    </div>
  );
};

export default BasicInfo;
