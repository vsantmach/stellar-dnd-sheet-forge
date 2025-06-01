
import { ClassFeature, SubclassFeature } from '../types';

export const barbarianFeatures: ClassFeature[] = [
  {
    id: 'rage',
    name: 'Fúria',
    description: 'Você pode entrar em fúria como uma ação bônus.',
    level: 1,
  },
  {
    id: 'unarmoredDefense',
    name: 'Defesa sem Armadura',
    description: 'Enquanto não estiver usando armadura, sua CA é igual a 10 + seu modificador de Des + seu modificador de Con.',
    level: 1,
  },
  {
    id: 'recklessAttack',
    name: 'Ataque Imprudente',
    description: 'Você pode atacar com vantagem, mas os ataques contra você também têm vantagem.',
    level: 2,
  },
  {
    id: 'dangerSense',
    name: 'Sentido de Perigo',
    description: 'Você tem vantagem em testes de resistência de Destreza contra efeitos que pode ver.',
    level: 2,
  }
];

export const barbarianSubclasses: Record<string, SubclassFeature[]> = {
  'Caminho do Ancestral Guardião': [
    {
      name: 'Protetores Ancestrais',
      description: 'Espíritos ancestrais o acompanham e ajudam seus aliados. Enquanto está em fúria, a primeira criatura que atacar em cada turno fica marcada pelos espíritos.',
      level: 3,
      subclass: 'Caminho do Ancestral Guardião'
    },
    {
      name: 'Escudo Espiritual',
      description: 'Os espíritos guardiões podem proteger outros. Quando uma criatura que você pode ver a até 9 metros sofre dano, pode usar sua reação para reduzir o dano.',
      level: 6,
      subclass: 'Caminho do Ancestral Guardião',
      uses: { max: 1, rechargeOn: 'short' }
    }
  ],

  'Caminho da Magia Selvagem': [
    {
      name: 'Surto de Magia',
      description: 'A magia dentro de você irrompe. Quando entra em fúria, role na tabela de Surto de Magia Selvagem para determinar o efeito mágico.',
      level: 3,
      subclass: 'Caminho da Magia Selvagem'
    },
    {
      name: 'Telepatia',
      description: 'Você pode se comunicar telepaticamente com uma criatura disposta. Como ação bônus, escolha uma criatura que pode ver a até 9 metros.',
      level: 6,
      subclass: 'Caminho da Magia Selvagem'
    }
  ],

  'Caminho da Fera': [
    {
      name: 'Forma da Fera',
      description: 'Quando entra em fúria, pode se transformar, revelando a fera interior. Escolha uma das seguintes opções: Mordida, Cauda ou Garras.',
      level: 3,
      subclass: 'Caminho da Fera'
    },
    {
      name: 'Alma Bestial',
      description: 'A fera interior se torna mais poderosa. Quando terminar um descanso curto ou longo, escolhe uma das seguintes opções: Natação, Escalada, Salto ou Rastreamento.',
      level: 6,
      subclass: 'Caminho da Fera'
    }
  ]
};

export const barbarianAvailableSubclasses = ['Caminho do Ancestral Guardião', 'Caminho da Magia Selvagem', 'Caminho da Fera'];
