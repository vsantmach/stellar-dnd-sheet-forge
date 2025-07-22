
import React, { useState, useEffect } from 'react';
import { Sword, CheckCircle, Plus, Minus } from 'lucide-react';
import { getClassFeatures, getAvailableSubclasses } from '../../utils/classFeatures';
import { Character } from '../../utils/types';

interface ClassFeaturesSheetProps {
  character: Character;
}

interface ClassFeature {
  id: string;
  name: string;
  description: string;
  level: number;
  subclass?: string;
  uses?: {
    max: number;
    current: number;
    rechargeOn: 'short' | 'long' | 'other';
  };
}

const ClassFeaturesSheet: React.FC<ClassFeaturesSheetProps> = ({ character }) => {
  const [selectedSubclass, setSelectedSubclass] = useState<string>('');
  const [selectedFeatures, setSelectedFeatures] = useState<Set<string>>(new Set());
  const [activeFeatures, setActiveFeatures] = useState<ClassFeature[]>([]);

  const availableSubclasses = getAvailableSubclasses(character.class);
  const availableClassFeatures = getClassFeatures(character.class, character.level, selectedSubclass);

  useEffect(() => {
    // Load active features based on selected features
    const activeFeaturesData = availableClassFeatures
      .filter(feature => {
        const featureKey = `${feature.name}-${feature.level}`;
        return selectedFeatures.has(featureKey);
      })
      .map((feature, index) => ({
        id: `class-${character.class}-${feature.level}-${index}`,
        name: feature.name,
        description: feature.description,
        level: feature.level,
        subclass: feature.subclass,
        ...(feature.uses && {
          uses: {
            max: feature.uses.max,
            current: feature.uses.max,
            rechargeOn: feature.uses.rechargeOn
          }
        })
      }));
    
    setActiveFeatures(activeFeaturesData);
  }, [selectedFeatures, availableClassFeatures, character.class]);

  const toggleClassFeature = (featureName: string, level: number) => {
    const featureKey = `${featureName}-${level}`;
    const newSelected = new Set(selectedFeatures);
    
    if (newSelected.has(featureKey)) {
      newSelected.delete(featureKey);
    } else {
      newSelected.add(featureKey);
    }
    
    setSelectedFeatures(newSelected);
  };

  const updateFeatureUses = (featureId: string, newCurrent: number) => {
    setActiveFeatures(features => 
      features.map(feature => 
        feature.id === featureId && feature.uses
          ? { ...feature, uses: { ...feature.uses, current: Math.max(0, Math.min(feature.uses.max, newCurrent)) } }
          : feature
      )
    );
  };

  const resetAllUses = (rechargeType: 'short' | 'long') => {
    setActiveFeatures(features =>
      features.map(feature =>
        feature.uses && (rechargeType === 'long' || feature.uses.rechargeOn === 'short')
          ? { ...feature, uses: { ...feature.uses, current: feature.uses.max } }
          : feature
      )
    );
  };

  return (
    <div className="p-4 space-y-6 bg-black">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Sword size={24} className="text-blue-400" />
          Características de {character.class}
        </h2>
        <div className="flex gap-2">
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
        </div>
      </div>

      {/* Character Info */}
      <div className="dnd-card">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Classe</label>
            <div className="text-white font-semibold">{character.class}</div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Nível</label>
            <div className="text-white font-semibold">{character.level}</div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Subclasse</label>
            {availableSubclasses.length > 0 ? (
              <select
                value={selectedSubclass}
                onChange={(e) => setSelectedSubclass(e.target.value)}
                className="dnd-input w-full"
              >
                <option value="">Selecione...</option>
                {availableSubclasses.map((subclass) => (
                  <option key={subclass} value={subclass}>
                    {subclass}
                  </option>
                ))}
              </select>
            ) : (
              <div className="text-gray-400">Nenhuma disponível</div>
            )}
          </div>
        </div>
      </div>

      {/* Available Features Selection */}
      {availableClassFeatures.length > 0 && (
        <div className="dnd-card">
          <h3 className="text-lg font-semibold text-white mb-4">
            Características Disponíveis (Nível {character.level})
          </h3>
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {availableClassFeatures.map((feature) => {
              const featureKey = `${feature.name}-${feature.level}`;
              const isSelected = selectedFeatures.has(featureKey);
              
              return (
                <div
                  key={featureKey}
                  className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                    isSelected
                      ? 'bg-blue-900 border-blue-600'
                      : 'bg-gray-800 border-gray-600 hover:border-gray-500'
                  }`}
                  onClick={() => toggleClassFeature(feature.name, feature.level)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <CheckCircle 
                          size={16} 
                          className={isSelected ? 'text-blue-400' : 'text-gray-600'}
                        />
                        <h5 className="text-white font-medium">{feature.name}</h5>
                        <span className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded">
                          Nível {feature.level}
                        </span>
                        {feature.subclass && (
                          <span className="text-xs text-blue-300 bg-blue-900 px-2 py-1 rounded">
                            {feature.subclass}
                          </span>
                        )}
                      </div>
                      <p className="text-gray-300 text-sm">{feature.description}</p>
                      {feature.uses && (
                        <div className="mt-1">
                          <span className="text-xs text-gray-400">
                            Usos: {feature.uses.max} por {feature.uses.rechargeOn === 'short' ? 'Desc. Curto' : feature.uses.rechargeOn === 'long' ? 'Desc. Longo' : 'Outro'}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Active Features */}
      {activeFeatures.length > 0 && (
        <div className="dnd-card">
          <h3 className="text-lg font-semibold text-white mb-4">
            Características Ativas
          </h3>
          <div className="space-y-3">
            {activeFeatures.map((feature) => (
              <div key={feature.id} className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="text-white font-medium">{feature.name}</h4>
                      <span className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded">
                        Nível {feature.level}
                      </span>
                      {feature.subclass && (
                        <span className="text-xs text-blue-300 bg-blue-900 px-2 py-1 rounded">
                          {feature.subclass}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-300 text-sm mb-2">{feature.description}</p>
                    {feature.uses && (
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-400">Usos:</span>
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => updateFeatureUses(feature.id, feature.uses!.current - 1)}
                            className="w-6 h-6 bg-red-600 hover:bg-red-700 text-white rounded text-xs flex items-center justify-center"
                            disabled={feature.uses.current <= 0}
                          >
                            <Minus size={12} />
                          </button>
                          <span className="text-white px-3 py-1 bg-gray-700 rounded min-w-[60px] text-center">
                            {feature.uses.current}/{feature.uses.max}
                          </span>
                          <button
                            onClick={() => updateFeatureUses(feature.id, feature.uses!.current + 1)}
                            className="w-6 h-6 bg-green-600 hover:bg-green-700 text-white rounded text-xs flex items-center justify-center"
                            disabled={feature.uses.current >= feature.uses.max}
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <span className="text-xs text-gray-400">
                          (Recarrega: {feature.uses.rechargeOn === 'short' ? 'Desc. Curto' : feature.uses.rechargeOn === 'long' ? 'Desc. Longo' : 'Outro'})
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Empty State */}
      {availableClassFeatures.length === 0 && (
        <div className="text-center py-12">
          <Sword size={48} className="text-gray-600 mx-auto mb-4" />
          <p className="text-gray-400 text-lg mb-2">Nenhuma característica de classe disponível</p>
          <p className="text-gray-500 text-sm">
            {selectedSubclass 
              ? `Não há características disponíveis para ${character.class} - ${selectedSubclass} no nível ${character.level}`
              : `Selecione uma subclasse para ver as características disponíveis`
            }
          </p>
        </div>
      )}
    </div>
  );
};

export default ClassFeaturesSheet;
