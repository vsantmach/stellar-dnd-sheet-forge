
import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import { racialFeaturesData, getAvailableSubraces } from '../../utils/racialFeatures';
import CreateRaceForm from './CreateRaceForm';

interface RacialFeature {
  name: string;
  description: string;
  uses?: {
    max: number;
    rechargeOn: 'short' | 'long' | 'other';
  };
}

interface RaceSelectorProps {
  selectedRace: string;
  selectedSubrace?: string;
  onRaceChange: (race: string) => void;
  onSubraceChange?: (subrace: string) => void;
  disabled?: boolean;
}

const RaceSelector: React.FC<RaceSelectorProps> = ({
  selectedRace,
  selectedSubrace,
  onRaceChange,
  onSubraceChange,
  disabled = false
}) => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [customRaces, setCustomRaces] = useState<{ [key: string]: any }>({});

  // Load custom races from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('custom-races');
    if (saved) {
      try {
        setCustomRaces(JSON.parse(saved));
      } catch (error) {
        console.log('Error loading custom races:', error);
      }
    }
  }, []);

  // Save custom races to localStorage
  const saveCustomRaces = (races: { [key: string]: any }) => {
    localStorage.setItem('custom-races', JSON.stringify(races));
    setCustomRaces(races);
  };

  const handleCreateRace = (
    raceName: string, 
    features: RacialFeature[], 
    subraces?: { [key: string]: RacialFeature[] }
  ) => {
    const newRace = {
      features,
      ...(subraces && Object.keys(subraces).length > 0 && { subraces })
    };

    const updatedRaces = {
      ...customRaces,
      [raceName]: newRace
    };

    saveCustomRaces(updatedRaces);
    setShowCreateForm(false);
    onRaceChange(raceName);
  };

  // Combine default races with custom races
  const allRaces = [
    ...Object.keys(racialFeaturesData).sort(),
    ...Object.keys(customRaces).sort()
  ];

  const getAvailableSubracesForRace = (race: string): string[] => {
    if (racialFeaturesData[race]) {
      return getAvailableSubraces(race);
    }
    if (customRaces[race] && customRaces[race].subraces) {
      return Object.keys(customRaces[race].subraces);
    }
    return [];
  };

  const availableSubraces = getAvailableSubracesForRace(selectedRace);

  return (
    <>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Raça
          </label>
          <div className="flex gap-2">
            <select
              value={selectedRace}
              onChange={(e) => {
                if (e.target.value === '__create_new__') {
                  setShowCreateForm(true);
                } else {
                  onRaceChange(e.target.value);
                  if (onSubraceChange) {
                    onSubraceChange('');
                  }
                }
              }}
              className="dnd-input flex-1"
              disabled={disabled}
            >
              <option value="">Selecione uma raça</option>
              {allRaces.map((race) => (
                <option key={race} value={race}>
                  {race}
                  {customRaces[race] && ' (Personalizada)'}
                </option>
              ))}
              <option value="__create_new__">
                ➕ Criar Nova Raça
              </option>
            </select>
          </div>
        </div>

        {/* Subrace Selection */}
        {availableSubraces.length > 0 && onSubraceChange && (
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Subrace
            </label>
            <select
              value={selectedSubrace || ''}
              onChange={(e) => onSubraceChange(e.target.value)}
              className="dnd-input w-full"
              disabled={disabled}
            >
              <option value="">Selecione uma subrace</option>
              {availableSubraces.map((subrace) => (
                <option key={subrace} value={subrace}>
                  {subrace}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Create Race Form Modal */}
      {showCreateForm && (
        <CreateRaceForm
          onSave={handleCreateRace}
          onCancel={() => setShowCreateForm(false)}
        />
      )}
    </>
  );
};

export default RaceSelector;
