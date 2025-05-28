
import React, { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';

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

interface Equipment {
  id: string;
  name: string;
  type: 'weapon' | 'armor' | 'item';
  description: string;
  quantity: number;
}

const EquipmentSheet: React.FC<EquipmentSheetProps> = ({ character }) => {
  const [equipment, setEquipment] = useState<Equipment[]>([
    {
      id: '1',
      name: 'Espada Longa',
      type: 'weapon',
      description: '1d8 cortante',
      quantity: 1
    },
    {
      id: '2',
      name: 'Armadura de Couro',
      type: 'armor',
      description: 'CA 11 + Mod Des',
      quantity: 1
    },
    {
      id: '3',
      name: 'Poção de Cura',
      type: 'item',
      description: '2d4+2 pontos de vida',
      quantity: 3
    }
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newEquipment, setNewEquipment] = useState<Omit<Equipment, 'id'>>({
    name: '',
    type: 'item',
    description: '',
    quantity: 1
  });

  const addEquipment = () => {
    if (newEquipment.name.trim()) {
      const equipment_item: Equipment = {
        id: Date.now().toString(),
        ...newEquipment
      };
      setEquipment([...equipment, equipment_item]);
      setNewEquipment({
        name: '',
        type: 'item',
        description: '',
        quantity: 1
      });
      setShowAddForm(false);
    }
  };

  const removeEquipment = (id: string) => {
    setEquipment(equipment.filter(item => item.id !== id));
  };

  const getTypeLabel = (type: Equipment['type']) => {
    switch (type) {
      case 'weapon':
        return 'Arma';
      case 'armor':
        return 'Armadura';
      case 'item':
        return 'Item';
      default:
        return 'Item';
    }
  };

  const getTypeColor = (type: Equipment['type']) => {
    switch (type) {
      case 'weapon':
        return 'text-red-400';
      case 'armor':
        return 'text-green-400';
      case 'item':
        return 'text-blue-400';
      default:
        return 'text-blue-400';
    }
  };

  if (showAddForm) {
    return (
      <div className="p-4 space-y-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-white">Adicionar Equipamento</h2>
          <button
            onClick={() => setShowAddForm(false)}
            className="text-gray-400 hover:text-white"
          >
            Cancelar
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Nome
            </label>
            <input
              type="text"
              value={newEquipment.name}
              onChange={(e) => setNewEquipment({ ...newEquipment, name: e.target.value })}
              className="dnd-input w-full"
              placeholder="Nome do equipamento"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Tipo
            </label>
            <select
              value={newEquipment.type}
              onChange={(e) => setNewEquipment({ ...newEquipment, type: e.target.value as Equipment['type'] })}
              className="dnd-input w-full"
            >
              <option value="item">Item</option>
              <option value="weapon">Arma</option>
              <option value="armor">Armadura</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Descrição
            </label>
            <textarea
              value={newEquipment.description}
              onChange={(e) => setNewEquipment({ ...newEquipment, description: e.target.value })}
              className="dnd-input w-full h-20"
              placeholder="Descrição do equipamento"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Quantidade
            </label>
            <input
              type="number"
              value={newEquipment.quantity}
              onChange={(e) => setNewEquipment({ ...newEquipment, quantity: parseInt(e.target.value) || 1 })}
              className="dnd-input w-full"
              min="1"
            />
          </div>

          <button
            onClick={addEquipment}
            className="dnd-button w-full"
          >
            Adicionar Equipamento
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">Equipamentos</h2>
        <button
          onClick={() => setShowAddForm(true)}
          className="flex items-center gap-2 dnd-button"
        >
          <Plus size={16} />
          Adicionar
        </button>
      </div>

      <div className="space-y-3">
        {equipment.map((item) => (
          <div key={item.id} className="dnd-card">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-white">{item.name}</h3>
                  <span className={`text-xs px-2 py-1 rounded ${getTypeColor(item.type)}`}>
                    {getTypeLabel(item.type)}
                  </span>
                  {item.quantity > 1 && (
                    <span className="text-xs text-gray-400">x{item.quantity}</span>
                  )}
                </div>
                {item.description && (
                  <p className="text-sm text-gray-300">{item.description}</p>
                )}
              </div>
              <button
                onClick={() => removeEquipment(item.id)}
                className="text-red-400 hover:text-red-300 p-1"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}

        {equipment.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-400">Nenhum equipamento adicionado</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EquipmentSheet;
