
export interface ClassFeature {
  name: string;
  description: string;
  level: number;
  uses?: {
    max: number;
    rechargeOn: 'short' | 'long' | 'other';
  };
  subclass?: string;
}

export interface ClassData {
  features: ClassFeature[];
  subclasses?: {
    [key: string]: ClassFeature[];
  };
}

export const classFeaturesData: { [key: string]: ClassData } = {
  'Guerreiro': {
    features: [
      {
        name: 'Estilo de Luta',
        description: 'Escolha um estilo de luta: Arquearia, Defesa, Duelismo, Grande Arma ou Proteção.',
        level: 1
      },
      {
        name: 'Recuperação',
        description: 'Recupera 1d10 + nível de guerreiro pontos de vida.',
        level: 1,
        uses: {
          max: 1,
          rechargeOn: 'short'
        }
      },
      {
        name: 'Surto de Ação',
        description: 'Uma ação adicional no seu turno.',
        level: 2,
        uses: {
          max: 1,
          rechargeOn: 'short'
        }
      },
      {
        name: 'Arquétipo Marcial',
        description: 'Escolha um arquétipo marcial.',
        level: 3
      },
      {
        name: 'Incremento no Valor de Habilidade',
        description: 'Aumente dois valores de habilidade em 1 ou um valor em 2.',
        level: 4
      },
      {
        name: 'Ataque Extra',
        description: 'Pode atacar duas vezes quando realizar ação de Ataque.',
        level: 5
      },
      {
        name: 'Incremento no Valor de Habilidade',
        description: 'Aumente dois valores de habilidade em 1 ou um valor em 2.',
        level: 6
      }
    ],
    subclasses: {
      'Campeão': [
        {
          name: 'Crítico Aprimorado',
          description: 'Seus ataques com arma conseguem um acerto crítico com 19 ou 20.',
          level: 3,
          subclass: 'Campeão'
        },
        {
          name: 'Atleta Notável',
          description: 'Adiciona metade do bônus de proficiência a testes de Força, Destreza ou Constituição que não usem proficiência.',
          level: 7,
          subclass: 'Campeão'
        }
      ],
      'Mestre de Batalha': [
        {
          name: 'Superioridade em Combate',
          description: 'Aprende manobras e ganha dados de superioridade.',
          level: 3,
          subclass: 'Mestre de Batalha',
          uses: {
            max: 4,
            rechargeOn: 'short'
          }
        },
        {
          name: 'Estudante de Guerra',
          description: 'Proficiência com ferramentas de artesão e um kit de jogos.',
          level: 3,
          subclass: 'Mestre de Batalha'
        }
      ]
    }
  },
  'Mago': {
    features: [
      {
        name: 'Conjuração',
        description: 'Pode conjurar magias. Inteligência é seu atributo de conjuração.',
        level: 1
      },
      {
        name: 'Recuperação Arcana',
        description: 'Recupera espaços de magia gastos uma vez por dia.',
        level: 1,
        uses: {
          max: 1,
          rechargeOn: 'long'
        }
      },
      {
        name: 'Tradição Arcana',
        description: 'Escolha uma tradição arcana.',
        level: 2
      },
      {
        name: 'Incremento no Valor de Habilidade',
        description: 'Aumente dois valores de habilidade em 1 ou um valor em 2.',
        level: 4
      }
    ],
    subclasses: {
      'Escola de Evocação': [
        {
          name: 'Esculpir Magias',
          description: 'Pode proteger criaturas dos efeitos de suas magias de evocação.',
          level: 2,
          subclass: 'Escola de Evocação'
        },
        {
          name: 'Truque Potente',
          description: 'Adiciona modificador de Inteligência ao dano de truques de evocação.',
          level: 6,
          subclass: 'Escola de Evocação'
        }
      ],
      'Escola de Divinação': [
        {
          name: 'Adivinho',
          description: 'Recupera espaços de magia quando conjura magias de divinação.',
          level: 2,
          subclass: 'Escola de Divinação'
        },
        {
          name: 'Presságios',
          description: 'Rola dois d20 no início do dia e pode substituir rolagens.',
          level: 2,
          subclass: 'Escola de Divinação',
          uses: {
            max: 2,
            rechargeOn: 'long'
          }
        }
      ]
    }
  },
  'Ladino': {
    features: [
      {
        name: 'Especialização',
        description: 'Dobra o bônus de proficiência para certas perícias.',
        level: 1
      },
      {
        name: 'Ataque Furtivo',
        description: 'Causa dano extra quando tem vantagem ou aliado próximo.',
        level: 1
      },
      {
        name: 'Gíria de Ladrão',
        description: 'Conhece gíria de ladrão, linguagem secreta misturada com jargão.',
        level: 1
      },
      {
        name: 'Ação Ardilosa',
        description: 'Pode usar ação bônus para Disparada, Desengajar ou Esconder.',
        level: 2
      },
      {
        name: 'Arquétipo de Ladino',
        description: 'Escolha um arquétipo de ladino.',
        level: 3
      },
      {
        name: 'Incremento no Valor de Habilidade',
        description: 'Aumente dois valores de habilidade em 1 ou um valor em 2.',
        level: 4
      },
      {
        name: 'Esquiva Sobrenatural',
        description: 'Pode usar reação para reduzir pela metade o dano de um ataque.',
        level: 5,
        uses: {
          max: 1,
          rechargeOn: 'short'
        }
      }
    ],
    subclasses: {
      'Ladrão': [
        {
          name: 'Trabalho Rápido',
          description: 'Pode usar ação bônus para fazer um teste de Prestidigitação, usar ferramentas de ladrão ou realizar ação de Usar um Objeto.',
          level: 3,
          subclass: 'Ladrão'
        },
        {
          name: 'Escalada de Gato',
          description: 'Velocidade de escalada igual à velocidade de caminhada e não precisa de testes para escalar.',
          level: 9,
          subclass: 'Ladrão'
        }
      ],
      'Assassino': [
        {
          name: 'Proficiências Bônus',
          description: 'Proficiência com kit de disfarce e kit de venenos.',
          level: 3,
          subclass: 'Assassino'
        },
        {
          name: 'Assassinar',
          description: 'Vantagem em ataques contra criaturas que ainda não agiram no combate.',
          level: 3,
          subclass: 'Assassino'
        }
      ]
    }
  },
  'Clérigo': {
    features: [
      {
        name: 'Conjuração',
        description: 'Pode conjurar magias. Sabedoria é seu atributo de conjuração.',
        level: 1
      },
      {
        name: 'Domínio Divino',
        description: 'Escolha um domínio divino.',
        level: 1
      },
      {
        name: 'Canalizar Divindade',
        description: 'Pode canalizar energia divina diretamente de sua divindade.',
        level: 2,
        uses: {
          max: 1,
          rechargeOn: 'short'
        }
      },
      {
        name: 'Incremento no Valor de Habilidade',
        description: 'Aumente dois valores de habilidade em 1 ou um valor em 2.',
        level: 4
      },
      {
        name: 'Destruir Mortos-Vivos',
        description: 'Pode usar Canalizar Divindade para destruir mortos-vivos.',
        level: 5
      }
    ],
    subclasses: {
      'Domínio da Vida': [
        {
          name: 'Proficiências Bônus',
          description: 'Proficiência com armaduras pesadas.',
          level: 1,
          subclass: 'Domínio da Vida'
        },
        {
          name: 'Curandeiro Abençoado',
          description: 'Magias de cura recuperam 2 + nível da magia pontos de vida adicionais.',
          level: 1,
          subclass: 'Domínio da Vida'
        },
        {
          name: 'Preservar Vida',
          description: 'Usa Canalizar Divindade para curar até 5 × nível de clérigo pontos de vida.',
          level: 2,
          subclass: 'Domínio da Vida'
        }
      ],
      'Domínio da Guerra': [
        {
          name: 'Proficiências Bônus',
          description: 'Proficiência com armaduras pesadas e armas marciais.',
          level: 1,
          subclass: 'Domínio da Guerra'
        },
        {
          name: 'Sacerdote da Guerra',
          description: 'Pode fazer um ataque com arma como ação bônus.',
          level: 1,
          subclass: 'Domínio da Guerra',
          uses: {
            max: 1,
            rechargeOn: 'long'
          }
        },
        {
          name: 'Ataque Guiado',
          description: 'Usa Canalizar Divindade para ganhar +10 em uma jogada de ataque.',
          level: 2,
          subclass: 'Domínio da Guerra'
        }
      ]
    }
  }
};

export const getClassFeatures = (characterClass: string, level: number, subclass?: string): ClassFeature[] => {
  const classData = classFeaturesData[characterClass];
  if (!classData) return [];
  
  const features = classData.features.filter(feature => feature.level <= level);
  
  if (subclass && classData.subclasses && classData.subclasses[subclass]) {
    const subclassFeatures = classData.subclasses[subclass].filter(feature => feature.level <= level);
    features.push(...subclassFeatures);
  }
  
  return features;
};

export const getAvailableSubclasses = (characterClass: string): string[] => {
  const classData = classFeaturesData[characterClass];
  if (!classData || !classData.subclasses) return [];
  
  return Object.keys(classData.subclasses);
};
