import { ClassFeature, SubclassFeature } from '../types';

export const warlockFeatures: ClassFeature[] = [
  {
    id: 'pact-magic',
    name: 'Pacto Mágico',
    description: 'Você pode lançar seus feitiços de warlock sem usar componentes materiais.',
    level: 1
  },
  {
    id: 'otherworldly-patron',
    name: 'Patrono Outro Plano',
    description: 'No 1º nível, você escolhe um patrono, que molda a natureza de sua magia e lhe concede características especiais.',
    level: 1
  },
  {
    id: 'pact-boon',
    name: 'Dádiva do Pacto',
    description: 'No 3º nível, seu patrono lhe concede uma dádiva por sua lealdade.',
    level: 3
  },
  {
    id: 'mystic-arcanum',
    name: 'Arcano Místico',
    description: 'No 11º nível, seu patrono lhe concede um arcanum místico, uma magia poderosa que você pode lançar uma vez por dia.',
    level: 11
  }
];

export const warlockSubclasses: Record<string, SubclassFeature[]> = {
  'The Archfey': [
    {
      name: 'Expanded Spell List',
      description: 'O Arquifada permite que você escolha de uma lista expandida de magias quando você aprende uma magia de warlock.',
      level: 1,
      subclass: 'The Archfey'
    },
    {
      name: 'Fey Presence',
      description: 'A partir do 1º nível, seu patrono concede a você a habilidade de projetar a presença sedutora e temerosa dos feéricos. Como uma ação, você pode fazer com que todas as criaturas em um cubo de 3 metros originado de você façam um teste de resistência de Sabedoria. As criaturas que falharem no teste ficam amedrontadas ou enfeitiçadas por você (à sua escolha) até o final do seu próximo turno.',
      level: 1,
      subclass: 'The Archfey',
      uses: {
        max: 1,
        rechargeOn: 'short'
      }
    },
    {
      name: 'Misty Escape',
      description: 'A partir do 6º nível, você pode sumir em uma nuvem de névoa em resposta ao dano. Quando você sofrer dano, você pode usar sua reação para ficar invisível e se teletransportar até 18 metros para um espaço desocupado que você possa ver.',
      level: 6,
      subclass: 'The Archfey',
      uses: {
        max: 1,
        rechargeOn: 'short'
      }
    },
    {
      name: 'Beguiling Defenses',
      description: 'Começando no 10º nível, seu patrono ensina como virar a magia de controle mental de um inimigo contra ele. Você é imune a ser enfeitiçado, e quando outra criatura tentar enfeitiçá-lo, você pode usar sua reação para tentar virar o encantamento de volta para aquela criatura.',
      level: 10,
      subclass: 'The Archfey'
    },
    {
      name: 'Dark Delirium',
      description: 'Começando no 14º nível, você pode mergulhar uma criatura em um reino ilusório. Como uma ação, escolha uma criatura que você possa ver a até 18 metros de você. Ela deve fazer um teste de resistência de Sabedoria. Se falhar, ela fica enfeitiçada ou amedrontada por você (à sua escolha) por 1 minuto ou até sua concentração ser quebrada.',
      level: 14,
      subclass: 'The Archfey',
      uses: {
        max: 1,
        rechargeOn: 'long'
      }
    }
  ],
  'The Fiend': [
    {
      name: 'Expanded Spell List',
      description: 'O Diabrete permite que você escolha de uma lista expandida de magias quando você aprende uma magia de warlock.',
      level: 1,
      subclass: 'The Fiend'
    },
    {
      name: 'Dark One\'s Blessing',
      description: 'A partir do 1º nível, quando você reduz um hospedeiro a 0 pontos de vida, você ganha pontos de vida temporários iguais ao seu nível de Carisma + seu nível de Warlock (mínimo de 1).',
      level: 1,
      subclass: 'The Fiend'
    },
    {
      name: 'Fiendish Resilience',
      description: 'A partir do 6º nível, você pode escolher um tipo de dano quando terminar um descanso curto ou longo. Você ganha resistência a esse tipo de dano até escolher um diferente com este recurso. O dano de armas mágicas ou de prata ignora essa resistência.',
      level: 6,
      subclass: 'The Fiend'
    },
    {
      name: 'Hurl Through Hell',
      description: 'Começando no 14º nível, quando você atinge uma criatura com um ataque, você pode usar este recurso para teletransportar instantaneamente a criatura para o Inferno. No final do seu próximo turno, o alvo retorna ao espaço de onde partiu, e deve fazer um teste de resistência de Sabedoria. Se falhar, a criatura sofre 10d10 de dano psíquico.',
      level: 14,
      subclass: 'The Fiend',
      uses: {
        max: 1,
        rechargeOn: 'long'
      }
    }
  ],
  'The Great Old One': [
    {
      name: 'Expanded Spell List',
      description: 'O Grande Ancião permite que você escolha de uma lista expandida de magias quando você aprende uma magia de warlock.',
      level: 1,
      subclass: 'The Great Old One'
    },
    {
      name: 'Awakened Mind',
      description: 'A partir do 1º nível, você pode se comunicar telepaticamente com qualquer criatura que você possa ver a até 9 metros de você. Você não precisa compartilhar um idioma com a criatura para que ela entenda suas mensagens telepáticas, mas a criatura deve ser capaz de entender pelo menos um idioma.',
      level: 1,
      subclass: 'The Great Old One'
    },
    {
      name: 'Entropic Ward',
      description: 'A partir do 6º nível, você pode usar sua reação para impor desvantagem na jogada de ataque de uma criatura contra você. Se o ataque errar você, seu próximo ataque contra essa criatura terá vantagem se você fizer esse ataque antes do final do seu próximo turno.',
      level: 6,
      subclass: 'The Great Old One',
      uses: {
        max: 1,
        rechargeOn: 'short'
      }
    },
    {
      name: 'Thought Shield',
      description: 'Começando no 10º nível, seus pensamentos não podem ser lidos por telepatia ou outros meios, a menos que você permita. Você também tem resistência a dano psíquico, e qualquer criatura que cause dano psíquico a você também sofre a mesma quantidade de dano.',
      level: 10,
      subclass: 'The Great Old One'
    },
    {
      name: 'Create Thrall',
      description: 'Começando no 14º nível, você pode infectar a mente de um humanoide diretamente. Você pode usar sua ação para tocar um humanoide incapacitado. Esse humanoide fica enfeitiçado por você até que uma magia de remoção de maldição seja lançada sobre ele, a condição de enfeitiçado seja removida ou você morra.',
      level: 14,
      subclass: 'The Great Old One',
      uses: {
        max: 1,
        rechargeOn: 'long'
      }
    }
  ],
  'The Hexblade': [
    {
      name: 'Expanded Spell List',
      description: 'O Hexblade permite que você escolha de uma lista expandida de magias quando você aprende uma magia de warlock.',
      level: 1,
      subclass: 'The Hexblade'
    },
    {
      name: 'Hexblade\'s Curse',
      description: 'A partir do 1º nível, como uma ação bônus, você pode amaldiçoar uma criatura que você possa ver a até 9 metros de você. A maldição dura 1 minuto. Para o alvo amaldiçoado, você ganha bônus de dano igual ao seu bônus de proficiência, tem alcance de crítico de 19-20 e recupera pontos de vida igual ao seu nível de Carisma + seu nível de Warlock (mínimo de 1) quando o alvo morre.',
      level: 1,
      subclass: 'The Hexblade',
      uses: {
        max: 1,
        rechargeOn: 'short'
      }
    },
    {
      name: 'Hex Warrior',
      description: 'A partir do 1º nível, você ganha proficiência com armas médias, escudos e armas de guerra. Além disso, quando você atinge o 3º nível neste classe, você pode vincular uma arma a você. A cada dia, você pode vincular duas armas, cada uma das quais você deve tocar no final de um longo descanso. Você só pode ter uma arma vinculada por vez. Se você tentar vincular uma segunda arma, o vínculo com a primeira arma termina. A arma deve ser uma que você seja proficiente. Você ganha proficiência com a arma se ainda não a tiver. Enquanto a arma estiver vinculada a você, você pode usar seu Carisma em vez de Força ou Destreza para as jogadas de ataque e dano que você faz usando esta arma. Esta vantagem se estende a cada arma que você invoca com qualquer dádiva de pacto.',
      level: 1,
      subclass: 'The Hexblade'
    },
    {
      name: 'Accursed Specter',
      description: 'A partir do 6º nível, você pode invocar o espírito de alguém que você matou. Quando você reduz um humanoide a 0 pontos de vida, você pode amaldiçoá-lo para se levantar como um espectro, em vez de morrer. O espectro está sob seu controle e luta ao seu lado. O espectro dura até o final do seu próximo descanso longo, momento em que desaparece para a vida após a morte.',
      level: 6,
      subclass: 'The Hexblade',
      uses: {
        max: 1,
        rechargeOn: 'long'
      }
    },
    {
      name: 'Armor of Hexes',
      description: 'A partir do 10º nível, o alvo da sua Maldição Hexblade tem desvantagem nas jogadas de ataque contra você.',
      level: 10,
      subclass: 'The Hexblade'
    },
    {
      name: 'Master of Hexes',
      description: 'A partir do 14º nível, você pode espalhar sua Maldição Hexblade de um alvo para outro. Quando o alvo amaldiçoado pela sua Maldição Hexblade morre, você pode aplicar a maldição a uma criatura diferente que você possa ver a até 9 metros de você, desde que não esteja amaldiçoada por esta característica. Quando você aplica a maldição desta forma, você não pode usar esta característica novamente até terminar um descanso longo.',
      level: 14,
      subclass: 'The Hexblade',
      uses: {
        max: 1,
        rechargeOn: 'long'
      }
    }
  ],
  'The Fathomless': [
    {
      name: 'Expanded Spell List',
      description: 'O Abissal permite que você escolha de uma lista expandida de magias quando você aprende uma magia de warlock.',
      level: 1,
      subclass: 'The Fathomless'
    },
    {
      name: 'Tentacle of the Deeps',
      description: 'No 1º nível, você pode invocar um tentáculo de energia marinha. Como uma ação bônus, você pode fazer com que um tentáculo mágico apareça em um ponto que você possa ver a até 27 metros de você. O tentáculo dura 1 minuto. Quando você conjura o tentáculo, e como uma ação bônus em seus turnos subsequentes, você pode movê-lo até 9 metros e repetir o dano. Quando você conjura o tentáculo, você pode fazer com que ele ataque uma criatura a até 1,5 metro dele. Faça um ataque mágico à distância. Se atingir, o alvo sofre dano de frio igual a 1d8 + seu modificador de Carisma. Além disso, você pode se teletransportar para o espaço do tentáculo como uma ação bônus.',
      level: 1,
      subclass: 'The Fathomless',
      uses: {
        max: 1,
        rechargeOn: 'short'
      }
    },
    {
      name: 'Oceanic Soul',
      description: 'A partir do 1º nível, você ganha resistência a dano de frio e ganha uma velocidade de natação de 12 metros.',
      level: 1,
      subclass: 'The Fathomless'
    },
     {
      name: 'Gift of the Sea',
      description: 'A partir do 6º nível, você pode conceder a si mesmo e aos outros a capacidade de respirar debaixo d\'água e uma velocidade de natação. Como uma ação, você pode tocar uma criatura disposta e conceder a ela (ou a si mesmo) os seguintes benefícios por 1 hora: A criatura pode respirar debaixo d\'água e ganha uma velocidade de natação igual à sua velocidade de caminhada.',
      level: 6,
      subclass: 'The Fathomless',
      uses: {
        max: 1,
        rechargeOn: 'short'
      }
    },
    {
      name: 'Guardian Coil',
      description: 'A partir do 10º nível, seu Tentáculo das Profundezas pode proteger você ou seus aliados. Quando você ou uma criatura que você possa ver a até 9 metros de você for atingida por um ataque, você pode usar sua reação para fazer com que o tentáculo se teletransporte para essa criatura e conceda resistência a esse ataque. Você deve conjurar o tentáculo antes de usar este recurso.',
      level: 10,
      subclass: 'The Fathomless'
    },
    {
      name: 'Fathomless Plunge',
      description: 'Começando no 14º nível, você pode se teletransportar e outros para um corpo de água. Como uma ação, você, junto com até cinco criaturas dispostas que você possa ver a até 9 metros de você, se teletransportam para um corpo de água que você já viu. O corpo de água deve ser grande o suficiente para conter todos vocês. Você deve estar a até 1,5 metro do corpo de água quando usar este recurso. Você pode permanecer no corpo de água por até 1 hora, momento em que você e as criaturas que se teletransportaram com você são teletransportados de volta para o espaço de onde você partiu ou para o espaço desocupado mais próximo se esse espaço estiver ocupado.',
      level: 14,
      subclass: 'The Fathomless',
      uses: {
        max: 1,
        rechargeOn: 'long'
      }
    }
  ],
  'The Genie': [
    {
      name: 'Expanded Spell List',
      description: 'O Gênio permite que você escolha de uma lista expandida de magias quando você aprende uma magia de warlock.',
      level: 1,
      subclass: 'The Genie'
    },
    {
      name: 'Genie\'s Wrath',
      description: 'No 1º nível, você pode adicionar dano extra a um de seus ataques. Uma vez em cada um de seus turnos quando você atinge uma criatura com um ataque, você pode causar dano extra ao alvo. O dano é igual ao seu bônus de proficiência, e o tipo de dano é determinado pelo seu tipo de gênio: Djinni (trovão), Efreeti (fogo), Dao (terra) ou Marid (frio).',
      level: 1,
      subclass: 'The Genie',
      uses: {
        max: 1,
        rechargeOn: 'short'
      }
    },
    {
      name: 'Elemental Gift',
      description: 'A partir do 1º nível, você pode se esconder dentro de uma pequena joia. Como uma ação bônus, você pode entrar em um estado de descanso dentro de sua joia, que você carrega ou outra criatura carrega. Enquanto estiver dentro, você pode sentir os arredores da joia a até 9 metros de distância. Você pode permanecer dentro da joia por até 10 minutos de cada vez. Enquanto estiver dentro, você ganha resistência a um tipo de dano, determinado pelo seu tipo de gênio: Djinni (trovão), Efreeti (fogo), Dao (terra) ou Marid (frio). Como uma ação bônus, você pode sair da joia em um espaço desocupado a até 1,5 metro dela.',
      level: 1,
      subclass: 'The Genie',
      uses: {
        max: 1,
        rechargeOn: 'short'
      }
    },
    {
      name: 'Sanctuary Vessel',
      description: 'A partir do 6º nível, sua joia se torna um refúgio. Enquanto estiver dentro, você pode trazer até cinco criaturas dispostas com você. Quando você se teletransporta usando sua característica de Mergulho Abissal, você também pode trazer as criaturas que estão dentro da joia com você.',
      level: 6,
      subclass: 'The Genie',
      uses: {
        max: 1,
        rechargeOn: 'short'
      }
    },
    {
      name: 'Mantle of Majesty',
      description: 'A partir do 10º nível, você pode se cercar de uma aura de majestade. Como uma ação bônus, você ganha os seguintes benefícios por 1 minuto: Você tem vantagem em testes de Carisma. Uma vez em cada um dos turnos de outras criaturas, essa criatura deve ter sucesso em um teste de resistência de Sabedoria ou atacar o alvo mais próximo de você.',
      level: 10,
      subclass: 'The Genie',
      uses: {
        max: 1,
        rechargeOn: 'long'
      }
    },
    {
      name: 'Limited Wish',
      description: 'Começando no 14º nível, você pode pedir a seu gênio para conceder um desejo limitado. Como uma ação, você pode pedir a seu gênio para lançar uma magia de 6º nível ou inferior. Uma vez que você usa este recurso, você não pode usá-lo novamente até terminar um descanso longo.',
      level: 14,
      subclass: 'The Genie',
      uses: {
        max: 1,
        rechargeOn: 'long'
      }
    }
  ]
};

export const warlockAvailableSubclasses = [
  'The Archfey',
  'The Fiend', 
  'The Great Old One',
  'The Hexblade',
  'The Fathomless',
  'The Genie'
];
