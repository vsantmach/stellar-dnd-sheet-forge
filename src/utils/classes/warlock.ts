import { ClassFeature, SubclassFeature } from '../types';

export const warlockFeatures: ClassFeature[] = [
  {
    id: 'warlock-otherworldly-patron',
    name: 'Patrono Transcendental',
    description: 'Você fez um pacto com um ser transcendental de poder desconhecido.',
    level: 1
  },
  {
    id: 'warlock-pact-magic',
    name: 'Magia Pactuada',
    description: 'Você pode conjurar magias usando Carisma como habilidade de conjuração.',
    level: 1
  },
  {
    id: 'warlock-eldritch-invocations',
    name: 'Invocações Transcendentais',
    description: 'Você aprende invocações que concedem habilidades mágicas.',
    level: 2
  },
  {
    id: 'warlock-pact-boon',
    name: 'Dádiva do Pacto',
    description: 'Seu patrono lhe concede uma dádiva especial.',
    level: 3
  },
  {
    id: 'warlock-asi-4',
    name: 'Melhoria de Atributo',
    description: 'Você pode aumentar seus atributos ou escolher um talento.',
    level: 4
  },
  {
    id: 'warlock-mystic-arcanum-6',
    name: 'Resistência Mística',
    description: 'Você pode adicionar seu bônus de proficiência a um teste de resistência que falhar.',
    level: 6,
    uses: { max: 1, current: 1, rechargeOn: 'long' }
  },
  {
    id: 'warlock-asi-8',
    name: 'Melhoria de Atributo',
    description: 'Você pode aumentar seus atributos ou escolher um talento.',
    level: 8
  },
  {
    id: 'warlock-otherworldly-patron-10',
    name: 'Proteção Transcendental',
    description: 'Seu patrono protege sua mente de efeitos de charme.',
    level: 10
  },
  {
    id: 'warlock-mystic-arcanum-6th',
    name: 'Arcanum Místico (6º nível)',
    description: 'Seu patrono lhe concede uma magia de 6º nível.',
    level: 11
  },
  {
    id: 'warlock-asi-12',
    name: 'Melhoria de Atributo',
    description: 'Você pode aumentar seus atributos ou escolher um talento.',
    level: 12
  },
  {
    id: 'warlock-mystic-arcanum-7th',
    name: 'Arcanum Místico (7º nível)',
    description: 'Seu patrono lhe concede uma magia de 7º nível.',
    level: 13
  },
  {
    id: 'warlock-otherworldly-patron-14',
    name: 'Resistência Mística Aprimorada',
    description: 'Você recupera o uso de Resistência Mística em descanso curto.',
    level: 14
  },
  {
    id: 'warlock-mystic-arcanum-8th',
    name: 'Arcanum Místico (8º nível)',
    description: 'Seu patrono lhe concede uma magia de 8º nível.',
    level: 15
  },
  {
    id: 'warlock-asi-16',
    name: 'Melhoria de Atributo',
    description: 'Você pode aumentar seus atributos ou escolher um talento.',
    level: 16
  },
  {
    id: 'warlock-mystic-arcanum-9th',
    name: 'Arcanum Místico (9º nível)',
    description: 'Seu patrono lhe concede uma magia de 9º nível.',
    level: 17
  },
  {
    id: 'warlock-eldritch-master',
    name: 'Mestre Transcendental',
    description: 'Você pode recuperar todos os seus espaços de magia de bruxo em descanso curto.',
    level: 20,
    uses: { max: 1, current: 1, rechargeOn: 'long' }
  }
];

export const warlockSubclasses: Record<string, SubclassFeature[]> = {
  // ... outras subclasses já existentes ...

  'Lâmina Maldita': [
    {
      name: 'Mestre das Armas Malditas',
      description: 'Você ganha proficiência com armas médias e pesadas. Pode conjurar magias através de sua arma amaldiçoada.',
      level: 1,
      subclass: 'Lâmina Maldita'
    },
    {
      name: 'Maldição da Lâmina',
      description: 'Como ação bônus, amaldiçoe uma criatura para causar dano extra, curar-se ao derrotá-la e aumentar sua chance de acerto crítico.',
      level: 1,
      subclass: 'Lâmina Maldita',
      uses: { max: 1, rechargeOn: 'short' }
    },
    {
      name: 'Assombração da Lâmina',
      description: 'No 6º nível, como reação, fique invisível até o fim do turno após ser atingido por um ataque.',
      level: 6,
      subclass: 'Lâmina Maldita',
      uses: { max: 1, rechargeOn: 'short' }
    },
    {
      name: 'Ataque Fantasmagórico',
      description: 'No 10º nível, seus ataques ignoram resistência a dano não-mágico e você pode atravessar inimigos com facilidade.',
      level: 10,
      subclass: 'Lâmina Maldita'
    },
    {
      name: 'Mestre da Lâmina',
      description: 'No 14º nível, pode se teleportar e realizar ataques adicionais como parte da maldição.',
      level: 14,
      subclass: 'Lâmina Maldita'
    }
  ],

  'O Celestial': [
    {
      name: 'Luz Curativa',
      description: 'Você obtém um reservatório de cura que pode gastar como ação bônus em criaturas a até 9 metros.',
      level: 1,
      subclass: 'O Celestial'
    },
    {
      name: 'Resiliência Radiante',
      description: 'A partir do 6º nível, você recupera PV adicionais ao fazer descanso curto.',
      level: 6,
      subclass: 'O Celestial'
    },
    {
      name: 'Escudo de Luz',
      description: 'No 10º nível, ao sofrer dano, você pode conceder resistência a dano radiante ou de fogo a si mesmo ou a um aliado próximo.',
      level: 10,
      subclass: 'O Celestial'
    },
    {
      name: 'Chama Celestial',
      description: 'No 14º nível, você irradia uma aura que causa dano radiante e cura aliados ao redor.',
      level: 14,
      subclass: 'O Celestial'
    }
  ],

  'Talismã Misterioso': [
    {
      name: 'Talismã Protetor',
      description: 'Você recebe um talismã que concede bônus em testes de habilidade falhos e permite comunicação mística com quem o toca.',
      level: 1,
      subclass: 'Talismã Misterioso'
    },
    {
      name: 'Salvaguarda do Talismã',
      description: 'A partir do 6º nível, o portador do talismã pode adicionar 1d4 a testes de resistência falhos.',
      level: 6,
      subclass: 'Talismã Misterioso'
    },
    {
      name: 'Chamado do Talismã',
      description: 'No 10º nível, o portador pode se teleportar como reação para o local do talismã.',
      level: 10,
      subclass: 'Talismã Misterioso'
    },
    {
      name: 'Refúgio Espiritual',
      description: 'No 14º nível, ao falhar num teste de resistência, o portador pode evitar o efeito e se teletransportar para segurança.',
      level: 14,
      subclass: 'Talismã Misterioso'
    }
  ]
};

export const warlockAvailableSubclasses = [
  'O Arquifada',
  'O Corruptor',
  'O Grande Antigo',
  'O Infernal',
  'Lâmina Maldita',
  'O Celestial',
  'Talismã Misterioso'
];
