import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Settings, Star } from 'lucide-react';
import { getRacialFeatures, getAvailableSubraces } from '../../utils/racialFeatures';
import { Character } from '../../utils/types';

interface FeaturesSheetProps {
  character: Character;
}

interface Feature {
  id: string;
  name: string;
  type: 'racial' | 'feat' | 'other';
  description: string;
  uses?: {
    max: number;
    current: number;
    rechargeOn: 'short' | 'long' | 'other';
  };
}

const FeaturesSheet: React.FC<FeaturesSheetProps> = ({ character }) => {
  const [features, setFeatures] = useState<Feature[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedSubrace, setSelectedSubrace] = useState<string>('');
  const [newFeature, setNewFeature] = useState({
    name: '',
    type: 'other' as const,
    description: '',
    hasUses: false,
    maxUses: 1,
    rechargeOn: 'long' as const
  });

  // Load racial features automatically when component mounts or character changes
  useEffect(() => {
    loadRacialFeatures();
  }, [character.race, selectedSubrace]);

  const loadRacialFeatures = () => {
    const racialFeatures = getRacialFeatures(character.race, selectedSubrace);
    
    // Convert racial features to Feature objects
    const racialFeatureObjects: Feature[] = racialFeatures.map((feature, index) => ({
      id: `racial-${character.race}-${index}`,
      name: feature.name,
      type: 'racial',
      description: feature.description,
      ...(feature.uses && {
        uses: {
          max: feature.uses.max,
          current: feature.uses.max,
          rechargeOn: feature.uses.rechargeOn
        }
      })
    }));

    // Remove existing racial features and add new ones
    setFeatures(prevFeatures => [
      ...prevFeatures.filter(f => f.type !== 'racial'),
      ...racialFeatureObjects
    ]);
  };

  const availableSubraces = getAvailableSubraces(character.race);

  const handleAddFeature = () => {
    if (newFeature.name && newFeature.description) {
      const feature: Feature = {
        id: Date.now().toString(),
        name: newFeature.name,
        type: newFeature.type,
        description: newFeature.description,
        ...(newFeature.hasUses && {
          uses: {
            max: newFeature.maxUses,
            current: newFeature.maxUses,
            rechargeOn: newFeature.rechargeOn
          }
        })
      };
      setFeatures([...features, feature]);
      setNewFeature({
        name: '',
        type: 'other',
        description: '',
        hasUses: false,
        maxUses: 1,
        rechargeOn: 'long'
      });
      setShowAddForm(false);
    }
  };

  const handleDeleteFeature = (featureId: string) => {
    // Don't allow deletion of racial features
    const feature = features.find(f => f.id === featureId);
    if (feature?.type === 'racial') {
      return;
    }
    setFeatures(features.filter(feature => feature.id !== featureId));
  };

  const updateFeatureUses = (featureId: string, newCurrent: number) => {
    setFeatures(features.map(feature => 
      feature.id === featureId && feature.uses
        ? { ...feature, uses: { ...feature.uses, current: Math.max(0, Math.min(feature.uses.max, newCurrent)) } }
        : feature
    ));
  };

  const getFeatureTypeColor = (type: string) => {
    switch (type) {
      case 'racial':
        return 'bg-green-600';
      case 'feat':
        return 'bg-purple-600';
      default:
        return 'bg-gray-600';
    }
  };

  const getFeatureTypeLabel = (type: string) => {
    switch (type) {
      case 'racial':
        return 'Racial';
      case 'feat':
        return 'Talento';
      default:
        return 'Outro';
    }
  };

  const racialFeatures = features.filter(f => f.type === 'racial');
  const feats = features.filter(f => f.type === 'feat');
  const otherFeatures = features.filter(f => f.type === 'other');

  return (
    <div className="p-4 space-y-6 bg-black">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Settings size={24} className="text-blue-400" />
          Características e Talentos
        </h2>
        <button
          onClick={() => setShowAddForm(true)}
          className="flex items-center gap-2 dnd-button"
        >
          <Plus size={16} />
          Adicionar
        </button>
      </div>

      {/* Subrace Selection */}
      {availableSubraces.length > 0 && (
        <div className="dnd-card">
          <h3 className="text-lg font-semibold text-white mb-4">Subrace de {character.race}</h3>
          <select
            value={selectedSubrace}
            onChange={(e) => setSelectedSubrace(e.target.value)}
            className="dnd-input w-full"
          >
            <option value="">Selecione uma subrace...</option>
            {availableSubraces.map((subrace) => (
              <option key={subrace} value={subrace}>
                {subrace}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Add Feature Form */}
      {showAddForm && (
        <div className="dnd-card">
          <h3 className="text-lg font-semibold text-white mb-4">Adicionar Característica</h3>
          
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Nome
                </label>
                <input
                  type="text"
                  value={newFeature.name}
                  onChange={(e) => setNewFeature({ ...newFeature, name: e.target.value })}
                  className="dnd-input w-full"
                  placeholder="Ex: Visão no Escuro"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Tipo
                </label>
                <select
                  value={newFeature.type}
                  onChange={(e) => setNewFeature({ ...newFeature, type: e.target.value as any })}
                  className="dnd-input w-full"
                >
                  <option value="other">Outro</option>
                  <option value="feat">Talento</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Descrição
              </label>
              <textarea
                value={newFeature.description}
                onChange={(e) => setNewFeature({ ...newFeature, description: e.target.value })}
                className="dnd-input w-full h-24 resize-none"
                placeholder="Descreva os efeitos da característica..."
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="hasUses"
                checked={newFeature.hasUses}
                onChange={(e) => setNewFeature({ ...newFeature, hasUses: e.target.checked })}
                className="w-4 h-4 text-blue-600 bg-gray-800 border-gray-600 rounded focus:ring-blue-500"
              />
              <label htmlFor="hasUses" className="text-white">
                Tem usos limitados
              </label>
            </div>

            {newFeature.hasUses && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Usos Máximos
                  </label>
                  <input
                    type="number"
                    value={newFeature.maxUses}
                    onChange={(e) => setNewFeature({ ...newFeature, maxUses: parseInt(e.target.value) || 1 })}
                    className="dnd-input w-full"
                    min="1"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Recarrega em
                  </label>
                  <select
                    value={newFeature.rechargeOn}
                    onChange={(e) => setNewFeature({ ...newFeature, rechargeOn: e.target.value as any })}
                    className="dnd-input w-full"
                  >
                    <option value="short">Descanso Curto</option>
                    <option value="long">Descanso Longo</option>
                    <option value="other">Outro</option>
                  </select>
                </div>
              </div>
            )}

            <div className="flex gap-2">
              <button
                onClick={handleAddFeature}
                className="dnd-button"
              >
                Adicionar
              </button>
              <button
                onClick={() => setShowAddForm(false)}
                className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Racial Features */}
      {racialFeatures.length > 0 && (
        <div className="dnd-card">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Star size={20} className="text-green-400" />
            Características Raciais ({character.race}{selectedSubrace && ` - ${selectedSubrace}`})
          </h3>
          <div className="space-y-3">
            {racialFeatures.map((feature) => (
              <div key={feature.id} className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="text-white font-medium">{feature.name}</h4>
                      <span className={`text-xs text-white px-2 py-1 rounded ${getFeatureTypeColor(feature.type)}`}>
                        {getFeatureTypeLabel(feature.type)}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm mb-2">{feature.description}</p>
                    {feature.uses && (
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-400">Usos:</span>
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => updateFeatureUses(feature.id, feature.uses!.current - 1)}
                            className="w-6 h-6 bg-red-600 hover:bg-red-700 text-white rounded text-xs"
                            disabled={feature.uses.current <= 0}
                          >
                            -
                          </button>
                          <span className="text-white px-2">
                            {feature.uses.current}/{feature.uses.max}
                          </span>
                          <button
                            onClick={() => updateFeatureUses(feature.id, feature.uses!.current + 1)}
                            className="w-6 h-6 bg-green-600 hover:bg-green-700 text-white rounded text-xs"
                            disabled={feature.uses.current >= feature.uses.max}
                          >
                            +
                          </button>
                        </div>
                        <span className="text-xs text-gray-400">
                          (Recarrega: {feature.uses.rechargeOn === 'short' ? 'Desc. Curto' : feature.uses.rechargeOn === 'long' ? 'Desc. Longo' : 'Outro'})
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="text-gray-500 text-xs">
                    Automático
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Feats */}
      {feats.length > 0 && (
        <div className="dnd-card">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Star size={20} className="text-purple-400" />
            Talentos
          </h3>
          <div className="space-y-3">
            {feats.map((feature) => (
              <div key={feature.id} className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="text-white font-medium">{feature.name}</h4>
                      <span className={`text-xs text-white px-2 py-1 rounded ${getFeatureTypeColor(feature.type)}`}>
                        {getFeatureTypeLabel(feature.type)}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm mb-2">{feature.description}</p>
                    {feature.uses && (
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-400">Usos:</span>
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => updateFeatureUses(feature.id, feature.uses!.current - 1)}
                            className="w-6 h-6 bg-red-600 hover:bg-red-700 text-white rounded text-xs"
                            disabled={feature.uses.current <= 0}
                          >
                            -
                          </button>
                          <span className="text-white px-2">
                            {feature.uses.current}/{feature.uses.max}
                          </span>
                          <button
                            onClick={() => updateFeatureUses(feature.id, feature.uses!.current + 1)}
                            className="w-6 h-6 bg-green-600 hover:bg-green-700 text-white rounded text-xs"
                            disabled={feature.uses.current >= feature.uses.max}
                          >
                            +
                          </button>
                        </div>
                        <span className="text-xs text-gray-400">
                          (Recarrega: {feature.uses.rechargeOn === 'short' ? 'Desc. Curto' : feature.uses.rechargeOn === 'long' ? 'Desc. Longo' : 'Outro'})
                        </span>
                      </div>
                    )}
                  </div>
                  <button
                    onClick={() => handleDeleteFeature(feature.id)}
                    className="text-red-400 hover:text-red-300 p-2 ml-2"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Other Features */}
      {otherFeatures.length > 0 && (
        <div className="dnd-card">
          <h3 className="text-lg font-semibold text-white mb-4">Outras Características</h3>
          <div className="space-y-3">
            {otherFeatures.map((feature) => (
              <div key={feature.id} className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="text-white font-medium">{feature.name}</h4>
                      <span className={`text-xs text-white px-2 py-1 rounded ${getFeatureTypeColor(feature.type)}`}>
                        {getFeatureTypeLabel(feature.type)}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm mb-2">{feature.description}</p>
                    {feature.uses && (
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-400">Usos:</span>
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => updateFeatureUses(feature.id, feature.uses!.current - 1)}
                            className="w-6 h-6 bg-red-600 hover:bg-red-700 text-white rounded text-xs"
                            disabled={feature.uses.current <= 0}
                          >
                            -
                          </button>
                          <span className="text-white px-2">
                            {feature.uses.current}/{feature.uses.max}
                          </span>
                          <button
                            onClick={() => updateFeatureUses(feature.id, feature.uses!.current + 1)}
                            className="w-6 h-6 bg-green-600 hover:bg-green-700 text-white rounded text-xs"
                            disabled={feature.uses.current >= feature.uses.max}
                          >
                            +
                          </button>
                        </div>
                        <span className="text-xs text-gray-400">
                          (Recarrega: {feature.uses.rechargeOn === 'short' ? 'Desc. Curto' : feature.uses.rechargeOn === 'long' ? 'Desc. Longo' : 'Outro'})
                        </span>
                      </div>
                    )}
                  </div>
                  <button
                    onClick={() => handleDeleteFeature(feature.id)}
                    className="text-red-400 hover:text-red-300 p-2 ml-2"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {features.length === 0 && !showAddForm && (
        <div className="text-center py-12">
          <Settings size={48} className="text-gray-600 mx-auto mb-4" />
          <p className="text-gray-400 text-lg mb-4">Nenhuma característica adicionada ainda</p>
          <button
            onClick={() => setShowAddForm(true)}
            className="dnd-button"
          >
            Adicionar Primeira Característica
          </button>
        </div>
      )}
    </div>
  );
};

export default FeaturesSheet;
