
import { ClassFeature, SubclassFeature } from '../types';

export const monkFeatures: ClassFeature[] = [
  {
    id: 'unarmoredDefense',
    name: 'Defesa sem Armadura',
    description: 'Enquanto não estiver usando armadura nem empunhando um escudo, sua CA é igual a 10 + seu modificador de Destreza + seu modificador de Sabedoria.',
    level: 1,
  },
  {
    id: 'martialArts',
    name: 'Artes Marciais',
    description: 'Você ganha os seguintes benefícios enquanto estiver desarmado ou empunhando apenas armas de monge e não estiver usando armadura ou escudo.',
    level: 1,
  },
  {
    id: 'ki',
    name: 'Chi',
    description: 'Você ganha acesso à energia mística do chi. Seu acesso a essa energia é representado por um número de pontos de chi.',
    level: 2,
  },
  {
    id: 'deflectMissiles',
    name: 'Aparar Projéteis',
    description: 'Você pode usar sua reação para aparar ou apanhar projéteis quando você é atingido por um ataque à distância com armas.',
    level: 3,
  }
];

export const monkSubclasses: Record<string, SubclassFeature[]> = {
  // Player's Handbook
  'Caminho da Palma Aberta': [
    {
      name: 'Técnica da Palma Aberta',
      description: 'Você pode manipular o chi do seu inimigo quando você o acerta com suas Artes Marciais. Sempre que você atingir uma criatura com um dos ataques concedidos por Onda de Ataques, pode impor um dos seguintes efeitos.',
      level: 3,
      subclass: 'Caminho da Palma Aberta'
    },
    {
      name: 'Integridade do Corpo',
      description: 'Você ganha a habilidade de se curar. Como ação, você pode recuperar pontos de vida iguais a três vezes seu nível de monge.',
      level: 6,
      subclass: 'Caminho da Palma Aberta',
      uses: { max: 1, rechargeOn: 'long' }
    }
  ],

  'Caminho da Sombra': [
    {
      name: 'Artes das Sombras',
      description: 'Você pode usar seu chi para duplicar os efeitos de certas magias. Como ação, você pode gastar 2 pontos de chi para conjurar escuridão, passo sombrio ou silêncio, sem precisar fornecer componentes materiais.',
      level: 3,
      subclass: 'Caminho da Sombra'
    },
    {
      name: 'Passo das Sombras',
      description: 'Você ganha a habilidade de viajar de uma sombra para outra. Quando você estiver em penumbra ou escuridão, como ação bônus você pode se teletransportar até 18 metros para um espaço desocupado que também esteja em penumbra ou escuridão.',
      level: 6,
      subclass: 'Caminho da Sombra'
    }
  ],

  'Caminho dos Quatro Elementos': [
    {
      name: 'Discípulo dos Elementos',
      description: 'Você aprende disciplinas mágicas que aproveitam o poder dos quatro elementos.',
      level: 3,
      subclass: 'Caminho dos Quatro Elementos'
    },
    {
      name: 'Disciplinas Elementais',
      description: 'Você aprende disciplinas elementais adicionais. Sempre que você aprender uma nova disciplina elemental, você também pode substituir uma disciplina elemental que você já conhece.',
      level: 6,
      subclass: 'Caminho dos Quatro Elementos'
    }
  ],

  // Xanathar's Guide
  'Caminho do Punho Bêbado': [
    {
      name: 'Técnica do Punho Bêbado',
      description: 'Você ganha proficiência na perícia Performance se você ainda não a tiver. Sua técnica de artes marciais mistura combate com as precisões de um dançarino e a errática de um bêbado.',
      level: 3,
      subclass: 'Caminho do Punho Bêbado'
    },
    {
      name: 'Sorte do Bêbado',
      description: 'Você sempre parece conseguir uma guinada de sorte no momento certo. Quando você fizer um teste de habilidade, uma jogada de ataque ou um teste de resistência e tiver desvantagem, pode gastar 2 pontos de chi para cancelar a desvantagem nessa rolagem.',
      level: 6,
      subclass: 'Caminho do Punho Bêbado'
    }
  ],

  'Caminho do Kensei': [
    {
      name: 'Caminho do Kensei',
      description: 'Quando você escolhe esta tradição no 3º nível, sua prática especial de artes marciais leva você a dominar o uso de certas armas.',
      level: 3,
      subclass: 'Caminho do Kensei'
    },
    {
      name: 'Um com a Lâmina',
      description: 'Você se estende seu chi em suas armas kensei, concedendo os seguintes benefícios.',
      level: 6,
      subclass: 'Caminho do Kensei'
    }
  ],

  'Caminho do Mestre do Sol Soul': [
    {
      name: 'Energia Radiante',
      description: 'Você pode usar seu chi para replicar um canhão solar em miniatura. Quando você usa a ação Atacar, pode gastar 1 ponto de chi para causar dano radiante em vez de dano de concussão.',
      level: 3,
      subclass: 'Caminho do Mestre do Sol Soul'
    },
    {
      name: 'Lâmina Solar',
      description: 'Você ganha a habilidade de canalizar seu chi em uma lâmina resplandecente de energia. Como ação bônus, você pode criar uma lâmina luminosa que emite luz clara.',
      level: 6,
      subclass: 'Caminho do Mestre do Sol Soul',
      uses: { max: 1, rechargeOn: 'short' }
    }
  ],

  // Tasha's Cauldron
  'Caminho da Misericórdia': [
    {
      name: 'Mãos da Cura',
      description: 'Seu toque místico pode curar feridas. Como ação, você pode gastar 1 ponto de chi para tocar uma criatura e restaurar pontos de vida.',
      level: 3,
      subclass: 'Caminho da Misericórdia'
    },
    {
      name: 'Mãos da Mágoa',
      description: 'Você usa seu chi para infligir feridas. Quando você atinge uma criatura com um ataque desarmado, pode gastar 1 ponto de chi para causar dano necrótico adicional.',
      level: 3,
      subclass: 'Caminho da Misericórdia'
    }
  ],

  'Caminho do Escriba Astral': [
    {
      name: 'Armas Astrais',
      description: 'Como parte da ação bônus de Onda de Ataques, você pode convocar as armas astrais do seu corpo astral.',
      level: 3,
      subclass: 'Caminho do Escriba Astral'
    },
    {
      name: 'Visage Astral',
      description: 'Você pode convocar um aspecto de seu corpo astral que cria uma visage espetral cobrindo sua face.',
      level: 6,
      subclass: 'Caminho do Escriba Astral',
      uses: { max: 1, rechargeOn: 'long' }
    }
  ]
};

export const monkAvailableSubclasses = [
  'Caminho da Palma Aberta',
  'Caminho da Sombra',
  'Caminho dos Quatro Elementos',
  'Caminho do Punho Bêbado',
  'Caminho do Kensei',
  'Caminho do Mestre do Sol Soul',
  'Caminho da Misericórdia',
  'Caminho do Escriba Astral'
];
