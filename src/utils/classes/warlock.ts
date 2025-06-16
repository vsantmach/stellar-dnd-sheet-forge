
import { ClassFeature, SubclassFeature } from '../types';

export const warlockFeatures: ClassFeature[] = [
  {
    id: 'pact-magic',
    name: 'Pacto Mágico',
    description: 'Sua pesquisa arcana e a magia outorgada a você por seu patrono lhe deram facilidade com magias.',
    level: 1
  },
  {
    id: 'otherworldly-patron',
    name: 'Patrono Sobrenatural',
    description: 'No 1º nível, você fez um pacto com um ser sobrenatural de sua escolha.',
    level: 1
  },
  {
    id: 'pact-boon',
    name: 'Dádiva do Pacto',
    description: 'No 3º nível, seu patrono sobrenatural lhe concede uma dádiva por seus leais serviços.',
    level: 3
  },
  {
    id: 'mystic-arcanum',
    name: 'Arcano Místico',
    description: 'No 11º nível, seu patrono lhe concede um segredo mágico chamado arcanum.',
    level: 11
  }
];

export const warlockSubclasses: Record<string, SubclassFeature[]> = {
  // Player's Handbook
  'O Arquifada': [
    {
      name: 'Lista de Magias Expandida',
      description: 'O Arquifada permite que você escolha de uma lista expandida de magias quando você aprende uma magia de bruxo.',
      level: 1,
      subclass: 'O Arquifada'
    },
    {
      name: 'Presença Feérica',
      description: 'A partir do 1º nível, seu patrono concede a você a habilidade de projetar a presença sedutora e temerosa dos feéricos.',
      level: 1,
      subclass: 'O Arquifada',
      uses: {
        max: 1,
        rechargeOn: 'short'
      }
    },
    {
      name: 'Fuga Nebulosa',
      description: 'A partir do 6º nível, você pode sumir em uma nuvem de névoa em resposta ao dano.',
      level: 6,
      subclass: 'O Arquifada',
      uses: {
        max: 1,
        rechargeOn: 'short'
      }
    },
    {
      name: 'Defesas Cativantes',
      description: 'Começando no 10º nível, seu patrono ensina como virar a magia de controle mental de um inimigo contra ele.',
      level: 10,
      subclass: 'O Arquifada'
    },
    {
      name: 'Delírio Sombrio',
      description: 'Começando no 14º nível, você pode mergulhar uma criatura em um reino ilusório.',
      level: 14,
      subclass: 'O Arquifada',
      uses: {
        max: 1,
        rechargeOn: 'long'
      }
    }
  ],

  'O Corruptor': [
    {
      name: 'Lista de Magias Expandida',
      description: 'O Corruptor permite que você escolha de uma lista expandida de magias quando você aprende uma magia de bruxo.',
      level: 1,
      subclass: 'O Corruptor'
    },
    {
      name: 'Benção do Sombrio',
      description: 'A partir do 1º nível, quando você reduz uma criatura hostil a 0 pontos de vida, você ganha pontos de vida temporários iguais ao seu modificador de Carisma + seu nível de bruxo (mínimo de 1).',
      level: 1,
      subclass: 'O Corruptor'
    },
    {
      name: 'Resistência Diabólica',
      description: 'A partir do 6º nível, você pode escolher um tipo de dano quando terminar um descanso curto ou longo.',
      level: 6,
      subclass: 'O Corruptor'
    },
    {
      name: 'Sorte do Sombrio',
      description: 'A partir do 10º nível, você pode invocar seu patrono para alterar o destino a seu favor.',
      level: 10,
      subclass: 'O Corruptor',
      uses: {
        max: 1,
        rechargeOn: 'short'
      }
    },
    {
      name: 'Arremessar Através do Inferno',
      description: 'Começando no 14º nível, quando você atinge uma criatura com um ataque, você pode usar este recurso para instantaneamente transportar o alvo através dos planos inferiores.',
      level: 14,
      subclass: 'O Corruptor',
      uses: {
        max: 1,
        rechargeOn: 'long'
      }
    }
  ],

  'O Grande Antigo': [
    {
      name: 'Lista de Magias Expandida',
      description: 'O Grande Antigo permite que você escolha de uma lista expandida de magias quando você aprende uma magia de bruxo.',
      level: 1,
      subclass: 'O Grande Antigo'
    },
    {
      name: 'Mente Desperta',
      description: 'A partir do 1º nível, sua mente alienígena lhe concede a habilidade de tocar outras mentes com telepática.',
      level: 1,
      subclass: 'O Grande Antigo'
    },
    {
      name: 'Proteção Entrópica',
      description: 'No 6º nível, você aprende a se proteger magicamente contra ataques e a virar o azar de um inimigo em boa sorte para você mesmo.',
      level: 6,
      subclass: 'O Grande Antigo',
      uses: {
        max: 1,
        rechargeOn: 'short'
      }
    },
    {
      name: 'Escudo Mental',
      description: 'Começando no 10º nível, seus pensamentos não podem ser lidos por telepatia ou outros meios, a menos que você permita.',
      level: 10,
      subclass: 'O Grande Antigo'
    },
    {
      name: 'Criar Lacaio',
      description: 'No 14º nível, você ganha a habilidade de infectar a mente de um humanoide com a magia alienígena de seu patrono.',
      level: 14,
      subclass: 'O Grande Antigo',
      uses: {
        max: 1,
        rechargeOn: 'long'
      }
    }
  ]
};

export const warlockAvailableSubclasses = [
  'O Arquifada',
  'O Corruptor',
  'O Grande Antigo'
];
