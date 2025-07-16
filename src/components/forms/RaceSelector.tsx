
import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import { racialFeaturesData, getAvailableSubraces, getCustomRaces, saveCustomRace } from '../../utils/racialFeatures';
import { RacialFeature, RaceData } from '../../utils/types';
import CreateRaceForm from './CreateRaceForm';

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
  const [customRaces, setCustomRaces] = useState<Record<string, RaceData>>({});

  // Load custom races from localStorage
  useEffect(() => {
    setCustomRaces(getCustomRaces());
  }, []);

  const handleCreateRace = (
    raceName: string, 
    features: RacialFeature[], 
    subraces?: { [key: string]: RacialFeature[] }
  ) => {
    const raceData: RaceData = {
      features,
      ...(subraces && Object.keys(subraces).length > 0 && { subraces })
    };

    saveCustomRace(raceName, raceData);
    setCustomRaces(getCustomRaces());
    setShowCreateForm(false);
    onRaceChange(raceName);
  };

  // Combine default races with custom races
  const allRaces = [
    ...Object.keys(racialFeaturesData).sort(),
    ...Object.keys(customRaces).sort()
  ];

  const availableSubraces = getAvailableSubraces(selectedRace);

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
