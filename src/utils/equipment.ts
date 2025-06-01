
import { Sword, Shield, Shirt, Potion, Backpack, Bow, Hammer, Wand, Book, Gem, Crown, Ring } from 'lucide-react';

export interface EquipmentItem {
  id: string;
  name: string;
  type: 'weapon' | 'armor' | 'item' | 'tool' | 'accessory';
  description: string;
  category: string;
  icon: any;
  rarity: 'common' | 'uncommon' | 'rare' | 'very-rare' | 'legendary' | 'artifact';
  cost?: string;
  weight?: string;
}

export const predefinedEquipment: EquipmentItem[] = [
  // Weapons - Melee
  {
    id: 'longsword',
    name: 'Espada Longa',
    type: 'weapon',
    description: '1d8 cortante (versátil 1d10)',
    category: 'Arma Marcial Corpo a Corpo',
    icon: Sword,
    rarity: 'common',
    cost: '15 po',
    weight: '1,5 kg'
  },
  {
    id: 'shortsword',
    name: 'Espada Curta',
    type: 'weapon',
    description: '1d6 perfurante (ágil, leve)',
    category: 'Arma Marcial Corpo a Corpo',
    icon: Sword,
    rarity: 'common',
    cost: '10 po',
    weight: '1 kg'
  },
  {
    id: 'dagger',
    name: 'Adaga',
    type: 'weapon',
    description: '1d4 perfurante (ágil, leve, arremesso 6/18)',
    category: 'Arma Simples Corpo a Corpo',
    icon: Sword,
    rarity: 'common',
    cost: '2 po',
    weight: '0,5 kg'
  },
  {
    id: 'greataxe',
    name: 'Machado Grande',
    type: 'weapon',
    description: '1d12 cortante (pesada, duas mãos)',
    category: 'Arma Marcial Corpo a Corpo',
    icon: Hammer,
    rarity: 'common',
    cost: '30 po',
    weight: '3,5 kg'
  },
  {
    id: 'warhammer',
    name: 'Martelo de Guerra',
    type: 'weapon',
    description: '1d8 concussão (versátil 1d10)',
    category: 'Arma Marcial Corpo a Corpo',
    icon: Hammer,
    rarity: 'common',
    cost: '15 po',
    weight: '1 kg'
  },

  // Weapons - Ranged
  {
    id: 'longbow',
    name: 'Arco Longo',
    type: 'weapon',
    description: '1d8 perfurante (munição 45/180, pesada, duas mãos)',
    category: 'Arma Marcial à Distância',
    icon: Bow,
    rarity: 'common',
    cost: '50 po',
    weight: '1 kg'
  },
  {
    id: 'shortbow',
    name: 'Arco Curto',
    type: 'weapon',
    description: '1d6 perfurante (munição 24/96, duas mãos)',
    category: 'Arma Simples à Distância',
    icon: Bow,
    rarity: 'common',
    cost: '25 po',
    weight: '1 kg'
  },

  // Magic Items
  {
    id: 'wand-magic-missiles',
    name: 'Varinha de Mísseis Mágicos',
    type: 'item',
    description: 'Possui 7 cargas. Gaste 1+ cargas para conjurar mísseis mágicos (1 míssil por carga).',
    category: 'Varinha',
    icon: Wand,
    rarity: 'uncommon',
    weight: '0,5 kg'
  },
  {
    id: 'spellbook',
    name: 'Livro de Magias',
    type: 'item',
    description: 'Contém magias de mago. Necessário para preparar magias.',
    category: 'Foco Arcano',
    icon: Book,
    rarity: 'common',
    cost: '50 po',
    weight: '1,5 kg'
  },

  // Armor
  {
    id: 'leather-armor',
    name: 'Armadura de Couro',
    type: 'armor',
    description: 'CA 11 + Mod Des',
    category: 'Armadura Leve',
    icon: Shirt,
    rarity: 'common',
    cost: '10 po',
    weight: '5 kg'
  },
  {
    id: 'studded-leather',
    name: 'Couro Batido',
    type: 'armor',
    description: 'CA 12 + Mod Des',
    category: 'Armadura Leve',
    icon: Shirt,
    rarity: 'common',
    cost: '45 po',
    weight: '6,5 kg'
  },
  {
    id: 'chain-mail',
    name: 'Cota de Malha',
    type: 'armor',
    description: 'CA 16 (Força 13 ou mais)',
    category: 'Armadura Pesada',
    icon: Shirt,
    rarity: 'common',
    cost: '75 po',
    weight: '27,5 kg'
  },
  {
    id: 'plate-armor',
    name: 'Armadura de Placas',
    type: 'armor',
    description: 'CA 18 (Força 15 ou mais)',
    category: 'Armadura Pesada',
    icon: Shirt,
    rarity: 'common',
    cost: '1.500 po',
    weight: '32,5 kg'
  },
  {
    id: 'shield',
    name: 'Escudo',
    type: 'armor',
    description: '+2 CA',
    category: 'Escudo',
    icon: Shield,
    rarity: 'common',
    cost: '10 po',
    weight: '3 kg'
  },

  // Consumables
  {
    id: 'healing-potion',
    name: 'Poção de Cura',
    type: 'item',
    description: 'Recupera 2d4+2 pontos de vida',
    category: 'Poção',
    icon: Potion,
    rarity: 'common',
    cost: '50 po',
    weight: '0,25 kg'
  },
  {
    id: 'greater-healing-potion',
    name: 'Poção de Cura Superior',
    type: 'item',
    description: 'Recupera 4d4+4 pontos de vida',
    category: 'Poção',
    icon: Potion,
    rarity: 'uncommon',
    cost: '150 po',
    weight: '0,25 kg'
  },

  // Adventuring Gear
  {
    id: 'backpack',
    name: 'Mochila',
    type: 'item',
    description: 'Pode carregar até 15 kg de equipamentos',
    category: 'Equipamento de Aventura',
    icon: Backpack,
    rarity: 'common',
    cost: '2 po',
    weight: '2,5 kg'
  },
  {
    id: 'rope',
    name: 'Corda de Cânhamo (15 metros)',
    type: 'item',
    description: 'Corda resistente para escaladas e amarrações',
    category: 'Equipamento de Aventura',
    icon: Backpack,
    rarity: 'common',
    cost: '2 po',
    weight: '5 kg'
  },

  // Jewelry & Accessories
  {
    id: 'ring-protection',
    name: 'Anel de Proteção',
    type: 'accessory',
    description: '+1 CA e +1 em testes de resistência',
    category: 'Anel',
    icon: Ring,
    rarity: 'rare'
  },
  {
    id: 'amulet-health',
    name: 'Amuleto da Saúde',
    type: 'accessory',
    description: 'Sua Constituição é 19 enquanto usar este amuleto',
    category: 'Amuleto',
    icon: Gem,
    rarity: 'rare'
  },
  {
    id: 'crown-command',
    name: 'Coroa do Comando',
    type: 'accessory',
    description: 'Permite conjurar comando à vontade',
    category: 'Maravilhoso',
    icon: Crown,
    rarity: 'very-rare'
  }
];

export const getEquipmentsByType = (type: string) => {
  return predefinedEquipment.filter(item => item.type === type);
};

export const getEquipmentsByCategory = (category: string) => {
  return predefinedEquipment.filter(item => item.category === category);
};

export const getEquipmentsByRarity = (rarity: string) => {
  return predefinedEquipment.filter(item => item.rarity === rarity);
};
