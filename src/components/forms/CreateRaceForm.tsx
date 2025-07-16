import React, { useState } from 'react';
import { Plus, X, Save, ArrowLeft } from 'lucide-react';
import { racialFeaturesData, getCustomRaces } from '../../utils/racialFeatures';
import { RacialFeature, RaceData } from '../../utils/types';

interface CreateRaceFormProps {
  onSave: (raceName: string, features: RacialFeature[], subraces?: { [key: string]: RacialFeature[] }) => void;
  onCancel: () => void;
}

const CreateRaceForm: React.FC<CreateRaceFormProps> = ({ onSave, onCancel }) => {
  const [raceName, setRaceName] = useState('');
  const [features, setFeatures] = useState<RacialFeature[]>([
    { name: '', description: '' }
  ]);
  const [subraces, setSubraces] = useState<{ [key: string]: RacialFeature[] }>({});
  const [showSubraces, setShowSubraces] = useState(false);
  const [currentSubrace, setCurrentSubrace] = useState('');

  // Get all existing feature names for suggestions
  const getExistingFeatureNames = (): string[] => {
    const featureNames = new Set<string>();
    
    // Get from default races
    Object.values(racialFeaturesData).forEach(raceData => {
      raceData.features.forEach(feature => {
        featureNames.add(feature.name);
      });
      
      if (raceData.subraces) {
        Object.values(raceData.subraces).forEach(subraceFeatures => {
          subraceFeatures.forEach(feature => {
            featureNames.add(feature.name);
          });
        });
      }
    });

    // Get from custom races
    const customRaces = getCustomRaces();
    Object.values(customRaces).forEach((raceData: RaceData) => {
      raceData.features.forEach(feature => {
        featureNames.add(feature.name);
      });
      
      if (raceData.subraces) {
        Object.values(raceData.subraces).forEach(subraceFeatures => {
          subraceFeatures.forEach(feature => {
            featureNames.add(feature.name);
          });
        });
      }
    });
    
    return Array.from(featureNames).sort();
  };

  const existingFeatureNames = getExistingFeatureNames();

  const addFeature = (isSubrace = false, subraceName = '') => {
    if (isSubrace && subraceName) {
      setSubraces(prev => ({
        ...prev,
        [subraceName]: [...(prev[subraceName] || []), { name: '', description: '' }]
      }));
    } else {
      setFeatures([...features, { name: '', description: '' }]);
    }
  };

  const removeFeature = (index: number, isSubrace = false, subraceName = '') => {
    if (isSubrace && subraceName) {
      setSubraces(prev => ({
        ...prev,
        [subraceName]: prev[subraceName].filter((_, i) => i !== index)
      }));
    } else {
      setFeatures(features.filter((_, i) => i !== index));
    }
  };

  const updateFeature = (
    index: number, 
    field: keyof RacialFeature, 
    value: any, 
    isSubrace = false, 
    subraceName = ''
  ) => {
    if (isSubrace && subraceName) {
      setSubraces(prev => ({
        ...prev,
        [subraceName]: prev[subraceName].map((feature, i) => 
          i === index ? { ...feature, [field]: value } : feature
        )
      }));
    } else {
      setFeatures(features.map((feature, i) => 
        i === index ? { ...feature, [field]: value } : feature
      ));
    }
  };

  const addSubrace = () => {
    if (currentSubrace && !subraces[currentSubrace]) {
      setSubraces(prev => ({
        ...prev,
        [currentSubrace]: [{ name: '', description: '' }]
      }));
      setCurrentSubrace('');
    }
  };

  const removeSubrace = (subraceName: string) => {
    setSubraces(prev => {
      const newSubraces = { ...prev };
      delete newSubraces[subraceName];
      return newSubraces;
    });
  };

  const handleSave = () => {
    if (raceName && features.some(f => f.name && f.description)) {
      const validFeatures = features.filter(f => f.name && f.description);
      const validSubraces = Object.keys(subraces).length > 0 ? 
        Object.fromEntries(
          Object.entries(subraces).map(([name, features]) => [
            name, 
            features.filter(f => f.name && f.description)
          ])
        ) : undefined;
      
      onSave(raceName, validFeatures, validSubraces);
    }
  };

  const renderFeatureForm = (
    feature: RacialFeature, 
    index: number, 
    isSubrace = false, 
    subraceName = ''
  ) => (
    <div key={`${isSubrace ? subraceName : 'main'}-${index}`} className="bg-gray-800 p-4 rounded-lg space-y-3">
      <div className="flex items-start gap-2">
        <div className="flex-1 space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Nome da Habilidade
            </label>
            <input
              type="text"
              value={feature.name}
              onChange={(e) => updateFeature(index, 'name', e.target.value, isSubrace, subraceName)}
              className="dnd-input w-full"
              placeholder="Ex: Visão no Escuro"
              list={`features-list-${isSubrace ? subraceName : 'main'}-${index}`}
            />
            <datalist id={`features-list-${isSubrace ? subraceName : 'main'}-${index}`}>
              {existingFeatureNames.map(name => (
                <option key={name} value={name} />
              ))}
            </datalist>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Descrição
            </label>
            <textarea
              value={feature.description}
              onChange={(e) => updateFeature(index, 'description', e.target.value, isSubrace, subraceName)}
              className="dnd-input w-full h-20 resize-none"
              placeholder="Descreva os efeitos da habilidade racial..."
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id={`hasUses-${isSubrace ? subraceName : 'main'}-${index}`}
              checked={!!feature.uses}
              onChange={(e) => {
                if (e.target.checked) {
                  updateFeature(index, 'uses', { max: 1, rechargeOn: 'long' }, isSubrace, subraceName);
                } else {
                  const newFeature = { ...feature };
                  delete newFeature.uses;
                  if (isSubrace && subraceName) {
                    setSubraces(prev => ({
                      ...prev,
                      [subraceName]: prev[subraceName].map((f, i) => i === index ? newFeature : f)
                    }));
                  } else {
                    setFeatures(features.map((f, i) => i === index ? newFeature : f));
                  }
                }
              }}
              className="w-4 h-4 text-blue-600 bg-gray-800 border-gray-600 rounded focus:ring-blue-500"
            />
            <label htmlFor={`hasUses-${isSubrace ? subraceName : 'main'}-${index}`} className="text-white">
              Tem usos limitados
            </label>
          </div>

          {feature.uses && (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Usos Máximos
                </label>
                <input
                  type="number"
                  value={feature.uses.max}
                  onChange={(e) => updateFeature(
                    index, 
                    'uses', 
                    { ...feature.uses!, max: parseInt(e.target.value) || 1 }, 
                    isSubrace, 
                    subraceName
                  )}
                  className="dnd-input w-full"
                  min="1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Recarrega em
                </label>
                <select
                  value={feature.uses.rechargeOn}
                  onChange={(e) => updateFeature(
                    index, 
                    'uses', 
                    { ...feature.uses!, rechargeOn: e.target.value as 'short' | 'long' | 'other' }, 
                    isSubrace, 
                    subraceName
                  )}
                  className="dnd-input w-full"
                >
                  <option value="short">Descanso Curto</option>
                  <option value="long">Descanso Longo</option>
                  <option value="other">Outro</option>
                </select>
              </div>
            </div>
          )}
        </div>
        
        <button
          onClick={() => removeFeature(index, isSubrace, subraceName)}
          className="text-red-400 hover:text-red-300 p-2 mt-6"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">Criar Nova Raça</h2>
            <button
              onClick={onCancel}
              className="text-gray-400 hover:text-white"
            >
              <X size={24} />
            </button>
          </div>

          <div className="space-y-6">
            {/* Race Name */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Nome da Raça
              </label>
              <input
                type="text"
                value={raceName}
                onChange={(e) => setRaceName(e.target.value)}
                className="dnd-input w-full"
                placeholder="Ex: Elfo Celestial"
              />
            </div>

            {/* Main Features */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-white">Habilidades Raciais</h3>
                <button
                  onClick={() => addFeature()}
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm"
                >
                  <Plus size={16} />
                  Adicionar Habilidade
                </button>
              </div>
              
              <div className="space-y-4">
                {features.map((feature, index) => 
                  renderFeatureForm(feature, index)
                )}
              </div>
            </div>

            {/* Subraces */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-white">Subraças (Opcional)</h3>
                <button
                  onClick={() => setShowSubraces(!showSubraces)}
                  className="text-blue-400 hover:text-blue-300 text-sm"
                >
                  {showSubraces ? 'Ocultar' : 'Mostrar'} Subraças
                </button>
              </div>

              {showSubraces && (
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={currentSubrace}
                      onChange={(e) => setCurrentSubrace(e.target.value)}
                      className="dnd-input flex-1"
                      placeholder="Nome da subrace..."
                    />
                    <button
                      onClick={addSubrace}
                      className="dnd-button"
                      disabled={!currentSubrace || !!subraces[currentSubrace]}
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  {Object.entries(subraces).map(([subraceName, subraceFeatures]) => (
                    <div key={subraceName} className="border border-gray-700 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-white font-medium">{subraceName}</h4>
                        <div className="flex gap-2">
                          <button
                            onClick={() => addFeature(true, subraceName)}
                            className="text-blue-400 hover:text-blue-300 text-sm"
                          >
                            <Plus size={14} />
                          </button>
                          <button
                            onClick={() => removeSubrace(subraceName)}
                            className="text-red-400 hover:text-red-300 text-sm"
                          >
                            <X size={14} />
                          </button>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        {subraceFeatures.map((feature, index) => 
                          renderFeatureForm(feature, index, true, subraceName)
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-4 border-t border-gray-700">
              <button
                onClick={onCancel}
                className="flex items-center gap-2 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
              >
                <ArrowLeft size={16} />
                Cancelar
              </button>
              <button
                onClick={handleSave}
                disabled={!raceName || !features.some(f => f.name && f.description)}
                className="flex items-center gap-2 dnd-button disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Save size={16} />
                Salvar Raça
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateRaceForm;
