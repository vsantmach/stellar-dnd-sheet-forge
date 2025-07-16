
import { ClassFeature, SubclassFeature } from '../types';

export const rangerFeatures: ClassFeature[] = [
  {
    id: 'favoredEnemy',
    name: 'Inimigo Favorito',
    description: 'Você tem experiência significativa estudando, rastreando, caçando e até mesmo falando com um certo tipo de inimigo.',
    level: 1,
  },
  {
    id: 'naturalExplorer',
    name: 'Explorador Natural',
    description: 'Você é particularmente familiar com um tipo de ambiente natural e hábil em viajar e sobreviver nessas regiões.',
    level: 1,
  },
  {
    id: 'fightingStyle',
    name: 'Estilo de Luta',
    description: 'Você adota um estilo de luta como sua especialidade.',
    level: 2,
  },
  {
    id: 'spellcasting',
    name: 'Conjuração',
    description: 'Você aprendeu a usar a essência mágica da natureza para conjurar magias.',
    level: 2,
  },
  {
    id: 'primevalAwareness',
    name: 'Consciência Primitiva',
    description: 'Você pode usar sua ação e gastar um espaço de magia de ranger para focar sua consciência através da região ao redor.',
    level: 3,
  },
  {
    id: 'extraAttack',
    name: 'Ataque Extra',
    description: 'Você pode atacar duas vezes, em vez de uma, sempre que realizar a ação Atacar em seu turno.',
    level: 5,
  },
  {
    id: 'landStride',
    name: 'Caminho Livre',
    description: 'Mover-se através de terreno difícil não mágico não custa movimento extra.',
    level: 8,
  },
  {
    id: 'hideInPlainSight',
    name: 'Esconder-se à Vista',
    description: 'Você pode gastar 1 minuto criando camuflagem para si mesmo.',
    level: 10,
  }
];

export const rangerSubclasses: Record<string, SubclassFeature[]> = {
  // Player's Handbook
  'Caçador': [
    {
      name: 'Presa do Caçador',
      description: 'Você ganha uma das seguintes características à sua escolha: Matador de Colossos, Matador de Gigantes ou Matador de Hordas.',
      level: 3,
      subclass: 'Caçador'
    },
    {
      name: 'Táticas de Defesa',
      description: 'No 7º nível, você ganha uma das seguintes características à sua escolha: Escapar da Horda, Defesa de Múltiplos Ataques ou Velocidade Aço.',
      level: 7,
      subclass: 'Caçador'
    }
  ],

  'Mestre das Feras': [
    {
      name: 'Companheiro Ranger',
      description: 'Você ganha um companheiro animal que o acompanha em suas aventuras e é treinado para lutar ao seu lado.',
      level: 3,
      subclass: 'Mestre das Feras'
    },
    {
      name: 'Treinamento Excepcional',
      description: 'Sua companhia animal ganha proficiência em duas perícias à sua escolha. Ela também se torna proficiente com todos os testes de resistência.',
      level: 7,
      subclass: 'Mestre das Feras'
    }
  ],

  // Xanathar's Guide
  'Andarilho do Horizonte': [
    {
      name: 'Magia do Andarilho',
      description: 'Você aprende uma magia adicional quando alcança certos níveis nesta classe. A magia conta como uma magia de ranger para você.',
      level: 3,
      subclass: 'Andarilho do Horizonte'
    },
    {
      name: 'Portal Etéreo',
      description: 'Você pode usar a magia passo etéreo uma vez usando essa característica. Você recupera a habilidade de fazê-lo quando termina um descanso curto ou longo.',
      level: 7,
      subclass: 'Andarilho do Horizonte',
      uses: { max: 1, rechargeOn: 'short' }
    }
  ],

  'Matador de Monstros': [
    {
      name: 'Sentidos do Caçador',
      description: 'Você ganha a habilidade de detectar a presença de seu nemesis. Como ação, você pode abrir sua consciência para detectar tais criaturas.',
      level: 3,
      subclass: 'Matador de Monstros'
    },
    {
      name: 'Vulnerabilidade do Matador',
      description: 'No 7º nível, você ganha resistência extra contra os ataques e habilidades usadas por seus inimigos favoritos.',
      level: 7,
      subclass: 'Matador de Monstros'
    }
  ],

  'Andarilho Planador': [
    {
      name: 'Magia Planadora',
      description: 'Você aprende uma magia adicional quando alcança certos níveis nesta classe.',
      level: 3,
      subclass: 'Andarilho Planador'
    },
    {
      name: 'Portal Etéreo',
      description: 'Você pode conjurar passo etéreo uma vez usando essa característica.',
      level: 7,
      subclass: 'Andarilho Planador',
      uses: { max: 1, rechargeOn: 'long' }
    }
  ],

  // Tasha's Cauldron
  'Guardião do Enxame': [
    {
      name: 'Espíritos do Enxame',
      description: 'Você pode convocar os espíritos de pequenas criaturas da floresta para formar um enxame.',
      level: 3,
      subclass: 'Guardião do Enxame'
    },
    {
      name: 'Enxame Poderoso',
      description: 'Seus Espíritos do Enxame são mais resistentes e versáteis.',
      level: 7,
      subclass: 'Guardião do Enxame'
    }
  ],

  'Fey Wanderer': [
    {
      name: 'Presença Fey',
      description: 'Sua ligação com o Feywild infunde você com uma presença sobrenatural.',
      level: 3,
      subclass: 'Fey Wanderer'
    },
    {
      name: 'Caminhada Fey',
      description: 'Você pode usar passo sombrio uma vez sem gastar um espaço de magia.',
      level: 7,
      subclass: 'Fey Wanderer',
      uses: { max: 1, rechargeOn: 'short' }
    }
  ]
};

export const rangerAvailableSubclasses = [
  'Caçador',
  'Mestre das Feras',
  'Andarilho do Horizonte',
  'Matador de Monstros',
  'Andarilho Planador',
  'Guardião do Enxame',
  'Fey Wanderer'
];
