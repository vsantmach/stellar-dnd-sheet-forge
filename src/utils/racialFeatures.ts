
export interface RacialFeature {
  name: string;
  description: string;
  uses?: {
    max: number;
    rechargeOn: 'short' | 'long' | 'other';
  };
}

export interface RaceData {
  features: RacialFeature[];
  subraces?: {
    [key: string]: RacialFeature[];
  };
}

export const racialFeaturesData: { [key: string]: RaceData } = {
  'Humano': {
    features: [
      {
        name: 'Versatilidade',
        description: '+1 em todos os atributos. Perícia adicional à sua escolha. Talento adicional no 1º nível.'
      }
    ]
  },
  'Humano Variante': {
    features: [
      {
        name: 'Atributos Versáteis',
        description: '+1 em dois atributos diferentes à sua escolha.'
      },
      {
        name: 'Perícias',
        description: 'Proficiência em uma perícia à sua escolha.'
      },
      {
        name: 'Talento',
        description: 'Um talento à sua escolha.'
      }
    ]
  },
  'Elfo': {
    features: [
      {
        name: 'Visão no Escuro',
        description: 'Pode ver no escuro a até 18 metros como se fosse luz fraca, e em luz fraca como se fosse luz plena.'
      },
      {
        name: 'Sentidos Aguçados',
        description: 'Proficiência na perícia Percepção.'
      },
      {
        name: 'Ancestral Feérico',
        description: 'Vantagem em testes de resistência contra ser enfeitiçado, e magia não pode colocá-lo para dormir.'
      },
      {
        name: 'Transe',
        description: 'Não precisa dormir, em vez disso medita profundamente por 4 horas.'
      }
    ],
    subraces: {
      'Alto Elfo': [
        {
          name: 'Truque',
          description: 'Conhece um truque à sua escolha da lista de magias de mago. Inteligência é seu atributo de conjuração.'
        },
        {
          name: 'Treinamento Élfico com Armas',
          description: 'Proficiência com espadas longas, espadas curtas, arcos longos e arcos curtos.'
        },
        {
          name: 'Idioma Adicional',
          description: 'Pode falar, ler e escrever um idioma adicional à sua escolha.'
        }
      ],
      'Elfo da Floresta': [
        {
          name: 'Treinamento Élfico com Armas',
          description: 'Proficiência com espadas longas, espadas curtas, arcos longos e arcos curtos.'
        },
        {
          name: 'Pés Ligeiros',
          description: 'Sua velocidade base de caminhada aumenta para 10,5 metros.'
        },
        {
          name: 'Máscara da Natureza',
          description: 'Pode tentar se esconder mesmo quando apenas levemente obscurecido por folhagem, chuva forte, neve, névoa e outros fenômenos naturais.'
        }
      ],
      'Elfo Negro (Drow)': [
        {
          name: 'Visão no Escuro Superior',
          description: 'Sua visão no escuro tem alcance de 36 metros.'
        },
        {
          name: 'Sensibilidade à Luz Solar',
          description: 'Desvantagem em jogadas de ataque e testes de Percepção que dependam da visão quando você, o alvo ou o que quer que esteja tentando perceber estiver sob luz solar direta.'
        },
        {
          name: 'Magia Drow',
          description: 'Conhece o truque luzes dançantes. No 3º nível, pode conjurar fogo das fadas uma vez por dia. No 5º nível, pode conjurar escuridão uma vez por dia. Carisma é seu atributo de conjuração.'
        },
        {
          name: 'Treinamento Drow com Armas',
          description: 'Proficiência com rapieiras, espadas curtas e bestas de mão.'
        }
      ]
    }
  },
  'Anão': {
    features: [
      {
        name: 'Visão no Escuro',
        description: 'Pode ver no escuro a até 18 metros como se fosse luz fraca, e em luz fraca como se fosse luz plena.'
      },
      {
        name: 'Resistência Anã',
        description: 'Vantagem em testes de resistência contra veneno, e resistência a dano de veneno.'
      },
      {
        name: 'Treinamento Anão em Combate',
        description: 'Proficiência com machados de batalha, machadinhas, martelos leves e martelos de guerra.'
      },
      {
        name: 'Proficiência com Ferramentas',
        description: 'Proficiência com ferramentas de artesão à sua escolha: ferramentas de ferreiro, suprimentos de cervejeiro ou ferramentas de pedreiro.'
      },
      {
        name: 'Especialização em Rochas',
        description: 'Sempre que fizer um teste de Inteligência (História) relacionado à origem de um trabalho em pedra, é considerado proficiente na perícia História e adiciona o dobro do bônus de proficiência.'
      }
    ],
    subraces: {
      'Anão da Montanha': [
        {
          name: 'Treinamento com Armadura',
          description: 'Proficiência com armaduras leves e médias.'
        }
      ],
      'Anão da Colina': [
        {
          name: 'Tenacidade Anã',
          description: 'Seus pontos de vida máximos aumentam em 1, e aumentam em 1 sempre que você ganha um nível.'
        }
      ]
    }
  },
  'Halfling': {
    features: [
      {
        name: 'Sortudo',
        description: 'Quando obtiver um 1 natural em uma jogada de ataque, teste de habilidade ou teste de resistência, pode rolar o dado novamente e deve usar o novo resultado.'
      },
      {
        name: 'Bravura',
        description: 'Vantagem em testes de resistência contra ser amedrontado.'
      },
      {
        name: 'Agilidade Halfling',
        description: 'Pode mover-se através do espaço de qualquer criatura que seja de um tamanho maior que o seu.'
      }
    ],
    subraces: {
      'Pés Ligeiros': [
        {
          name: 'Furtividade Natural',
          description: 'Pode tentar se esconder mesmo quando obscurecido apenas por uma criatura que seja pelo menos um tamanho maior que você.'
        }
      ],
      'Robusto': [
        {
          name: 'Resistência dos Robustos',
          description: 'Vantagem em testes de resistência contra veneno, e resistência a dano de veneno.'
        }
      ]
    }
  },
  'Draconato': {
    features: [
      {
        name: 'Ancestral Dracônico',
        description: 'Escolha um tipo de dragão. Seu tipo de dano e área de sopro são determinados pelo tipo de dragão, conforme mostrado na tabela.'
      },
      {
        name: 'Arma de Sopro',
        description: 'Pode usar sua ação para exalar energia destrutiva. O tipo de dano e área são determinados pela sua ancestralidade dracônica. CD = 8 + modificador de Constituição + bônus de proficiência.',
        uses: {
          max: 1,
          rechargeOn: 'short'
        }
      },
      {
        name: 'Resistência a Dano',
        description: 'Resistência ao tipo de dano associado à sua ancestralidade dracônica.'
      }
    ]
  },
  'Gnomo': {
    features: [
      {
        name: 'Visão no Escuro',
        description: 'Pode ver no escuro a até 18 metros como se fosse luz fraca, e em luz fraca como se fosse luz plena.'
      },
      {
        name: 'Esperteza Gnômica',
        description: 'Vantagem em todos os testes de resistência de Inteligência, Sabedoria e Carisma contra magia.'
      }
    ],
    subraces: {
      'Gnomo da Floresta': [
        {
          name: 'Ilusionista Nato',
          description: 'Conhece o truque ilusão menor. Inteligência é seu atributo de conjuração para esta magia.'
        },
        {
          name: 'Falar com Bestas Pequenas',
          description: 'Através de sons e gestos, pode comunicar ideias simples com bestas Pequenas ou menores.'
        }
      ],
      'Gnomo das Rochas': [
        {
          name: 'Conhecimento de Artífice',
          description: 'Proficiência com ferramentas de artífice (bugigangas). Sempre que fizer um teste de Inteligência (História) relacionado a itens mágicos, alquímicos ou tecnológicos, adiciona o dobro do bônus de proficiência.'
        },
        {
          name: 'Engenhoqueiro',
          description: 'Conhece o truque consertar. Inteligência é seu atributo de conjuração para esta magia.'
        }
      ]
    }
  },
  'Meio-elfo': {
    features: [
      {
        name: 'Visão no Escuro',
        description: 'Pode ver no escuro a até 18 metros como se fosse luz fraca, e em luz fraca como se fosse luz plena.'
      },
      {
        name: 'Ancestral Feérico',
        description: 'Vantagem em testes de resistência contra ser enfeitiçado, e magia não pode colocá-lo para dormir.'
      },
      {
        name: 'Versatilidade em Perícias',
        description: 'Proficiência em duas perícias à sua escolha.'
      }
    ]
  },
  'Meio-orc': {
    features: [
      {
        name: 'Visão no Escuro',
        description: 'Pode ver no escuro a até 18 metros como se fosse luz fraca, e em luz fraca como se fosse luz plena.'
      },
      {
        name: 'Resistência Implacável',
        description: 'Quando é reduzido a 0 pontos de vida mas não morto, pode voltar a 1 ponto de vida. Só pode usar esta característica uma vez por descanso longo.',
        uses: {
          max: 1,
          rechargeOn: 'long'
        }
      },
      {
        name: 'Ataques Selvagens',
        description: 'Quando consegue um acerto crítico com um ataque corpo a corpo, pode rolar um dos dados de dano da arma mais uma vez e adicioná-lo ao dano extra do acerto crítico.'
      }
    ]
  },
  'Tiefling': {
    features: [
      {
        name: 'Visão no Escuro',
        description: 'Pode ver no escuro a até 18 metros como se fosse luz fraca, e em luz fraca como se fosse luz plena.'
      },
      {
        name: 'Resistência Infernal',
        description: 'Resistência a dano de fogo.'
      },
      {
        name: 'Legado Infernal',
        description: 'Conhece o truque taumaturgia. No 3º nível, pode conjurar repreensão infernal uma vez por dia. No 5º nível, pode conjurar escuridão uma vez por dia. Carisma é seu atributo de conjuração.'
      }
    ]
  }
};

export const getRacialFeatures = (race: string, subrace?: string): RacialFeature[] => {
  // Check default races first
  let raceData = racialFeaturesData[race];
  
  // If not found in default races, check custom races
  if (!raceData) {
    const customRaces = getCustomRaces();
    raceData = customRaces[race];
  }
  
  if (!raceData) return [];
  
  const features = [...raceData.features];
  
  if (subrace && raceData.subraces && raceData.subraces[subrace]) {
    features.push(...raceData.subraces[subrace]);
  }
  
  return features;
};

export const getAvailableSubraces = (race: string): string[] => {
  // Check default races first
  let raceData = racialFeaturesData[race];
  
  // If not found in default races, check custom races
  if (!raceData) {
    const customRaces = getCustomRaces();
    raceData = customRaces[race];
  }
  
  if (!raceData || !raceData.subraces) return [];
  
  return Object.keys(raceData.subraces);
};

// Helper function to get custom races from localStorage
export const getCustomRaces = (): { [key: string]: RaceData } => {
  try {
    const saved = localStorage.getItem('custom-races');
    return saved ? JSON.parse(saved) : {};
  } catch (error) {
    console.log('Error loading custom races:', error);
    return {};
  }
};

// Helper function to get all available races (default + custom)
export const getAllAvailableRaces = (): string[] => {
  const defaultRaces = Object.keys(racialFeaturesData);
  const customRaces = Object.keys(getCustomRaces());
  
  return [...defaultRaces, ...customRaces].sort();
};
