import { ClassFeature, SubclassFeature } from '../types';

export const psionicoFeatures: ClassFeature[] = [
  {
    id: 'psionico-psionic-energy',
    name: 'Energia Psiônica',
    description: 'Você possui uma reserva interna de energia que alimenta seus poderes psiônicos. Essa energia é representada por seus dados de Energia Psiônica.',
    level: 1,
    uses: {
      max: 4,
      current: 4,
      rechargeOn: 'long'
    }
  },
  {
    id: 'psionico-telepathic-speech',
    name: 'Fala Telepática',
    description: 'Você pode formar um vínculo telepático com uma criatura que você pode ver, dentro de 9 metros de você. Como uma ação bônus, escolha uma criatura que você possa ver dentro do alcance. Você e a criatura escolhida podem falar telepaticamente uma com a outra enquanto as duas estiverem a até 1,6 km de distância.',
    level: 1,
    uses: {
      max: 1,
      current: 1,
      rechargeOn: 'long'
    }
  },
  {
    id: 'psionico-psi-replenishment',
    name: 'Renovação Psi',
    description: 'Como uma ação bônus, você pode recuperar um dado de Energia Psiônica que você usou. Uma vez que você usar essa característica, não pode usá-la novamente até terminar um descanso longo.',
    level: 2,
    uses: {
      max: 1,
      current: 1,
      rechargeOn: 'long'
    }
  },
  {
    id: 'psionico-telekinetic-movement',
    name: 'Movimento Telecinético',
    description: 'Você pode mover um objeto ou uma criatura disposta com seu pensamento. Como uma ação, escolha um objeto Pequeno ou menor que você possa ver dentro de 9 metros. Se não for carregado ou vestido por outra criatura, você pode mover o objeto até 9 metros. Alternativamente, você pode empurrar, puxar ou mover uma criatura disposta que seja de tamanho Médio ou menor.',
    level: 3
  },
  {
    id: 'psionico-ability-score-improvement',
    name: 'Aumento de Habilidade',
    description: 'Você pode aumentar um valor de habilidade de sua escolha em 2, ou pode aumentar dois valores de habilidade de sua escolha em 1. Como de costume, você não pode aumentar um valor de habilidade acima de 20 usando essa característica.',
    level: 4
  },
  {
    id: 'psionico-telepathic-speech-improvement',
    name: 'Melhoria da Fala Telepática',
    description: 'Sua Fala Telepática melhora. Quando você usa essa característica, você pode formar um vínculo telepático com até um número de criaturas igual ao seu bônus de proficiência ao mesmo tempo.',
    level: 6
  },
  {
    id: 'psionico-protective-field',
    name: 'Campo Protetor',
    description: 'Quando você ou uma criatura que você possa ver a até 9 metros de você sofre dano, você pode usar sua reação para reduzir o dano em 1d8 + seu modificador de Inteligência (mínimo de redução de 1), desde que você tenha pelo menos um dado de Energia Psiônica restante.',
    level: 7
  },
  {
    id: 'psionico-potent-psionics',
    name: 'Psiônicos Potentes',
    description: 'Você pode focar sua energia psiônica para potencializar seus poderes. Uma vez por turno, quando você causar dano com uma magia de 1º nível ou superior, pode gastar um dado de Energia Psiônica para causar dano psíquico extra igual ao número rolado.',
    level: 8
  }
];

export const psionicoSubclasses: Record<string, SubclassFeature[]> = {
  'Ordem do Grande Espírito': [
    {
      name: 'Magia da Ordem',
      description: 'Você aprende magias adicionais nos níveis específicos.',
      level: 3,
      subclass: 'Ordem do Grande Espírito'
    },
    {
      name: 'Presença Telepática',
      description: 'Você pode detectar a presença de qualquer criatura a até 18 metros de você que tenha uma pontuação de Inteligência de 3 ou superior.',
      level: 3,
      subclass: 'Ordem do Grande Espírito'
    },
    {
      name: 'Resistência Mental',
      description: 'Você tem resistência a dano psíquico, e quando uma criatura causar dano psíquico a você, pode usar sua reação para forçar essa criatura a fazer um teste de resistência de Sabedoria.',
      level: 6,
      subclass: 'Ordem do Grande Espírito'
    },
    {
      name: 'Dominação Psíquica',
      description: 'Você pode subjugar a mente de outras criaturas. Como uma ação, escolha uma criatura humanóide que você possa ver a até 36 metros. A criatura deve fazer um teste de resistência de Sabedoria.',
      level: 10,
      subclass: 'Ordem do Grande Espírito',
      uses: { max: 1, rechargeOn: 'long' }
    }
  ],

  'Ordem do Avatar': [
    {
      name: 'Forma Astral',
      description: 'Você aprende a projetar sua consciência para o Plano Astral.',
      level: 3,
      subclass: 'Ordem do Avatar'
    },
    {
      name: 'Viagem Astral',
      description: 'Você pode usar sua energia psiônica para viajar através do Plano Astral.',
      level: 3,
      subclass: 'Ordem do Avatar',
      uses: { max: 1, rechargeOn: 'long' }
    },
    {
      name: 'Corpo Astral',
      description: 'Sua forma astral se torna mais resistente e capaz.',
      level: 6,
      subclass: 'Ordem do Avatar'
    },
    {
      name: 'Manifestação Física',
      description: 'Você pode manifestar sua forma astral no plano material temporariamente.',
      level: 10,
      subclass: 'Ordem do Avatar',
      uses: { max: 1, rechargeOn: 'long' }
    }
  ],

  'Ordem do Imortal': [
    {
      name: 'Forma Imortal',
      description: 'Sua ligação psiônica lhe concede resistência excepcional.',
      level: 3,
      subclass: 'Ordem do Imortal'
    },
    {
      name: 'Durabilidade Psiônica',
      description: 'Quando você termina um descanso longo, ganha pontos de vida temporários iguais ao seu nível de psionico + seu modificador de Constituição.',
      level: 3,
      subclass: 'Ordem do Imortal'
    },
    {
      name: 'Regeneração Psiônica',
      description: 'Como uma ação bônus, você pode gastar um dado de Energia Psiônica para recuperar pontos de vida.',
      level: 6,
      subclass: 'Ordem do Imortal'
    },
    {
      name: 'Corpo Resistente',
      description: 'Seu corpo se torna altamente resistente a ferimentos. Você ganha resistência a dano necrótico e poison.',
      level: 10,
      subclass: 'Ordem do Imortal'
    }
  ],

  'Ordem do Nomade da Alma': [
    {
      name: 'Caminhada Dimensional',
      description: 'Você ganha a habilidade de se teletransportar curtas distâncias.',
      level: 3,
      subclass: 'Ordem do Nomade da Alma',
      uses: { max: 3, rechargeOn: 'long' }
    },
    {
      name: 'Portal Menor',
      description: 'Como uma ação, você pode criar um portal que conecta dois pontos no espaço.',
      level: 3,
      subclass: 'Ordem do Nomade da Alma'
    },
    {
      name: 'Teletransporte Defensivo',
      description: 'Quando uma criatura que você possa ver faz um ataque contra você, pode usar sua reação para se teletransportar.',
      level: 6,
      subclass: 'Ordem do Nomade da Alma'
    },
    {
      name: 'Portal Superior',
      description: 'Você pode criar portais maiores e mais estáveis.',
      level: 10,
      subclass: 'Ordem do Nomade da Alma',
      uses: { max: 1, rechargeOn: 'long' }
    }
  ]
};

export const psionicoAvailableSubclasses = [
  'Ordem do Grande Espírito',
  'Ordem do Avatar',
  'Ordem do Imortal',
  'Ordem do Nomade da Alma'
];