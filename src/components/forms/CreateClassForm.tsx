
import React, { useState } from 'react';
import { ArrowLeft, Plus, X } from 'lucide-react';

interface ClassFeature {
  name: string;
  description: string;
  level: number;
}

interface CreateClassFormProps {
  onSave: (className: string, features: ClassFeature[]) => void;
  onCancel: () => void;
}

const CreateClassForm: React.FC<CreateClassFormProps> = ({ onSave, onCancel }) => {
  const [className, setClassName] = useState('');
  const [hitDie, setHitDie] = useState('d8');
  const [primaryAbility, setPrimaryAbility] = useState('');
  const [savingThrows, setSavingThrows] = useState<string[]>([]);
  const [features, setFeatures] = useState<ClassFeature[]>([
    { name: '', description: '', level: 1 }
  ]);

  const abilities = ['Força', 'Destreza', 'Constituição', 'Inteligência', 'Sabedoria', 'Carisma'];
  const hitDieOptions = ['d6', 'd8', 'd10', 'd12'];

  const addFeature = () => {
    setFeatures([...features, { name: '', description: '', level: 1 }]);
  };

  const removeFeature = (index: number) => {
    if (features.length > 1) {
      setFeatures(features.filter((_, i) => i !== index));
    }
  };

  const updateFeature = (index: number, field: keyof ClassFeature, value: string | number) => {
    const updated = features.map((feature, i) => 
      i === index ? { ...feature, [field]: value } : feature
    );
    setFeatures(updated);
  };

  const toggleSavingThrow = (ability: string) => {
    if (savingThrows.includes(ability)) {
      setSavingThrows(savingThrows.filter(st => st !== ability));
    } else if (savingThrows.length < 2) {
      setSavingThrows([...savingThrows, ability]);
    }
  };

  const handleSave = () => {
    if (className.trim() && features.some(f => f.name.trim())) {
      const validFeatures = features.filter(f => f.name.trim() && f.description.trim());
      onSave(className.trim(), validFeatures);
    }
  };

  return (
    <div className="min-h-screen bg-black p-4">
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={onCancel}
          className="text-blue-400 hover:text-blue-300"
        >
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-2xl font-bold text-white">Criar Nova Classe</h1>
      </div>

      <div className="space-y-6 max-w-2xl">
        <div className="dnd-card">
          <h3 className="text-lg font-semibold text-white mb-4">Informações Básicas</h3>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Nome da Classe
              </label>
              <input
                type="text"
                value={className}
                onChange={(e) => setClassName(e.target.value)}
                className="dnd-input w-full"
                placeholder="Ex: Arqueiro Místico"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Dado de Vida
              </label>
              <select
                value={hitDie}
                onChange={(e) => setHitDie(e.target.value)}
                className="dnd-input w-full"
              >
                {hitDieOptions.map(die => (
                  <option key={die} value={die}>{die}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Habilidade Principal
            </label>
            <select
              value={primaryAbility}
              onChange={(e) => setPrimaryAbility(e.target.value)}
              className="dnd-input w-full"
            >
              <option value="">Selecione uma habilidade</option>
              {abilities.map(ability => (
                <option key={ability} value={ability}>{ability}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Proficiências em Resistência (máximo 2)
            </label>
            <div className="grid grid-cols-3 gap-2">
              {abilities.map(ability => (
                <label key={ability} className="flex items-center space-x-2 text-gray-300">
                  <input
                    type="checkbox"
                    checked={savingThrows.includes(ability)}
                    onChange={() => toggleSavingThrow(ability)}
                    disabled={!savingThrows.includes(ability) && savingThrows.length >= 2}
                    className="rounded border-gray-600 bg-gray-800 text-blue-500"
                  />
                  <span className="text-sm">{ability}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="dnd-card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Características da Classe</h3>
            <button
              onClick={addFeature}
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm"
            >
              <Plus size={16} />
              Adicionar Característica
            </button>
          </div>

          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="p-4 bg-gray-800 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-400">Característica {index + 1}</span>
                  {features.length > 1 && (
                    <button
                      onClick={() => removeFeature(index)}
                      className="text-red-400 hover:text-red-300"
                    >
                      <X size={16} />
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-3 gap-3 mb-3">
                  <div className="col-span-2">
                    <label className="block text-xs text-gray-400 mb-1">Nome</label>
                    <input
                      type="text"
                      value={feature.name}
                      onChange={(e) => updateFeature(index, 'name', e.target.value)}
                      className="dnd-input w-full text-sm"
                      placeholder="Ex: Tiro Certeiro"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1">Nível</label>
                    <input
                      type="number"
                      value={feature.level}
                      onChange={(e) => updateFeature(index, 'level', parseInt(e.target.value) || 1)}
                      className="dnd-input w-full text-sm"
                      min="1"
                      max="20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-gray-400 mb-1">Descrição</label>
                  <textarea
                    value={feature.description}
                    onChange={(e) => updateFeature(index, 'description', e.target.value)}
                    className="dnd-input w-full text-sm"
                    rows={3}
                    placeholder="Descreva a característica da classe..."
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={handleSave}
            className="dnd-button flex-1"
            disabled={!className.trim() || !features.some(f => f.name.trim())}
          >
            Criar Classe
          </button>
          <button
            onClick={onCancel}
            className="px-4 py-2 text-gray-400 hover:text-white border border-gray-600 rounded"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateClassForm;
