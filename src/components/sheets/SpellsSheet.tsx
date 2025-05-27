
import React, { useState } from 'react';
import { Plus, Trash2, Book, Star } from 'lucide-react';

interface Character {
  id: string;
  name: string;
  class: string;
  level: number;
  race: string;
}

interface SpellsSheetProps {
  character: Character;
}

interface Spell {
  id: string;
  name: string;
  level: number;
  school: string;
  castingTime: string;
  range: string;
  components: string;
  duration: string;
  description: string;
  prepared?: boolean;
}

const SpellsSheet: React.FC<SpellsSheetProps> = ({ character }) => {
  const [spells, setSpells] = useState<Spell[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [spellSlots, setSpellSlots] = useState({
    level1: { total: 0, used: 0 },
    level2: { total: 0, used: 0 },
    level3: { total: 0, used: 0 },
    level4: { total: 0, used: 0 },
    level5: { total: 0, used: 0 },
    level6: { total: 0, used: 0 },
    level7: { total: 0, used: 0 },
    level8: { total: 0, used: 0 },
    level9: { total: 0, used: 0 }
  });

  const [newSpell, setNewSpell] = useState({
    name: '',
    level: 0,
    school: '',
    castingTime: '',
    range: '',
    components: '',
    duration: '',
    description: ''
  });

  const handleAddSpell = () => {
    if (newSpell.name && newSpell.description) {
      const spell: Spell = {
        id: Date.now().toString(),
        ...newSpell,
        prepared: false
      };
      setSpells([...spells, spell]);
      setNewSpell({
        name: '',
        level: 0,
        school: '',
        castingTime: '',
        range: '',
        components: '',
        duration: '',
        description: ''
      });
      setShowAddForm(false);
    }
  };

  const handleDeleteSpell = (spellId: string) => {
    setSpells(spells.filter(spell => spell.id !== spellId));
  };

  const togglePrepared = (spellId: string) => {
    setSpells(spells.map(spell => 
      spell.id === spellId ? { ...spell, prepared: !spell.prepared } : spell
    ));
  };

  const schools = [
    'Abjuração', 'Adivinhação', 'Conjuração', 'Encantamento',
    'Evocação', 'Ilusão', 'Necromancia', 'Transmutação'
  ];

  const cantrips = spells.filter(spell => spell.level === 0);
  const leveledSpells = spells.filter(spell => spell.level > 0);

  return (
    <div className="p-4 space-y-6 bg-black">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-white">Magias</h2>
        <button
          onClick={() => setShowAddForm(true)}
          className="flex items-center gap-2 dnd-button"
        >
          <Plus size={16} />
          Adicionar Magia
        </button>
      </div>

      {/* Spell Slots */}
      <div className="dnd-card">
        <h3 className="text-lg font-semibold text-white mb-4">Espaços de Magia</h3>
        <div className="grid grid-cols-3 gap-4">
          {Object.entries(spellSlots).map(([key, slots]) => {
            const level = parseInt(key.replace('level', ''));
            return (
              <div key={key} className="text-center">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Nível {level}
                </label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    value={slots.total}
                    onChange={(e) => setSpellSlots({
                      ...spellSlots,
                      [key]: { ...slots, total: parseInt(e.target.value) || 0 }
                    })}
                    className="dnd-input w-full text-center"
                    placeholder="Total"
                    min="0"
                  />
                  <input
                    type="number"
                    value={slots.used}
                    onChange={(e) => setSpellSlots({
                      ...spellSlots,
                      [key]: { ...slots, used: parseInt(e.target.value) || 0 }
                    })}
                    className="dnd-input w-full text-center"
                    placeholder="Usado"
                    min="0"
                    max={slots.total}
                  />
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  {slots.total - slots.used} restantes
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Add Spell Form */}
      {showAddForm && (
        <div className="dnd-card">
          <h3 className="text-lg font-semibold text-white mb-4">Adicionar Magia</h3>
          
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Nome da Magia
                </label>
                <input
                  type="text"
                  value={newSpell.name}
                  onChange={(e) => setNewSpell({ ...newSpell, name: e.target.value })}
                  className="dnd-input w-full"
                  placeholder="Ex: Bola de Fogo"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Nível
                </label>
                <select
                  value={newSpell.level}
                  onChange={(e) => setNewSpell({ ...newSpell, level: parseInt(e.target.value) })}
                  className="dnd-input w-full"
                >
                  <option value={0}>Truque</option>
                  {[1,2,3,4,5,6,7,8,9].map(level => (
                    <option key={level} value={level}>Nível {level}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Escola
                </label>
                <select
                  value={newSpell.school}
                  onChange={(e) => setNewSpell({ ...newSpell, school: e.target.value })}
                  className="dnd-input w-full"
                >
                  <option value="">Selecione</option>
                  {schools.map(school => (
                    <option key={school} value={school}>{school}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Tempo de Conjuração
                </label>
                <input
                  type="text"
                  value={newSpell.castingTime}
                  onChange={(e) => setNewSpell({ ...newSpell, castingTime: e.target.value })}
                  className="dnd-input w-full"
                  placeholder="Ex: 1 ação"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Alcance
                </label>
                <input
                  type="text"
                  value={newSpell.range}
                  onChange={(e) => setNewSpell({ ...newSpell, range: e.target.value })}
                  className="dnd-input w-full"
                  placeholder="Ex: 150 pés"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Componentes
                </label>
                <input
                  type="text"
                  value={newSpell.components}
                  onChange={(e) => setNewSpell({ ...newSpell, components: e.target.value })}
                  className="dnd-input w-full"
                  placeholder="Ex: V, S, M"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Duração
                </label>
                <input
                  type="text"
                  value={newSpell.duration}
                  onChange={(e) => setNewSpell({ ...newSpell, duration: e.target.value })}
                  className="dnd-input w-full"
                  placeholder="Ex: Instantâneo"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Descrição
              </label>
              <textarea
                value={newSpell.description}
                onChange={(e) => setNewSpell({ ...newSpell, description: e.target.value })}
                className="dnd-input w-full h-24 resize-none"
                placeholder="Descrição dos efeitos da magia..."
              />
            </div>

            <div className="flex gap-2">
              <button
                onClick={handleAddSpell}
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

      {/* Cantrips */}
      {cantrips.length > 0 && (
        <div className="dnd-card">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Star size={20} className="text-yellow-400" />
            Truques
          </h3>
          <div className="space-y-3">
            {cantrips.map((spell) => (
              <div key={spell.id} className="bg-gray-800 p-3 rounded-lg">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="text-white font-medium">{spell.name}</h4>
                      <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                        {spell.school}
                      </span>
                    </div>
                    <div className="text-sm text-gray-300 space-y-1">
                      <div><strong>Conjuração:</strong> {spell.castingTime}</div>
                      <div><strong>Alcance:</strong> {spell.range}</div>
                      <div><strong>Componentes:</strong> {spell.components}</div>
                      <div><strong>Duração:</strong> {spell.duration}</div>
                      <div className="mt-2">{spell.description}</div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDeleteSpell(spell.id)}
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

      {/* Leveled Spells */}
      {leveledSpells.length > 0 && (
        <div className="dnd-card">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Book size={20} className="text-blue-400" />
            Magias de Nível
          </h3>
          <div className="space-y-3">
            {leveledSpells.map((spell) => (
              <div key={spell.id} className="bg-gray-800 p-3 rounded-lg">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <input
                        type="checkbox"
                        checked={spell.prepared}
                        onChange={() => togglePrepared(spell.id)}
                        className="w-4 h-4 text-blue-600 bg-gray-800 border-gray-600 rounded focus:ring-blue-500"
                      />
                      <h4 className="text-white font-medium">{spell.name}</h4>
                      <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">
                        Nível {spell.level}
                      </span>
                      <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                        {spell.school}
                      </span>
                    </div>
                    <div className="text-sm text-gray-300 space-y-1">
                      <div><strong>Conjuração:</strong> {spell.castingTime}</div>
                      <div><strong>Alcance:</strong> {spell.range}</div>
                      <div><strong>Componentes:</strong> {spell.components}</div>
                      <div><strong>Duração:</strong> {spell.duration}</div>
                      <div className="mt-2">{spell.description}</div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDeleteSpell(spell.id)}
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

      {spells.length === 0 && !showAddForm && (
        <div className="text-center py-12">
          <Book size={48} className="text-gray-600 mx-auto mb-4" />
          <p className="text-gray-400 text-lg mb-4">Nenhuma magia adicionada ainda</p>
          <button
            onClick={() => setShowAddForm(true)}
            className="dnd-button"
          >
            Adicionar Primeira Magia
          </button>
        </div>
      )}
    </div>
  );
};

export default SpellsSheet;
