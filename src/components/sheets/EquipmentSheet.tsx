
import React, { useState } from 'react';
import { Plus, Trash2, Search, Filter, Package, X } from 'lucide-react';
import { predefinedEquipment, EquipmentItem } from '../../utils/equipment';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
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
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [rarityFilter, setRarityFilter] = useState<string>('all');

  // Estado do formulário de criação
  const [newEquipment, setNewEquipment] = useState({
    name: '',
    type: 'item' as Equipment['type'],
    description: '',
    category: '',
    rarity: 'common',
    quantity: 1
  });

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

  const createCustomEquipment = () => {
    if (!newEquipment.name.trim() || !newEquipment.description.trim()) {
      return;
    }

    const customEquipment: Equipment = {
      id: `custom-${Date.now()}`,
      name: newEquipment.name,
      type: newEquipment.type,
      description: newEquipment.description,
      quantity: newEquipment.quantity,
      category: newEquipment.category || 'Item Personalizado',
      icon: Package,
      rarity: newEquipment.rarity
    };

    setEquipment([...equipment, customEquipment]);
    
    // Resetar formulário
    setNewEquipment({
      name: '',
      type: 'item',
      description: '',
      category: '',
      rarity: 'common',
      quantity: 1
    });
    
    setShowCreateForm(false);
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

  if (showCreateForm) {
    return (
      <div className="p-4 space-y-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-white">Criar Equipamento</h2>
          <button
            onClick={() => setShowCreateForm(false)}
            className="text-gray-400 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        <Card className="dnd-card">
          <CardContent className="p-4 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name" className="text-white">Nome do Equipamento</Label>
                <Input
                  id="name"
                  value={newEquipment.name}
                  onChange={(e) => setNewEquipment({...newEquipment, name: e.target.value})}
                  placeholder="Ex: Poção de Cura"
                  className="dnd-input mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="type" className="text-white">Tipo</Label>
                <Select value={newEquipment.type} onValueChange={(value: Equipment['type']) => setNewEquipment({...newEquipment, type: value})}>
                  <SelectTrigger className="dnd-input mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="weapon">Arma</SelectItem>
                    <SelectItem value="armor">Armadura</SelectItem>
                    <SelectItem value="item">Item</SelectItem>
                    <SelectItem value="tool">Ferramenta</SelectItem>
                    <SelectItem value="accessory">Acessório</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="category" className="text-white">Categoria (opcional)</Label>
                <Input
                  id="category"
                  value={newEquipment.category}
                  onChange={(e) => setNewEquipment({...newEquipment, category: e.target.value})}
                  placeholder="Ex: Consumível"
                  className="dnd-input mt-1"
                />
              </div>

              <div>
                <Label htmlFor="rarity" className="text-white">Raridade</Label>
                <Select value={newEquipment.rarity} onValueChange={(value) => setNewEquipment({...newEquipment, rarity: value})}>
                  <SelectTrigger className="dnd-input mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="common">Comum</SelectItem>
                    <SelectItem value="uncommon">Incomum</SelectItem>
                    <SelectItem value="rare">Raro</SelectItem>
                    <SelectItem value="very-rare">Muito Raro</SelectItem>
                    <SelectItem value="legendary">Lendário</SelectItem>
                    <SelectItem value="artifact">Artefato</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="description" className="text-white">Descrição</Label>
              <Textarea
                id="description"
                value={newEquipment.description}
                onChange={(e) => setNewEquipment({...newEquipment, description: e.target.value})}
                placeholder="Descreva o equipamento, seus efeitos, dano, etc."
                className="dnd-input mt-1 min-h-[100px]"
              />
            </div>

            <div className="flex items-center gap-4">
              <div>
                <Label htmlFor="quantity" className="text-white">Quantidade</Label>
                <Input
                  id="quantity"
                  type="number"
                  min="1"
                  value={newEquipment.quantity}
                  onChange={(e) => setNewEquipment({...newEquipment, quantity: parseInt(e.target.value) || 1})}
                  className="dnd-input mt-1 w-20"
                />
              </div>
            </div>

            <div className="flex gap-2 pt-4">
              <Button onClick={createCustomEquipment} className="flex-1">
                Criar Equipamento
              </Button>
              <Button variant="outline" onClick={() => setShowCreateForm(false)}>
                Cancelar
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

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
        <div className="flex gap-2">
          <button
            onClick={() => setShowEquipmentSelector(true)}
            className="flex items-center gap-2 dnd-button text-sm"
          >
            <Search size={16} />
            <span className="hidden sm:inline">Da Lista</span>
          </button>
          <button
            onClick={() => setShowCreateForm(true)}
            className="flex items-center gap-2 dnd-button text-sm"
          >
            <Plus size={16} />
            <span className="hidden sm:inline">Criar</span>
          </button>
        </div>
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
