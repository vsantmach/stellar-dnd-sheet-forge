
import React, { useState } from 'react';
import { User, TrendingUp, Backpack, Book, Star, Settings, Sword } from 'lucide-react';
import BasicInfo from './sheets/BasicInfo';
import StatusSheet from './sheets/StatusSheet';
import EquipmentSheet from './sheets/EquipmentSheet';
import SpellsSheet from './sheets/SpellsSheet';
import BackgroundSheet from './sheets/BackgroundSheet';
import FeaturesSheet from './sheets/FeaturesSheet';
import ClassFeaturesSheet from './sheets/ClassFeaturesSheet';
import { useTheme } from '../hooks/useTheme';

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
  const { mode, color, getBackgroundColor, getTextColor } = useTheme();

  const tabs = [
    { id: 'basic', label: 'Básico', icon: User },
    { id: 'status', label: 'Status', icon: TrendingUp },
    { id: 'class-features', label: 'Classe', icon: Sword },
    { id: 'equipment', label: 'Equipamentos', icon: Backpack },
    { id: 'spells', label: 'Magias', icon: Book },
    { id: 'background', label: 'Background', icon: Star },
    { id: 'features', label: 'Características', icon: Settings },
  ];

  const getTabButtonClass = (isActive: boolean) => {
    const baseClass = "flex items-center gap-2 px-4 py-3 min-w-max whitespace-nowrap transition-colors";
    
    if (isActive) {
      const colorMap = {
        blue: 'bg-blue-600 border-blue-400',
        green: 'bg-green-600 border-green-400',
        cyan: 'bg-cyan-600 border-cyan-400',
        red: 'bg-red-600 border-red-400',
        purple: 'bg-purple-600 border-purple-400',
      };
      return `${baseClass} ${colorMap[color]} text-white border-b-2`;
    }
    
    return `${baseClass} ${mode === 'dark' ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`;
  };

  const renderActiveSheet = () => {
    switch (activeTab) {
      case 'basic':
        return <BasicInfo character={character} />;
      case 'status':
        return <StatusSheet character={character} />;
      case 'class-features':
        return <ClassFeaturesSheet character={character} />;
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
    <div className={`flex flex-col h-screen ${getBackgroundColor()}`}>
      {/* Navigation Tabs */}
      <div className={`flex overflow-x-auto ${mode === 'dark' ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-200'} border-b`}>
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={getTabButtonClass(activeTab === tab.id)}
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
