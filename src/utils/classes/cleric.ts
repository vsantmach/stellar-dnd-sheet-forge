import { ClassFeature, SubclassFeature } from '../types';

export const clericFeatures: ClassFeature[] = [
  {
    id: 'spellcasting',
    name: 'Conjuração',
    description: 'Você pode conjurar magias de clérigo.',
    level: 1,
  },
  {
    id: 'divineSupport',
    name: 'Domínio Divino',
    description: 'Você escolhe um domínio relacionado à sua divindade.',
    level: 1,
  },
  {
    id: 'channelDivinity',
    name: 'Canalizar Divindade',
    description: 'Você pode canalizar energia divina diretamente de sua divindade.',
    level: 2,
  },
  {
    id: 'turnUndead',
    name: 'Expulsar Mortos-vivos',
    description: 'Como ação, você exibe seu símbolo sagrado e expulsa mortos-vivos.',
    level: 2,
  }
];

export const clericSubclasses: Record<string, SubclassFeature[]> = {
  'Domínio da Vida': [
    {
      name: 'Discípulo da Vida',
      description: 'Seus feitiços de cura são mais eficazes. Sempre que usar uma magia de 1º nível ou superior para restaurar PV, o alvo recupera PV adicionais igual a 2 + o nível da magia.',
      level: 1,
      subclass: 'Domínio da Vida'
    }
  ],
  'Domínio do Conhecimento': [
    {
      name: 'Bênção do Conhecimento',
      description: 'Você aprende dois idiomas à sua escolha e ganha proficiência com duas perícias à sua escolha entre Arcana, História, Natureza ou Religião.',
      level: 1,
      subclass: 'Domínio do Conhecimento'
    }
  ],
  'Domínio da Tempestade': [
    {
      name: 'Fúria da Tempestade',
      description: 'Como reação, quando for atingido por um ataque corpo a corpo, pode causar dano elétrico ao atacante.',
      level: 1,
      subclass: 'Domínio da Tempestade'
    },
    {
      name: 'Fúria Trovejante',
      description: 'Quando você usar um efeito de relâmpago ou trovão, pode empurrar criaturas até 3 metros para longe.',
      level: 1,
      subclass: 'Domínio da Tempestade'
    }
  ],
  'Domínio da Guerra': [
    {
      name: 'Proeficiência Bônus',
      description: 'Você ganha proficiência com armaduras pesadas e armas marciais.',
      level: 1,
      subclass: 'Domínio da Guerra'
    },
    {
      name: 'Golpe de Guerra',
      description: 'Quando realiza um ataque com arma como ação, pode fazer outro ataque como reação. Usos limitados por descanso.',
      level: 1,
      subclass: 'Domínio da Guerra',
      uses: { max: 1, rechargeOn: 'short' }
    }
  ],
  'Domínio do Engano': [
    {
      name: 'Bênção do Engano',
      description: 'Você pode usar sua ação para tocar uma criatura e conceder-lhe vantagem em testes de Furtividade por 1 hora, ou até que ela ataque ou lance uma magia.',
      level: 1,
      subclass: 'Domínio do Engano',
      uses: { max: 1, rechargeOn: 'short' }
    }
  ],
  'Domínio da Natureza': [
    {
      name: 'Acolhido pela Natureza',
      description: 'Você ganha um truque de druida à sua escolha. Também ganha proficiência com armaduras pesadas e com uma perícia entre Adestrar Animais, Natureza ou Sobrevivência.',
      level: 1,
      subclass: 'Domínio da Natureza'
    }
  ],
  'Domínio da Forja': [
    {
      name: 'Proficiências Bônus',
      description: 'Você ganha proficiência com armaduras pesadas e ferramentas de ferreiro.',
      level: 1,
      subclass: 'Domínio da Forja'
    },
    {
      name: 'Bênção da Forja',
      description: 'Pode imbuir magia em uma arma ou armadura. Ao final de um descanso longo, pode tocar uma arma ou armadura não mágica.',
      level: 1,
      subclass: 'Domínio da Forja'
    },
    {
      name: 'Canalizar Divindade: Benção do Artífice',
      description: 'Pode usar Canalizar Divindade para criar um item simples. Você conduz uma oração de 1 hora, ao final da qual você toca um metal não mágico.',
      level: 2,
      subclass: 'Domínio da Forja'
    }
  ],
  'Domínio da Tumba': [
    {
      name: 'Círculo da Mortalidade',
      description: 'Você ganha a habilidade de manipular a linha entre vida e morte. Magias de cura têm efeito máximo em criaturas com 0 pontos de vida.',
      level: 1,
      subclass: 'Domínio da Tumba'
    },
    {
      name: 'Olhos da Tumba',
      description: 'Você ocasionalmente vislumbra sinais do destino de uma criatura. Como ação, pode determinar se uma criatura é morta-viva.',
      level: 1,
      subclass: 'Domínio da Tumba'
    },
    {
      name: 'Canalizar Divindade: Caminho para a Tumba',
      description: 'Pode usar Canalizar Divindade para marcar uma criatura viva para a morte. Escolha uma criatura viva a até 9 metros.',
      level: 2,
      subclass: 'Domínio da Tumba'
    }
  ],
  'Domínio da Ordem': [
    {
      name: 'Proficiências Bônus',
      description: 'Você ganha proficiência com armaduras pesadas e pode escolher entre Intimidação ou Persuasão.',
      level: 1,
      subclass: 'Domínio da Ordem'
    },
    {
      name: 'Voz da Autoridade',
      description: 'Você pode invocar o poder da lei para instigar um aliado a atacar. Se lançar uma magia de 1º nível ou superior e alvejar um aliado, ele pode atacar.',
      level: 1,
      subclass: 'Domínio da Ordem'
    },
    {
      name: 'Canalizar Divindade: Comando de Ordem',
      description: 'Pode usar Canalizar Divindade para exercer um comando irresistível. Como ação, escolha uma criatura a até 18 metros.',
      level: 2,
      subclass: 'Domínio da Ordem'
    }
  ],
  'Domínio da Paz': [
    {
      name: 'Implemento da Paz',
      description: 'Você ganha proficiência com Intuição, Performance ou Persuasão (à sua escolha).',
      level: 1,
      subclass: 'Domínio da Paz'
    },
    {
      name: 'Elo Enpático',
      description: 'Você pode forjar um elo empático entre pessoas gentis. Como ação, escolha um número de criaturas dispostas igual ao seu bônus de proficiência.',
      level: 1,
      subclass: 'Domínio da Paz',
      uses: { max: 1, rechargeOn: 'long' }
    },
    {
      name: 'Canalizar Divindade: Bálsamo da Paz',
      description: 'Pode usar Canalizar Divindade para tornar o ambiente ao redor mais pacífico. Como ação, você se move sem provocar ataques de oportunidade.',
      level: 2,
      subclass: 'Domínio da Paz'
    }
  ],
  'Domínio do Crepúsculo': [
    {
      name: 'Proficiências Bônus',
      description: 'Você ganha proficiência com armas marciais e armaduras pesadas.',
      level: 1,
      subclass: 'Domínio do Crepúsculo'
    },
    {
      name: 'Olhos da Noite',
      description: 'Você pode ver através da escuridão. Você tem visão no escuro com alcance de 90 metros.',
      level: 1,
      subclass: 'Domínio do Crepúsculo'
    },
    {
      name: 'Santuário do Crepúsculo',
      description: 'Você pode refrescar seus aliados com sombras sedativas. Como ação, você apresenta seu símbolo sagrado.',
      level: 1,
      subclass: 'Domínio do Crepúsculo',
      uses: { max: 1, rechargeOn: 'long' }
    }
  ],
  'Domínio da Gravidade': [
    {
      name: 'Obrigações do Equilíbrio',
      description: 'Você pode manipular forças gravitacionais sutis. Pode escolher entre Percepção ou Intuição e aprende a magia “feixe gravitacional”.',
      level: 1,
      subclass: 'Domínio da Gravidade'
    },
    {
      name: 'Pressão de Gravidade',
      description: 'Como ação, você invoca um campo gravitacional. Criaturas em uma área de 3 metros devem realizar um teste de Força ou sofrer dano e ficarem caídas.',
      level: 1,
      subclass: 'Domínio da Gravidade',
      uses: { max: 1, rechargeOn: 'long' }
    },
    {
      name: 'Canalizar Divindade: Bem da Gravidade',
      description: 'Pode usar Canalizar Divindade para criar um poço gravitacional. Todas as criaturas a até 9 metros do ponto escolhido são puxadas para ele.',
      level: 2,
      subclass: 'Domínio da Gravidade'
    }
  ],
  'Domínio do Fogo Solar': [
    {
      name: 'Luz Restauradora',
      description: 'Você aprende a magia “Palavra Curativa” e pode usá-la sem gasto de espaço. Também adiciona +1d4 de cura adicional.',
      level: 1,
      subclass: 'Domínio do Fogo Solar'
    },
    {
      name: 'Raio Radiante',
      description: 'Como ação, pode disparar um raio de energia radiante que causa dano e ofusca o inimigo.',
      level: 1,
      subclass: 'Domínio do Fogo Solar',
      uses: { max: 1, rechargeOn: 'long' }
    },
    {
      name: 'Canalizar Divindade: Raio Incandescente',
      description: 'Pode usar Canalizar Divindade para liberar um feixe radiante. Todas as criaturas em uma linha de 9 metros sofrem dano radiante.',
      level: 2,
      subclass: 'Domínio do Fogo Solar'
    }
  ]
};

export const clericAvailableSubclasses = [
  'Domínio da Vida',
  'Domínio do Conhecimento',
  'Domínio da Tempestade',
  'Domínio da Guerra',
  'Domínio do Engano',
  'Domínio da Natureza',
  'Domínio da Forja',
  'Domínio da Tumba',
  'Domínio da Ordem',
  'Domínio da Paz',
  'Domínio do Crepúsculo',
  'Domínio da Gravidade',
  'Domínio do Fogo Solar'
];
