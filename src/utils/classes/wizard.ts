
import { ClassFeature, SubclassFeature } from '../types';

export const wizardFeatures: ClassFeature[] = [
  {
    id: 'spellcasting',
    name: 'Conjuração',
    description: 'Como um estudante de magia arcana, você tem um livro de magias contendo magias que mostram os primeiros vislumbres de seu verdadeiro poder.',
    level: 1,
  },
  {
    id: 'arcaneRecovery',
    name: 'Recuperação Arcana',
    description: 'Você aprendeu a recuperar parte de sua energia mágica estudando seu livro de magias.',
    level: 1,
  },
  {
    id: 'arcaneSchool',
    name: 'Escola Arcana',
    description: 'Você escolhe uma escola de magia para se especializar.',
    level: 2,
  }
];

export const wizardSubclasses: Record<string, SubclassFeature[]> = {
  // Player's Handbook
  'Escola de Abjuração': [
    {
      name: 'Proteção Arcana',
      description: 'Quando você escolhe esta escola no 2º nível, a magia que você conjura lhe oferece proteção adicional.',
      level: 2,
      subclass: 'Escola de Abjuração'
    },
    {
      name: 'Proteção Projetada',
      description: 'Você pode tecer a magia para prover uma medida de proteção para outros.',
      level: 6,
      subclass: 'Escola de Abjuração'
    }
  ],

  'Escola de Adivinhação': [
    {
      name: 'Adivinho',
      description: 'Quando você escolhe esta escola no 2º nível, o ouro e o tempo que você gasta para copiar uma magia de adivinhação em seu livro de magias é reduzido à metade.',
      level: 2,
      subclass: 'Escola de Adivinhação'
    },
    {
      name: 'Pressagios',
      description: 'Vislumbres do futuro começam a pressionar sua consciência.',
      level: 2,
      subclass: 'Escola de Adivinhação',
      uses: { max: 2, rechargeOn: 'long' }
    },
    {
      name: 'Adivinhação Especialista',
      description: 'Você pode usar sua Presciência para interromper um inimigo.',
      level: 6,
      subclass: 'Escola de Adivinhação'
    }
  ],

  'Escola de Conjuração': [
    {
      name: 'Conjurador',
      description: 'Quando você seleciona esta escola no 2º nível, o ouro e tempo que você gasta para copiar uma magia de conjuração para seu livro de magias é reduzido à metade.',
      level: 2,
      subclass: 'Escola de Conjuração'
    },
    {
      name: 'Conjuração Menor',
      description: 'Você pode usar sua ação para conjurar um objeto inanimado em sua mão ou no chão em um espaço desocupado que você possa ver a até 3 metros.',
      level: 2,
      subclass: 'Escola de Conjuração'
    },
    {
      name: 'Transposição Benevolente',
      description: 'Você pode usar sua ação para se teletransportar até 9 metros para um espaço desocupado que você possa ver.',
      level: 6,
      subclass: 'Escola de Conjuração',
      uses: { max: 1, rechargeOn: 'long' }
    }
  ],

  'Escola de Encantamento': [
    {
      name: 'Encantador',
      description: 'Quando você seleciona esta escola no 2º nível, o ouro e tempo que você gasta para copiar uma magia de encantamento em seu livro de magias é reduzido à metade.',
      level: 2,
      subclass: 'Escola de Encantamento'
    },
    {
      name: 'Sorriso Hipnótico',
      description: 'Você ganha a habilidade de fazer com que seus encantamentos afetem até mesmo aqueles que normalmente seriam imunes a eles.',
      level: 2,
      subclass: 'Escola de Encantamento'
    },
    {
      name: 'Encantos Divididos',
      description: 'Quando você conjura uma magia de encantamento de 1º nível ou superior que tem como alvo apenas uma criatura, você pode fazer com que ela tenha como alvo uma segunda criatura.',
      level: 6,
      subclass: 'Escola de Encantamento'
    }
  ],

  'Escola de Evocação': [
    {
      name: 'Evocador',
      description: 'Quando você seleciona esta escola no 2º nível, o ouro e tempo que você gasta para copiar uma magia de evocação em seu livro de magias é reduzido à metade.',
      level: 2,
      subclass: 'Escola de Evocação'
    },
    {
      name: 'Esculpir Magias',
      description: 'Você pode criar bolsões de segurança relativa dentro dos efeitos de suas magias de evocação.',
      level: 2,
      subclass: 'Escola de Evocação'
    },
    {
      name: 'Truque Potente',
      description: 'Seus truques de dano afetam até mesmo criaturas que evitam o pior do efeito.',
      level: 6,
      subclass: 'Escola de Evocação'
    }
  ],

  'Escola de Ilusão': [
    {
      name: 'Ilusionista',
      description: 'Quando você seleciona esta escola no 2º nível, o ouro e tempo que você gasta para copiar uma magia de ilusão em seu livro de magias é reduzido à metade.',
      level: 2,
      subclass: 'Escola de Ilusão'
    },
    {
      name: 'Ilusões Aprimoradas',
      description: 'Você aprende o truque ilusão menor, se você ainda não o conhece.',
      level: 2,
      subclass: 'Escola de Ilusão'
    },
    {
      name: 'Ilusões Maleáveis',
      description: 'Quando você conjura uma magia de ilusão que tem duração de 1 minuto ou mais, você pode usar sua ação para mudar a natureza dessa ilusão.',
      level: 6,
      subclass: 'Escola de Ilusão'
    }
  ],

  'Escola de Necromancia': [
    {
      name: 'Necromante',
      description: 'Quando você seleciona esta escola no 2º nível, o ouro e tempo que você gasta para copiar uma magia de necromancia em seu livro de magias é reduzido à metade.',
      level: 2,
      subclass: 'Escola de Necromancia'
    },
    {
      name: 'Colheita Sombria',
      description: 'Você ganha a habilidade de ceifar energia vital de criaturas que você mata com suas magias.',
      level: 2,
      subclass: 'Escola de Necromancia'
    },
    {
      name: 'Vitalidade Sombria',
      description: 'Você ganha resistência a dano necrótico.',
      level: 6,
      subclass: 'Escola de Necromancia'
    }
  ],

  'Escola de Transmutação': [
    {
      name: 'Transmutador',
      description: 'Quando você seleciona esta escola no 2º nível, o ouro e tempo que você gasta para copiar uma magia de transmutação em seu livro de magias é reduzido à metade.',
      level: 2,
      subclass: 'Escola de Transmutação'
    },
    {
      name: 'Alquimia Menor',
      description: 'Você pode alterar temporariamente as propriedades físicas de um objeto não mágico.',
      level: 2,
      subclass: 'Escola de Transmutação'
    },
    {
      name: 'Pedra do Transmutador',
      description: 'Você pode gastar 8 horas criando uma pedra do transmutador que armazena magia transmutadora.',
      level: 6,
      subclass: 'Escola de Transmutação'
    }
  ],

  // Xanathar's Guide
  'Escola de Guerra': [
    {
      name: 'Conjuração Tática',
      description: 'Você aprende a ser mais eficaz em batalha.',
      level: 2,
      subclass: 'Escola de Guerra'
    },
    {
      name: 'Iniciativa Arcana',
      description: 'Você aprendeu a combinar agilidade com conjuração.',
      level: 2,
      subclass: 'Escola de Guerra'
    },
    {
      name: 'Deflexão Arcana',
      description: 'Você aprendeu a tecer sua magia para fortalecer sua proteção.',
      level: 6,
      subclass: 'Escola de Guerra'
    }
  ],

  // Tasha's Cauldron
  'Ordem dos Escribas': [
    {
      name: 'Livro de Magias Mágico',
      description: 'Seu livro de magias é um repositório único de magia, com suas próprias idiossincrasias mágicas.',
      level: 2,
      subclass: 'Ordem dos Escribas'
    },
    {
      name: 'Ritual Manifesto',
      description: 'Você pode realizar rituais mais rapidamente que outras pessoas.',
      level: 2,
      subclass: 'Ordem dos Escribas'
    },
    {
      name: 'Mestre Escriba',
      description: 'Sempre que você termina um descanso longo, pode trocar uma magia que você conhece por outra magia do mesmo nível.',
      level: 6,
      subclass: 'Ordem dos Escribas'
    }
  ]
};

export const wizardAvailableSubclasses = [
  'Escola de Abjuração',
  'Escola de Adivinhação',
  'Escola de Conjuração',
  'Escola de Encantamento',
  'Escola de Evocação',
  'Escola de Ilusão',
  'Escola de Necromancia',
  'Escola de Transmutação',
  'Escola de Guerra',
  'Ordem dos Escribas'
];
