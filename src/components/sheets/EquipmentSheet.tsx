import React, { useState } from 'react';
import { Plus, Trash2, Sword, Shield, Backpack } from 'lucide-react';

interface Character {
  id: string;
  name: string;
  class: string;
  level: number;
  race: string;
}

interface EquipmentSheetProps {
  character: Character;
}

interface Item {
  id: string;
  name: string;
  type: 'weapon' | 'armor' | 'item';
  quantity: number;
  description?: string;
  damage?: string;
  armorClass?: number;
}

const EquipmentSheet: React.FC<EquipmentSheetProps> = ({ character }) => {
  const [items, setItems] = useState<Item[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newItem, setNewItem] = useState({
    name: '',
    type: 'item' as const,
    quantity: 1,
    description: '',
    damage: '',
    armorClass: 0
  });

  const handleAddItem = () => {
    if (newItem.name) {
      const item: Item = {
        id: Date.now().toString(),
        ...newItem
      };
      setItems([...items, item]);
      setNewItem({
        name: '',
        type: 'item',
        quantity: 1,
        description: '',
        damage: '',
        armorClass: 0
      });
      setShowAddForm(false);
    }
  };

  const handleDeleteItem = (itemId: string) => {
    setItems(items.filter(item => item.id !== itemId));
  };

  const getItemIcon = (type: string) => {
    switch (type) {
      case 'weapon':
        return <Sword size={16} className="text-red-400" />;
      case 'armor':
        return <Shield size={16} className="text-blue-400" />;
      default:
        return <Backpack size={16} className="text-gray-400" />;
    }
  };

  const weapons = items.filter(item => item.type === 'weapon');
  const armor = items.filter(item => item.type === 'armor');
  const otherItems = items.filter(item => item.type === 'item');

  return (
    <div className="p-4 space-y-6 bg-black">
      {/* Add Item Button */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-white">Equipamentos</h2>
        <button
          onClick={() => setShowAddForm(true)}
          className="flex items-center gap-2 dnd-button"
        >
          <Plus size={16} />
          Adicionar Item
        </button>
      </div>

      {/* Add Item Form */}
      {showAddForm && (
        <div className="dnd-card">
          <h3 className="text-lg font-semibold text-white mb-4">Adicionar Item</h3>
          
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Nome do Item
                </label>
                <input
                  type="text"
                  value={newItem.name}
                  onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                  className="dnd-input w-full"
                  placeholder="Ex: Espada Longa"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Tipo
                </label>
                <select
                  value={newItem.type}
                  onChange={(e) => setNewItem({ ...newItem, type: e.target.value as 'weapon' | 'armor' | 'item' })}
                  className="dnd-input w-full"
                >
                  <option value="item">Item</option>
                  <option value="weapon">Arma</option>
                  <option value="armor">Armadura</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Quantidade
                </label>
                <input
                  type="number"
                  value={newItem.quantity}
                  onChange={(e) => setNewItem({ ...newItem, quantity: parseInt(e.target.value) || 1 })}
                  className="dnd-input w-full"
                  min="1"
                />
              </div>
              {newItem.type === 'weapon' && (
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Dano
                  </label>
                  <input
                    type="text"
                    value={newItem.damage}
                    onChange={(e) => setNewItem({ ...newItem, damage: e.target.value })}
                    className="dnd-input w-full"
                    placeholder="Ex: 1d8"
                  />
                </div>
              )}
              {newItem.type === 'armor' && (
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    CA
                  </label>
                  <input
                    type="number"
                    value={newItem.armorClass}
                    onChange={(e) => setNewItem({ ...newItem, armorClass: parseInt(e.target.value) || 0 })}
                    className="dnd-input w-full"
                  />
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Descrição
              </label>
              <textarea
                value={newItem.description}
                onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                className="dnd-input w-full h-20 resize-none"
                placeholder="Descrição do item..."
              />
            </div>

            <div className="flex gap-2">
              <button
                onClick={handleAddItem}
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

      {/* Weapons */}
      {weapons.length > 0 && (
        <div className="dnd-card">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Sword size={20} className="text-red-400" />
            Armas
          </h3>
          <div className="space-y-3">
            {weapons.map((weapon) => (
              <div key={weapon.id} className="flex items-center justify-between bg-gray-800 p-3 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    {getItemIcon(weapon.type)}
                    <span className="text-white font-medium">{weapon.name}</span>
                    <span className="text-gray-400">x{weapon.quantity}</span>
                  </div>
                  {weapon.damage && (
                    <div className="text-sm text-red-400 mt-1">Dano: {weapon.damage}</div>
                  )}
                  {weapon.description && (
                    <div className="text-sm text-gray-300 mt-1">{weapon.description}</div>
                  )}
                </div>
                <button
                  onClick={() => handleDeleteItem(weapon.id)}
                  className="text-red-400 hover:text-red-300 p-2"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Armor */}
      {armor.length > 0 && (
        <div className="dnd-card">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Shield size={20} className="text-blue-400" />
            Armaduras
          </h3>
          <div className="space-y-3">
            {armor.map((item) => (
              <div key={item.id} className="flex items-center justify-between bg-gray-800 p-3 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    {getItemIcon(item.type)}
                    <span className="text-white font-medium">{item.name}</span>
                    <span className="text-gray-400">x{item.quantity}</span>
                  </div>
                  {item.armorClass > 0 && (
                    <div className="text-sm text-blue-400 mt-1">CA: {item.armorClass}</div>
                  )}
                  {item.description && (
                    <div className="text-sm text-gray-300 mt-1">{item.description}</div>
                  )}
                </div>
                <button
                  onClick={() => handleDeleteItem(item.id)}
                  className="text-red-400 hover:text-red-300 p-2"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Other Items */}
      {otherItems.length > 0 && (
        <div className="dnd-card">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Backpack size={20} className="text-gray-400" />
            Outros Itens
          </h3>
          <div className="space-y-3">
            {otherItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between bg-gray-800 p-3 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    {getItemIcon(item.type)}
                    <span className="text-white font-medium">{item.name}</span>
                    <span className="text-gray-400">x{item.quantity}</span>
                  </div>
                  {item.description && (
                    <div className="text-sm text-gray-300 mt-1">{item.description}</div>
                  )}
                </div>
                <button
                  onClick={() => handleDeleteItem(item.id)}
                  className="text-red-400 hover:text-red-300 p-2"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {items.length === 0 && !showAddForm && (
        <div className="text-center py-12">
          <Backpack size={48} className="text-gray-600 mx-auto mb-4" />
          <p className="text-gray-400 text-lg mb-4">Nenhum item adicionado ainda</p>
          <button
            onClick={() => setShowAddForm(true)}
            className="dnd-button"
          >
            Adicionar Primeiro Item
          </button>
        </div>
      )}
    </div>
  );
};

export default EquipmentSheet;
