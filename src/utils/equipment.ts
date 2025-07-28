
import { Sword, Shield, Shirt, Zap, Backpack, Target, Hammer, Wand, Book, Gem, Crown, CircleDot, Wrench, Coins, Key, Eye, Flame, Tent, Package, Compass, Skull, Glasses, MapPin, Scroll, Feather } from 'lucide-react';

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
  // ARMAS SIMPLES CORPO A CORPO
  {
    id: 'club',
    name: 'Clava',
    type: 'weapon',
    description: '1d4 concussão (leve)',
    category: 'Arma Simples Corpo a Corpo',
    icon: Hammer,
    rarity: 'common',
    cost: '1 pp',
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
    id: 'dart',
    name: 'Dardo',
    type: 'weapon',
    description: '1d4 perfurante (ágil, arremesso 6/18)',
    category: 'Arma Simples Corpo a Corpo',
    icon: Target,
    rarity: 'common',
    cost: '5 pc',
    weight: '0,125 kg'
  },
  {
    id: 'handaxe',
    name: 'Machado de Mão',
    type: 'weapon',
    description: '1d6 cortante (leve, arremesso 6/18)',
    category: 'Arma Simples Corpo a Corpo',
    icon: Hammer,
    rarity: 'common',
    cost: '5 po',
    weight: '1 kg'
  },
  {
    id: 'javelin',
    name: 'Azagaia',
    type: 'weapon',
    description: '1d6 perfurante (arremesso 9/36)',
    category: 'Arma Simples Corpo a Corpo',
    icon: Target,
    rarity: 'common',
    cost: '5 pp',
    weight: '1 kg'
  },
  {
    id: 'light-hammer',
    name: 'Martelo Leve',
    type: 'weapon',
    description: '1d4 concussão (leve, arremesso 6/18)',
    category: 'Arma Simples Corpo a Corpo',
    icon: Hammer,
    rarity: 'common',
    cost: '2 po',
    weight: '1 kg'
  },
  {
    id: 'mace',
    name: 'Maça',
    type: 'weapon',
    description: '1d6 concussão',
    category: 'Arma Simples Corpo a Corpo',
    icon: Hammer,
    rarity: 'common',
    cost: '5 po',
    weight: '2 kg'
  },
  {
    id: 'quarterstaff',
    name: 'Bordão',
    type: 'weapon',
    description: '1d6 concussão (versátil 1d8)',
    category: 'Arma Simples Corpo a Corpo',
    icon: Hammer,
    rarity: 'common',
    cost: '2 pp',
    weight: '2 kg'
  },
  {
    id: 'sickle',
    name: 'Foice',
    type: 'weapon',
    description: '1d4 cortante (leve)',
    category: 'Arma Simples Corpo a Corpo',
    icon: Sword,
    rarity: 'common',
    cost: '1 po',
    weight: '1 kg'
  },
  {
    id: 'spear',
    name: 'Lança',
    type: 'weapon',
    description: '1d6 perfurante (arremesso 6/18, versátil 1d8)',
    category: 'Arma Simples Corpo a Corpo',
    icon: Target,
    rarity: 'common',
    cost: '1 po',
    weight: '1,5 kg'
  },

  // ARMAS SIMPLES À DISTÂNCIA
  {
    id: 'crossbow-light',
    name: 'Besta Leve',
    type: 'weapon',
    description: '1d8 perfurante (munição 24/96, carregamento, duas mãos)',
    category: 'Arma Simples à Distância',
    icon: Target,
    rarity: 'common',
    cost: '25 po',
    weight: '2,5 kg'
  },
  {
    id: 'shortbow',
    name: 'Arco Curto',
    type: 'weapon',
    description: '1d6 perfurante (munição 24/96, duas mãos)',
    category: 'Arma Simples à Distância',
    icon: Target,
    rarity: 'common',
    cost: '25 po',
    weight: '1 kg'
  },
  {
    id: 'sling',
    name: 'Funda',
    type: 'weapon',
    description: '1d4 concussão (munição 9/36)',
    category: 'Arma Simples à Distância',
    icon: Target,
    rarity: 'common',
    cost: '1 pp',
    weight: '—'
  },

  // ARMAS MARCIAIS CORPO A CORPO
  {
    id: 'battleaxe',
    name: 'Machado de Batalha',
    type: 'weapon',
    description: '1d8 cortante (versátil 1d10)',
    category: 'Arma Marcial Corpo a Corpo',
    icon: Hammer,
    rarity: 'common',
    cost: '10 po',
    weight: '2 kg'
  },
  {
    id: 'flail',
    name: 'Mangual',
    type: 'weapon',
    description: '1d8 concussão',
    category: 'Arma Marcial Corpo a Corpo',
    icon: Hammer,
    rarity: 'common',
    cost: '10 po',
    weight: '1 kg'
  },
  {
    id: 'glaive',
    name: 'Glaive',
    type: 'weapon',
    description: '1d10 cortante (pesada, alcance, duas mãos)',
    category: 'Arma Marcial Corpo a Corpo',
    icon: Target,
    rarity: 'common',
    cost: '20 po',
    weight: '3 kg'
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
    id: 'greatsword',
    name: 'Espada Grande',
    type: 'weapon',
    description: '2d6 cortante (pesada, duas mãos)',
    category: 'Arma Marcial Corpo a Corpo',
    icon: Sword,
    rarity: 'common',
    cost: '50 po',
    weight: '3 kg'
  },
  {
    id: 'halberd',
    name: 'Alabarda',
    type: 'weapon',
    description: '1d10 cortante (pesada, alcance, duas mãos)',
    category: 'Arma Marcial Corpo a Corpo',
    icon: Target,
    rarity: 'common',
    cost: '20 po',
    weight: '3 kg'
  },
  {
    id: 'lance',
    name: 'Lança de Montaria',
    type: 'weapon',
    description: '1d12 perfurante (alcance, especial)',
    category: 'Arma Marcial Corpo a Corpo',
    icon: Target,
    rarity: 'common',
    cost: '10 po',
    weight: '3 kg'
  },
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
    id: 'maul',
    name: 'Malho',
    type: 'weapon',
    description: '2d6 concussão (pesada, duas mãos)',
    category: 'Arma Marcial Corpo a Corpo',
    icon: Hammer,
    rarity: 'common',
    cost: '10 po',
    weight: '5 kg'
  },
  {
    id: 'morningstar',
    name: 'Estrela da Manhã',
    type: 'weapon',
    description: '1d8 perfurante',
    category: 'Arma Marcial Corpo a Corpo',
    icon: Hammer,
    rarity: 'common',
    cost: '15 po',
    weight: '2 kg'
  },
  {
    id: 'pike',
    name: 'Pique',
    type: 'weapon',
    description: '1d10 perfurante (pesada, alcance, duas mãos)',
    category: 'Arma Marcial Corpo a Corpo',
    icon: Target,
    rarity: 'common',
    cost: '5 po',
    weight: '9 kg'
  },
  {
    id: 'rapier',
    name: 'Rapieira',
    type: 'weapon',
    description: '1d8 perfurante (ágil)',
    category: 'Arma Marcial Corpo a Corpo',
    icon: Sword,
    rarity: 'common',
    cost: '25 po',
    weight: '1 kg'
  },
  {
    id: 'scimitar',
    name: 'Cimitarra',
    type: 'weapon',
    description: '1d6 cortante (ágil, leve)',
    category: 'Arma Marcial Corpo a Corpo',
    icon: Sword,
    rarity: 'common',
    cost: '25 po',
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
    id: 'trident',
    name: 'Tridente',
    type: 'weapon',
    description: '1d6 perfurante (arremesso 6/18, versátil 1d8)',
    category: 'Arma Marcial Corpo a Corpo',
    icon: Target,
    rarity: 'common',
    cost: '5 po',
    weight: '2 kg'
  },
  {
    id: 'war-pick',
    name: 'Picareta de Guerra',
    type: 'weapon',
    description: '1d8 perfurante',
    category: 'Arma Marcial Corpo a Corpo',
    icon: Hammer,
    rarity: 'common',
    cost: '5 po',
    weight: '1 kg'
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
  {
    id: 'whip',
    name: 'Chicote',
    type: 'weapon',
    description: '1d4 cortante (ágil, alcance)',
    category: 'Arma Marcial Corpo a Corpo',
    icon: Target,
    rarity: 'common',
    cost: '2 po',
    weight: '1,5 kg'
  },

  // ARMAS MARCIAIS À DISTÂNCIA
  {
    id: 'blowgun',
    name: 'Zarabatana',
    type: 'weapon',
    description: '1 perfurante (munição 7,5/30, carregamento)',
    category: 'Arma Marcial à Distância',
    icon: Target,
    rarity: 'common',
    cost: '10 po',
    weight: '0,5 kg'
  },
  {
    id: 'crossbow-hand',
    name: 'Besta de Mão',
    type: 'weapon',
    description: '1d6 perfurante (munição 9/36, carregamento, leve)',
    category: 'Arma Marcial à Distância',
    icon: Target,
    rarity: 'common',
    cost: '75 po',
    weight: '1,5 kg'
  },
  {
    id: 'crossbow-heavy',
    name: 'Besta Pesada',
    type: 'weapon',
    description: '1d10 perfurante (munição 30/120, carregamento, pesada, duas mãos)',
    category: 'Arma Marcial à Distância',
    icon: Target,
    rarity: 'common',
    cost: '50 po',
    weight: '9 kg'
  },
  {
    id: 'longbow',
    name: 'Arco Longo',
    type: 'weapon',
    description: '1d8 perfurante (munição 45/180, pesada, duas mãos)',
    category: 'Arma Marcial à Distância',
    icon: Target,
    rarity: 'common',
    cost: '50 po',
    weight: '1 kg'
  },
  {
    id: 'net',
    name: 'Rede',
    type: 'weapon',
    description: '— (especial, arremesso 1,5/4,5)',
    category: 'Arma Marcial à Distância',
    icon: Target,
    rarity: 'common',
    cost: '1 po',
    weight: '1,5 kg'
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
    icon: Zap,
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
    icon: Zap,
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
    icon: CircleDot,
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
  },

  // ARMADURAS COMPLETAS
  {
    id: 'padded-armor',
    name: 'Armadura Acolchoada',
    type: 'armor',
    description: 'CA 11 + Mod Des (desvantagem em Furtividade)',
    category: 'Armadura Leve',
    icon: Shirt,
    rarity: 'common',
    cost: '5 po',
    weight: '4 kg'
  },
  {
    id: 'hide-armor',
    name: 'Armadura de Peles',
    type: 'armor',
    description: 'CA 12 + Mod Des (máx 2)',
    category: 'Armadura Média',
    icon: Shirt,
    rarity: 'common',
    cost: '10 po',
    weight: '6 kg'
  },
  {
    id: 'chain-shirt',
    name: 'Camisa de Cota de Malha',
    type: 'armor',
    description: 'CA 13 + Mod Des (máx 2)',
    category: 'Armadura Média',
    icon: Shirt,
    rarity: 'common',
    cost: '50 po',
    weight: '10 kg'
  },
  {
    id: 'scale-mail',
    name: 'Brunea',
    type: 'armor',
    description: 'CA 14 + Mod Des (máx 2, desvantagem em Furtividade)',
    category: 'Armadura Média',
    icon: Shirt,
    rarity: 'common',
    cost: '50 po',
    weight: '22,5 kg'
  },
  {
    id: 'breastplate',
    name: 'Peitoral',
    type: 'armor',
    description: 'CA 14 + Mod Des (máx 2)',
    category: 'Armadura Média',
    icon: Shirt,
    rarity: 'common',
    cost: '400 po',
    weight: '10 kg'
  },
  {
    id: 'half-plate',
    name: 'Meia Armadura',
    type: 'armor',
    description: 'CA 15 + Mod Des (máx 2, desvantagem em Furtividade)',
    category: 'Armadura Média',
    icon: Shirt,
    rarity: 'common',
    cost: '750 po',
    weight: '20 kg'
  },
  {
    id: 'ring-mail',
    name: 'Cota de Argolas',
    type: 'armor',
    description: 'CA 14 (desvantagem em Furtividade)',
    category: 'Armadura Pesada',
    icon: Shirt,
    rarity: 'common',
    cost: '30 po',
    weight: '20 kg'
  },
  {
    id: 'splint-armor',
    name: 'Armadura Segmentada',
    type: 'armor',
    description: 'CA 17 (Força 15 ou mais, desvantagem em Furtividade)',
    category: 'Armadura Pesada',
    icon: Shirt,
    rarity: 'common',
    cost: '200 po',
    weight: '30 kg'
  },

  // MUNIÇÕES
  {
    id: 'arrows',
    name: 'Flechas (20)',
    type: 'item',
    description: 'Munição para arcos',
    category: 'Munição',
    icon: Target,
    rarity: 'common',
    cost: '1 po',
    weight: '0,5 kg'
  },
  {
    id: 'crossbow-bolts',
    name: 'Virotes de Besta (20)',
    type: 'item',
    description: 'Munição para bestas',
    category: 'Munição',
    icon: Target,
    rarity: 'common',
    cost: '1 po',
    weight: '0,75 kg'
  },
  {
    id: 'sling-bullets',
    name: 'Balas de Funda (20)',
    type: 'item',
    description: 'Munição para fundas',
    category: 'Munição',
    icon: Target,
    rarity: 'common',
    cost: '4 pc',
    weight: '0,75 kg'
  },
  {
    id: 'blowgun-needles',
    name: 'Agulhas de Zarabatana (50)',
    type: 'item',
    description: 'Munição para zarabatanas',
    category: 'Munição',
    icon: Target,
    rarity: 'common',
    cost: '1 po',
    weight: '0,5 kg'
  },

  // EQUIPAMENTOS DE AVENTURA BÁSICOS
  {
    id: 'bedroll',
    name: 'Saco de Dormir',
    type: 'item',
    description: 'Equipamento básico para descanso',
    category: 'Equipamento de Aventura',
    icon: Package,
    rarity: 'common',
    cost: '1 po',
    weight: '3,5 kg'
  },
  {
    id: 'blanket',
    name: 'Cobertor',
    type: 'item',
    description: 'Proteção contra frio',
    category: 'Equipamento de Aventura',
    icon: Package,
    rarity: 'common',
    cost: '5 pp',
    weight: '1,5 kg'
  },
  {
    id: 'tinderbox',
    name: 'Isqueiro',
    type: 'item',
    description: 'Para acender fogo',
    category: 'Equipamento de Aventura',
    icon: Flame,
    rarity: 'common',
    cost: '5 pp',
    weight: '0,5 kg'
  },
  {
    id: 'torch',
    name: 'Tocha',
    type: 'item',
    description: 'Luz brilhante 6m, penumbra 6m adicionais por 1 hora',
    category: 'Equipamento de Aventura',
    icon: Flame,
    rarity: 'common',
    cost: '1 pc',
    weight: '0,5 kg'
  },
  {
    id: 'lantern-bullseye',
    name: 'Lanterna Direcional',
    type: 'item',
    description: 'Cone de luz brilhante 18m, penumbra 18m adicionais por 6 horas',
    category: 'Equipamento de Aventura',
    icon: Flame,
    rarity: 'common',
    cost: '10 po',
    weight: '1 kg'
  },
  {
    id: 'lantern-hooded',
    name: 'Lanterna Coberta',
    type: 'item',
    description: 'Luz brilhante 9m, penumbra 9m adicionais por 6 horas',
    category: 'Equipamento de Aventura',
    icon: Flame,
    rarity: 'common',
    cost: '5 po',
    weight: '1 kg'
  },
  {
    id: 'oil-flask',
    name: 'Frasco de Óleo',
    type: 'item',
    description: 'Combustível para lanternas ou arma improvisada',
    category: 'Equipamento de Aventura',
    icon: Zap,
    rarity: 'common',
    cost: '1 pp',
    weight: '0,5 kg'
  },
  {
    id: 'candle',
    name: 'Vela',
    type: 'item',
    description: 'Luz brilhante 1,5m, penumbra 1,5m adicional por 1 hora',
    category: 'Equipamento de Aventura',
    icon: Flame,
    rarity: 'common',
    cost: '1 pc',
    weight: '—'
  },
  {
    id: 'tent-two-person',
    name: 'Barraca (2 pessoas)',
    type: 'item',
    description: 'Abrigo simples para duas pessoas',
    category: 'Equipamento de Aventura',
    icon: Tent,
    rarity: 'common',
    cost: '2 po',
    weight: '10 kg'
  },

  // FERRAMENTAS E UTENSÍLIOS
  {
    id: 'thieves-tools',
    name: 'Ferramentas de Ladrão',
    type: 'tool',
    description: 'Inclui lima pequena, gazuas, espelhinho pequeno, alicate e tesoura',
    category: 'Ferramentas',
    icon: Wrench,
    rarity: 'common',
    cost: '25 po',
    weight: '0,5 kg'
  },
  {
    id: 'smiths-tools',
    name: 'Ferramentas de Ferreiro',
    type: 'tool',
    description: 'Martelos, foles, carvão, ferros e uma bigorna',
    category: 'Ferramentas Artesanais',
    icon: Hammer,
    rarity: 'common',
    cost: '20 po',
    weight: '4 kg'
  },
  {
    id: 'carpenters-tools',
    name: 'Ferramentas de Carpinteiro',
    type: 'tool',
    description: 'Serrote, martelo, pregos, esquadro e régua',
    category: 'Ferramentas Artesanais',
    icon: Wrench,
    rarity: 'common',
    cost: '8 po',
    weight: '3 kg'
  },
  {
    id: 'cooks-utensils',
    name: 'Utensílios de Cozinheiro',
    type: 'tool',
    description: 'Panela de metal, facas, garfo, concha e temperos',
    category: 'Ferramentas Artesanais',
    icon: Wrench,
    rarity: 'common',
    cost: '1 po',
    weight: '4 kg'
  },
  {
    id: 'disguise-kit',
    name: 'Kit de Disfarce',
    type: 'tool',
    description: 'Cosméticos, tintura de cabelo, pequenos adereços',
    category: 'Kits',
    icon: Eye,
    rarity: 'common',
    cost: '25 po',
    weight: '1,5 kg'
  },
  {
    id: 'forgery-kit',
    name: 'Kit de Falsificação',
    type: 'tool',
    description: 'Papéis, tintas, canetas, selos, cera dourada, carimbo',
    category: 'Kits',
    icon: Feather,
    rarity: 'common',
    cost: '15 po',
    weight: '2,5 kg'
  },
  {
    id: 'herbalism-kit',
    name: 'Kit de Herbalismo',
    type: 'tool',
    description: 'Frascos, ervas, cartucho com substâncias curativas',
    category: 'Kits',
    icon: Package,
    rarity: 'common',
    cost: '5 po',
    weight: '1,5 kg'
  },
  {
    id: 'poisoners-kit',
    name: 'Kit de Envenenador',
    type: 'tool',
    description: 'Frascos, produtos químicos, seringa de vidro',
    category: 'Kits',
    icon: Skull,
    rarity: 'common',
    cost: '50 po',
    weight: '1 kg'
  },

  // EQUIPAMENTOS DIVERSOS
  {
    id: 'abacus',
    name: 'Ábaco',
    type: 'item',
    description: 'Calculadora manual',
    category: 'Equipamento Diverso',
    icon: Package,
    rarity: 'common',
    cost: '2 po',
    weight: '1 kg'
  },
  {
    id: 'acid-vial',
    name: 'Ácido (frasco)',
    type: 'item',
    description: '2d6 de dano ácido, corrói metal',
    category: 'Equipamento Diverso',
    icon: Zap,
    rarity: 'common',
    cost: '25 po',
    weight: '0,5 kg'
  },
  {
    id: 'alchemists-fire',
    name: 'Fogo Alquímico (frasco)',
    type: 'item',
    description: '1d4 de dano de fogo por turno até ser extinto',
    category: 'Equipamento Diverso',
    icon: Flame,
    rarity: 'common',
    cost: '50 po',
    weight: '0,5 kg'
  },
  {
    id: 'antitoxin',
    name: 'Antitoxina (frasco)',
    type: 'item',
    description: 'Vantagem em testes de resistência contra veneno por 1 hora',
    category: 'Equipamento Diverso',
    icon: Zap,
    rarity: 'common',
    cost: '50 po',
    weight: '—'
  },
  {
    id: 'bell',
    name: 'Sino',
    type: 'item',
    description: 'Alerta sonoro',
    category: 'Equipamento Diverso',
    icon: Package,
    rarity: 'common',
    cost: '1 po',
    weight: '—'
  },
  {
    id: 'block-tackle',
    name: 'Roldana',
    type: 'item',
    description: 'Facilita levantamento de objetos pesados',
    category: 'Equipamento Diverso',
    icon: Wrench,
    rarity: 'common',
    cost: '1 po',
    weight: '2,5 kg'
  },
  {
    id: 'book',
    name: 'Livro',
    type: 'item',
    description: 'Livro com conteúdo diverso',
    category: 'Equipamento Diverso',
    icon: Book,
    rarity: 'common',
    cost: '25 po',
    weight: '2,5 kg'
  },
  {
    id: 'bottle-glass',
    name: 'Garrafa de Vidro',
    type: 'item',
    description: 'Recipiente para líquidos',
    category: 'Equipamento Diverso',
    icon: Package,
    rarity: 'common',
    cost: '2 po',
    weight: '1 kg'
  },
  {
    id: 'bucket',
    name: 'Balde',
    type: 'item',
    description: 'Recipiente grande para líquidos',
    category: 'Equipamento Diverso',
    icon: Package,
    rarity: 'common',
    cost: '5 pc',
    weight: '1 kg'
  },
  {
    id: 'caltrops',
    name: 'Estrepes (saco de 20)',
    type: 'item',
    description: 'Cobrem área de 1,5m quadrado, causam dano e reduzem velocidade',
    category: 'Equipamento Diverso',
    icon: Target,
    rarity: 'common',
    cost: '1 po',
    weight: '1 kg'
  },
  {
    id: 'chain',
    name: 'Corrente (3 metros)',
    type: 'item',
    description: 'Corrente resistente de metal',
    category: 'Equipamento Diverso',
    icon: Package,
    rarity: 'common',
    cost: '5 po',
    weight: '5 kg'
  },
  {
    id: 'chalk',
    name: 'Giz (1 pedaço)',
    type: 'item',
    description: 'Para marcar superfícies',
    category: 'Equipamento Diverso',
    icon: Package,
    rarity: 'common',
    cost: '1 pc',
    weight: '—'
  },
  {
    id: 'chest',
    name: 'Baú',
    type: 'item',
    description: 'Armazenamento seguro de itens',
    category: 'Equipamento Diverso',
    icon: Package,
    rarity: 'common',
    cost: '5 po',
    weight: '12,5 kg'
  },
  {
    id: 'climbers-kit',
    name: 'Kit de Escalada',
    type: 'item',
    description: 'Crampões especiais, luvas de couro grosso, arnês, capacete',
    category: 'Equipamento Diverso',
    icon: Package,
    rarity: 'common',
    cost: '25 po',
    weight: '6 kg'
  },
  {
    id: 'clothes-common',
    name: 'Roupas Comuns',
    type: 'item',
    description: 'Vestimentas básicas',
    category: 'Equipamento Diverso',
    icon: Shirt,
    rarity: 'common',
    cost: '5 pp',
    weight: '1,5 kg'
  },
  {
    id: 'clothes-costume',
    name: 'Trajes',
    type: 'item',
    description: 'Roupas para representações',
    category: 'Equipamento Diverso',
    icon: Shirt,
    rarity: 'common',
    cost: '5 po',
    weight: '2 kg'
  },
  {
    id: 'clothes-fine',
    name: 'Roupas Finas',
    type: 'item',
    description: 'Vestimentas nobres',
    category: 'Equipamento Diverso',
    icon: Shirt,
    rarity: 'common',
    cost: '15 po',
    weight: '3 kg'
  },
  {
    id: 'compass',
    name: 'Bússola',
    type: 'item',
    description: 'Indica direção magnética',
    category: 'Equipamento Diverso',
    icon: Compass,
    rarity: 'common',
    cost: '25 po',
    weight: '0,5 kg'
  },
  {
    id: 'crowbar',
    name: 'Pé de Cabra',
    type: 'item',
    description: 'Vantagem em testes de Força para forçar objetos',
    category: 'Equipamento Diverso',
    icon: Wrench,
    rarity: 'common',
    cost: '2 po',
    weight: '2,5 kg'
  },
  {
    id: 'fishing-tackle',
    name: 'Equipamento de Pesca',
    type: 'item',
    description: 'Vara, linha, anzóis, redes, pesos',
    category: 'Equipamento Diverso',
    icon: Package,
    rarity: 'common',
    cost: '1 po',
    weight: '2 kg'
  },
  {
    id: 'flask',
    name: 'Cantil',
    type: 'item',
    description: 'Recipiente portátil para líquidos',
    category: 'Equipamento Diverso',
    icon: Package,
    rarity: 'common',
    cost: '2 pc',
    weight: '0,5 kg'
  },
  {
    id: 'grappling-hook',
    name: 'Gancho de Ferro',
    type: 'item',
    description: 'Para escaladas e travessias',
    category: 'Equipamento Diverso',
    icon: Wrench,
    rarity: 'common',
    cost: '1 po',
    weight: '2 kg'
  },
  {
    id: 'hammer',
    name: 'Martelo',
    type: 'item',
    description: 'Ferramenta de construção',
    category: 'Equipamento Diverso',
    icon: Hammer,
    rarity: 'common',
    cost: '1 po',
    weight: '1,5 kg'
  },
  {
    id: 'sledgehammer',
    name: 'Marreta',
    type: 'item',
    description: 'Martelo pesado para demolição',
    category: 'Equipamento Diverso',
    icon: Hammer,
    rarity: 'common',
    cost: '2 po',
    weight: '5 kg'
  },
  {
    id: 'healers-kit',
    name: 'Kit de Curandeiro',
    type: 'item',
    description: 'Tem 10 usos. Estabiliza criaturas morrendo',
    category: 'Equipamento Diverso',
    icon: Package,
    rarity: 'common',
    cost: '5 po',
    weight: '1,5 kg'
  },
  {
    id: 'holy-water',
    name: 'Água Benta (frasco)',
    type: 'item',
    description: '2d6 de dano radiante em mortos-vivos e demônios',
    category: 'Equipamento Diverso',
    icon: Zap,
    rarity: 'common',
    cost: '25 po',
    weight: '0,5 kg'
  },
  {
    id: 'hourglass',
    name: 'Ampulheta',
    type: 'item',
    description: 'Mede tempo',
    category: 'Equipamento Diverso',
    icon: Package,
    rarity: 'common',
    cost: '25 po',
    weight: '0,5 kg'
  },
  {
    id: 'hunting-trap',
    name: 'Armadilha de Caça',
    type: 'item',
    description: 'Prende criatura que pisar nela',
    category: 'Equipamento Diverso',
    icon: Target,
    rarity: 'common',
    cost: '5 po',
    weight: '12,5 kg'
  },
  {
    id: 'ink',
    name: 'Tinta (frasco de 30ml)',
    type: 'item',
    description: 'Para escrita',
    category: 'Equipamento Diverso',
    icon: Feather,
    rarity: 'common',
    cost: '10 po',
    weight: '—'
  },
  {
    id: 'ink-pen',
    name: 'Caneta Tinteiro',
    type: 'item',
    description: 'Instrumento de escrita',
    category: 'Equipamento Diverso',
    icon: Feather,
    rarity: 'common',
    cost: '2 pc',
    weight: '—'
  },
  {
    id: 'jug',
    name: 'Jarro',
    type: 'item',
    description: 'Recipiente grande para líquidos',
    category: 'Equipamento Diverso',
    icon: Package,
    rarity: 'common',
    cost: '2 pc',
    weight: '2 kg'
  },
  {
    id: 'ladder',
    name: 'Escada (3 metros)',
    type: 'item',
    description: 'Para alcançar lugares altos',
    category: 'Equipamento Diverso',
    icon: Package,
    rarity: 'common',
    cost: '1 pp',
    weight: '12,5 kg'
  },
  {
    id: 'lamp',
    name: 'Lâmpada',
    type: 'item',
    description: 'Luz brilhante 4,5m, penumbra 9m por 6 horas',
    category: 'Equipamento Diverso',
    icon: Flame,
    rarity: 'common',
    cost: '5 pp',
    weight: '0,5 kg'
  },
  {
    id: 'lock',
    name: 'Cadeado',
    type: 'item',
    description: 'Segurança básica, vem com chave',
    category: 'Equipamento Diverso',
    icon: Key,
    rarity: 'common',
    cost: '10 po',
    weight: '0,5 kg'
  },
  {
    id: 'magnifying-glass',
    name: 'Lupa',
    type: 'item',
    description: 'Vantagem em testes de investigação para detalhes pequenos',
    category: 'Equipamento Diverso',
    icon: Eye,
    rarity: 'common',
    cost: '100 po',
    weight: '—'
  },
  {
    id: 'manacles',
    name: 'Algemas',
    type: 'item',
    description: 'Prendem criatura média, vem com chave',
    category: 'Equipamento Diverso',
    icon: Package,
    rarity: 'common',
    cost: '2 po',
    weight: '3 kg'
  },
  {
    id: 'map-case',
    name: 'Porta-mapas',
    type: 'item',
    description: 'Tubo de couro para mapas',
    category: 'Equipamento Diverso',
    icon: Scroll,
    rarity: 'common',
    cost: '1 po',
    weight: '0,5 kg'
  },
  {
    id: 'mess-kit',
    name: 'Kit de Refeição',
    type: 'item',
    description: 'Tigela, copo, utensílios para comer',
    category: 'Equipamento Diverso',
    icon: Package,
    rarity: 'common',
    cost: '2 pp',
    weight: '0,5 kg'
  },
  {
    id: 'mirror-steel',
    name: 'Espelho de Aço',
    type: 'item',
    description: 'Reflexão e sinalização',
    category: 'Equipamento Diverso',
    icon: Eye,
    rarity: 'common',
    cost: '5 po',
    weight: '0,25 kg'
  },
  {
    id: 'paper',
    name: 'Papel (1 folha)',
    type: 'item',
    description: 'Para escrita',
    category: 'Equipamento Diverso',
    icon: Scroll,
    rarity: 'common',
    cost: '2 pp',
    weight: '—'
  },
  {
    id: 'parchment',
    name: 'Pergaminho (1 folha)',
    type: 'item',
    description: 'Para escrita',
    category: 'Equipamento Diverso',
    icon: Scroll,
    rarity: 'common',
    cost: '1 pp',
    weight: '—'
  },
  {
    id: 'perfume',
    name: 'Perfume (frasco)',
    type: 'item',
    description: 'Fragrância agradável',
    category: 'Equipamento Diverso',
    icon: Package,
    rarity: 'common',
    cost: '5 po',
    weight: '—'
  },
  {
    id: 'pick-miners',
    name: 'Picareta de Minerador',
    type: 'item',
    description: 'Ferramenta de mineração',
    category: 'Equipamento Diverso',
    icon: Hammer,
    rarity: 'common',
    cost: '2 po',
    weight: '5 kg'
  },
  {
    id: 'piton',
    name: 'Prego de Ferro',
    type: 'item',
    description: 'Fixação para escaladas',
    category: 'Equipamento Diverso',
    icon: Package,
    rarity: 'common',
    cost: '5 pc',
    weight: '0,125 kg'
  },
  {
    id: 'pole',
    name: 'Vara (3 metros)',
    type: 'item',
    description: 'Bastão longo para exploração',
    category: 'Equipamento Diverso',
    icon: Package,
    rarity: 'common',
    cost: '5 pc',
    weight: '3,5 kg'
  },
  {
    id: 'pot-iron',
    name: 'Panela de Ferro',
    type: 'item',
    description: 'Para cozinhar',
    category: 'Equipamento Diverso',
    icon: Package,
    rarity: 'common',
    cost: '2 po',
    weight: '5 kg'
  },
  {
    id: 'pouch',
    name: 'Algibeira',
    type: 'item',
    description: 'Pequeno saco para moedas e itens pequenos',
    category: 'Equipamento Diverso',
    icon: Coins,
    rarity: 'common',
    cost: '5 pp',
    weight: '0,5 kg'
  },
  {
    id: 'quiver',
    name: 'Aljava',
    type: 'item',
    description: 'Porta 20 flechas',
    category: 'Equipamento Diverso',
    icon: Target,
    rarity: 'common',
    cost: '1 po',
    weight: '0,5 kg'
  },
  {
    id: 'ram-portable',
    name: 'Aríete Portátil',
    type: 'item',
    description: '+4 em testes de Força para derrubar portas',
    category: 'Equipamento Diverso',
    icon: Hammer,
    rarity: 'common',
    cost: '4 po',
    weight: '17,5 kg'
  },
  {
    id: 'rations',
    name: 'Rações (1 dia)',
    type: 'item',
    description: 'Alimento seco para viagem',
    category: 'Equipamento Diverso',
    icon: Package,
    rarity: 'common',
    cost: '2 po',
    weight: '1 kg'
  },
  {
    id: 'robes',
    name: 'Vestes',
    type: 'item',
    description: 'Roupas cerimoniais',
    category: 'Equipamento Diverso',
    icon: Shirt,
    rarity: 'common',
    cost: '1 po',
    weight: '2 kg'
  },
  {
    id: 'rope-silk',
    name: 'Corda de Seda (15 metros)',
    type: 'item',
    description: 'Corda leve e resistente',
    category: 'Equipamento Diverso',
    icon: Package,
    rarity: 'common',
    cost: '10 po',
    weight: '2,5 kg'
  },
  {
    id: 'sack',
    name: 'Saco',
    type: 'item',
    description: 'Carrega até 15 kg',
    category: 'Equipamento Diverso',
    icon: Package,
    rarity: 'common',
    cost: '1 pc',
    weight: '0,25 kg'
  },
  {
    id: 'scale-merchants',
    name: 'Balança de Mercador',
    type: 'item',
    description: 'Para pesar pequenos objetos',
    category: 'Equipamento Diverso',
    icon: Package,
    rarity: 'common',
    cost: '5 po',
    weight: '1,5 kg'
  },
  {
    id: 'sealing-wax',
    name: 'Lacre',
    type: 'item',
    description: 'Para selar cartas',
    category: 'Equipamento Diverso',
    icon: Package,
    rarity: 'common',
    cost: '5 pp',
    weight: '—'
  },
  {
    id: 'shovel',
    name: 'Pá',
    type: 'item',
    description: 'Para escavar',
    category: 'Equipamento Diverso',
    icon: Wrench,
    rarity: 'common',
    cost: '2 po',
    weight: '2,5 kg'
  },
  {
    id: 'signal-whistle',
    name: 'Apito',
    type: 'item',
    description: 'Sinalização sonora',
    category: 'Equipamento Diverso',
    icon: Package,
    rarity: 'common',
    cost: '5 pc',
    weight: '—'
  },
  {
    id: 'signet-ring',
    name: 'Anel de Selo',
    type: 'item',
    description: 'Para lacrar com cera',
    category: 'Equipamento Diverso',
    icon: CircleDot,
    rarity: 'common',
    cost: '5 po',
    weight: '—'
  },
  {
    id: 'soap',
    name: 'Sabão',
    type: 'item',
    description: 'Para limpeza',
    category: 'Equipamento Diverso',
    icon: Package,
    rarity: 'common',
    cost: '2 pc',
    weight: '—'
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
  {
    id: 'spikes-iron',
    name: 'Pregos de Ferro (10)',
    type: 'item',
    description: 'Para fixação',
    category: 'Equipamento Diverso',
    icon: Package,
    rarity: 'common',
    cost: '1 po',
    weight: '2,5 kg'
  },
  {
    id: 'spyglass',
    name: 'Luneta',
    type: 'item',
    description: 'Amplia visão à distância',
    category: 'Equipamento Diverso',
    icon: Eye,
    rarity: 'common',
    cost: '1.000 po',
    weight: '0,5 kg'
  },
  {
    id: 'string',
    name: 'Barbante (3 metros)',
    type: 'item',
    description: 'Corda fina',
    category: 'Equipamento Diverso',
    icon: Package,
    rarity: 'common',
    cost: '1 pp',
    weight: '—'
  },
  {
    id: 'sundial',
    name: 'Relógio de Sol',
    type: 'item',
    description: 'Indica hora pelo sol',
    category: 'Equipamento Diverso',
    icon: Package,
    rarity: 'common',
    cost: '25 po',
    weight: '1 kg'
  },
  {
    id: 'waterskin',
    name: 'Odre',
    type: 'item',
    description: 'Armazena 2 litros de líquido',
    category: 'Equipamento Diverso',
    icon: Package,
    rarity: 'common',
    cost: '2 po',
    weight: '2,5 kg'
  },
  {
    id: 'whetstone',
    name: 'Pedra de Amolar',
    type: 'item',
    description: 'Para afiar lâminas',
    category: 'Equipamento Diverso',
    icon: Package,
    rarity: 'common',
    cost: '1 pc',
    weight: '0,5 kg'
  },

  // FOCOS ARCANOS
  {
    id: 'crystal',
    name: 'Cristal',
    type: 'item',
    description: 'Foco arcano para conjuradores',
    category: 'Foco Arcano',
    icon: Gem,
    rarity: 'common',
    cost: '10 po',
    weight: '0,5 kg'
  },
  {
    id: 'orb',
    name: 'Orbe',
    type: 'item',
    description: 'Foco arcano para conjuradores',
    category: 'Foco Arcano',
    icon: CircleDot,
    rarity: 'common',
    cost: '20 po',
    weight: '1,5 kg'
  },
  {
    id: 'rod',
    name: 'Bastão',
    type: 'item',
    description: 'Foco arcano para conjuradores',
    category: 'Foco Arcano',
    icon: Wand,
    rarity: 'common',
    cost: '10 po',
    weight: '1 kg'
  },
  {
    id: 'staff',
    name: 'Cajado',
    type: 'item',
    description: 'Foco arcano para conjuradores',
    category: 'Foco Arcano',
    icon: Wand,
    rarity: 'common',
    cost: '5 po',
    weight: '2 kg'
  },
  {
    id: 'wand',
    name: 'Varinha',
    type: 'item',
    description: 'Foco arcano para conjuradores',
    category: 'Foco Arcano',
    icon: Wand,
    rarity: 'common',
    cost: '10 po',
    weight: '0,5 kg'
  },

  // SÍMBOLOS SAGRADOS
  {
    id: 'amulet',
    name: 'Amuleto',
    type: 'item',
    description: 'Símbolo sagrado para clérigos',
    category: 'Símbolo Sagrado',
    icon: Gem,
    rarity: 'common',
    cost: '5 po',
    weight: '0,5 kg'
  },
  {
    id: 'emblem',
    name: 'Emblema',
    type: 'item',
    description: 'Símbolo sagrado para clérigos',
    category: 'Símbolo Sagrado',
    icon: Shield,
    rarity: 'common',
    cost: '5 po',
    weight: '—'
  },
  {
    id: 'reliquary',
    name: 'Relicário',
    type: 'item',
    description: 'Símbolo sagrado para clérigos',
    category: 'Símbolo Sagrado',
    icon: Package,
    rarity: 'common',
    cost: '5 po',
    weight: '1 kg'
  },

  // INSTRUMENTOS MUSICAIS
  {
    id: 'bagpipes',
    name: 'Gaita de Fole',
    type: 'item',
    description: 'Instrumento musical de sopro',
    category: 'Instrumento Musical',
    icon: Package,
    rarity: 'common',
    cost: '30 po',
    weight: '3 kg'
  },
  {
    id: 'drum',
    name: 'Tambor',
    type: 'item',
    description: 'Instrumento musical de percussão',
    category: 'Instrumento Musical',
    icon: Package,
    rarity: 'common',
    cost: '6 po',
    weight: '1,5 kg'
  },
  {
    id: 'dulcimer',
    name: 'Saltério',
    type: 'item',
    description: 'Instrumento musical de cordas',
    category: 'Instrumento Musical',
    icon: Package,
    rarity: 'common',
    cost: '25 po',
    weight: '5 kg'
  },
  {
    id: 'flute',
    name: 'Flauta',
    type: 'item',
    description: 'Instrumento musical de sopro',
    category: 'Instrumento Musical',
    icon: Package,
    rarity: 'common',
    cost: '2 po',
    weight: '0,5 kg'
  },
  {
    id: 'lute',
    name: 'Alaúde',
    type: 'item',
    description: 'Instrumento musical de cordas',
    category: 'Instrumento Musical',
    icon: Package,
    rarity: 'common',
    cost: '35 po',
    weight: '1 kg'
  },
  {
    id: 'lyre',
    name: 'Lira',
    type: 'item',
    description: 'Instrumento musical de cordas',
    category: 'Instrumento Musical',
    icon: Package,
    rarity: 'common',
    cost: '30 po',
    weight: '1 kg'
  },
  {
    id: 'horn',
    name: 'Chifre',
    type: 'item',
    description: 'Instrumento musical de sopro',
    category: 'Instrumento Musical',
    icon: Package,
    rarity: 'common',
    cost: '3 po',
    weight: '1 kg'
  },
  {
    id: 'pan-flute',
    name: 'Flauta de Pã',
    type: 'item',
    description: 'Instrumento musical de sopro',
    category: 'Instrumento Musical',
    icon: Package,
    rarity: 'common',
    cost: '12 po',
    weight: '1 kg'
  },
  {
    id: 'shawm',
    name: 'Charamela',
    type: 'item',
    description: 'Instrumento musical de sopro',
    category: 'Instrumento Musical',
    icon: Package,
    rarity: 'common',
    cost: '2 po',
    weight: '0,5 kg'
  },
  {
    id: 'viol',
    name: 'Viola',
    type: 'item',
    description: 'Instrumento musical de cordas',
    category: 'Instrumento Musical',
    icon: Package,
    rarity: 'common',
    cost: '30 po',
    weight: '0,5 kg'
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
