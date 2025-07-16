
import { ClassFeature, SubclassFeature } from '../types';

export const barbarianFeatures: ClassFeature[] = [
  {
    id: 'rage',
    name: 'Fúria',
    description: 'Em batalha, você luta com uma ferocidade primitiva. No seu turno, você pode entrar em fúria com uma ação bônus.',
    level: 1,
  },
  {
    id: 'unarmoredDefense',
    name: 'Defesa sem Armadura',
    description: 'Enquanto você não estiver vestindo qualquer armadura, sua Classe de Armadura será 10 + seu modificador de Destreza + seu modificador de Constituição.',
    level: 1,
  },
  {
    id: 'recklessAttack',
    name: 'Ataque Imprudente',
    description: 'A partir do 2º nível, você pode desistir de toda preocupação com defesa para atacar com um desespero feroz.',
    level: 2,
  },
  {
    id: 'dangerSense',
    name: 'Sentido de Perigo',
    description: 'No 2º nível, você adquire um sentido sobrenatural de quando as coisas próximas não estão como deveriam, concedendo a você uma chance maior quando se esquiva de perigos.',
    level: 2,
  },
  // Nova habilidade: Fúria Melhorada (Tasha's Cauldron)
  {
    id: 'improvedRage',
    name: 'Fúria Melhorada',
    description: 'No 3º nível, sua fúria se torna mais intensa, permitindo que você cause mais dano e tenha resistência a mais tipos de dano enquanto estiver em fúria.',
    level: 3,
  }
];

export const barbarianSubclasses: Record<string, SubclassFeature[]> = {
  'Caminho do Berserker': [
    {
      name: 'Frenesi',
      description: 'A partir do 3º nível, você pode entrar em um frenesi quando se enfurece. Se você o fizer, pela duração da sua fúria você pode fazer um único ataque corpo a corpo com arma como uma ação bônus em cada um dos seus turnos após este.',
      level: 3,
      subclass: 'Caminho do Berserker'
    },
    {
      name: 'Fúria Incansável',
      description: 'Começando no 6º nível, você não pode ser enfeitiçado ou amedrontado enquanto estiver em fúria. Se você já estiver enfeitiçado ou amedrontado quando entrar em fúria, o efeito é suspenso pela duração da fúria.',
      level: 6,
      subclass: 'Caminho do Berserker'
    },
    {
      name: 'Presença Intimidante',
      description: 'Começando no 10º nível, você pode usar sua ação para amedrontar alguém com sua presença ameaçadora.',
      level: 10,
      subclass: 'Caminho do Berserker',
      uses: {
        max: 1,
        rechargeOn: 'short'
      }
    },
    {
      name: 'Retaliação',
      description: 'A partir do 14º nível, quando você sofrer dano de uma criatura que esteja a 1,5 metro de você, você pode usar sua reação para fazer um ataque corpo a corpo com arma contra essa criatura.',
      level: 14,
      subclass: 'Caminho do Berserker'
    },
    // Nova habilidade: Fúria Turbinada (Tasha's Cauldron)
    {
      name: 'Fúria Turbinada',
      description: 'No 6º nível, você pode gastar um uso de fúria para ganhar uma ação adicional durante seu turno, permitindo fazer dois ataques corpo a corpo com armas ou outras ações de combate.',
      level: 6,
      subclass: 'Caminho do Berserker'
    }
  ],

  'Caminho do Guerreiro Totêmico': [
    {
      name: 'Buscador Espiritual',
      description: 'O Caminho do Guerreiro Totêmico é uma jornada espiritual, enquanto o bárbaro aceita um espírito animal como guia, protetor e inspiração.',
      level: 3,
      subclass: 'Caminho do Guerreiro Totêmico'
    },
    {
      name: 'Totem Spirit',
      description: 'No 3º nível, quando você adota este caminho, você escolhe um totem spirit e ganha sua característica. Você deve fazer ou adquirir um objeto totêmico físico.',
      level: 3,
      subclass: 'Caminho do Guerreiro Totêmico'
    },
    {
      name: 'Aspecto da Besta',
      description: 'No 6º nível, você ganha um benefício místico baseado no animal totêmico de sua escolha.',
      level: 6,
      subclass: 'Caminho do Guerreiro Totêmico'
    },
    {
      name: 'Caminhante Espiritual',
      description: 'No 10º nível, você pode conjurar a magia communar com a natureza, mas apenas como um ritual.',
      level: 10,
      subclass: 'Caminho do Guerreiro Totêmico'
    },
    {
      name: 'Sintonia Totêmica',
      description: 'No 14º nível, você ganha um benefício místico baseado no animal totêmico de sua escolha.',
      level: 14,
      subclass: 'Caminho do Guerreiro Totêmico'
    },
    // Nova habilidade: Força do Totem (Tasha's Cauldron)
    {
      name: 'Força do Totem',
      description: 'No 10º nível, você pode se comunicar com seu totem, adquirindo a habilidade de invocar sua força para aumentar seu poder de ataque por um curto período.',
      level: 10,
      subclass: 'Caminho do Guerreiro Totêmico'
    }
  ],

  // Nova subclasse: Caminho do Espírito Selvagem (Tasha's Cauldron)
  'Caminho do Espírito Selvagem': [
    {
      name: 'Manifestação Espiritual',
      description: 'A partir do 3º nível, você pode canalizar uma manifestação espiritual, ganhando um poder de ataque ou defesa temporário em combate.',
      level: 3,
      subclass: 'Caminho do Espírito Selvagem'
    },
    {
      name: 'Fúria da Alma',
      description: 'No 6º nível, você pode canalizar sua fúria de maneira única, causando dano adicional ou aplicando efeitos temporários a inimigos próximos.',
      level: 6,
      subclass: 'Caminho do Espírito Selvagem'
    }
  ]
};

export const barbarianAvailableSubclasses = [
  'Caminho do Berserker',
  'Caminho do Guerreiro Totêmico',
  'Caminho do Espírito Selvagem'  // Nova subclasse adicionada
];
