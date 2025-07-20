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
  {
    id: 'improvedRage',
    name: 'Fúria Melhorada',
    description: 'No 3º nível, sua fúria se torna mais intensa, permitindo que você cause mais dano e tenha resistência a mais tipos de dano enquanto estiver em fúria.',
    level: 3,
  }
];

export const barbarianSubclasses: Record<string, SubclassFeature[]> = {
  // Livro do Jogador
  'Caminho do Berserker': [
    {
      name: 'Frenesi',
      description: 'Durante a fúria, você pode fazer um ataque corpo a corpo como ação bônus em cada turno.',
      level: 3,
      subclass: 'Caminho do Berserker'
    },
    {
      name: 'Fúria Incansável',
      description: 'Você é imune a ser enfeitiçado ou amedrontado durante a fúria.',
      level: 6,
      subclass: 'Caminho do Berserker'
    },
    {
      name: 'Fúria Turbinada',
      description: 'Você pode gastar uma fúria para ganhar uma ação adicional, permitindo dois ataques ou outra ação de combate.',
      level: 6,
      subclass: 'Caminho do Berserker'
    },
    {
      name: 'Presença Intimidante',
      description: 'Você pode usar sua ação para amedrontar com sua presença ameaçadora.',
      level: 10,
      subclass: 'Caminho do Berserker',
      uses: {
        max: 1,
        rechargeOn: 'short'
      }
    },
    {
      name: 'Retaliação',
      description: 'Quando sofre dano de uma criatura adjacente, pode usar a reação para atacá-la.',
      level: 14,
      subclass: 'Caminho do Berserker'
    }
  ],

  'Caminho do Guerreiro Totêmico': [
    {
      name: 'Buscador Espiritual',
      description: 'Você aceita um espírito animal como guia e protetor espiritual.',
      level: 3,
      subclass: 'Caminho do Guerreiro Totêmico'
    },
    {
      name: 'Totem Spirit',
      description: 'Você escolhe um espírito animal que concede bônus durante a fúria.',
      level: 3,
      subclass: 'Caminho do Guerreiro Totêmico'
    },
    {
      name: 'Aspecto da Besta',
      description: 'Você ganha um benefício místico adicional com base em seu totem.',
      level: 6,
      subclass: 'Caminho do Guerreiro Totêmico'
    },
    {
      name: 'Caminhante Espiritual',
      description: 'Você pode conjurar "comungar com a natureza" como ritual.',
      level: 10,
      subclass: 'Caminho do Guerreiro Totêmico'
    },
    {
      name: 'Força do Totem',
      description: 'Você pode invocar a força do seu totem para aumentar seu dano ou resistências.',
      level: 10,
      subclass: 'Caminho do Guerreiro Totêmico'
    },
    {
      name: 'Sintonia Totêmica',
      description: 'Você escolhe um último poder espiritual ao atingir o nível 14.',
      level: 14,
      subclass: 'Caminho do Guerreiro Totêmico'
    }
  ],

  // Tasha
  'Caminho do Espírito Selvagem': [
    {
      name: 'Manifestação Espiritual',
      description: 'Você invoca uma entidade espiritual que afeta seus ataques ou defesas temporariamente.',
      level: 3,
      subclass: 'Caminho do Espírito Selvagem'
    },
    {
      name: 'Fúria da Alma',
      description: 'Ao entrar em fúria, causa dano adicional ou debilita inimigos com presença espiritual.',
      level: 6,
      subclass: 'Caminho do Espírito Selvagem'
    },
    {
      name: 'Espírito Guia',
      description: 'Você invoca um espírito protetor para orientar suas ações e ajudar aliados próximos.',
      level: 10,
      subclass: 'Caminho do Espírito Selvagem'
    },
    {
      name: 'Encarnar Espírito',
      description: 'Você assume plenamente o avatar espiritual, ganhando poderes massivos temporários.',
      level: 14,
      subclass: 'Caminho do Espírito Selvagem'
    }
  ],

  // Xanathar
  'Caminho do Ancestral': [
    {
      name: 'Guardiões Ancestrais',
      description: 'Seus ancestrais espectrais protegem aliados próximos ao iniciar a fúria.',
      level: 3,
      subclass: 'Caminho do Ancestral'
    },
    {
      name: 'Escudo Espiritual',
      description: 'Você pode reduzir o dano sofrido por aliados com interferência espiritual.',
      level: 6,
      subclass: 'Caminho do Ancestral'
    },
    {
      name: 'Consultor Espiritual',
      description: 'Você pode se comunicar com espíritos para obter orientação fora do combate.',
      level: 10,
      subclass: 'Caminho do Ancestral'
    },
    {
      name: 'Rejeição de Vingança',
      description: 'Você pode punir inimigos que atingirem seus aliados, mesmo estando incapacitado.',
      level: 14,
      subclass: 'Caminho do Ancestral'
    }
  ],
  // Livro do Jogador
'Caminho do Arauto da Tempestade': [
  {
    name: 'Aura de Tempestade',
    description: 'Enquanto estiver em fúria, você emite uma aura mágica de tempestade que afeta criaturas próximas. Escolha deserto, mar ou tundra para determinar o efeito.',
    level: 3,
    subclass: 'Caminho do Arauto da Tempestade'
  },
  {
    name: 'Resistência Tempestuosa',
    description: 'Você ganha resistência ao tipo de dano associado à sua aura (fogo, trovão ou frio).',
    level: 6,
    subclass: 'Caminho do Arauto da Tempestade'
  },
  {
    name: 'Aura Aumentada',
    description: 'Sua aura causa dano extra ou efeitos aprimorados com base no ambiente escolhido.',
    level: 10,
    subclass: 'Caminho do Arauto da Tempestade'
  },
  {
    name: 'Tempestade Incontrolável',
    description: 'Sua aura se intensifica ainda mais, causando dano massivo ou interferência forte em criaturas próximas.',
    level: 14,
    subclass: 'Caminho do Arauto da Tempestade'
  }
],

// Xanathar
'Caminho do Fanático': [
  {
    name: 'Fé Cega',
    description: 'Enquanto estiver em fúria, você pode se manter consciente mesmo com 0 pontos de vida, até o fim da fúria.',
    level: 3,
    subclass: 'Caminho do Fanático'
  },
  {
    name: 'Poder Divino',
    description: 'Você ganha vantagem em jogadas de ataque ao estar com menos da metade dos pontos de vida.',
    level: 6,
    subclass: 'Caminho do Fanático'
  },
  {
    name: 'Fé Inabalável',
    description: 'Você tem vantagem contra ser enfeitiçado ou amedrontado, e pode conceder isso temporariamente a aliados.',
    level: 10,
    subclass: 'Caminho do Fanático'
  },
  {
    name: 'Ressurreição de Batalha',
    description: 'Uma vez por descanso longo, se cair a 0 PVs, você pode retornar com metade dos pontos de vida como reação.',
    level: 14,
    subclass: 'Caminho do Fanático'
  }
],

};

export const barbarianAvailableSubclasses = [
  'Caminho do Berserker',
  'Caminho do Guerreiro Totêmico',
  'Caminho do Espírito Selvagem',   // Tasha
  'Caminho do Ancestral',           // Xanathar
  'Caminho do Arauto da Tempestade',
  'Caminho do Fanático'
];
