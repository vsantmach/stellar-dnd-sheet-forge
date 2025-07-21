
import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import CreateClassForm from './CreateClassForm';

interface ClassFeature {
  name: string;
  description: string;
  level: number;
}

interface CustomClass {
  name: string;
  features: ClassFeature[];
  hitDie: string;
  primaryAbility: string;
  savingThrows: string[];
}

interface ClassSelectorProps {
  selectedClass: string;
  onClassChange: (className: string) => void;
  disabled?: boolean;
}

const ClassSelector: React.FC<ClassSelectorProps> = ({ 
  selectedClass, 
  onClassChange,
  disabled = false 
}) => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [customClasses, setCustomClasses] = useState<CustomClass[]>([]);

  const defaultClasses = [
    'Bárbaro', 'Bardo', 'Bruxo', 'Clérigo', 'Druida', 'Feiticeiro',
    'Guerreiro', 'Ladino', 'Mago', 'Monge', 'Paladino', 'Patrulheiro', 'Psionico'
  ];

  // Load custom classes from localStorage
  useEffect(() => {
    const savedClasses = localStorage.getItem('custom-classes');
    if (savedClasses) {
      try {
        setCustomClasses(JSON.parse(savedClasses));
      } catch (error) {
        console.log('Error loading custom classes:', error);
      }
    }
  }, []);

  const saveCustomClass = (className: string, features: ClassFeature[]) => {
    const newClass: CustomClass = {
      name: className,
      features,
      hitDie: 'd8', // Default, could be made configurable
      primaryAbility: '',
      savingThrows: []
    };

    const updatedClasses = [...customClasses, newClass];
    setCustomClasses(updatedClasses);
    localStorage.setItem('custom-classes', JSON.stringify(updatedClasses));
    
    // Save class features for the class utilities
    const existingClassFeatures = localStorage.getItem('custom-class-features') || '{}';
    const classFeatures = JSON.parse(existingClassFeatures);
    classFeatures[className] = features;
    localStorage.setItem('custom-class-features', JSON.stringify(classFeatures));
    
    onClassChange(className);
    setShowCreateForm(false);
  };

  if (showCreateForm) {
    return (
      <CreateClassForm
        onSave={saveCustomClass}
        onCancel={() => setShowCreateForm(false)}
      />
    );
  }

  const allClasses = [...defaultClasses, ...customClasses.map(c => c.name)];

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <label className="block text-sm font-medium text-gray-300">
          Classe
        </label>
        {!disabled && (
          <button
            onClick={() => setShowCreateForm(true)}
            className="flex items-center gap-1 text-blue-400 hover:text-blue-300 text-sm"
          >
            <Plus size={16} />
            Nova Classe
          </button>
        )}
      </div>
      
      <select
        value={selectedClass}
        onChange={(e) => onClassChange(e.target.value)}
        className="dnd-input w-full"
        disabled={disabled}
      >
        <option value="">Selecione uma classe</option>
        <optgroup label="Classes Padrão">
          {defaultClasses.map(cls => (
            <option key={cls} value={cls}>{cls}</option>
          ))}
        </optgroup>
        {customClasses.length > 0 && (
          <optgroup label="Classes Personalizadas">
            {customClasses.map(cls => (
              <option key={cls.name} value={cls.name}>{cls.name}</option>
            ))}
          </optgroup>
        )}
      </select>
    </div>
  );
};

export default ClassSelector;
