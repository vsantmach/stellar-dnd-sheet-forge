import { ClassFeature, SubclassFeature } from '../types';

export const bardFeatures: ClassFeature[] = [
  {
    id: 'spellcasting',
    name: 'Conjuração',
    description: 'Você pode conjurar magias de bardo.',
    level: 1,
  },
  {
    id: 'bardicInspiration',
    name: 'Inspiração Bárdica',
    description: 'Você pode inspirar aliados com dados de inspiração.',
    level: 1,
  },
  {
    id: 'jackOfAllTrades',
    name: 'Versátil',
    description: 'Você adiciona metade do seu bônus de proficiência a testes de habilidade que não é proficiente.',
    level: 2,
  },
  {
    id: 'songOfRest',
    name: 'Canção de Descanso',
    description: 'Durante um descanso curto, você pode usar música para ajudar aliados a recuperar pontos de vida.',
    level: 2,
  }
];

export const bardSubclasses: Record<string, SubclassFeature[]> = {
  'Colégio da Eloquência': [
    {
      name: 'Discurso Prateado',
      description: 'Você é um mestre da palavra. Quando fizer um teste de Persuasão ou Enganação, pode tratar uma rolagem de d20 de 9 ou menor como um 10.',
      level: 3,
      subclass: 'Colégio da Eloquência'
    },
    {
      name: 'Crítica Implacável',
      description: 'Quando uma criatura que pode ouvir você a até 18 metros faz uma jogada de ataque, teste de habilidade ou de resistência, pode usar sua reação para gastar uma Inspiração Bárdica.',
      level: 3,
      subclass: 'Colégio da Eloquência'
    }
  ],

  'Colégio da Criação': [
    {
      name: 'Nota de Potencial',
      description: 'Sempre que der Inspiração Bárdica a uma criatura, pode proferir uma nota de criação. A inspiração concede um benefício adicional.',
      level: 3,
      subclass: 'Colégio da Criação'
    },
    {
      name: 'Performance de Criação',
      description: 'Como ação, pode canalizar a magia da canção da criação para criar um item não mágico em um espaço desocupado a até 3 metros.',
      level: 3,
      subclass: 'Colégio da Criação',
      uses: { max: 1, rechargeOn: 'long' }
    }
  ],

  'Colégio dos Sussurros': [
    {
      name: 'Veneno Psíquico',
      description: 'Você pode infundir palavras inocentes com uma magia insidiosa. Como ação bônus, pode gastar uma Inspiração Bárdica para causar dano psíquico.',
      level: 3,
      subclass: 'Colégio dos Sussurros'
    },
    {
      name: 'Palavras do Terror',
      description: 'Você aprende a infundir palavras aparentemente inocentes com uma magia terrível. Como ação, pode sussurrar uma frase mágica que apenas uma criatura pode ouvir.',
      level: 3,
      subclass: 'Colégio dos Sussurros',
      uses: { max: 1, rechargeOn: 'short' }
    }
  ],

  'Colégio da Glamúria': [
    {
      name: 'Presença Sedutora',
      description: 'Você ganha a habilidade de tecer magia fey em suas palavras e música. Como ação bônus, pode gastar uma Inspiração Bárdica.',
      level: 3,
      subclass: 'Colégio da Glamúria'
    },
    {
      name: 'Manto de Majestade',
      description: 'Como ação bônus, pode assumir uma aparência majestosa por 1 minuto ou até sua concentração acabar.',
      level: 6,
      subclass: 'Colégio da Glamúria',
      uses: { max: 1, rechargeOn: 'short' }
    }
  ],

  'Colégio das Espadas': [
    {
      name: 'Proficiências Bônus',
      description: 'Você ganha proficiência com armaduras médias e com cimitarras. Se já é proficiente com cimitarras, ganha proficiência com outra arma corpo a corpo à sua escolha.',
      level: 3,
      subclass: 'Colégio das Espadas'
    },
    {
      name: 'Estilo de Luta',
      description: 'Você adota um estilo particular de luta como sua especialidade. Escolha: Combate com Duas Armas ou Duelismo.',
      level: 3,
      subclass: 'Colégio das Espadas'
    },
    {
      name: 'Prosperidades de Lâmina',
      description: 'Você aprende a conduzir ataques impressionantes e úteis. Pode usar Inspiração Bárdica para florescer com armas.',
      level: 3,
      subclass: 'Colégio das Espadas'
    }
  ],

  // Xanathar's Guide
  'Colégio da Glamúria': [
    {
      name: 'Presença Sedutora',
      description: 'Você ganha a habilidade de tecer magia fey em suas palavras e música. Como ação bônus, pode gastar uma Inspiração Bárdica.',
      level: 3,
      subclass: 'Colégio da Glamúria'
    },
    {
      name: 'Manto de Majestade',
      description: 'Como ação bônus, pode assumir uma aparência majestosa por 1 minuto ou até sua concentração acabar.',
      level: 6,
      subclass: 'Colégio da Glamúria',
      uses: { max: 1, rechargeOn: 'short' }
    }
  ],

  'Colégio dos Sussurros': [
    {
      name: 'Veneno Psíquico',
      description: 'Você pode infundir palavras inocentes com uma magia insidiosa. Como ação bônus, pode gastar uma Inspiração Bárdica para causar dano psíquico.',
      level: 3,
      subclass: 'Colégio dos Sussurros'
    },
    {
      name: 'Palavras do Terror',
      description: 'Você aprende a infundir palavras aparentemente inocentes com uma magia terrível. Como ação, pode sussurrar uma frase mágica que apenas uma criatura pode ouvir.',
      level: 3,
      subclass: 'Colégio dos Sussurros',
      uses: { max: 1, rechargeOn: 'short' }
    }
  ]
};

export const bardAvailableSubclasses = [
  'Colégio da Eloquência', 
  'Colégio da Criação', 
  'Colégio dos Sussurros', 
  'Colégio da Glamúria', 
  'Colégio das Espadas',
  'Colégio da Glamúria',
  'Colégio dos Sussurros'
];
