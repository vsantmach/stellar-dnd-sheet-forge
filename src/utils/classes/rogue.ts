
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
      description: 'Você pode escalar mais rapidamente que o normal; escalar não custa movimento extra para você. Além disso, quando você faz um salto correndo, a distância que você cobre aumenta em um número de metros igual ao seu modificador de Destreza.',
      level: 3,
      subclass: 'Ladrão'
    },
    {
      name: 'Escalada de Segundo Andar',
      description: 'Você ganha a habilidade de escalar mais rapidamente que o normal; escalar não custa movimento extra para você.',
      level: 3,
      subclass: 'Ladrão'
    },
    {
      name: 'Usar Objeto Mágico',
      description: 'Você aprendeu o suficiente sobre o funcionamento da magia para poder improvisar o uso de itens mesmo quando eles não são destinados para você.',
      level: 13,
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
      description: 'Você é mais mortal quando consegue a vantagem da surpresa. Você tem vantagem nas jogadas de ataque contra qualquer criatura que ainda não tenha agido no combate.',
      level: 3,
      subclass: 'Assassino'
    },
    {
      name: 'Especialização em Infiltração',
      description: 'Você pode criar falsas identidades para si mesmo. Você deve gastar uma semana e 25 po para estabelecer os antecedentes, história e aparência de uma identidade.',
      level: 9,
      subclass: 'Assassino'
    },
    {
      name: 'Impostor',
      description: 'No 13º nível, você ganha a habilidade de imitar infalivelmente a fala, escrita e comportamento de outra pessoa.',
      level: 13,
      subclass: 'Assassino'
    },
    {
      name: 'Golpe Mortal',
      description: 'No 17º nível, você se torna um mestre da morte instantânea. Quando você ataca e atinge uma criatura que está surpresa, ela deve fazer um teste de resistência de Constituição (CD 8 + seu modificador de Destreza + seu bônus de proficiência).',
      level: 17,
      subclass: 'Assassino'
    }
  ],

  'Trapaceiro Arcano': [
    {
      name: 'Conjuração',
      description: 'Você ganha a habilidade de conjurar magias. Veja o capítulo 10 para as regras gerais de conjuração e o capítulo 11 para a lista de magias de mago.',
      level: 3,
      subclass: 'Trapaceiro Arcano'
    },
    {
      name: 'Prestidigitação de Mage Hand',
      description: 'Quando você conjura mage hand, você pode tornar a mão espectral invisível, e pode realizar as seguintes tarefas adicionais com ela: Você pode guardar um objeto que a mão está segurando em um recipiente vestido ou carregado por outra criatura.',
      level: 3,
      subclass: 'Trapaceiro Arcano'
    },
    {
      name: 'Emboscada Mágica',
      description: 'No 9º nível, você ganha a habilidade de imbur sua Arma de Ataque Furtivo com magia de força, fazendo com que ela cause dano de força.',
      level: 9,
      subclass: 'Trapaceiro Arcano'
    },
    {
      name: 'Ladrão Versátil',
      description: 'No 13º nível, você ganha a habilidade de distrair alvos com sua Prestidigitação de Mage Hand.',
      level: 13,
      subclass: 'Trapaceiro Arcano'
    },
    {
      name: 'Surpresa Mágica',
      description: 'No 17º nível, você ganha a habilidade de roubar o conhecimento de como conjurar uma magia e conjurá-la você mesmo.',
      level: 17,
      subclass: 'Trapaceiro Arcano'
    }
  ]
};

export const rogueAvailableSubclasses = [
  'Ladrão',
  'Assassino',
  'Trapaceiro Arcano'
];
