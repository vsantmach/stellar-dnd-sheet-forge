import { ClassFeature, SubclassFeature } from '../types';

export const druidFeatures: ClassFeature[] = [
  {
    id: 'druidcraft',
    name: 'Druidismo',
    description: 'Você conhece Druidismo, uma linguagem secreta conhecida apenas por druidas e criaturas feéricas.',
    level: 1,
  },
  {
    id: 'spellcasting',
    name: 'Conjuração',
    description: 'Baseando-se na essência divina da própria natureza, você pode conjurar magias para moldar essa essência segundo sua vontade.',
    level: 1,
  },
  {
    id: 'wildShape',
    name: 'Forma Selvagem',
    description: 'A partir do 2º nível, você pode usar sua ação para assumir magicamente a forma de uma besta que você já viu antes.',
    level: 2,
    uses: { max: 2, current: 2, rechargeOn: 'short' }
  },
  {
    id: 'druidCircle',
    name: 'Círculo Druídico',
    description: 'No 2º nível, você escolhe identificar-se com um círculo de druidas.',
    level: 2,
  },
  {
    id: 'abilityScoreImprovement',
    name: 'Incremento no Valor de Habilidade',
    description: 'Quando você atinge o 4º nível e novamente no 8º, 12º, 16º e 19º nível, você pode aumentar um valor de habilidade à sua escolha em 2 ou você pode aumentar dois valores de habilidade à sua escolha em 1.',
    level: 4,
  },
  {
    id: 'timelessBody',
    name: 'Corpo Atemporal',
    description: 'A partir do 18º nível, a magia primal que você empunha faz com que você envelheça mais lentamente.',
    level: 18,
  },
  {
    id: 'beastSpells',
    name: 'Magias da Besta',
    description: 'Começando no 18º nível, você pode conjurar muitas de suas magias de druida em qualquer forma que você assumir usando Forma Selvagem.',
    level: 18,
  },
  {
    id: 'archdruid',
    name: 'Arquidruida',
    description: 'No 20º nível, você pode usar sua Forma Selvagem um número ilimitado de vezes.',
    level: 20,
  },
  // Nova habilidade: Proteção da Natureza (Tasha's Cauldron)
  {
    id: 'natureProtection',
    name: 'Proteção da Natureza',
    description: 'Você pode gastar uma magia de 1º nível para conceder resistência contra dano não-mágico a você ou a um aliado por 1 minuto.',
    level: 5,  // Novo recurso introduzido por Tasha
  }
];

export const druidSubclasses: Record<string, SubclassFeature[]> = {
  'Círculo da Terra': [
    {
      name: 'Magia Adicional',
      description: 'Seu vínculo místico com a terra lhe concede a habilidade de conjurar certas magias.',
      level: 2,
      subclass: 'Círculo da Terra'
    },
    {
      name: 'Recuperação Natural',
      description: 'A partir do 2º nível, você pode recuperar uma parte de sua energia mágica sentando em meditação e comunhão com a natureza.',
      level: 2,
      subclass: 'Círculo da Terra',
      uses: { max: 1, rechargeOn: 'long' }
    },
    {
      name: 'Caminhada na Terra',
      description: 'A partir do 6º nível, se mover através de terreno difícil não-mágico não custa movimento extra.',
      level: 6,
      subclass: 'Círculo da Terra'
    },
    {
      name: 'Proteção da Natureza',
      description: 'Quando você atinge o 10º nível, você não pode ser enfeitiçado ou amedrontado por elementais ou feéricos.',
      level: 10,
      subclass: 'Círculo da Terra'
    },
    {
      name: 'Santuário da Natureza',
      description: 'Quando você atinge o 14º nível, criaturas do mundo natural sentem sua conexão com a natureza e se tornam hesitantes em atacá-lo.',
      level: 14,
      subclass: 'Círculo da Terra'
    }
  ],

  'Círculo da Lua': [
    {
      name: 'Forma Selvagem de Combate',
      description: 'Quando você escolhe este círculo no 2º nível, você ganha a habilidade de usar Forma Selvagem no seu turno como uma ação bônus.',
      level: 2,
      subclass: 'Círculo da Lua'
    },
    {
      name: 'Formas Circulares',
      description: 'As formas que você pode assumir são determinadas pelo seu nível de druida.',
      level: 2,
      subclass: 'Círculo da Lua'
    },
    {
      name: 'Ataque Primitivo',
      description: 'A partir do 6º nível, seus ataques em forma de besta contam como mágicos com o propósito de superar resistência e imunidade a ataques e danos não-mágicos.',
      level: 6,
      subclass: 'Círculo da Lua'
    },
    {
      name: 'Forma Selvagem Elemental',
      description: 'No 10º nível, você pode gastar dois usos de Forma Selvagem ao mesmo tempo para se transformar em um elemental de ar, terra, fogo ou água.',
      level: 10,
      subclass: 'Círculo da Lua'
    },
    {
      name: 'Mil Formas',
      description: 'No 14º nível, você aprendeu a usar magia para alterar sua forma física de formas mais sutis.',
      level: 14,
      subclass: 'Círculo da Lua'
    }
  ],
  // Nova subclasse adicionada por Tasha's Cauldron: Círculo da Aranha (opcional)
  'Círculo da Aranha': [
    {
      name: 'Teias Mágicas',
      description: 'Você pode conjurar magias de teia que podem imobilizar criaturas em um raio de 30 pés.',
      level: 2,
      subclass: 'Círculo da Aranha'
    },
    {
      name: 'Movimento Aracnídeo',
      description: 'Você pode escalar superfícies e se mover com agilidade impressionante, ignorando terreno difícil feito de teias.',
      level: 6,
      subclass: 'Círculo da Aranha'
    },
    {
      name: 'Teia Imunizante',
      description: 'Você ganha resistência contra dano de venenoso e pode ignorar os efeitos de venenos em sua forma aracnídea.',
      level: 10,
      subclass: 'Círculo da Aranha'
    }
  ]
};

export const druidAvailableSubclasses = [
  'Círculo da Terra',
  'Círculo da Lua',
  'Círculo da Aranha'  // Nova subclasse adicionada
];
