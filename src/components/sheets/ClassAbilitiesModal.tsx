
import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Plus, Minus } from 'lucide-react';
import { getClassFeatures } from '../../utils/classFeatures';
import { ClassFeature } from '../../utils/types';

interface ClassAbilitiesModalProps {
  isOpen: boolean;
  onClose: () => void;
  className: string;
  subclass?: string;
  characterLevel: number;
}

const ClassAbilitiesModal: React.FC<ClassAbilitiesModalProps> = ({
  isOpen,
  onClose,
  className,
  subclass,
  characterLevel
}) => {
  const [selectedAbilities, setSelectedAbilities] = useState<Set<string>>(new Set());
  const [abilityUses, setAbilityUses] = useState<Record<string, { current: number; max: number }>>({});

  // Get all available abilities for the class (levels 1-20)
  const allAbilities = getClassFeatures(className, 20, subclass);

  useEffect(() => {
    // Initialize ability uses for abilities that have uses
    const initialUses: Record<string, { current: number; max: number }> = {};
    allAbilities.forEach(ability => {
      if (ability.uses) {
        const abilityKey = `${ability.name}-${ability.level}`;
        initialUses[abilityKey] = {
          current: ability.uses.max,
          max: ability.uses.max
        };
      }
    });
    setAbilityUses(initialUses);
  }, [allAbilities]);

  const toggleAbility = (abilityName: string, level: number) => {
    const abilityKey = `${abilityName}-${level}`;
    const newSelected = new Set(selectedAbilities);
    
    if (newSelected.has(abilityKey)) {
      newSelected.delete(abilityKey);
    } else {
      newSelected.add(abilityKey);
    }
    
    setSelectedAbilities(newSelected);
  };

  const updateAbilityUses = (abilityKey: string, newCurrent: number) => {
    setAbilityUses(prev => ({
      ...prev,
      [abilityKey]: {
        ...prev[abilityKey],
        current: Math.max(0, Math.min(prev[abilityKey].max, newCurrent))
      }
    }));
  };

  const resetAllUses = (rechargeType: 'short' | 'long') => {
    const updatedUses = { ...abilityUses };
    allAbilities.forEach(ability => {
      if (ability.uses && (rechargeType === 'long' || ability.uses.rechargeOn === 'short')) {
        const abilityKey = `${ability.name}-${ability.level}`;
        if (updatedUses[abilityKey]) {
          updatedUses[abilityKey].current = updatedUses[abilityKey].max;
        }
      }
    });
    setAbilityUses(updatedUses);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold text-white">
            Habilidades de {className} {subclass && `- ${subclass}`}
          </h2>
          <div className="flex items-center gap-2">
            <button
              onClick={() => resetAllUses('short')}
              className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white text-sm rounded transition-colors"
            >
              Descanso Curto
            </button>
            <button
              onClick={() => resetAllUses('long')}
              className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded transition-colors"
            >
              Descanso Longo
            </button>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 overflow-y-auto max-h-[calc(90vh-80px)]">
          {allAbilities.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-400">Nenhuma habilidade disponível para esta classe.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {allAbilities.map((ability) => {
                const abilityKey = `${ability.name}-${ability.level}`;
                const isSelected = selectedAbilities.has(abilityKey);
                const isAvailable = ability.level <= characterLevel;
                const uses = abilityUses[abilityKey];
                
                return (
                  <div
                    key={abilityKey}
                    className={`p-4 rounded-lg border transition-colors ${
                      isSelected
                        ? 'bg-blue-900 border-blue-600'
                        : isAvailable
                        ? 'bg-gray-800 border-gray-600 hover:border-gray-500 cursor-pointer'
                        : 'bg-gray-900 border-gray-700 opacity-50'
                    }`}
                    onClick={() => isAvailable && toggleAbility(ability.name, ability.level)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle 
                            size={16} 
                            className={isSelected ? 'text-blue-400' : 'text-gray-600'}
                          />
                          <h4 className="text-white font-medium">{ability.name}</h4>
                          <span className={`text-xs px-2 py-1 rounded ${
                            isAvailable ? 'text-gray-300 bg-gray-700' : 'text-gray-500 bg-gray-800'
                          }`}>
                            Nível {ability.level}
                          </span>
                          {ability.subclass && (
                            <span className="text-xs text-blue-300 bg-blue-900 px-2 py-1 rounded">
                              {ability.subclass}
                            </span>
                          )}
                          {!isAvailable && (
                            <span className="text-xs text-red-400 bg-red-900 px-2 py-1 rounded">
                              Bloqueado
                            </span>
                          )}
                        </div>
                        <p className="text-gray-300 text-sm mb-2">{ability.description}</p>
                        
                        {ability.uses && isSelected && (
                          <div className="flex items-center gap-2 mt-3">
                            <span className="text-sm text-gray-400">Usos:</span>
                            <div className="flex items-center gap-1">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  updateAbilityUses(abilityKey, uses.current - 1);
                                }}
                                className="w-6 h-6 bg-red-600 hover:bg-red-700 text-white rounded text-xs flex items-center justify-center"
                                disabled={uses.current <= 0}
                              >
                                <Minus size={12} />
                              </button>
                              <span className="text-white px-3 py-1 bg-gray-700 rounded min-w-[60px] text-center">
                                {uses.current}/{uses.max}
                              </span>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  updateAbilityUses(abilityKey, uses.current + 1);
                                }}
                                className="w-6 h-6 bg-green-600 hover:bg-green-700 text-white rounded text-xs flex items-center justify-center"
                                disabled={uses.current >= uses.max}
                              >
                                <Plus size={12} />
                              </button>
                            </div>
                            <span className="text-xs text-gray-400">
                              (Recarrega: {ability.uses.rechargeOn === 'short' ? 'Desc. Curto' : ability.uses.rechargeOn === 'long' ? 'Desc. Longo' : 'Outro'})
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-700 bg-gray-800">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-400">
              {selectedAbilities.size} habilidade(s) selecionada(s)
            </p>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassAbilitiesModal;
