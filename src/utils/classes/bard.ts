import { ClassFeature, SubclassFeature } from '../types';

export const bardFeatures: ClassFeature[] = [
  {
    id: 'bardicInspiration',
    name: 'Inspiração Bárdica',
    description: 'Você pode inspirar outras pessoas através de palavras ou música.',
    level: 1,
    uses: { max: 5, rechargeOn: 'long', current: 5 }
  },
  {
    id: 'spellcasting',
    name: 'Magias',
    description: 'Você usa magia para produzir resultados extraordinários.',
    level: 1
  },
  {
    id: 'jackOfAllTrades',
    name: 'Versátil',
    description: 'Você pode adicionar metade do seu bônus de proficiência, arredondado para baixo, a qualquer teste de habilidade que não inclua um bônus de proficiência.',
    level: 2
  },
  {
    id: 'songOfRest',
    name: 'Canção de Descanso',
    description: 'Você pode ajudar a acalmar seus aliados feridos durante um descanso curto.',
    level: 2
  },
  {
    id: 'expertise',
    name: 'Especialização',
    description: 'Escolha duas de suas proficiências em perícias. Seu bônus de proficiência é dobrado para qualquer teste de habilidade que você fizer que use qualquer uma das proficiências escolhidas.',
    level: 3
  },
  {
    id: 'fontOfInspiration',
    name: 'Fonte de Inspiração',
    description: 'Você recupera todos os seus usos de Inspiração Bárdica quando termina um descanso curto ou longo.',
    level: 5,
  },
  {
    id: 'countercharm',
    name: 'Contrabeleza',
    description: 'Você ganha a habilidade de usar música ou palavras para defender seus aliados contra efeitos amedrontadores e encantadores.',
    level: 6
  }
];

export const bardSubclasses: Record<string, SubclassFeature[]> = {
  // Player's Handbook
  'Colégio da Bravura': [
    {
      name: 'Proficiências Bônus',
      description: 'Você ganha proficiência com armaduras médias, escudos e armas marciais.',
      level: 3,
      subclass: 'Colégio da Bravura'
    },
    {
      name: 'Inspiração de Combate',
      description: 'Você aprende a inspirar outros em batalha. Uma criatura que tem um dado de Inspiração Bárdica seu pode rolar esse dado e adicionar o número rolado a uma jogada de dano de arma que acabou de fazer.',
      level: 3,
      subclass: 'Colégio da Bravura'
    }
  ],

  'Colégio do Conhecimento': [
    {
      name: 'Proficiências Bônus',
      description: 'Você ganha proficiência com três perícias à sua escolha.',
      level: 3,
      subclass: 'Colégio do Conhecimento'
    },
    {
      name: 'Palavras Cortantes',
      description: 'Você aprende como usar seu humor para distrair, confundir e de outra forma minar a confiança e competência dos outros.',
      level: 3,
      subclass: 'Colégio do Conhecimento'
    }
  ],

  // Xanathar's Guide
  'Colégio dos Glamour': [
    {
      name: 'Presença Cativante',
      description: 'Você ganha a habilidade de tecer magia feérica em suas palavras e música.',
      level: 3,
      subclass: 'Colégio dos Glamour'
    },
    {
      name: 'Manto da Inspiração',
      description: 'Você ganha a habilidade de tecer magia feérica em sua Inspiração Bárdica.',
      level: 3,
      subclass: 'Colégio dos Glamour'
    }
  ],

  'Colégio das Espadas': [
    {
      name: 'Proficiências Bônus',
      description: 'Você ganha proficiência com armaduras médias e com cimitarras.',
      level: 3,
      subclass: 'Colégio das Espadas'
    },
    {
      name: 'Estilo de Luta',
      description: 'Você adota um estilo particular de luta como sua especialidade.',
      level: 3,
      subclass: 'Colégio das Espadas'
    }
  ],

  'Colégio dos Sussurros': [
    {
      name: 'Palavras Psíquicas',
      description: 'Você aprende a infundir palavras inocentes com uma magia sinistra que pode inspirar terror.',
      level: 3,
      subclass: 'Colégio dos Sussurros'
    },
    {
      name: 'Lâminas Palavras',
      description: 'Você aprende como usar sua magia para causar ferimentos físicos com suas palavras.',
      level: 3,
      subclass: 'Colégio dos Sussurros'
    }
  ],

  // Tasha's Cauldron
  'Colégio da Criação': [
    {
      name: 'Nota da Potencialidade',
      description: 'Sempre que você der Inspiração Bárdica a uma criatura, pode pronunciar uma nota da criação.',
      level: 3,
      subclass: 'Colégio da Criação'
    },
    {
      name: 'Performance da Criação',
      description: 'Você ganha a habilidade de criar objetos não mágicos com sua música.',
      level: 3,
      subclass: 'Colégio da Criação'
    }
  ],

  'Colégio da Eloquência': [
    {
      name: 'Discurso Prateado',
      description: 'Você é um mestre na articulação de palavras, sabendo que discurso pode subverter, aliviar ou inspirar.',
      level: 3,
      subclass: 'Colégio da Eloquência'
    },
    {
      name: 'Inspiração Infalível',
      description: 'Suas palavras inspiradoras são tão persuasivas que outros sentem compelidos ao sucesso.',
      level: 3,
      subclass: 'Colégio da Eloquência'
    }
  ]
};

export const bardAvailableSubclasses = [
  'Colégio da Bravura',
  'Colégio do Conhecimento',
  'Colégio dos Glamour',
  'Colégio das Espadas',
  'Colégio dos Sussurros',
  'Colégio da Criação',
  'Colégio da Eloquência'
];
