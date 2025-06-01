
import { ClassFeature, SubclassFeature } from '../types';

export const sorcererFeatures: ClassFeature[] = [
  {
    id: 'spellcasting',
    name: 'Conjuração',
    description: 'Um evento em seu passado, ou na vida de um parente ou ancestral, deixou uma marca indelével em você, infundindo-o com magia arcana.',
    level: 1,
  },
  {
    id: 'sorcerousOrigin',
    name: 'Origem da Feitiçaria',
    description: 'Escolha uma origem da feitiçaria, que descreve a fonte de seu poder mágico inato.',
    level: 1,
  },
  {
    id: 'fontOfMagic',
    name: 'Fonte da Magia',
    description: 'Você tem 2 pontos de feitiçaria, e ganha mais conforme alcança níveis mais altos.',
    level: 2,
  },
  {
    id: 'metamagic',
    name: 'Metamagia',
    description: 'Você ganha a habilidade de torcer suas magias para adequá-las às suas necessidades.',
    level: 3,
  }
];

export const sorcererSubclasses: Record<string, SubclassFeature[]> = {
  // Player's Handbook
  'Linhagem Dracônica': [
    {
      name: 'Ancestral Dracônico',
      description: 'Você escolhe um tipo de dragão como seu ancestral. O tipo de dano associado a cada dragão é usado por características que você ganha mais tarde.',
      level: 1,
      subclass: 'Linhagem Dracônica'
    },
    {
      name: 'Resistência Dracônica',
      description: 'Conforme a magia flui através de seu corpo, ela causa traços físicos de sua herança dracônica a emergir.',
      level: 1,
      subclass: 'Linhagem Dracônica'
    },
    {
      name: 'Afinidade Elemental',
      description: 'Quando você conjura uma magia que causa dano do tipo associado à sua herança dracônica, adicione seu modificador de Carisma ao dano.',
      level: 6,
      subclass: 'Linhagem Dracônica'
    }
  ],

  'Magia Selvagem': [
    {
      name: 'Surto de Magia Selvagem',
      description: 'Sua magia está sujeita a flutuações aleatórias. Imediatamente após você conjurar uma magia de feiticeiro de 1º nível ou superior, role um d20.',
      level: 1,
      subclass: 'Magia Selvagem'
    },
    {
      name: 'Maré do Caos',
      description: 'Você pode manipular as forças do acaso e caos para ganhar vantagem em uma jogada de ataque, teste de habilidade ou teste de resistência.',
      level: 1,
      subclass: 'Magia Selvagem',
      uses: { max: 1, rechargeOn: 'long' }
    },
    {
      name: 'Dobrar Sorte',
      description: 'Você tem a habilidade de torcer o destino usando sua magia selvagem.',
      level: 6,
      subclass: 'Magia Selvagem',
      uses: { max: 1, rechargeOn: 'long' }
    }
  ],

  // Xanathar's Guide
  'Alma Divina': [
    {
      name: 'Magia Divina',
      description: 'Sua ligação com o divino permite que você aprenda magias de clérigo.',
      level: 1,
      subclass: 'Alma Divina'
    },
    {
      name: 'Favor dos Deuses',
      description: 'A intervenção divina pode salvar você do perigo.',
      level: 1,
      subclass: 'Alma Divina',
      uses: { max: 1, rechargeOn: 'short' }
    },
    {
      name: 'Cura Empoderada',
      description: 'Sua força divina de vida pode empoderar magias de cura.',
      level: 6,
      subclass: 'Alma Divina'
    }
  ],

  'Mente Sombria': [
    {
      name: 'Olhos das Trevas',
      description: 'Você tem visão no escuro com alcance de 36 metros.',
      level: 1,
      subclass: 'Mente Sombria'
    },
    {
      name: 'Força da Tumba',
      description: 'Sua existência em um estado entre vida e morte torna você difícil de derrotar.',
      level: 1,
      subclass: 'Mente Sombria'
    },
    {
      name: 'Sabujo da Má Sorte',
      description: 'Você ganha a habilidade de canalizar o poder sombrio para fazer uma criatura questionar sua própria sorte.',
      level: 6,
      subclass: 'Mente Sombria',
      uses: { max: 1, rechargeOn: 'short' }
    }
  ],

  'Tempestade': [
    {
      name: 'Magia do Vento',
      description: 'Sua ligação inata com os elementos ar e água lhe permite invocar pequenos rajadas de vento e chuva.',
      level: 1,
      subclass: 'Tempestade'
    },
    {
      name: 'Herança da Tempestade',
      description: 'Você tem resistência a dano de raio e trovão.',
      level: 1,
      subclass: 'Tempestade'
    },
    {
      name: 'Proteção da Tempestade',
      description: 'Quando você é atingido por um ataque corpo a corpo, pode usar sua reação para causar dano de raio à criatura atacante.',
      level: 6,
      subclass: 'Tempestade'
    }
  ],

  // Tasha's Cauldron
  'Clockwork Soul': [
    {
      name: 'Magias do Clockwork',
      description: 'Você aprende magias adicionais quando alcança certos níveis nesta classe.',
      level: 1,
      subclass: 'Clockwork Soul'
    },
    {
      name: 'Restaurar Balanço',
      description: 'Sua conexão com os planos da ordem permite que você equalize energias caóticas.',
      level: 1,
      subclass: 'Clockwork Soul',
      uses: { max: 1, rechargeOn: 'long' }
    },
    {
      name: 'Proteção Bastion da Lei',
      description: 'Você pode proteger uma criatura com energia do Mechanus.',
      level: 6,
      subclass: 'Clockwork Soul',
      uses: { max: 1, rechargeOn: 'long' }
    }
  ],

  'Aberrant Mind': [
    {
      name: 'Magias Telepáticas',
      description: 'Você aprende magias adicionais quando alcança certos níveis nesta classe.',
      level: 1,
      subclass: 'Aberrant Mind'
    },
    {
      name: 'Fala Telepática',
      description: 'Você pode formar uma ligação telepática entre sua mente e a de outro.',
      level: 1,
      subclass: 'Aberrant Mind'
    },
    {
      name: 'Escudo Psíquico',
      description: 'Você pode proteger a si mesmo ou outra criatura de ataques psíquicos.',
      level: 6,
      subclass: 'Aberrant Mind',
      uses: { max: 1, rechargeOn: 'long' }
    }
  ]
};

export const sorcererAvailableSubclasses = [
  'Linhagem Dracônica',
  'Magia Selvagem',
  'Alma Divina',
  'Mente Sombria',
  'Tempestade',
  'Clockwork Soul',
  'Aberrant Mind'
];
