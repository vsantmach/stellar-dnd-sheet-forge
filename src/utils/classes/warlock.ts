
import { ClassFeature, SubclassFeature } from '../types';

export const warlockFeatures: ClassFeature[] = [
  {
    id: 'otherworldlyPatron',
    name: 'Patrono Sobrenatural',
    description: 'Você fez um pacto com um ser sobrenatural de poder superior.',
    level: 1,
  },
  {
    id: 'pactMagic',
    name: 'Magia de Pacto',
    description: 'Sua pesquisa arcana e a magia outorgada a você por seu patrono deram a você facilidade com magias.',
    level: 1,
  },
  {
    id: 'eldritchInvocations',
    name: 'Invocações Eldríticas',
    description: 'Em seus estudos de conhecimento oculto, você descobriu invocações eldríticas, fragmentos de conhecimento proibido que infundem você com habilidade mágica permanente.',
    level: 2,
  },
  {
    id: 'pactBoon',
    name: 'Dádiva do Pacto',
    description: 'Seu patrono sobrenatural outorga uma dádiva sobre você por seu serviço leal.',
    level: 3,
  }
];

export const warlockSubclasses: Record<string, SubclassFeature[]> = {
  // Player's Handbook
  'O Arquifada': [
    {
      name: 'Lista de Magias Expandida',
      description: 'O Arquifada permite que você escolha de uma lista expandida de magias quando você aprende uma magia de warlock.',
      level: 1,
      subclass: 'O Arquifada'
    },
    {
      name: 'Presença Fey',
      description: 'Você pode fazer com que as criaturas ao redor sejam encantadas ou amedrontadas por sua presença fey.',
      level: 1,
      subclass: 'O Arquifada',
      uses: { max: 1, rechargeOn: 'short' }
    },
    {
      name: 'Fuga Nevoenta',
      description: 'Você pode se desvanecer em uma nuvem de névoa em resposta ao dano.',
      level: 6,
      subclass: 'O Arquifada',
      uses: { max: 1, rechargeOn: 'short' }
    }
  ],

  'O Demônio': [
    {
      name: 'Lista de Magias Expandida',
      description: 'O Demônio permite que você escolha de uma lista expandida de magias quando você aprende uma magia de warlock.',
      level: 1,
      subclass: 'O Demônio'
    },
    {
      name: 'Bênção do Sombrio',
      description: 'Quando você reduz uma criatura hostil a 0 pontos de vida, você ganha pontos de vida temporários.',
      level: 1,
      subclass: 'O Demônio'
    },
    {
      name: 'Sorte do Sombrio',
      description: 'Você pode invocar seu patrono para alterar o destino a seu favor.',
      level: 6,
      subclass: 'O Demônio',
      uses: { max: 1, rechargeOn: 'short' }
    }
  ],

  'O Grande Antigo': [
    {
      name: 'Lista de Magias Expandida',
      description: 'O Grande Antigo permite que você escolha de uma lista expandida de magias.',
      level: 1,
      subclass: 'O Grande Antigo'
    },
    {
      name: 'Telepatia',
      description: 'Você pode se comunicar telepaticamente com qualquer criatura que você pode ver a até 9 metros.',
      level: 1,
      subclass: 'O Grande Antigo'
    },
    {
      name: 'Criar Servo',
      description: 'Você ganha a habilidade de infectar a mente de um humanoide com a magia alienígena de seu patrono.',
      level: 6,
      subclass: 'O Grande Antigo',
      uses: { max: 1, rechargeOn: 'long' }
    }
  ],

  // Xanathar's Guide
  'O Celestial': [
    {
      name: 'Lista de Magias Expandida',
      description: 'O Celestial permite que você escolha de uma lista expandida de magias.',
      level: 1,
      subclass: 'O Celestial'
    },
    {
      name: 'Alma de Luz',
      description: 'Seu patrono concede a você a habilidade de canalizar energia celestial para curar feridas.',
      level: 1,
      subclass: 'O Celestial',
      uses: { max: 1, rechargeOn: 'long' }
    },
    {
      name: 'Resistência Radiante',
      description: 'Você ganha resistência a dano radiante, e quando você conjura uma magia que causa dano radiante ou de fogo, adiciona seu modificador de Carisma ao dano.',
      level: 6,
      subclass: 'O Celestial'
    }
  ],

  'A Lâmina Hex': [
    {
      name: 'Lista de Magias Expandida',
      description: 'A Lâmina Hex permite que você escolha de uma lista expandida de magias.',
      level: 1,
      subclass: 'A Lâmina Hex'
    },
    {
      name: 'Maldição da Lâmina Hex',
      description: 'Você pode amaldiçoar um inimigo tocado por sua arma de pacto.',
      level: 1,
      subclass: 'A Lâmina Hex'
    },
    {
      name: 'Guerreiro Aclimatado',
      description: 'Você ganha proficiência com armaduras médias, escudos e armas marciais.',
      level: 1,
      subclass: 'A Lâmina Hex'
    }
  ],

  // Tasha's Cauldron
  'O Fathomless': [
    {
      name: 'Lista de Magias Expandida',
      description: 'O Fathomless permite que você escolha de uma lista expandida de magias.',
      level: 1,
      subclass: 'O Fathomless'
    },
    {
      name: 'Tentáculo das Profundezas',
      description: 'Você pode conjurar magicamente um tentáculo spectral que golpeia seus inimigos.',
      level: 1,
      subclass: 'O Fathomless'
    },
    {
      name: 'Presente do Mar',
      description: 'Você ganha velocidade de natação de 12 metros, e pode respirar embaixo d'água.',
      level: 6,
      subclass: 'O Fathomless'
    }
  ],

  'O Gênio': [
    {
      name: 'Lista de Magias Expandida',
      description: 'O Gênio permite que você escolha de uma lista expandida de magias baseada no tipo de gênio.',
      level: 1,
      subclass: 'O Gênio'
    },
    {
      name: 'Recipiente do Gênio',
      description: 'Seu patrono lhe dá um recipiente mágico.',
      level: 1,
      subclass: 'O Gênio'
    },
    {
      name: 'Resistência Elemental',
      description: 'Você ganha resistência a um tipo de dano determinado pelo seu tipo de gênio.',
      level: 6,
      subclass: 'O Gênio'
    }
  ]
};

export const warlockAvailableSubclasses = [
  'O Arquifada',
  'O Demônio',
  'O Grande Antigo',
  'O Celestial',
  'A Lâmina Hex',
  'O Fathomless',
  'O Gênio'
];
