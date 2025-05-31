
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
      },
      {
        name: 'Ataque Extra (2)',
        description: 'Pode atacar três vezes quando realizar ação de Ataque.',
        level: 11
      },
      {
        name: 'Incremento no Valor de Habilidade',
        description: 'Aumente dois valores de habilidade em 1 ou um valor em 2.',
        level: 8
      },
      {
        name: 'Indômito',
        description: 'Pode refazer um teste de resistência que falhou.',
        level: 9,
        uses: {
          max: 1,
          rechargeOn: 'long'
        }
      },
      {
        name: 'Incremento no Valor de Habilidade',
        description: 'Aumente dois valores de habilidade em 1 ou um valor em 2.',
        level: 12
      },
      {
        name: 'Indômito (2)',
        description: 'Pode refazer dois testes de resistência que falharam.',
        level: 13,
        uses: {
          max: 2,
          rechargeOn: 'long'
        }
      },
      {
        name: 'Incremento no Valor de Habilidade',
        description: 'Aumente dois valores de habilidade em 1 ou um valor em 2.',
        level: 14
      },
      {
        name: 'Incremento no Valor de Habilidade',
        description: 'Aumente dois valores de habilidade em 1 ou um valor em 2.',
        level: 16
      },
      {
        name: 'Surto de Ação (2)',
        description: 'Pode usar Surto de Ação duas vezes entre descansos.',
        level: 17,
        uses: {
          max: 2,
          rechargeOn: 'short'
        }
      },
      {
        name: 'Incremento no Valor de Habilidade',
        description: 'Aumente dois valores de habilidade em 1 ou um valor em 2.',
        level: 19
      },
      {
        name: 'Ataque Extra (3)',
        description: 'Pode atacar quatro vezes quando realizar ação de Ataque.',
        level: 20
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
        },
        {
          name: 'Estilo de Luta Adicional',
          description: 'Escolha um segundo estilo de luta.',
          level: 10,
          subclass: 'Campeão'
        },
        {
          name: 'Crítico Superior',
          description: 'Seus ataques com arma conseguem um acerto crítico com 18, 19 ou 20.',
          level: 15,
          subclass: 'Campeão'
        },
        {
          name: 'Sobrevivente',
          description: 'Regenera pontos de vida no início do turno se estiver com menos da metade dos pontos de vida.',
          level: 18,
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
        },
        {
          name: 'Conhece o Inimigo',
          description: 'Pode avaliar as capacidades de uma criatura.',
          level: 7,
          subclass: 'Mestre de Batalha'
        },
        {
          name: 'Superioridade em Combate Aprimorada',
          description: 'Ganha mais dados de superioridade e aprende mais manobras.',
          level: 10,
          subclass: 'Mestre de Batalha',
          uses: {
            max: 5,
            rechargeOn: 'short'
          }
        },
        {
          name: 'Implacável',
          description: 'Recupera um dado de superioridade se não tiver nenhum restante.',
          level: 15,
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
      },
      {
        name: 'Incremento no Valor de Habilidade',
        description: 'Aumente dois valores de habilidade em 1 ou um valor em 2.',
        level: 8
      },
      {
        name: 'Incremento no Valor de Habilidade',
        description: 'Aumente dois valores de habilidade em 1 ou um valor em 2.',
        level: 12
      },
      {
        name: 'Incremento no Valor de Habilidade',
        description: 'Aumente dois valores de habilidade em 1 ou um valor em 2.',
        level: 16
      },
      {
        name: 'Maestria em Magias',
        description: 'Escolha uma magia de 1º nível e uma de 2º nível. Pode conjurá-las sem gastar espaços.',
        level: 18
      },
      {
        name: 'Incremento no Valor de Habilidade',
        description: 'Aumente dois valores de habilidade em 1 ou um valor em 2.',
        level: 19
      },
      {
        name: 'Magias Assinatura',
        description: 'Escolha duas magias de 3º nível como suas magias assinatura.',
        level: 20,
        uses: {
          max: 1,
          rechargeOn: 'short'
        }
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
        },
        {
          name: 'Evocação Empoderada',
          description: 'Pode maximizar o dano de uma magia de evocação.',
          level: 10,
          subclass: 'Escola de Evocação',
          uses: {
            max: 1,
            rechargeOn: 'long'
          }
        },
        {
          name: 'Supercarga',
          description: 'Aumenta o dano de suas magias de evocação.',
          level: 14,
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
        },
        {
          name: 'Adivinhação Especializada',
          description: 'Recupera mais espaços de magia ao conjurar magias de divinação.',
          level: 6,
          subclass: 'Escola de Divinação'
        },
        {
          name: 'Terceiro Olho',
          description: 'Ganha diferentes visões mágicas.',
          level: 10,
          subclass: 'Escola de Divinação',
          uses: {
            max: 1,
            rechargeOn: 'short'
          }
        },
        {
          name: 'Presságios Superiores',
          description: 'Ganha três dados de presságio em vez de dois.',
          level: 14,
          subclass: 'Escola de Divinação',
          uses: {
            max: 3,
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
        description: 'Causa dano extra quando tem vantagem ou aliado próximo. 1d6.',
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
        name: 'Ataque Furtivo (2d6)',
        description: 'Dano de ataque furtivo aumenta para 2d6.',
        level: 3
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
        name: 'Ataque Furtivo (3d6)',
        description: 'Dano de ataque furtivo aumenta para 3d6.',
        level: 5
      },
      {
        name: 'Esquiva Sobrenatural',
        description: 'Pode usar reação para reduzir pela metade o dano de um ataque.',
        level: 5,
        uses: {
          max: 1,
          rechargeOn: 'short'
        }
      },
      {
        name: 'Especialização Adicional',
        description: 'Pode dobrar o bônus de proficiência em duas perícias adicionais.',
        level: 6
      },
      {
        name: 'Ataque Furtivo (4d6)',
        description: 'Dano de ataque furtivo aumenta para 4d6.',
        level: 7
      },
      {
        name: 'Incremento no Valor de Habilidade',
        description: 'Aumente dois valores de habilidade em 1 ou um valor em 2.',
        level: 8
      },
      {
        name: 'Ataque Furtivo (5d6)',
        description: 'Dano de ataque furtivo aumenta para 5d6.',
        level: 9
      },
      {
        name: 'Incremento no Valor de Habilidade',
        description: 'Aumente dois valores de habilidade em 1 ou um valor em 2.',
        level: 10
      },
      {
        name: 'Ataque Furtivo (6d6)',
        description: 'Dano de ataque furtivo aumenta para 6d6.',
        level: 11
      },
      {
        name: 'Talento Confiável',
        description: 'Trata qualquer rolagem de 9 ou menos como 10 em testes de perícia que seja proficiente.',
        level: 11
      },
      {
        name: 'Incremento no Valor de Habilidade',
        description: 'Aumente dois valores de habilidade em 1 ou um valor em 2.',
        level: 12
      },
      {
        name: 'Ataque Furtivo (7d6)',
        description: 'Dano de ataque furtivo aumenta para 7d6.',
        level: 13
      },
      {
        name: 'Sentido Cego',
        description: 'Se puder ouvir, está ciente da localização de criaturas invisíveis ou escondidas num raio de 3 metros.',
        level: 14
      },
      {
        name: 'Ataque Furtivo (8d6)',
        description: 'Dano de ataque furtivo aumenta para 8d6.',
        level: 15
      },
      {
        name: 'Incremento no Valor de Habilidade',
        description: 'Aumente dois valores de habilidade em 1 ou um valor em 2.',
        level: 16
      },
      {
        name: 'Ataque Furtivo (9d6)',
        description: 'Dano de ataque furtivo aumenta para 9d6.',
        level: 17
      },
      {
        name: 'Elusivo',
        description: 'Nenhum ataque pode ter vantagem contra você enquanto não estiver incapacitado.',
        level: 18
      },
      {
        name: 'Incremento no Valor de Habilidade',
        description: 'Aumente dois valores de habilidade em 1 ou um valor em 2.',
        level: 19
      },
      {
        name: 'Ataque Furtivo (10d6)',
        description: 'Dano de ataque furtivo aumenta para 10d6.',
        level: 19
      },
      {
        name: 'Golpe de Sorte',
        description: 'Se errar um ataque ou falhar em um teste de habilidade, pode tratar a rolagem como 20.',
        level: 20,
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
        },
        {
          name: 'Furtividade Suprema',
          description: 'Tem vantagem em testes de Furtividade se não se mover mais que metade da velocidade no turno.',
          level: 13,
          subclass: 'Ladrão'
        },
        {
          name: 'Usar Objeto Mágico',
          description: 'Pode usar qualquer item mágico, ignorando restrições de classe, raça e nível.',
          level: 17,
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
        },
        {
          name: 'Maestria em Infiltração',
          description: 'Pode criar identidades falsas.',
          level: 9,
          subclass: 'Assassino'
        },
        {
          name: 'Impostor',
          description: 'Pode imitar perfeitamente a fala, escrita e comportamento de outra pessoa.',
          level: 13,
          subclass: 'Assassino'
        },
        {
          name: 'Golpe Mortal',
          description: 'Pode tentar matar instantaneamente uma criatura com ataque furtivo.',
          level: 17,
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
      },
      {
        name: 'Canalizar Divindade (2)',
        description: 'Pode usar Canalizar Divindade duas vezes entre descansos.',
        level: 6,
        uses: {
          max: 2,
          rechargeOn: 'short'
        }
      },
      {
        name: 'Incremento no Valor de Habilidade',
        description: 'Aumente dois valores de habilidade em 1 ou um valor em 2.',
        level: 8
      },
      {
        name: 'Incremento no Valor de Habilidade',
        description: 'Aumente dois valores de habilidade em 1 ou um valor em 2.',
        level: 12
      },
      {
        name: 'Incremento no Valor de Habilidade',
        description: 'Aumente dois valores de habilidade em 1 ou um valor em 2.',
        level: 16
      },
      {
        name: 'Canalizar Divindade (3)',
        description: 'Pode usar Canalizar Divindade três vezes entre descansos.',
        level: 18,
        uses: {
          max: 3,
          rechargeOn: 'short'
        }
      },
      {
        name: 'Incremento no Valor de Habilidade',
        description: 'Aumente dois valores de habilidade em 1 ou um valor em 2.',
        level: 19
      },
      {
        name: 'Intervenção Divina',
        description: 'Pode pedir ajuda direta de sua divindade.',
        level: 10,
        uses: {
          max: 1,
          rechargeOn: 'long'
        }
      },
      {
        name: 'Intervenção Divina Aprimorada',
        description: 'Intervenção Divina funciona automaticamente.',
        level: 20
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
        },
        {
          name: 'Curandeiro Abençoado Aprimorado',
          description: 'As magias de cura também curam você.',
          level: 6,
          subclass: 'Domínio da Vida'
        },
        {
          name: 'Ataque Divino',
          description: 'Seus ataques com arma causam 1d8 de dano radiante adicional.',
          level: 8,
          subclass: 'Domínio da Vida'
        },
        {
          name: 'Cura Suprema',
          description: 'Suas magias de cura sempre curam a quantidade máxima possível.',
          level: 17,
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
        },
        {
          name: 'Bênção do Deus da Guerra',
          description: 'Pode usar ação bônus para mover um aliado e ele atacar.',
          level: 6,
          subclass: 'Domínio da Guerra',
          uses: {
            max: 1,
            rechargeOn: 'long'
          }
        },
        {
          name: 'Ataque Divino',
          description: 'Seus ataques com arma causam 1d8 de dano adicional.',
          level: 8,
          subclass: 'Domínio da Guerra'
        },
        {
          name: 'Avatar da Batalha',
          description: 'Ganha resistência a dano cortante, perfurante e contundente de armas não mágicas.',
          level: 17,
          subclass: 'Domínio da Guerra'
        }
      ]
    }
  },
  'Bárbaro': {
    features: [
      {
        name: 'Fúria',
        description: 'Entra em fúria, ganhando vantagem em testes de Força e resistência a dano físico.',
        level: 1,
        uses: {
          max: 2,
          rechargeOn: 'long'
        }
      },
      {
        name: 'Defesa sem Armadura',
        description: 'Quando não estiver usando armadura, sua CA é 10 + modificador de Destreza + modificador de Constituição.',
        level: 1
      },
      {
        name: 'Ataque Imprudente',
        description: 'Pode atacar imprudentemente para ganhar vantagem, mas inimigos têm vantagem contra você.',
        level: 2
      },
      {
        name: 'Sentido de Perigo',
        description: 'Vantagem em testes de resistência de Destreza que você possa ver.',
        level: 2
      },
      {
        name: 'Caminho Primitivo',
        description: 'Escolha um caminho primitivo.',
        level: 3
      },
      {
        name: 'Fúria (3)',
        description: 'Pode entrar em fúria 3 vezes por descanso longo.',
        level: 3,
        uses: {
          max: 3,
          rechargeOn: 'long'
        }
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
        name: 'Movimento Rápido',
        description: 'Sua velocidade aumenta em 3 metros quando não estiver usando armadura pesada.',
        level: 5
      },
      {
        name: 'Fúria (4)',
        description: 'Pode entrar em fúria 4 vezes por descanso longo.',
        level: 6,
        uses: {
          max: 4,
          rechargeOn: 'long'
        }
      },
      {
        name: 'Instinto Selvagem',
        description: 'Ganha vantagem em testes de iniciativa e não pode ser surpreendido.',
        level: 7
      },
      {
        name: 'Incremento no Valor de Habilidade',
        description: 'Aumente dois valores de habilidade em 1 ou um valor em 2.',
        level: 8
      },
      {
        name: 'Crítico Brutal (1)',
        description: 'Rola um dado de dano adicional quando consegue um acerto crítico com arma corpo a corpo.',
        level: 9
      },
      {
        name: 'Incremento no Valor de Habilidade',
        description: 'Aumente dois valores de habilidade em 1 ou um valor em 2.',
        level: 12
      },
      {
        name: 'Crítico Brutal (2)',
        description: 'Rola dois dados de dano adicionais quando consegue um acerto crítico com arma corpo a corpo.',
        level: 13
      },
      {
        name: 'Incremento no Valor de Habilidade',
        description: 'Aumente dois valores de habilidade em 1 ou um valor em 2.',
        level: 16
      },
      {
        name: 'Crítico Brutal (3)',
        description: 'Rola três dados de dano adicionais quando consegue um acerto crítico com arma corpo a corpo.',
        level: 17
      },
      {
        name: 'Força Indomável',
        description: 'Se o total de um teste de Força for menor que seu valor de Força, use seu valor.',
        level: 18
      },
      {
        name: 'Incremento no Valor de Habilidade',
        description: 'Aumente dois valores de habilidade em 1 ou um valor em 2.',
        level: 19
      },
      {
        name: 'Campeão Primitivo',
        description: 'Seus valores de Força e Constituição aumentam em 4, com máximo de 24.',
        level: 20
      }
    ],
    subclasses: {
      'Caminho do Guerreiro Furioso': [
        {
          name: 'Frenesi',
          description: 'Pode entrar em frenesi durante a fúria para fazer um ataque adicional como ação bônus.',
          level: 3,
          subclass: 'Caminho do Guerreiro Furioso'
        },
        {
          name: 'Fúria Incauta',
          description: 'Não pode ser enfeitiçado ou amedrontado durante a fúria.',
          level: 6,
          subclass: 'Caminho do Guerreiro Furioso'
        },
        {
          name: 'Presença Intimidante',
          description: 'Pode usar ação para amedrontar uma criatura.',
          level: 10,
          subclass: 'Caminho do Guerreiro Furioso',
          uses: {
            max: 1,
            rechargeOn: 'short'
          }
        },
        {
          name: 'Retaliação',
          description: 'Quando sofrer dano de uma criatura próxima, pode usar reação para atacá-la.',
          level: 14,
          subclass: 'Caminho do Guerreiro Furioso'
        }
      ],
      'Caminho do Totem Guerreiro': [
        {
          name: 'Espírito Totem',
          description: 'Escolha um espírito animal totem que lhe concede benefícios.',
          level: 3,
          subclass: 'Caminho do Totem Guerreiro'
        },
        {
          name: 'Aspecto do Totem',
          description: 'Ganha um aspecto místico do seu animal totem.',
          level: 6,
          subclass: 'Caminho do Totem Guerreiro'
        },
        {
          name: 'Caminhada Espiritual',
          description: 'Pode conjurar comunhão com a natureza, mas apenas como um ritual.',
          level: 10,
          subclass: 'Caminho do Totem Guerreiro'
        },
        {
          name: 'Sintonia Totêmica',
          description: 'Ganha um benefício mágico baseado no animal totem de sua escolha.',
          level: 14,
          subclass: 'Caminho do Totem Guerreiro'
        }
      ]
    }
  },
  'Bardo': {
    features: [
      {
        name: 'Conjuração',
        description: 'Pode conjurar magias. Carisma é seu atributo de conjuração.',
        level: 1
      },
      {
        name: 'Inspiração de Bardo',
        description: 'Pode inspirar aliados com palavras encorajadoras.',
        level: 1,
        uses: {
          max: 2,
          rechargeOn: 'short'
        }
      },
      {
        name: 'Versátil',
        description: 'Adiciona metade do bônus de proficiência a testes que não seja proficiente.',
        level: 2
      },
      {
        name: 'Canção de Descanso',
        description: 'Pode usar música para ajudar aliados a recuperar pontos de vida durante descanso curto.',
        level: 2,
        uses: {
          max: 1,
          rechargeOn: 'short'
        }
      },
      {
        name: 'Colégio de Bardo',
        description: 'Escolha um colégio de bardo.',
        level: 3
      },
      {
        name: 'Especialização',
        description: 'Dobra o bônus de proficiência para duas perícias à sua escolha.',
        level: 3
      },
      {
        name: 'Incremento no Valor de Habilidade',
        description: 'Aumente dois valores de habilidade em 1 ou um valor em 2.',
        level: 4
      },
      {
        name: 'Inspiração de Bardo (d8)',
        description: 'Dados de Inspiração de Bardo se tornam d8.',
        level: 5
      },
      {
        name: 'Fonte de Inspiração',
        description: 'Recupera Inspiração de Bardo em descanso curto ou longo.',
        level: 5
      },
      {
        name: 'Contraincantar',
        description: 'Pode usar ação para interromper conjurações de criaturas próximas.',
        level: 6,
        uses: {
          max: 1,
          rechargeOn: 'short'
        }
      },
      {
        name: 'Segredos Mágicos',
        description: 'Aprende duas magias de qualquer classe.',
        level: 10
      },
      {
        name: 'Inspiração de Bardo (d10)',
        description: 'Dados de Inspiração de Bardo se tornam d10.',
        level: 10
      },
      {
        name: 'Incremento no Valor de Habilidade',
        description: 'Aumente dois valores de habilidade em 1 ou um valor em 2.',
        level: 12
      },
      {
        name: 'Segredos Mágicos Adicionais',
        description: 'Aprende duas magias adicionais de qualquer classe.',
        level: 14
      },
      {
        name: 'Inspiração de Bardo (d12)',
        description: 'Dados de Inspiração de Bardo se tornam d12.',
        level: 15
      },
      {
        name: 'Incremento no Valor de Habilidade',
        description: 'Aumente dois valores de habilidade em 1 ou um valor em 2.',
        level: 16
      },
      {
        name: 'Segredos Mágicos Superiores',
        description: 'Aprende duas magias adicionais de qualquer classe.',
        level: 18
      },
      {
        name: 'Incremento no Valor de Habilidade',
        description: 'Aumente dois valores de habilidade em 1 ou um valor em 2.',
        level: 19
      },
      {
        name: 'Inspiração Superior',
        description: 'Quando rola iniciativa e não tem usos de Inspiração de Bardo, recupera um uso.',
        level: 20
      }
    ],
    subclasses: {
      'Colégio do Conhecimento': [
        {
          name: 'Proficiências Bônus',
          description: 'Ganha proficiência em três perícias à sua escolha.',
          level: 3,
          subclass: 'Colégio do Conhecimento'
        },
        {
          name: 'Palavras Cortantes',
          description: 'Pode usar reação para reduzir rolagem de ataque, teste de habilidade ou dano de uma criatura.',
          level: 3,
          subclass: 'Colégio do Conhecimento'
        },
        {
          name: 'Segredos Mágicos Adicionais',
          description: 'Aprende duas magias de qualquer classe que seja de nível de magia que você possa conjurar.',
          level: 6,
          subclass: 'Colégio do Conhecimento'
        },
        {
          name: 'Perícia Inigualável',
          description: 'Pode usar metade de uma Inspiração de Bardo para um teste de habilidade que não seja proficiente.',
          level: 14,
          subclass: 'Colégio do Conhecimento'
        }
      ],
      'Colégio do Valor': [
        {
          name: 'Proficiências Bônus',
          description: 'Proficiência com armaduras médias, escudos e armas marciais.',
          level: 3,
          subclass: 'Colégio do Valor'
        },
        {
          name: 'Inspiração em Combate',
          description: 'Criatura inspirada pode usar Inspiração de Bardo para uma rolagem de dano ou CA como reação.',
          level: 3,
          subclass: 'Colégio do Valor'
        },
        {
          name: 'Ataque Extra',
          description: 'Pode atacar duas vezes quando realizar ação de Ataque.',
          level: 6,
          subclass: 'Colégio do Valor'
        },
        {
          name: 'Segredos Mágicos Adicionais',
          description: 'Aprende duas magias de qualquer classe que seja de nível de magia que você possa conjurar.',
          level: 6,
          subclass: 'Colégio do Valor'
        },
        {
          name: 'Inspiração de Combate',
          description: 'Pode usar ação bônus para inspirar quando fizer um ataque com arma.',
          level: 14,
          subclass: 'Colégio do Valor'
        }
      ]
    }
  },
  'Druida': {
    features: [
      {
        name: 'Druídico',
        description: 'Conhece o Druídico, a linguagem secreta dos druidas.',
        level: 1
      },
      {
        name: 'Conjuração',
        description: 'Pode conjurar magias. Sabedoria é seu atributo de conjuração.',
        level: 1
      },
      {
        name: 'Forma Selvagem',
        description: 'Pode se transformar magicamente em uma besta.',
        level: 2,
        uses: {
          max: 2,
          rechargeOn: 'short'
        }
      },
      {
        name: 'Círculo Druídico',
        description: 'Escolha um círculo druídico.',
        level: 2
      },
      {
        name: 'Incremento no Valor de Habilidade',
        description: 'Aumente dois valores de habilidade em 1 ou um valor em 2.',
        level: 4
      },
      {
        name: 'Forma Selvagem Aprimorada',
        description: 'Pode se transformar em bestas com ND maior e animais aquáticos.',
        level: 4
      },
      {
        name: 'Incremento no Valor de Habilidade',
        description: 'Aumente dois valores de habilidade em 1 ou um valor em 2.',
        level: 8
      },
      {
        name: 'Forma Selvagem Aprimorada (2)',
        description: 'Pode se transformar em bestas voadoras.',
        level: 8
      },
      {
        name: 'Incremento no Valor de Habilidade',
        description: 'Aumente dois valores de habilidade em 1 ou um valor em 2.',
        level: 12
      },
      {
        name: 'Incremento no Valor de Habilidade',
        description: 'Aumente dois valores de habilidade em 1 ou um valor em 2.',
        level: 16
      },
      {
        name: 'Forma Selvagem Atemporal',
        description: 'Pode usar Forma Selvagem um número ilimitado de vezes.',
        level: 18
      },
      {
        name: 'Corpo Atemporal',
        description: 'Para de envelhecer e não pode ser envelhecido magicamente.',
        level: 18
      },
      {
        name: 'Incremento no Valor de Habilidade',
        description: 'Aumente dois valores de habilidade em 1 ou um valor em 2.',
        level: 19
      },
      {
        name: 'Arquidruida',
        description: 'Pode usar Forma Selvagem de duração ilimitada e pode ignorar componentes verbais e somáticos.',
        level: 20
      }
    ],
    subclasses: {
      'Círculo da Terra': [
        {
          name: 'Truque Bônus',
          description: 'Aprende um truque de druida adicional à sua escolha.',
          level: 2,
          subclass: 'Círculo da Terra'
        },
        {
          name: 'Recuperação Natural',
          description: 'Pode recuperar espaços de magia durante um descanso curto.',
          level: 2,
          subclass: 'Círculo da Terra',
          uses: {
            max: 1,
            rechargeOn: 'long'
          }
        },
        {
          name: 'Magias do Círculo',
          description: 'Ganha acesso a magias baseadas no terreno escolhido.',
          level: 3,
          subclass: 'Círculo da Terra'
        },
        {
          name: 'Caminhada da Terra',
          description: 'Mover-se por terreno difícil não-mágico não custa movimento extra.',
          level: 6,
          subclass: 'Círculo da Terra'
        },
        {
          name: 'Proteção da Natureza',
          description: 'Imune a ser enfeitiçado ou amedrontado por elementais ou fadas.',
          level: 10,
          subclass: 'Círculo da Terra'
        },
        {
          name: 'Santuário da Natureza',
          description: 'Bestas e plantas têm dificuldade em atacá-lo.',
          level: 14,
          subclass: 'Círculo da Terra'
        }
      ],
      'Círculo da Lua': [
        {
          name: 'Forma Selvagem de Combate',
          description: 'Pode usar Forma Selvagem como ação bônus e se transformar em bestas com ND maior.',
          level: 2,
          subclass: 'Círculo da Lua'
        },
        {
          name: 'Formas do Círculo',
          description: 'Pode se transformar em bestas de ND 1, aumentando com o nível.',
          level: 2,
          subclass: 'Círculo da Lua'
        },
        {
          name: 'Ataque Primitivo',
          description: 'Ataques em Forma Selvagem contam como mágicos para superar resistências.',
          level: 6,
          subclass: 'Círculo da Lua'
        },
        {
          name: 'Forma Selvagem Elemental',
          description: 'Pode gastar dois usos de Forma Selvagem para se transformar em elemental.',
          level: 10,
          subclass: 'Círculo da Lua'
        },
        {
          name: 'Mil Formas',
          description: 'Pode conjurar alterar-se à vontade.',
          level: 14,
          subclass: 'Círculo da Lua'
        }
      ]
    }
  },
  'Paladino': {
    features: [
      {
        name: 'Sentido Divino',
        description: 'Pode detectar celestiais, demônios e mortos-vivos próximos.',
        level: 1,
        uses: {
          max: 1,
          rechargeOn: 'long'
        }
      },
      {
        name: 'Cura pelas Mãos',
        description: 'Pode curar ferimentos pelo toque.',
        level: 1,
        uses: {
          max: 5,
          rechargeOn: 'long'
        }
      },
      {
        name: 'Estilo de Luta',
        description: 'Escolha um estilo de luta.',
        level: 2
      },
      {
        name: 'Conjuração',
        description: 'Pode conjurar magias. Carisma é seu atributo de conjuração.',
        level: 2
      },
      {
        name: 'Golpe Divino',
        description: 'Pode gastar espaços de magia para causar dano radiante extra.',
        level: 2
      },
      {
        name: 'Saúde Divina',
        description: 'Imune a doenças.',
        level: 3
      },
      {
        name: 'Juramento Sagrado',
        description: 'Escolha um juramento sagrado.',
        level: 3
      },
      {
        name: 'Canalizar Divindade',
        description: 'Ganha habilidades baseadas no seu juramento.',
        level: 3,
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
        name: 'Ataque Extra',
        description: 'Pode atacar duas vezes quando realizar ação de Ataque.',
        level: 5
      },
      {
        name: 'Aura de Proteção',
        description: 'Você e aliados próximos adicionam seu modificador de Carisma a testes de resistência.',
        level: 6
      },
      {
        name: 'Incremento no Valor de Habilidade',
        description: 'Aumente dois valores de habilidade em 1 ou um valor em 2.',
        level: 8
      },
      {
        name: 'Aura de Coragem',
        description: 'Você e aliados próximos não podem ser amedrontados.',
        level: 10
      },
      {
        name: 'Golpe Divino Aprimorado',
        description: 'Sempre causa dano radiante adicional, mesmo sem gastar espaços de magia.',
        level: 11
      },
      {
        name: 'Incremento no Valor de Habilidade',
        description: 'Aumente dois valores de habilidade em 1 ou um valor em 2.',
        level: 12
      },
      {
        name: 'Toque Purificador',
        description: 'Pode remover uma magia que esteja afetando você ou uma criatura disposta.',
        level: 14,
        uses: {
          max: 1,
          rechargeOn: 'long'
        }
      },
      {
        name: 'Incremento no Valor de Habilidade',
        description: 'Aumente dois valores de habilidade em 1 ou um valor em 2.',
        level: 16
      },
      {
        name: 'Aura Aprimorada',
        description: 'O alcance das suas auras aumenta para 9 metros.',
        level: 18
      },
      {
        name: 'Incremento no Valor de Habilidade',
        description: 'Aumente dois valores de habilidade em 1 ou um valor em 2.',
        level: 19
      }
    ],
    subclasses: {
      'Juramento de Devoção': [
        {
          name: 'Arma Sagrada',
          description: 'Pode usar Canalizar Divindade para tornar sua arma mágica.',
          level: 3,
          subclass: 'Juramento de Devoção'
        },
        {
          name: 'Expulsar o Profano',
          description: 'Pode usar Canalizar Divindade para expulsar demônios e mortos-vivos.',
          level: 3,
          subclass: 'Juramento de Devoção'
        },
        {
          name: 'Aura de Devoção',
          description: 'Você e aliados próximos não podem ser enfeitiçados.',
          level: 7,
          subclass: 'Juramento de Devoção'
        },
        {
          name: 'Pureza de Espírito',
          description: 'Sempre sob efeito de proteção contra o bem e mal.',
          level: 15,
          subclass: 'Juramento de Devoção'
        },
        {
          name: 'Nimbo Sagrado',
          description: 'Pode se transformar em uma forma angelical.',
          level: 20,
          subclass: 'Juramento de Devoção',
          uses: {
            max: 1,
            rechargeOn: 'long'
          }
        }
      ],
      'Juramento dos Anciões': [
        {
          name: 'Fúria da Natureza',
          description: 'Pode usar Canalizar Divindade para enredar inimigos com vinhas.',
          level: 3,
          subclass: 'Juramento dos Anciões'
        },
        {
          name: 'Expulsar os Infiéis',
          description: 'Pode usar Canalizar Divindade para expulsar fadas e demônios.',
          level: 3,
          subclass: 'Juramento dos Anciões'
        },
        {
          name: 'Aura de Proteção',
          description: 'Você e aliados próximos têm resistência a dano de magias.',
          level: 7,
          subclass: 'Juramento dos Anciões'
        },
        {
          name: 'Sentinela Eterna',
          description: 'Não pode ser enfeitiçado e resistência a ser nocauteado.',
          level: 15,
          subclass: 'Juramento dos Anciões'
        },
        {
          name: 'Campeão Ancião',
          description: 'Pode assumir a forma de uma força da natureza.',
          level: 20,
          subclass: 'Juramento dos Anciões',
          uses: {
            max: 1,
            rechargeOn: 'long'
          }
        }
      ]
    }
  },
  'Patrulheiro': {
    features: [
      {
        name: 'Inimigo Favorito',
        description: 'Escolha um tipo de criatura como inimigo favorito.',
        level: 1
      },
      {
        name: 'Explorador Natural',
        description: 'Escolha um terreno favorito.',
        level: 1
      },
      {
        name: 'Estilo de Luta',
        description: 'Escolha um estilo de luta.',
        level: 2
      },
      {
        name: 'Conjuração',
        description: 'Pode conjurar magias. Sabedoria é seu atributo de conjuração.',
        level: 2
      },
      {
        name: 'Arquétipo de Patrulheiro',
        description: 'Escolha um arquétipo de patrulheiro.',
        level: 3
      },
      {
        name: 'Consciência Primitiva',
        description: 'Pode usar magia para detectar criaturas favoritas.',
        level: 3,
        uses: {
          max: 1,
          rechargeOn: 'long'
        }
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
        name: 'Inimigo Favorito Adicional',
        description: 'Escolha um inimigo favorito adicional.',
        level: 6
      },
      {
        name: 'Explorador Natural Adicional',
        description: 'Escolha um terreno favorito adicional.',
        level: 6
      },
      {
        name: 'Incremento no Valor de Habilidade',
        description: 'Aumente dois valores de habilidade em 1 ou um valor em 2.',
        level: 8
      },
      {
        name: 'Caminhada Terrestre',
        description: 'Pode mover-se furtivamente em ritmo normal.',
        level: 8
      },
      {
        name: 'Explorador Natural Aprimorado',
        description: 'Benefícios de terreno favorito se aplicam a todos os terrenos.',
        level: 10
      },
      {
        name: 'Incremento no Valor de Habilidade',
        description: 'Aumente dois valores de habilidade em 1 ou um valor em 2.',
        level: 12
      },
      {
        name: 'Inimigo Favorito Adicional',
        description: 'Escolha um inimigo favorito adicional.',
        level: 14
      },
      {
        name: 'Desaparecer',
        description: 'Pode se esconder como ação bônus.',
        level: 14
      },
      {
        name: 'Incremento no Valor de Habilidade',
        description: 'Aumente dois valores de habilidade em 1 ou um valor em 2.',
        level: 16
      },
      {
        name: 'Sentidos Selvagens',
        description: 'Ganha sentido cego com alcance de 9 metros.',
        level: 18
      },
      {
        name: 'Incremento no Valor de Habilidade',
        description: 'Aumente dois valores de habilidade em 1 ou um valor em 2.',
        level: 19
      },
      {
        name: 'Assassino de Inimigos',
        description: 'Pode tentar matar instantaneamente um inimigo favorito.',
        level: 20,
        uses: {
          max: 1,
          rechargeOn: 'short'
        }
      }
    ],
    subclasses: {
      'Caçador': [
        {
          name: 'Presa do Caçador',
          description: 'Escolha uma técnica especializada contra seus inimigos.',
          level: 3,
          subclass: 'Caçador'
        },
        {
          name: 'Táticas de Defesa',
          description: 'Escolha uma maneira de se defender melhor.',
          level: 7,
          subclass: 'Caçador'
        },
        {
          name: 'Ataque Múltiplo',
          description: 'Escolha uma forma de atacar múltiplos inimigos.',
          level: 11,
          subclass: 'Caçador'
        },
        {
          name: 'Defesa Superior do Caçador',
          description: 'Escolha uma defesa excepcional.',
          level: 15,
          subclass: 'Caçador'
        }
      ],
      'Senhor das Feras': [
        {
          name: 'Companheiro dos Patrulheiros',
          description: 'Ganha um companheiro animal.',
          level: 3,
          subclass: 'Senhor das Feras'
        },
        {
          name: 'Treinamento Excepcional',
          description: 'Seu companheiro animal adiciona seu bônus de proficiência à CA.',
          level: 7,
          subclass: 'Senhor das Feras'
        },
        {
          name: 'Fúria Bestial',
          description: 'Seu companheiro pode fazer dois ataques quando você atacar.',
          level: 11,
          subclass: 'Senhor das Feras'
        },
        {
          name: 'Companheiro Compartilhado',
          description: 'Quando conjurar magia em si mesmo, pode incluir seu companheiro.',
          level: 15,
          subclass: 'Senhor das Feras'
        }
      ]
    }
  },
  'Feiticeiro': {
    features: [
      {
        name: 'Conjuração',
        description: 'Pode conjurar magias. Carisma é seu atributo de conjuração.',
        level: 1
      },
      {
        name: 'Origem de Feitiçaria',
        description: 'Escolha uma origem de feitiçaria.',
        level: 1
      },
      {
        name: 'Fonte de Magia',
        description: 'Ganha pontos de feitiçaria para criar espaços de magia.',
        level: 2,
        uses: {
          max: 2,
          rechargeOn: 'long'
        }
      },
      {
        name: 'Metamagia',
        description: 'Pode alterar suas magias de várias formas.',
        level: 3
      },
      {
        name: 'Incremento no Valor de Habilidade',
        description: 'Aumente dois valores de habilidade em 1 ou um valor em 2.',
        level: 4
      },
      {
        name: 'Incremento no Valor de Habilidade',
        description: 'Aumente dois valores de habilidade em 1 ou um valor em 2.',
        level: 8
      },
      {
        name: 'Metamagia Adicional',
        description: 'Aprende uma opção de metamagia adicional.',
        level: 10
      },
      {
        name: 'Incremento no Valor de Habilidade',
        description: 'Aumente dois valores de habilidade em 1 ou um valor em 2.',
        level: 12
      },
      {
        name: 'Incremento no Valor de Habilidade',
        description: 'Aumente dois valores de habilidade em 1 ou um valor em 2.',
        level: 16
      },
      {
        name: 'Metamagia Adicional',
        description: 'Aprende uma opção de metamagia adicional.',
        level: 17
      },
      {
        name: 'Incremento no Valor de Habilidade',
        description: 'Aumente dois valores de habilidade em 1 ou um valor em 2.',
        level: 19
      },
      {
        name: 'Restauração de Feitiçaria',
        description: 'Recupera 4 pontos de feitiçaria quando terminar um descanso curto.',
        level: 20,
        uses: {
          max: 1,
          rechargeOn: 'short'
        }
      }
    ],
    subclasses: {
      'Linhagem Dracônica': [
        {
          name: 'Ancestral Dracônico',
          description: 'Escolha um tipo de dragão como ancestral.',
          level: 1,
          subclass: 'Linhagem Dracônica'
        },
        {
          name: 'Resistência Dracônica',
          description: 'Pontos de vida adicionais e resistência a um tipo de dano.',
          level: 1,
          subclass: 'Linhagem Dracônica'
        },
        {
          name: 'Afinidade Elemental',
          description: 'Adiciona modificador de Carisma ao dano de magias do tipo do ancestral.',
          level: 6,
          subclass: 'Linhagem Dracônica'
        },
        {
          name: 'Asas Dracônicas',
          description: 'Manifesta asas de dragão e ganha velocidade de voo.',
          level: 14,
          subclass: 'Linhagem Dracônica'
        },
        {
          name: 'Presença Dracônica',
          description: 'Pode emanar aura de medo ou adoração.',
          level: 18,
          subclass: 'Linhagem Dracônica',
          uses: {
            max: 1,
            rechargeOn: 'long'
          }
        }
      ],
      'Magia Selvagem': [
        {
          name: 'Surto de Magia Selvagem',
          description: 'Suas magias podem desencadear efeitos mágicos aleatórios.',
          level: 1,
          subclass: 'Magia Selvagem'
        },
        {
          name: 'Maré de Caos',
          description: 'Pode ganhar vantagem em uma jogada de ataque, teste de habilidade ou teste de resistência.',
          level: 1,
          subclass: 'Magia Selvagem',
          uses: {
            max: 1,
            rechargeOn: 'long'
          }
        },
        {
          name: 'Dobrar a Sorte',
          description: 'Pode usar pontos de feitiçaria para ganhar vantagem.',
          level: 6,
          subclass: 'Magia Selvagem'
        },
        {
          name: 'Caos Controlado',
          description: 'Pode rolar duas vezes na tabela de Surto de Magia Selvagem.',
          level: 14,
          subclass: 'Magia Selvagem'
        },
        {
          name: 'Bombardeio de Feitiços',
          description: 'Quando conjurar magia de 1º nível ou superior, pode conjurar uma magia diferente.',
          level: 18,
          subclass: 'Magia Selvagem',
          uses: {
            max: 1,
            rechargeOn: 'long'
          }
        }
      ]
    }
  },
  'Bruxo': {
    features: [
      {
        name: 'Patrono Sobrenatural',
        description: 'Fez um pacto com um ser sobrenatural.',
        level: 1
      },
      {
        name: 'Magia de Pacto',
        description: 'Pode conjurar magias usando espaços que recupera em descanso curto.',
        level: 1
      },
      {
        name: 'Invocações Místicas',
        description: 'Aprende invocações místicas.',
        level: 2
      },
      {
        name: 'Dádiva do Pacto',
        description: 'Seu patrono lhe concede uma dádiva especial.',
        level: 3
      },
      {
        name: 'Incremento no Valor de Habilidade',
        description: 'Aumente dois valores de habilidade em 1 ou um valor em 2.',
        level: 4
      },
      {
        name: 'Invocações Místicas Adicionais',
        description: 'Aprende invocações místicas adicionais.',
        level: 5
      },
      {
        name: 'Incremento no Valor de Habilidade',
        description: 'Aumente dois valores de habilidade em 1 ou um valor em 2.',
        level: 8
      },
      {
        name: 'Incremento no Valor de Habilidade',
        description: 'Aumente dois valores de habilidade em 1 ou um valor em 2.',
        level: 12
      },
      {
        name: 'Incremento no Valor de Habilidade',
        description: 'Aumente dois valores de habilidade em 1 ou um valor em 2.',
        level: 16
      },
      {
        name: 'Incremento no Valor de Habilidade',
        description: 'Aumente dois valores de habilidade em 1 ou um valor em 2.',
        level: 19
      },
      {
        name: 'Mestre Místico',
        description: 'Pode recuperar todos os espaços de magia de pacto com descanso curto.',
        level: 20,
        uses: {
          max: 1,
          rechargeOn: 'short'
        }
      }
    ],
    subclasses: {
      'O Archfey': [
        {
          name: 'Presença Feérica',
          description: 'Pode encantar ou amedrontar criaturas como ação.',
          level: 1,
          subclass: 'O Archfey',
          uses: {
            max: 1,
            rechargeOn: 'short'
          }
        },
        {
          name: 'Fuga Enevoada',
          description: 'Pode se teletransportar e ficar invisível quando sofrer dano.',
          level: 6,
          subclass: 'O Archfey',
          uses: {
            max: 1,
            rechargeOn: 'short'
          }
        },
        {
          name: 'Defesas Encantadas',
          description: 'Resistência a dano de encantamento.',
          level: 10,
          subclass: 'O Archfey'
        },
        {
          name: 'Delírio Sombrio',
          description: 'Pode encantar uma criatura e criar ilusões ao seu redor.',
          level: 14,
          subclass: 'O Archfey',
          uses: {
            max: 1,
            rechargeOn: 'long'
          }
        }
      ],
      'O Demônio': [
        {
          name: 'Bênção do Sombrio',
          description: 'Quando reduzir criatura hostil a 0 pontos de vida, ganha pontos de vida temporários.',
          level: 1,
          subclass: 'O Demônio'
        },
        {
          name: 'Sorte do Sombrio',
          description: 'Pode adicionar um d10 a um teste de habilidade ou resistência.',
          level: 6,
          subclass: 'O Demônio',
          uses: {
            max: 1,
            rechargeOn: 'short'
          }
        },
        {
          name: 'Resistência Demoníaca',
          description: 'Resistência a dano necrótico e pode escolher ser bem-sucedido em teste de resistência de morte.',
          level: 10,
          subclass: 'O Demônio',
          uses: {
            max: 1,
            rechargeOn: 'long'
          }
        },
        {
          name: 'Atravessar os Infernos',
          description: 'Pode se teletransportar e causar dano de fogo aos inimigos próximos.',
          level: 14,
          subclass: 'O Demônio',
          uses: {
            max: 1,
            rechargeOn: 'long'
          }
        }
      ]
    }
  },
  'Monge': {
    features: [
      {
        name: 'Defesa sem Armadura',
        description: 'Quando não estiver usando armadura nem escudo, sua CA é 10 + modificador de Destreza + modificador de Sabedoria.',
        level: 1
      },
      {
        name: 'Artes Marciais',
        description: 'Pode usar Destreza para ataques com armas simples e desarmado, e fazer ataque adicional como ação bônus.',
        level: 1
      },
      {
        name: 'Ki',
        description: 'Ganha pontos de ki para usar habilidades especiais.',
        level: 2,
        uses: {
          max: 2,
          rechargeOn: 'short'
        }
      },
      {
        name: 'Movimento sem Armadura',
        description: 'Sua velocidade aumenta quando não estiver usando armadura.',
        level: 2
      },
      {
        name: 'Tradição Monástica',
        description: 'Escolha uma tradição monástica.',
        level: 3
      },
      {
        name: 'Deflexão de Projéteis',
        description: 'Pode usar reação para reduzir dano de ataques à distância.',
        level: 3
      },
      {
        name: 'Incremento no Valor de Habilidade',
        description: 'Aumente dois valores de habilidade em 1 ou um valor em 2.',
        level: 4
      },
      {
        name: 'Queda Lenta',
        description: 'Pode usar reação para reduzir dano de queda.',
        level: 4
      },
      {
        name: 'Ataque Extra',
        description: 'Pode atacar duas vezes quando realizar ação de Ataque.',
        level: 5
      },
      {
        name: 'Ataque Atordoante',
        description: 'Pode gastar ki para tentar atordoar um inimigo.',
        level: 5
      },
      {
        name: 'Ataques com Ki',
        description: 'Ataques desarmados contam como mágicos.',
        level: 6
      },
      {
        name: 'Evasão',
        description: 'Não sofre dano em teste de resistência bem-sucedido que normalmente causaria metade do dano.',
        level: 7
      },
      {
        name: 'Quietude Mental',
        description: 'Pode usar ação para encerrar um efeito que o deixe amedrontado ou enfeitiçado.',
        level: 7
      },
      {
        name: 'Incremento no Valor de Habilidade',
        description: 'Aumente dois valores de habilidade em 1 ou um valor em 2.',
        level: 8
      },
      {
        name: 'Pureza Corporal',
        description: 'Imune a doenças e venenos.',
        level: 10
      },
      {
        name: 'Incremento no Valor de Habilidade',
        description: 'Aumente dois valores de habilidade em 1 ou um valor em 2.',
        level: 12
      },
      {
        name: 'Língua do Sol e da Lua',
        description: 'Pode entender todas as linguagens faladas.',
        level: 13
      },
      {
        name: 'Alma de Diamante',
        description: 'Proficiência em todos os testes de resistência.',
        level: 14
      },
      {
        name: 'Corpo Atemporal',
        description: 'Não sofre os efeitos do envelhecimento e não pode ser envelhecido magicamente.',
        level: 15
      },
      {
        name: 'Incremento no Valor de Habilidade',
        description: 'Aumente dois valores de habilidade em 1 ou um valor em 2.',
        level: 16
      },
      {
        name: 'Corpo Vazio',
        description: 'Pode gastar ki para ficar invisível e resistir a danos.',
        level: 18,
        uses: {
          max: 1,
          rechargeOn: 'long'
        }
      },
      {
        name: 'Incremento no Valor de Habilidade',
        description: 'Aumente dois valores de habilidade em 1 ou um valor em 2.',
        level: 19
      },
      {
        name: 'Auto Aperfeiçoamento',
        description: 'Quando rolar iniciativa e não tiver pontos de ki, recupera 4 pontos.',
        level: 20
      }
    ],
    subclasses: {
      'Caminho da Mão Aberta': [
        {
          name: 'Técnica da Mão Aberta',
          description: 'Pode empurrar, derrubar ou impedir reações ao acertar com Rajada de Golpes.',
          level: 3,
          subclass: 'Caminho da Mão Aberta'
        },
        {
          name: 'Integridade da Mente e Corpo',
          description: 'Pode curar pontos de vida gastando ki.',
          level: 6,
          subclass: 'Caminho da Mão Aberta'
        },
        {
          name: 'Tranquilidade',
          description: 'Não pode ser alvo de magias de encantamento ou adivinhação sem consentimento.',
          level: 11,
          subclass: 'Caminho da Mão Aberta'
        },
        {
          name: 'Palma Extinguir',
          description: 'Pode tentar matar instantaneamente uma criatura.',
          level: 17,
          subclass: 'Caminho da Mão Aberta',
          uses: {
            max: 1,
            rechargeOn: 'long'
          }
        }
      ],
      'Caminho da Sombra': [
        {
          name: 'Artes das Sombras',
          description: 'Aprende truque menor ilusão e magias usando pontos de ki.',
          level: 3,
          subclass: 'Caminho da Sombra'
        },
        {
          name: 'Passo Sombrio',
          description: 'Pode se teletransportar entre sombras.',
          level: 6,
          subclass: 'Caminho da Sombra'
        },
        {
          name: 'Manto das Sombras',
          description: 'Pode ficar invisível quando em área com pouca luz.',
          level: 11,
          subclass: 'Caminho da Sombra'
        },
        {
          name: 'Oportunista',
          description: 'Pode fazer ataque de oportunidade sem usar reação quando inimigo for atingido por outro.',
          level: 17,
          subclass: 'Caminho da Sombra'
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
