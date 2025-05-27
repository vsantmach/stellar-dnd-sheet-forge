
import React, { useState } from 'react';
import { User, TrendingUp, Backpack, Book, Star, Settings } from 'lucide-react';
import BasicInfo from './sheets/BasicInfo';
import StatusSheet from './sheets/StatusSheet';
import EquipmentSheet from './sheets/EquipmentSheet';
import SpellsSheet from './sheets/SpellsSheet';
import BackgroundSheet from './sheets/BackgroundSheet';
import FeaturesSheet from './sheets/FeaturesSheet';

interface Character {
  id: string;
  name: string;
  class: string;
  level: number;
  race: string;
}

interface CharacterSheetProps {
  character: Character;
}

const CharacterSheet: React.FC<CharacterSheetProps> = ({ character }) => {
  const [activeTab, setActiveTab] = useState('basic');

  const tabs = [
    { id: 'basic', label: 'Básico', icon: User },
    { id: 'status', label: 'Status', icon: TrendingUp },
    { id: 'equipment', label: 'Equipamentos', icon: Backpack },
    { id: 'spells', label: 'Magias', icon: Book },
    { id: 'background', label: 'Background', icon: Star },
    { id: 'features', label: 'Características', icon: Settings },
  ];

  const renderActiveSheet = () => {
    switch (activeTab) {
      case 'basic':
        return <BasicInfo character={character} />;
      case 'status':
        return <StatusSheet character={character} />;
      case 'equipment':
        return <EquipmentSheet character={character} />;
      case 'spells':
        return <SpellsSheet character={character} />;
      case 'background':
        return <BackgroundSheet character={character} />;
      case 'features':
        return <FeaturesSheet character={character} />;
      default:
        return <BasicInfo character={character} />;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-black">
      {/* Navigation Tabs */}
      <div className="flex overflow-x-auto bg-gray-900 border-b border-gray-800">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-3 min-w-max whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white border-b-2 border-blue-400'
                  : 'text-gray-300 hover:text-white hover:bg-gray-800'
              }`}
            >
              <Icon size={18} />
              <span className="text-sm font-medium">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Sheet Content */}
      <div className="flex-1 overflow-y-auto">
        {renderActiveSheet()}
      </div>
    </div>
  );
};

export default CharacterSheet;
