
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
  ]
};

export const clericAvailableSubclasses = ['Domínio da Forja', 'Domínio da Tumba', 'Domínio da Ordem', 'Domínio da Paz', 'Domínio do Crepúsculo'];
