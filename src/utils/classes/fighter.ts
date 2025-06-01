
import { ClassFeature, SubclassFeature } from '../types';

export const fighterFeatures: ClassFeature[] = [
  {
    id: 'fightingStyle',
    name: 'Estilo de Luta',
    description: 'Você adota um estilo particular de luta como sua especialidade.',
    level: 1,
  },
  {
    id: 'secondWind',
    name: 'Fôlego',
    description: 'Você tem uma reserva limitada de resistência na qual pode recorrer para se proteger contra danos.',
    level: 1,
    uses: { max: 1, current: 1, rechargeOn: 'short' }
  },
  {
    id: 'actionSurge',
    name: 'Surto de Ação',
    description: 'Você pode se esforçar além dos seus limites normais por um momento.',
    level: 2,
    uses: { max: 1, current: 1, rechargeOn: 'short' }
  },
  {
    id: 'extraAttack',
    name: 'Ataque Extra',
    description: 'Você pode atacar duas vezes, em vez de uma, sempre que realizar a ação Atacar em seu turno.',
    level: 5,
  }
];

export const fighterSubclasses: Record<string, SubclassFeature[]> = {
  // Player's Handbook
  'Campeão': [
    {
      name: 'Crítico Aprimorado',
      description: 'Seus ataques com armas têm um alcance de crítico de 19-20.',
      level: 3,
      subclass: 'Campeão'
    },
    {
      name: 'Atleta Notável',
      description: 'Você pode adicionar metade do seu bônus de proficiência (arredondado para cima) a qualquer teste de Força, Destreza ou Constituição que você fizer que não use seu bônus de proficiência.',
      level: 7,
      subclass: 'Campeão'
    }
  ],

  'Mestre de Batalha': [
    {
      name: 'Superioridade de Combate',
      description: 'Você aprende manobras que são alimentadas por dados especiais chamados dados de superioridade.',
      level: 3,
      subclass: 'Mestre de Batalha',
      uses: { max: 4, rechargeOn: 'short' }
    },
    {
      name: 'Conhecer Seu Inimigo',
      description: 'Se você gastar pelo menos 1 minuto observando ou interagindo com outra criatura fora do combate, pode aprender certas informações sobre suas capacidades.',
      level: 7,
      subclass: 'Mestre de Batalha'
    }
  ],

  'Cavaleiro Élfico': [
    {
      name: 'Conjuração',
      description: 'Você aprende a complementar suas proezas marciais com a habilidade de conjurar magias.',
      level: 3,
      subclass: 'Cavaleiro Élfico'
    },
    {
      name: 'Vínculo com Arma',
      description: 'Você aprende um ritual que cria um vínculo mágico entre você e uma arma.',
      level: 3,
      subclass: 'Cavaleiro Élfico'
    }
  ],

  // Xanathar's Guide
  'Arcano Archer': [
    {
      name: 'Tiro Arcano',
      description: 'Você aprende a desatar magia especial com alguns de seus tiros. Quando você ganha essa característica, aprende duas opções de Tiro Arcano.',
      level: 3,
      subclass: 'Arcano Archer',
      uses: { max: 2, rechargeOn: 'short' }
    },
    {
      name: 'Flecha Mágica',
      description: 'Você ganha a habilidade de imbuir flechas (ou virotes) com magia. Sempre que você disparar uma flecha não mágica de um arco curto ou longo, pode torná-la mágica.',
      level: 7,
      subclass: 'Arcano Archer'
    }
  ],

  'Cavalier': [
    {
      name: 'Marca do Cavalier',
      description: 'Você pode menear seus inimigos em combate, frustrando os ataques deles e punindo-os por agredir outros.',
      level: 3,
      subclass: 'Cavalier'
    },
    {
      name: 'Proteção Nobre',
      description: 'Você aprende como guardar os que estão próximos de você. Quando uma criatura que você pode ver atacar um alvo diferente de você que está a até 1,5 metros de você, pode usar sua reação para impor desvantagem na jogada de ataque.',
      level: 7,
      subclass: 'Cavalier'
    }
  ],

  'Samurai': [
    {
      name: 'Espírito de Luta',
      description: 'Você abraça um espírito de luta que lhe dá velocidade sobrenatural. Você pode se dar vantagem em jogadas de ataque com armas durante esse turno.',
      level: 3,
      subclass: 'Samurai',
      uses: { max: 3, rechargeOn: 'long' }
    },
    {
      name: 'Cortesia Elegante',
      description: 'Você ganha proficiência em uma das seguintes habilidades à sua escolha: História, Intuição, Performance ou Persuasão.',
      level: 7,
      subclass: 'Samurai'
    }
  ],

  // Tasha's Cauldron
  'Eco Knight': [
    {
      name: 'Manifestar Eco',
      description: 'Você pode usar uma ação bônus para manifestar magicamente um eco de si mesmo em um espaço desocupado que pode ver a até 4,5 metros de você.',
      level: 3,
      subclass: 'Eco Knight'
    },
    {
      name: 'Libertar Encarnação',
      description: 'Você pode aumentar a violência do seu eco. Sempre que você realizar a ação Atacar, pode fazer um ataque adicional a partir da posição do seu eco.',
      level: 3,
      subclass: 'Eco Knight',
      uses: { max: 1, rechargeOn: 'long' }
    }
  ],

  'Cavaleiro Rúnico': [
    {
      name: 'Gravação Rúnica',
      description: 'Você pode usar ferramentas de pedreiro para gravar runas especiais em objetos. Você aprende duas runas à sua escolha.',
      level: 3,
      subclass: 'Cavaleiro Rúnico'
    },
    {
      name: 'Pedra de Runas',
      description: 'Você aprende como usar runas para aprimorar seu equipamento. Quando você termina um descanso longo, pode tocar um número de objetos igual ao número de runas que você conhece.',
      level: 3,
      subclass: 'Cavaleiro Rúnico'
    }
  ],

  'Mão Púrpura': [
    {
      name: 'Tentáculos Éldritch',
      description: 'Você pode invocar seu braço éldritch. Como ação bônus, pode manifestar um tentáculo espectral que emerge de você.',
      level: 3,
      subclass: 'Mão Púrpura'
    },
    {
      name: 'Mente Aberrante',
      description: 'A influência alienígena corrompe sua mente de maneiras sutis mas profundas. Você pode se comunicar telepaticamente com qualquer criatura que você pode ver a até 9 metros.',
      level: 7,
      subclass: 'Mão Púrpura'
    }
  ]
};

export const fighterAvailableSubclasses = [
  'Campeão',
  'Mestre de Batalha', 
  'Cavaleiro Élfico',
  'Arcano Archer',
  'Cavalier',
  'Samurai',
  'Eco Knight',
  'Cavaleiro Rúnico',
  'Mão Púrpura'
];
