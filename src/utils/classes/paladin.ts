
import { ClassFeature, SubclassFeature } from '../types';

export const paladinFeatures: ClassFeature[] = [
  {
    id: 'divineSense',
    name: 'Sentido Divino',
    description: 'A presença do mal registra em seus sentidos como um odor nocivo, e o bem poderoso toca como música celestial em seus ouvidos.',
    level: 1,
    uses: { max: 1, rechargeOn: 'long' }
  },
  {
    id: 'layOnHands',
    name: 'Imposição das Mãos',
    description: 'Seu toque abençoado pode curar feridas. Você tem um conjunto de pontos de cura que se reabastece quando você termina um descanso longo.',
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
    description: 'Você aprendeu a usar a magia divina através de meditação e oração para conjurar magias como um clérigo faz.',
    level: 2,
  },
  {
    id: 'divineSmite',
    name: 'Golpe Divino',
    description: 'Quando você atinge uma criatura com um ataque corpo a corpo com arma, pode expandir um espaço de magia para causar dano radiante adicional ao alvo.',
    level: 2,
  }
];

export const paladinSubclasses: Record<string, SubclassFeature[]> = {
  // Player's Handbook
  'Juramento de Devoção': [
    {
      name: 'Canalizar Divindade: Arma Sagrada',
      description: 'Como ação, você pode imbuir uma arma que você está segurando com energia positiva.',
      level: 3,
      subclass: 'Juramento de Devoção'
    },
    {
      name: 'Canalizar Divindade: Expulsar o Profano',
      description: 'Como ação, você apresenta seu símbolo sagrado e fala uma oração censurando fadas e mortos-vivos.',
      level: 3,
      subclass: 'Juramento de Devoção'
    },
    {
      name: 'Aura de Devoção',
      description: 'Você e criaturas amigáveis a até 3 metros de você não podem ser enfeitiçadas enquanto você estiver consciente.',
      level: 7,
      subclass: 'Juramento de Devoção'
    }
  ],

  'Juramento dos Anciãos': [
    {
      name: 'Canalizar Divindade: Fúria da Natureza',
      description: 'Você pode usar seu Canalizar Divindade para invocar forças primordiais para enredar seus inimigos.',
      level: 3,
      subclass: 'Juramento dos Anciãos'
    },
    {
      name: 'Canalizar Divindade: Expulsar os Infiéis',
      description: 'Você pode usar Canalizar Divindade para proferir palavras antigas que são dolorosas para fadas e mortos-vivos.',
      level: 3,
      subclass: 'Juramento dos Anciãos'
    },
    {
      name: 'Aura de Proteção',
      description: 'A magia antiga flui através de você, protegendo-o e seus aliados próximos.',
      level: 7,
      subclass: 'Juramento dos Anciãos'
    }
  ],

  'Juramento de Vingança': [
    {
      name: 'Canalizar Divindade: Inimigo Jurado',
      description: 'Como ação bônus, você pode proferir um voto de inimizade contra uma criatura que você pode ver a até 3 metros de você.',
      level: 3,
      subclass: 'Juramento de Vingança'
    },
    {
      name: 'Canalizar Divindade: Voto de Inimizade',
      description: 'Como ação bônus, você pode usar Canalizar Divindade para conceder a si mesmo vantagem em jogadas de ataque contra uma criatura por 1 minuto.',
      level: 3,
      subclass: 'Juramento de Vingança'
    },
    {
      name: 'Perseguidor Implacável',
      description: 'Sua determinação supernatural torna você mais resistente. Você tem vantagem em testes de resistência contra ser enfeitiçado.',
      level: 7,
      subclass: 'Juramento de Vingança'
    }
  ],

  // Xanathar's Guide
  'Juramento de Conquista': [
    {
      name: 'Canalizar Divindade: Presença Conquistadora',
      description: 'Como ação, você pode usar Canalizar Divindade para exercer uma presença terrível.',
      level: 3,
      subclass: 'Juramento de Conquista'
    },
    {
      name: 'Canalizar Divindade: Golpe Orientado',
      description: 'Você pode usar Canalizar Divindade para atacar com precisão sobrenatural.',
      level: 3,
      subclass: 'Juramento de Conquista'
    },
    {
      name: 'Aura de Conquista',
      description: 'Você constantemente emana uma ameaça menacing. Você e criaturas amigáveis a até 3 metros têm vantagem em jogadas de ataque contra criaturas amedrontadas.',
      level: 7,
      subclass: 'Juramento de Conquista'
    }
  ],

  'Juramento de Redenção': [
    {
      name: 'Canalizar Divindade: Rebuke Emissary',
      description: 'Você pode usar Canalizar Divindade para repreender aqueles que usam a violência.',
      level: 3,
      subclass: 'Juramento de Redenção'
    },
    {
      name: 'Canalizar Divindade: Sono do Emissário',
      description: 'Você pode usar Canalizar Divindade como ação para forçar uma criatura a fazer um teste de resistência de Sabedoria.',
      level: 3,
      subclass: 'Juramento de Redenção'
    },
    {
      name: 'Aura do Guardião',
      description: 'Você pode proteger seus aliados do dano. Quando uma criatura a até 3 metros de você recebe dano, você pode usar sua reação para assumir esse dano magicamente.',
      level: 7,
      subclass: 'Juramento de Redenção'
    }
  ],

  // Tasha's Cauldron
  'Juramento da Glória': [
    {
      name: 'Canalizar Divindade: Inspiração Heróica',
      description: 'Como ação bônus, você pode conceder a si mesmo um dado de inspiração heróica, um d4.',
      level: 3,
      subclass: 'Juramento da Glória'
    },
    {
      name: 'Canalizar Divindade: Presença Inspiradora',
      description: 'Como ação, você pode usar Canalizar Divindade para homenagear heróis do passado.',
      level: 3,
      subclass: 'Juramento da Glória'
    },
    {
      name: 'Aura de Alvorada',
      description: 'Você se torna um farol de esperança para seus companheiros. Você e criaturas amigáveis a até 3 metros têm vantagem em testes de resistência de Sabedoria.',
      level: 7,
      subclass: 'Juramento da Glória'
    }
  ],

  'Juramento dos Observadores': [
    {
      name: 'Canalizar Divindade: Aegis do Observador',
      description: 'Como ação, você pode invocar o Aegis do Observador. Como reação quando você ou uma criatura amigável a até 9 metros for atingida por um ataque, você pode conceder +2 de bônus à CA.',
      level: 3,
      subclass: 'Juramento dos Observadores'
    },
    {
      name: 'Canalizar Divindade: Vigília do Observador',
      description: 'Como ação, você escolhe um número de criaturas que pode ver igual ao seu modificador de Carisma. Por 1 minuto, você sabe a localização exata de qualquer celestial, corruptor, elemental, fada ou morto-vivo.',
      level: 3,
      subclass: 'Juramento dos Observadores'
    },
    {
      name: 'Vigilância Abjurante',
      description: 'Você tem resistência a dano de magias. Além disso, quando você ou uma criatura amigável a até 3 metros for forçada a fazer um teste de resistência, a criatura ganha um bônus igual ao seu modificador de Carisma.',
      level: 7,
      subclass: 'Juramento dos Observadores'
    }
  ]
};

export const paladinAvailableSubclasses = [
  'Juramento de Devoção',
  'Juramento dos Anciãos',
  'Juramento de Vingança',
  'Juramento de Conquista',
  'Juramento de Redenção',
  'Juramento da Glória',
  'Juramento dos Observadores'
];
