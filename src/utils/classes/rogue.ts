
import { ClassFeature, SubclassFeature } from '../types';

export const rogueFeatures: ClassFeature[] = [
  {
    id: 'expertise',
    name: 'Especialização',
    description: 'Escolha duas de suas perícias de classe ou uma de suas perícias de classe e ferramentas de ladrão. Seu bônus de proficiência é dobrado para qualquer teste de habilidade que você fizer que use qualquer uma das proficiências escolhidas.',
    level: 1,
  },
  {
    id: 'sneakAttack',
    name: 'Ataque Furtivo',
    description: 'Você sabe como atacar sutilmente e explorar a distração de um inimigo.',
    level: 1,
  },
  {
    id: 'thievesCant',
    name: 'Gíria de Ladrão',
    description: 'Durante seu treinamento de ladino você aprendeu a gíria de ladrão, um mix secreto de dialeto, jargão e códigos que permite você passar mensagens ocultas em uma conversa aparentemente normal.',
    level: 1,
  },
  {
    id: 'cunningAction',
    name: 'Ação Astuta',
    description: 'Você pode usar uma ação bônus em cada um de seus turnos no combate para usar Disparada, Desengajar ou Esconder.',
    level: 2,
  }
];

export const rogueSubclasses: Record<string, SubclassFeature[]> = {
  // Player's Handbook
  'Ladrão': [
    {
      name: 'Trabalho Rápido',
      description: 'Você ganha proficiência com ferramentas de ladrão. Se você já é proficiente com elas, você dobra seu bônus de proficiência para qualquer teste de habilidade que você fizer com elas.',
      level: 3,
      subclass: 'Ladrão'
    },
    {
      name: 'Pés Ligeiros',
      description: 'Você pode escalar mais rapidamente que o normal; escalar não custa movimento extra para você.',
      level: 3,
      subclass: 'Ladrão'
    },
    {
      name: 'Furtividade Suprema',
      description: 'No 9º nível, você tem vantagem em um teste de Destreza (Furtividade) se você se mover não mais que metade da sua velocidade no turno.',
      level: 9,
      subclass: 'Ladrão'
    }
  ],

  'Assassino': [
    {
      name: 'Proficiências Bônus',
      description: 'Você ganha proficiência com o kit de disfarce e o kit de venenos.',
      level: 3,
      subclass: 'Assassino'
    },
    {
      name: 'Assassinar',
      description: 'Você é mais mortal quando consegue a vantagem da surpresa.',
      level: 3,
      subclass: 'Assassino'
    },
    {
      name: 'Especialização em Infiltração',
      description: 'Você pode criar falsas identidades para si mesmo com facilidade.',
      level: 9,
      subclass: 'Assassino'
    }
  ],

  'Trapaceiro Arcano': [
    {
      name: 'Conjuração',
      description: 'Você ganha a habilidade de conjurar magias.',
      level: 3,
      subclass: 'Trapaceiro Arcano'
    },
    {
      name: 'Prestidigitação de Mage Hand',
      description: 'Quando você conjura mage hand, você pode tornar a mão espectral invisível.',
      level: 3,
      subclass: 'Trapaceiro Arcano'
    },
    {
      name: 'Emboscada Mágica',
      description: 'Você pode imbui sua Arma de Ataque Furtivo com magia de força.',
      level: 9,
      subclass: 'Trapaceiro Arcano'
    }
  ],

  // Xanathar's Guide
  'Mastermind': [
    {
      name: 'Mestre de Intrigas',
      description: 'Você ganha proficiência com o kit de falsificação, o kit de disfarce e uma ferramenta de jogo à sua escolha.',
      level: 3,
      subclass: 'Mastermind'
    },
    {
      name: 'Mestre de Táticas',
      description: 'Você pode usar a ação Ajuda como ação bônus. Além disso, quando você usa a ação Ajuda para ajudar um aliado em combate, o alcance do seu auxílio aumenta para 9 metros.',
      level: 3,
      subclass: 'Mastermind'
    },
    {
      name: 'Infiltração',
      description: 'Você pode criar duas identidades falsas para si mesmo.',
      level: 9,
      subclass: 'Mastermind'
    }
  ],

  'Swashbuckler': [
    {
      name: 'Trabalho Extravagante',
      description: 'Seu charme se torna extraordinariamente convincente. Como ação bônus, você pode fazer um teste de Carisma (Persuasão) contestado por um teste de Sabedoria (Intuição) de uma criatura.',
      level: 3,
      subclass: 'Swashbuckler'
    },
    {
      name: 'Esgrima Extravagante',
      description: 'Você aprende uma flourish deslumbrante. Enquanto você está empunhando uma arma corpo a corpo finesse, você ganha os seguintes benefícios.',
      level: 3,
      subclass: 'Swashbuckler'
    },
    {
      name: 'Elegância Panache',
      description: 'Seu charme se torna mais refinado.',
      level: 9,
      subclass: 'Swashbuckler'
    }
  ],

  'Inquisitivo': [
    {
      name: 'Ouvido para Falsidade',
      description: 'Você desenvolve um talento para detectar mentiras.',
      level: 3,
      subclass: 'Inquisitivo'
    },
    {
      name: 'Olho para Detalhe',
      description: 'Você pode usar uma ação bônus para fazer um teste de Sabedoria (Intuição) para detectar pistas visuais escondidas.',
      level: 3,
      subclass: 'Inquisitivo'
    },
    {
      name: 'Ouvido Apurado',
      description: 'Você pode ouvir através de conversas sussurradas.',
      level: 9,
      subclass: 'Inquisitivo'
    }
  ],

  // Tasha's Cauldron
  'Phantom': [
    {
      name: 'Sussurros do Morto',
      description: 'Ecos de quem morreu começam a assombrá-lo, concedendo-lhe bits e pedaços de conhecimento perdido.',
      level: 3,
      subclass: 'Phantom'
    },
    {
      name: 'Sussurros de Morte',
      description: 'Ecos de morte can now haunt your strikes.',
      level: 3,
      subclass: 'Phantom'
    },
    {
      name: 'Tokens dos Mortos',
      description: 'Ao final de um descanso longo, uma soul token aparece em sua mão.',
      level: 9,
      subclass: 'Phantom'
    }
  ],

  'Soulknife': [
    {
      name: 'Telepatia Psiônica',
      description: 'Seu despertar psiônico permite que você se comunique telepaticamente.',
      level: 3,
      subclass: 'Soulknife'
    },
    {
      name: 'Lâminas Psíquicas',
      description: 'Você pode manifestar sua energia psiônica como lâminas resplandecentes de força psíquica.',
      level: 3,
      subclass: 'Soulknife'
    },
    {
      name: 'Energia Psíquica',
      description: 'Você abriga um poço de energia psiônica dentro de si mesmo.',
      level: 9,
      subclass: 'Soulknife',
      uses: { max: 2, rechargeOn: 'long' }
    }
  ]
};

export const rogueAvailableSubclasses = [
  'Ladrão',
  'Assassino',
  'Trapaceiro Arcano',
  'Mastermind',
  'Swashbuckler',
  'Inquisitivo',
  'Phantom',
  'Soulknife'
];
