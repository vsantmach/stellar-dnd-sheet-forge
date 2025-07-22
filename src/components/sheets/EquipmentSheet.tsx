
import React, { useState } from 'react';
import { Plus, Trash2, Search, Filter } from 'lucide-react';
import { predefinedEquipment, EquipmentItem } from '../../utils/equipment';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Character } from '../../utils/types';

interface EquipmentSheetProps {
  character: Character;
}

interface Equipment {
  id: string;
  name: string;
  type: 'weapon' | 'armor' | 'item' | 'tool' | 'accessory';
  description: string;
  quantity: number;
  category?: string;
  icon?: any;
  rarity?: string;
}

const EquipmentSheet: React.FC<EquipmentSheetProps> = ({ character }) => {
  const [equipment, setEquipment] = useState<Equipment[]>([
    {
      id: '1',
      name: 'Espada Longa',
      type: 'weapon',
      description: '1d8 cortante (versátil 1d10)',
      quantity: 1,
      category: 'Arma Marcial Corpo a Corpo',
      rarity: 'common'
    }
  ]);

  const [showEquipmentSelector, setShowEquipmentSelector] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [rarityFilter, setRarityFilter] = useState<string>('all');

  const filteredEquipment = predefinedEquipment.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === 'all' || item.type === typeFilter;
    const matchesRarity = rarityFilter === 'all' || item.rarity === rarityFilter;
    
    return matchesSearch && matchesType && matchesRarity;
  });

  const addEquipmentFromList = (item: EquipmentItem, quantity: number = 1) => {
    const existingItem = equipment.find(eq => eq.id === item.id);
    
    if (existingItem) {
      setEquipment(equipment.map(eq => 
        eq.id === item.id 
          ? { ...eq, quantity: eq.quantity + quantity }
          : eq
      ));
    } else {
      const newEquipment: Equipment = {
        id: item.id,
        name: item.name,
        type: item.type,
        description: item.description,
        quantity: quantity,
        category: item.category,
        icon: item.icon,
        rarity: item.rarity
      };
      setEquipment([...equipment, newEquipment]);
    }
    setShowEquipmentSelector(false);
  };

  const removeEquipment = (id: string) => {
    setEquipment(equipment.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeEquipment(id);
    } else {
      setEquipment(equipment.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const getTypeLabel = (type: Equipment['type']) => {
    switch (type) {
      case 'weapon': return 'Arma';
      case 'armor': return 'Armadura';
      case 'item': return 'Item';
      case 'tool': return 'Ferramenta';
      case 'accessory': return 'Acessório';
      default: return 'Item';
    }
  };

  const getTypeColor = (type: Equipment['type']) => {
    switch (type) {
      case 'weapon': return 'text-red-400';
      case 'armor': return 'text-green-400';
      case 'item': return 'text-blue-400';
      case 'tool': return 'text-yellow-400';
      case 'accessory': return 'text-purple-400';
      default: return 'text-blue-400';
    }
  };

  const getRarityColor = (rarity?: string) => {
    switch (rarity) {
      case 'common': return 'text-gray-400';
      case 'uncommon': return 'text-green-400';
      case 'rare': return 'text-blue-400';
      case 'very-rare': return 'text-purple-400';
      case 'legendary': return 'text-orange-400';
      case 'artifact': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  if (showEquipmentSelector) {
    return (
      <div className="p-4 space-y-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-white">Selecionar Equipamento</h2>
          <button
            onClick={() => setShowEquipmentSelector(false)}
            className="text-gray-400 hover:text-white"
          >
            Voltar
          </button>
        </div>

        {/* Search and Filters */}
        <div className="space-y-4">
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="text"
                placeholder="Buscar equipamentos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="dnd-input w-full pl-10"
              />
            </div>
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-40 dnd-input">
                <SelectValue placeholder="Tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os tipos</SelectItem>
                <SelectItem value="weapon">Armas</SelectItem>
                <SelectItem value="armor">Armaduras</SelectItem>
                <SelectItem value="item">Itens</SelectItem>
                <SelectItem value="accessory">Acessórios</SelectItem>
              </SelectContent>
            </Select>
            <Select value={rarityFilter} onValueChange={setRarityFilter}>
              <SelectTrigger className="w-40 dnd-input">
                <SelectValue placeholder="Raridade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas</SelectItem>
                <SelectItem value="common">Comum</SelectItem>
                <SelectItem value="uncommon">Incomum</SelectItem>
                <SelectItem value="rare">Raro</SelectItem>
                <SelectItem value="very-rare">Muito Raro</SelectItem>
                <SelectItem value="legendary">Lendário</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
          {filteredEquipment.map((item) => {
            const IconComponent = item.icon;
            return (
              <Card key={item.id} className="dnd-card cursor-pointer hover:bg-gray-800 transition-colors">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <IconComponent size={24} className={getTypeColor(item.type)} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-white text-sm truncate">{item.name}</h4>
                        <span className={`text-xs px-1.5 py-0.5 rounded ${getRarityColor(item.rarity)}`}>
                          {item.rarity}
                        </span>
                      </div>
                      <p className="text-xs text-gray-400 mb-1">{item.category}</p>
                      <p className="text-xs text-gray-300 mb-3 line-clamp-2">{item.description}</p>
                      <Button
                        onClick={() => addEquipmentFromList(item)}
                        className="w-full text-xs h-8"
                        size="sm"
                      >
                        Adicionar
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {filteredEquipment.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-400">Nenhum equipamento encontrado</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">Equipamentos</h2>
        <button
          onClick={() => setShowEquipmentSelector(true)}
          className="flex items-center gap-2 dnd-button"
        >
          <Plus size={16} />
          Adicionar
        </button>
      </div>

      <div className="space-y-3">
        {equipment.map((item) => {
          const IconComponent = item.icon;
          return (
            <div key={item.id} className="dnd-card">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3 flex-1">
                  {IconComponent && (
                    <div className="flex-shrink-0 mt-1">
                      <IconComponent size={20} className={getTypeColor(item.type)} />
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-white">{item.name}</h3>
                      <span className={`text-xs px-2 py-1 rounded ${getTypeColor(item.type)}`}>
                        {getTypeLabel(item.type)}
                      </span>
                      {item.rarity && (
                        <span className={`text-xs px-2 py-1 rounded ${getRarityColor(item.rarity)}`}>
                          {item.rarity}
                        </span>
                      )}
                    </div>
                    {item.category && (
                      <p className="text-xs text-gray-400 mb-1">{item.category}</p>
                    )}
                    <p className="text-sm text-gray-300 mb-2">{item.description}</p>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="text-gray-400 hover:text-white w-6 h-6 flex items-center justify-center"
                      >
                        -
                      </button>
                      <span className="text-sm text-gray-300 min-w-[20px] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="text-gray-400 hover:text-white w-6 h-6 flex items-center justify-center"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => removeEquipment(item.id)}
                  className="text-red-400 hover:text-red-300 p-1"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          );
        })}

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
