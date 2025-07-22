
import React, { useState } from 'react';
import { Star, Users, MapPin } from 'lucide-react';
import { Character } from '../../utils/types';

interface BackgroundSheetProps {
  character: Character;
}

const BackgroundSheet: React.FC<BackgroundSheetProps> = ({ character }) => {
  const [backgroundData, setBackgroundData] = useState({
    personalityTraits: '',
    ideals: '',
    bonds: '',
    flaws: '',
    backstory: '',
    allies: '',
    enemies: '',
    organizations: '',
    additionalFeatures: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setBackgroundData({ ...backgroundData, [field]: value });
  };

  return (
    <div className="p-4 space-y-6 bg-black">
      <h2 className="text-xl font-bold text-white flex items-center gap-2">
        <Star size={24} className="text-blue-400" />
        Background do Personagem
      </h2>

      {/* Personality Traits */}
      <div className="dnd-card">
        <h3 className="text-lg font-semibold text-white mb-4">Traços de Personalidade</h3>
        <textarea
          value={backgroundData.personalityTraits}
          onChange={(e) => handleInputChange('personalityTraits', e.target.value)}
          className="dnd-input w-full h-24 resize-none"
          placeholder="Descreva os traços únicos de personalidade do seu personagem..."
        />
      </div>

      {/* Ideals */}
      <div className="dnd-card">
        <h3 className="text-lg font-semibold text-white mb-4">Ideais</h3>
        <textarea
          value={backgroundData.ideals}
          onChange={(e) => handleInputChange('ideals', e.target.value)}
          className="dnd-input w-full h-24 resize-none"
          placeholder="Quais são os princípios e motivações do seu personagem?"
        />
      </div>

      {/* Bonds */}
      <div className="dnd-card">
        <h3 className="text-lg font-semibold text-white mb-4">Vínculos</h3>
        <textarea
          value={backgroundData.bonds}
          onChange={(e) => handleInputChange('bonds', e.target.value)}
          className="dnd-input w-full h-24 resize-none"
          placeholder="Pessoas, lugares ou coisas importantes para o personagem..."
        />
      </div>

      {/* Flaws */}
      <div className="dnd-card">
        <h3 className="text-lg font-semibold text-white mb-4">Defeitos</h3>
        <textarea
          value={backgroundData.flaws}
          onChange={(e) => handleInputChange('flaws', e.target.value)}
          className="dnd-input w-full h-24 resize-none"
          placeholder="Vícios, compulsões, medos ou fraquezas do personagem..."
        />
      </div>

      {/* Backstory */}
      <div className="dnd-card">
        <h3 className="text-lg font-semibold text-white mb-4">História Pessoal</h3>
        <textarea
          value={backgroundData.backstory}
          onChange={(e) => handleInputChange('backstory', e.target.value)}
          className="dnd-input w-full h-32 resize-none"
          placeholder="Conte a história de vida do seu personagem antes de se tornar um aventureiro..."
        />
      </div>

      {/* Allies & Organizations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="dnd-card">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Users size={20} className="text-green-400" />
            Aliados
          </h3>
          <textarea
            value={backgroundData.allies}
            onChange={(e) => handleInputChange('allies', e.target.value)}
            className="dnd-input w-full h-24 resize-none"
            placeholder="Aliados e contatos importantes..."
          />
        </div>

        <div className="dnd-card">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Users size={20} className="text-red-400" />
            Inimigos
          </h3>
          <textarea
            value={backgroundData.enemies}
            onChange={(e) => handleInputChange('enemies', e.target.value)}
            className="dnd-input w-full h-24 resize-none"
            placeholder="Inimigos e rivais conhecidos..."
          />
        </div>
      </div>

      {/* Organizations */}
      <div className="dnd-card">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <MapPin size={20} className="text-purple-400" />
          Organizações
        </h3>
        <textarea
          value={backgroundData.organizations}
          onChange={(e) => handleInputChange('organizations', e.target.value)}
          className="dnd-input w-full h-24 resize-none"
          placeholder="Guildas, facções, religiões ou outras organizações..."
        />
      </div>

      {/* Additional Features */}
      <div className="dnd-card">
        <h3 className="text-lg font-semibold text-white mb-4">Características Adicionais</h3>
        <textarea
          value={backgroundData.additionalFeatures}
          onChange={(e) => handleInputChange('additionalFeatures', e.target.value)}
          className="dnd-input w-full h-32 resize-none"
          placeholder="Características especiais do background, idiomas, proficiências, equipamentos especiais..."
        />
      </div>
    </div>
  );
};

export default BackgroundSheet;
