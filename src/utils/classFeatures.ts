import { ClassFeature, SubclassFeature } from './types';

// Base class features (example, should be expanded as needed)
const baseClassFeatures: Record<string, ClassFeature[]> = {
  Barbarian: [
    {
      id: 'rage',
      name: 'Fúria',
      description: 'Você pode entrar em fúria como uma ação bônus.',
      level: 1,
    },
    {
      id: 'recklessAttack',
      name: 'Ataque Imprudente',
      description: 'Você pode atacar com vantagem, mas os ataques contra você também têm vantagem.',
      level: 2,
    },
  ],
  Bard: [
    {
      id: 'spellcasting',
      name: 'Conjuração',
      description: 'Você pode conjurar magias de bardo.',
      level: 1,
    },
    {
      id: 'bardicInspiration',
      name: 'Inspiração Bárdica',
      description: 'Você pode inspirar aliados com dados de inspiração.',
      level: 1,
    },
  ],
  // ... add other base class features as needed
};

// Expanded subclass features with additional sourcebooks
const subclassFeatures: Record<string, SubclassFeature[]> = {
  // ARTIFICER SUBCLASSES
  'Alquimista': [
    {
      name: 'Proficiência com Ferramentas',
      description: 'Você ganha proficiência com suprimentos de alquimista. Se já possui essa proficiência, ganha proficiência com outro tipo de ferramentas de artesão à sua escolha.',
      level: 3,
      subclass: 'Alquimista'
    },
    {
      name: 'Magias de Alquimista',
      description: 'Você sempre tem certas magias preparadas que não contam contra o número de magias que pode preparar.',
      level: 3,
      subclass: 'Alquimista'
    },
    {
      name: 'Elixir Experimental',
      description: 'Sempre que terminar um descanso longo, pode produzir um elixir experimental em um frasco vazio que toca.',
      level: 3,
      subclass: 'Alquimista',
      uses: { max: 1, rechargeOn: 'long' }
    },
    {
      name: 'Cura Alquímica',
      description: 'Pode usar sua ação para produzir um elixir de cura experimental e administrá-lo a uma criatura a até 1,5 metros.',
      level: 5,
      subclass: 'Alquimista',
      uses: { max: 1, rechargeOn: 'long' }
    }
  ],

  'Armeiro': [
    {
      name: 'Proficiência com Ferramentas',
      description: 'Você ganha proficiência com ferramentas de ferreiro. Se já possui essa proficiência, ganha proficiência com outro tipo de ferramentas de artesão.',
      level: 3,
      subclass: 'Armeiro'
    },
    {
      name: 'Magias de Armeiro',
      description: 'Você sempre tem certas magias preparadas que não contam contra o número de magias que pode preparar.',
      level: 3,
      subclass: 'Armeiro'
    },
    {
      name: 'Modelo de Armadura Arcana',
      description: 'Pode usar suas ferramentas de ferreiro para criar uma armadura arcana mágica. Escolha entre Guardião ou Infiltrador.',
      level: 3,
      subclass: 'Armeiro'
    },
    {
      name: 'Ataque Extra',
      description: 'Pode atacar duas vezes, em vez de uma, sempre que realizar a ação Atacar em seu turno.',
      level: 5,
      subclass: 'Armeiro'
    }
  ],

  'Artilheiro': [
    {
      name: 'Proficiência com Ferramentas',
      description: 'Você ganha proficiência com ferramentas de madeireiro. Se já possui essa proficiência, ganha proficiência com outro tipo de ferramentas de artesão.',
      level: 3,
      subclass: 'Artilheiro'
    },
    {
      name: 'Magias de Artilheiro',
      description: 'Você sempre tem certas magias preparadas que não contam contra o número de magias que pode preparar.',
      level: 3,
      subclass: 'Artilheiro'
    },
    {
      name: 'Eldritch Cannons',
      description: 'Você aprende como criar canhões eldríticos mágicos. Em seu turno, pode usar uma ação bônus para ativar um canhão.',
      level: 3,
      subclass: 'Artilheiro'
    },
    {
      name: 'Canhão Arcano',
      description: 'Seus canhões eldríticos ganham mais poder. Você também pode usar sua ação para ativar todos os seus canhões.',
      level: 5,
      subclass: 'Artilheiro'
    }
  ],

  // BARBARIAN SUBCLASSES (Xanathar's + Tasha's)
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
  ],

  // BARD SUBCLASSES (Xanathar's + Tasha's)
  'Colégio da Eloquência': [
    {
      name: 'Discurso Prateado',
      description: 'Você é um mestre da palavra. Quando fizer um teste de Persuasão ou Enganação, pode tratar uma rolagem de d20 de 9 ou menor como um 10.',
      level: 3,
      subclass: 'Colégio da Eloquência'
    },
    {
      name: 'Crítica Implacável',
      description: 'Quando uma criatura que pode ouvir você a até 18 metros faz uma jogada de ataque, teste de habilidade ou de resistência, pode usar sua reação para gastar uma Inspiração Bárdica.',
      level: 3,
      subclass: 'Colégio da Eloquência'
    }
  ],

  'Colégio da Criação': [
    {
      name: 'Nota de Potencial',
      description: 'Sempre que der Inspiração Bárdica a uma criatura, pode proferir uma nota de criação. A inspiração concede um benefício adicional.',
      level: 3,
      subclass: 'Colégio da Criação'
    },
    {
      name: 'Performance de Criação',
      description: 'Como ação, pode canalizar a magia da canção da criação para criar um item não mágico em um espaço desocupado a até 3 metros.',
      level: 3,
      subclass: 'Colégio da Criação',
      uses: { max: 1, rechargeOn: 'long' }
    }
  ],

  'Colégio dos Sussurros': [
    {
      name: 'Veneno Psíquico',
      description: 'Você pode infundir palavras inocentes com uma magia insidiosa. Como ação bônus, pode gastar uma Inspiração Bárdica para causar dano psíquico.',
      level: 3,
      subclass: 'Colégio dos Sussurros'
    },
    {
      name: 'Palavras do Terror',
      description: 'Você aprende a infundir palavras aparentemente inocentes com uma magia terrível. Como ação, pode sussurrar uma frase mágica que apenas uma criatura pode ouvir.',
      level: 3,
      subclass: 'Colégio dos Sussurros',
      uses: { max: 1, rechargeOn: 'short' }
    }
  ],

  'Colégio da Glamúria': [
    {
      name: 'Presença Sedutora',
      description: 'Você ganha a habilidade de tecer magia fey em suas palavras e música. Como ação bônus, pode gastar uma Inspiração Bárdica.',
      level: 3,
      subclass: 'Colégio da Glamúria'
    },
    {
      name: 'Manto de Majestade',
      description: 'Como ação bônus, pode assumir uma aparência majestosa por 1 minuto ou até sua concentração acabar.',
      level: 6,
      subclass: 'Colégio da Glamúria',
      uses: { max: 1, rechargeOn: 'short' }
    }
  ],

  'Colégio das Espadas': [
    {
      name: 'Proficiências Bônus',
      description: 'Você ganha proficiência com armaduras médias e com cimitarras. Se já é proficiente com cimitarras, ganha proficiência com outra arma corpo a corpo à sua escolha.',
      level: 3,
      subclass: 'Colégio das Espadas'
    },
    {
      name: 'Estilo de Luta',
      description: 'Você adota um estilo particular de luta como sua especialidade. Escolha: Combate com Duas Armas ou Duelismo.',
      level: 3,
      subclass: 'Colégio das Espadas'
    },
    {
      name: 'Prosperidades de Lâmina',
      description: 'Você aprende a conduzir ataques impressionantes e úteis. Pode usar Inspiração Bárdica para florescer com armas.',
      level: 3,
      subclass: 'Colégio das Espadas'
    }
  ],

  // CLERIC SUBCLASSES (Xanathar's + Tasha's)
  'Domínio da Forja': [
    {
      name: 'Proficiências Bônus',
      description: 'Você ganha proficiência com armaduras pesadas e ferramentas de ferreiro.',
      level: 1,
      subclass: 'Domínio da Forja'
    },
    {
      name: 'Bênção da Forja',
      description: 'Pode imbuir magia em uma arma ou armadura. Ao final de um descanso longo, pode tocar uma arma ou armadura não mágica.',
      level: 1,
      subclass: 'Domínio da Forja'
    },
    {
      name: 'Canalizar Divindade: Benção do Artífice',
      description: 'Pode usar Canalizar Divindade para criar um item simples. Você conduz uma oração de 1 hora, ao final da qual você toca um metal não mágico.',
      level: 2,
      subclass: 'Domínio da Forja'
    }
  ],

  'Domínio da Tumba': [
    {
      name: 'Círculo da Mortalidade',
      description: 'Você ganha a habilidade de manipular a linha entre vida e morte. Magias de cura têm efeito máximo em criaturas com 0 pontos de vida.',
      level: 1,
      subclass: 'Domínio da Tumba'
    },
    {
      name: 'Olhos da Tumba',
      description: 'Você ocasionalmente vislumbra sinais do destino de uma criatura. Como ação, pode determinar se uma criatura é morta-viva.',
      level: 1,
      subclass: 'Domínio da Tumba'
    },
    {
      name: 'Canalizar Divindade: Caminho para a Tumba',
      description: 'Pode usar Canalizar Divindade para marcar uma criatura viva para a morte. Escolha uma criatura viva a até 9 metros.',
      level: 2,
      subclass: 'Domínio da Tumba'
    }
  ],

  'Domínio da Ordem': [
    {
      name: 'Proficiências Bônus',
      description: 'Você ganha proficiência com armaduras pesadas e pode escolher entre Intimidação ou Persuasão.',
      level: 1,
      subclass: 'Domínio da Ordem'
    },
    {
      name: 'Voz da Autoridade',
      description: 'Você pode invocar o poder da lei para instigar um aliado a atacar. Se lançar uma magia de 1º nível ou superior e alvejar um aliado, ele pode atacar.',
      level: 1,
      subclass: 'Domínio da Ordem'
    },
    {
      name: 'Canalizar Divindade: Comando de Ordem',
      description: 'Pode usar Canalizar Divindade para exercer um comando irresistível. Como ação, escolha uma criatura a até 18 metros.',
      level: 2,
      subclass: 'Domínio da Ordem'
    }
  ],

  'Domínio da Paz': [
    {
      name: 'Implemento da Paz',
      description: 'Você ganha proficiência com Intuição, Performance ou Persuasão (à sua escolha).',
      level: 1,
      subclass: 'Domínio da Paz'
    },
    {
      name: 'Elo Enpático',
      description: 'Você pode forjar um elo empático entre pessoas gentis. Como ação, escolha um número de criaturas dispostas igual ao seu bônus de proficiência.',
      level: 1,
      subclass: 'Domínio da Paz',
      uses: { max: 1, rechargeOn: 'long' }
    },
    {
      name: 'Canalizar Divindade: Bálsamo da Paz',
      description: 'Pode usar Canalizar Divindade para tornar o ambiente ao redor mais pacífico. Como ação, você se move sem provocar ataques de oportunidade.',
      level: 2,
      subclass: 'Domínio da Paz'
    }
  ],

  'Domínio do Crepúsculo': [
    {
      name: 'Proficiências Bônus',
      description: 'Você ganha proficiência com armas marciais e armaduras pesadas.',
      level: 1,
      subclass: 'Domínio do Crepúsculo'
    },
    {
      name: 'Olhos da Noite',
      description: 'Você pode ver através da escuridão. Você tem visão no escuro com alcance de 90 metros.',
      level: 1,
      subclass: 'Domínio do Crepúsculo'
    },
    {
      name: 'Santuário do Crepúsculo',
      description: 'Você pode refrescar seus aliados com sombras sedativas. Como ação, você apresenta seu símbolo sagrado.',
      level: 1,
      subclass: 'Domínio do Crepúsculo',
      uses: { max: 1, rechargeOn: 'long' }
    }
  ],

  // DRUID SUBCLASSES (Xanathar's + Tasha's)
  'Círculo dos Sonhos': [
    {
      name: 'Bálsamo do Círculo de Verão',
      description: 'Você se torna um condutor de cura fey. Você possui uma reserva de energia fey representada por d6s.',
      level: 2,
      subclass: 'Círculo dos Sonhos',
      uses: { max: 2, rechargeOn: 'long' }
    },
    {
      name: 'Caminhada nas Terras Oníricas',
      description: 'Pode lançar a magia sono sem gastar um espaço de magia. Quando o faz, a magia não requer concentração.',
      level: 6,
      subclass: 'Círculo dos Sonhos',
      uses: { max: 1, rechargeOn: 'long' }
    }
  ],

  'Círculo do Pastor': [
    {
      name: 'Fala da Floresta',
      description: 'Você ganha a habilidade de conversar com feras e muitas fey. Você aprende a língua Silvestre e pode se comunicar com feras.',
      level: 2,
      subclass: 'Círculo do Pastor'
    },
    {
      name: 'Totem Espiritual',
      description: 'Pode convocar espíritos da natureza para influenciar o mundo ao redor. Como ação bônus, pode magicamente convocar um totem espiritual.',
      level: 2,
      subclass: 'Círculo do Pastor',
      uses: { max: 1, rechargeOn: 'short' }
    }
  ],

  'Círculo das Estrelas': [
    {
      name: 'Mapa Estelar',
      description: 'Você criou um mapa estelar como parte de seus estudos celestiais. É um objeto pequeno que você pode usar como foco de conjuração.',
      level: 2,
      subclass: 'Círculo das Estrelas'
    },
    {
      name: 'Forma Estelar',
      description: 'Como ação bônus, pode gastar uma forma selvagem para assumir uma forma estelar cósmica.',
      level: 2,
      subclass: 'Círculo das Estrelas',
      uses: { max: 2, rechargeOn: 'short' }
    }
  ],

  'Círculo de Esporos': [
    {
      name: 'Adaga do Círculo',
      description: 'Você ganha a habilidade de cultivar esporos nocivos. Sua Aura de Esporos se estende até 3 metros de você.',
      level: 2,
      subclass: 'Círculo de Esporos'
    },
    {
      name: 'Magia Simbiótica',
      description: 'Você aprende magias adicionais quando alcança certos níveis nesta classe.',
      level: 2,
      subclass: 'Círculo de Esporos'
    },
    {
      name: 'Aura de Esporos',
      description: 'Você pode infectar uma criatura hostil com esporos quando ela estiver por perto.',
      level: 2,
      subclass: 'Círculo de Esporos'
    }
  ],

  'Círculo da Terra Devastada': [
    {
      name: 'Magias do Círculo',
      description: 'Sua conexão simbiótica com a deterioração e decomposição lhe permite preparar certas magias.',
      level: 2,
      subclass: 'Círculo da Terra Devastada'
    },
    {
      name: 'Simbiose com a Deterioração',
      description: 'Você se torna resistente a dano necrótico e venenoso. Além disso, quando você lança uma magia que causa dano necrótico ou venenoso.',
      level: 2,
      subclass: 'Círculo da Terra Devastada'
    }
  ],

  // FIGHTER SUBCLASSES (Xanathar's + Tasha's + Avernus)
  'Arcane Archer': [
    {
      name: 'Magia de Arcane Archer',
      description: 'Você aprende técnicas mágicas para imbuir suas flechas com magia. Ganha o truque prestidigitação.',
      level: 3,
      subclass: 'Arcane Archer'
    },
    {
      name: 'Tiro Arcano',
      description: 'Aprende a desatar efeitos mágicos especiais com alguns de seus tiros. Conhece duas opções de Tiro Arcano.',
      level: 3,
      subclass: 'Arcane Archer',
      uses: { max: 2, rechargeOn: 'short' }
    }
  ],

  'Cavalier': [
    {
      name: 'Proficiência Bônus',
      description: 'Você ganha proficiência com uma das seguintes habilidades: Adestrar Animais, História, Intuição, Performance ou Persuasão.',
      level: 3,
      subclass: 'Cavalier'
    },
    {
      name: 'Nascido para a Sela',
      description: 'Sua maestria como cavaleiro se torna evidente. Você tem vantagem em testes de resistência feitos para evitar cair de sua montaria.',
      level: 3,
      subclass: 'Cavalier'
    },
    {
      name: 'Marca Implacável',
      description: 'Você pode combater com eficácia múltiplos oponentes. Quando ataca uma criatura com um ataque corpo a corpo.',
      level: 3,
      subclass: 'Cavalier',
      uses: { max: 1, rechargeOn: 'short' }
    }
  ],

  'Samurai': [
    {
      name: 'Proficiência Bônus',
      description: 'Você ganha proficiência com uma das seguintes habilidades: História, Intuição, Performance ou Persuasão.',
      level: 3,
      subclass: 'Samurai'
    },
    {
      name: 'Espírito de Luta',
      description: 'Sua intensidade em batalha pode protegê-lo e impulsioná-lo. Como ação bônus, pode se dar resiliência temporária.',
      level: 3,
      subclass: 'Samurai',
      uses: { max: 3, rechargeOn: 'long' }
    }
  ],

  'Eco Knight': [
    {
      name: 'Manifesto de Eco',
      description: 'Você pode usar a magia encontrada em Exandria para convocar o eco de si mesmo de uma linha temporal alternativa.',
      level: 3,
      subclass: 'Eco Knight'
    },
    {
      name: 'Ataque de Eco',
      description: 'Quando realizar a ação Atacar, qualquer ataque que você fizer com essa ação pode se originar de seu espaço ou do espaço de seu eco.',
      level: 3,
      subclass: 'Eco Knight'
    }
  ],

  'Mestre de Runas': [
    {
      name: 'Escultor de Runas',
      description: 'Você aprende como usar runas para aprimorar seu equipamento. Quando terminar um descanso longo, pode tocar objetos.',
      level: 3,
      subclass: 'Mestre de Runas'
    },
    {
      name: 'Carvalho Rúnico',
      description: 'Você aprende runas místicas que lhe concedem poderes especiais. Conhece duas runas à sua escolha.',
      level: 3,
      subclass: 'Mestre de Runas'
    }
  ],

  'Guerreiro Psi': [
    {
      name: 'Energia Psiônica',
      description: 'Você abriga um poço de energia psiônica dentro de si. Esta energia é representada por dados de Energia Psiônica.',
      level: 3,
      subclass: 'Guerreiro Psi'
    },
    {
      name: 'Poderes Psiônicos',
      description: 'Você aprende poderes específicos que são alimentados por sua energia psiônica. Conhece todos os poderes listados abaixo.',
      level: 3,
      subclass: 'Guerreiro Psi'
    }
  ],

  // MONK SUBCLASSES (Xanathar's + Tasha's)
  'Caminho do Kensei': [
    {
      name: 'Caminho do Kensei',
      description: 'Quando escolhe esta tradição, suas práticas especiais com armas transformam essas armas em extensões de seu corpo.',
      level: 3,
      subclass: 'Caminho do Kensei'
    },
    {
      name: 'Armas Kensei',
      description: 'Você ganha proficiência com duas armas de sua escolha. Essas armas se tornam armas kensei para você.',
      level: 3,
      subclass: 'Caminho do Kensei'
    }
  ],

  'Caminho do Mestre Bêbado': [
    {
      name: 'Técnica do Punho Embriagado',
      description: 'Você aprende a se mover de maneira imprevisível como se estivesse cambaleando. Quando usar Rajada de Golpes.',
      level: 3,
      subclass: 'Caminho do Mestre Bêbado'
    }
  ],

  'Caminho da Alma do Sol': [
    {
      name: 'Raio de Sol',
      description: 'Você pode criar orbes ardentes de luz. Você ganha um novo ataque à distância que pode usar com a ação Atacar.',
      level: 3,
      subclass: 'Caminho da Alma do Sol'
    },
    {
      name: 'Proteção Radiante',
      description: 'Você pode entrelaçar luz em uma proteção semirrígida. Quando a Armadura Natural não estiver sendo usada.',
      level: 3,
      subclass: 'Caminho da Alma do Sol'
    }
  ],

  'Caminho da Misericórdia': [
    {
      name: 'Implementos da Misericórdia',
      description: 'Você ganha proficiência com o kit de herbalismo e o kit de medicina. Ganha também proficiência com Intuição e Medicina.',
      level: 3,
      subclass: 'Caminho da Misericórdia'
    },
    {
      name: 'Mão da Cura',
      description: 'Seu toque místico pode curar ferimentos. Como ação, pode gastar 1 ponto de ki para curar uma criatura que pode tocar.',
      level: 3,
      subclass: 'Caminho da Misericórdia'
    },
    {
      name: 'Mão da Morte',
      description: 'Você usa ki para infligir ferimentos. Quando atingir uma criatura com um ataque desarmado, pode gastar 1 ponto de ki.',
      level: 3,
      subclass: 'Caminho da Misericórdia'
    }
  ],

  'Caminho do Astral Self': [
    {
      name: 'Braços do Astral Self',
      description: 'Seu estudo da energia dentro de você permite manifestar sua essência espiritual. Como ação bônus, pode gastar 1 ponto de ki.',
      level: 3,
      subclass: 'Caminho do Astral Self',
      uses: { max: 1, rechargeOn: 'short' }
    }
  ],

  // PALADIN SUBCLASSES (Xanathar's + Tasha's)
  'Juramento de Conquista': [
    {
      name: 'Magias de Juramento',
      description: 'Você ganha magias de juramento em níveis específicos de paladino.',
      level: 3,
      subclass: 'Juramento de Conquista'
    },
    {
      name: 'Canalizar Divindade',
      description: 'Quando faz este juramento, ganha os dois recursos de Canalizar Divindade: Conquering Presence e Guided Strike.',
      level: 3,
      subclass: 'Juramento de Conquista'
    }
  ],

  'Juramento de Redenção': [
    {
      name: 'Magias de Juramento',
      description: 'Você ganha magias de juramento em níveis específicos de paladino.',
      level: 3,
      subclass: 'Juramento de Redenção'
    },
    {
      name: 'Canalizar Divindade',
      description: 'Quando faz este juramento, ganha os dois recursos de Canalizar Divindade: Emissary of Peace e Rebuke the Violent.',
      level: 3,
      subclass: 'Juramento de Redenção'
    }
  ],

  'Juramento da Glória': [
    {
      name: 'Magias de Juramento',
      description: 'Você ganha magias de juramento em níveis específicos de paladino.',
      level: 3,
      subclass: 'Juramento da Glória'
    },
    {
      name: 'Canalizar Divindade',
      description: 'Quando faz este juramento, ganha os dois recursos de Canalizar Divindade: Peerless Athlete e Inspiring Smite.',
      level: 3,
      subclass: 'Juramento da Glória'
    }
  ],

  'Juramento dos Vigilantes': [
    {
      name: 'Magias de Juramento',
      description: 'Você ganha magias de juramento em níveis específicos de paladino.',
      level: 3,
      subclass: 'Juramento dos Vigilantes'
    },
    {
      name: 'Canalizar Divindade',
      description: 'Quando faz este juramento, ganha os dois recursos de Canalizar Divindade: Watcher\'s Will e Abjure the Extraplanar.',
      level: 3,
      subclass: 'Juramento dos Vigilantes'
    }
  ],

  // RANGER SUBCLASSES (Xanathar's + Tasha's)
  'Caçador de Monstros': [
    {
      name: 'Magia de Caçador de Monstros',
      description: 'Você aprende uma magia adicional quando alcança certos níveis nesta classe.',
      level: 3,
      subclass: 'Caçador de Monstros'
    },
    {
      name: 'Senso de Caçador',
      description: 'Você ganha a habilidade de farejar certas criaturas. Como ação, pode gastar um espaço de magia de 1º nível ou superior.',
      level: 3,
      subclass: 'Caçador de Monstros'
    },
    {
      name: 'Presa do Predador',
      description: 'Você pode focar sua ira em um inimigo, aumentando a eficácia de seus ataques contra essa criatura.',
      level: 3,
      subclass: 'Caçador de Monstros'
    }
  ],

  'Horizonte Walker': [
    {
      name: 'Magia de Horizonte Walker',
      description: 'Você aprende uma magia adicional quando alcança certos níveis nesta classe.',
      level: 3,
      subclass: 'Horizonte Walker'
    },
    {
      name: 'Percepção Planar',
      description: 'Você pode detectar portões para outros planos de existência. Como ação, você detecta a distância e direção.',
      level: 3,
      subclass: 'Horizonte Walker'
    },
    {
      name: 'Ataque de Passo Planar',
      description: 'Você aprende a desenhar energia de um plano diferente para aumentar seus ataques.',
      level: 3,
      subclass: 'Horizonte Walker'
    }
  ],

  'Mestre das Feras': [
    {
      name: 'Companheiro Primal',
      description: 'Você ganha um companheiro fera que o acompanha em suas aventuras e é treinado para lutar ao seu lado.',
      level: 3,
      subclass: 'Mestre das Feras'
    },
    {
      name: 'Vínculo Excepcional',
      description: 'Você pode adicionar seu bônus de proficiência às jogadas de dano de seu companheiro fera.',
      level: 3,
      subclass: 'Mestre das Feras'
    }
  ],

  'Fey Wanderer': [
    {
      name: 'Magia Fey Wanderer',
      description: 'Você aprende uma magia adicional quando alcança certos níveis nesta classe.',
      level: 3,
      subclass: 'Fey Wanderer'
    },
    {
      name: 'Sabedoria Sombria',
      description: 'Sua experiência com os fey lhe deu uma perspectiva diferente sobre conversas e magia.',
      level: 3,
      subclass: 'Fey Wanderer'
    }
  ],

  'Caçador de Enxames': [
    {
      name: 'Magia de Caçador de Enxames',
      description: 'Você aprende uma magia adicional quando alcança certos níveis nesta classe.',
      level: 3,
      subclass: 'Caçador de Enxames'
    },
    {
      name: 'Companheiro de Enxame',
      description: 'Você ganha a companhia de um enxame de espíritos insetos que toma a forma de seu companheiro fera.',
      level: 3,
      subclass: 'Caçador de Enxames'
    }
  ],

  // ROGUE SUBCLASSES (Xanathar's + Tasha's)
  'Inquisitive': [
    {
      name: 'Ouvido para Falsidade',
      description: 'Você desenvolve um talento para encontrar pistas. Sempre que fizer um teste de Sabedoria (Intuição) para determinar se uma criatura está mentindo.',
      level: 3,
      subclass: 'Inquisitive'
    },
    {
      name: 'Olho para Detalhes',
      description: 'Você pode usar uma ação bônus para fazer um teste de Sabedoria (Percepção) para encontrar uma criatura escondida.',
      level: 3,
      subclass: 'Inquisitive'
    },
    {
      name: 'Ataque Furtivo Perspicaz',
      description: 'Você pode usar seu Ataque Furtivo sem vantagem se não tiver desvantagem na jogada de ataque.',
      level: 3,
      subclass: 'Inquisitive'
    }
  ],

  'Mastermind': [
    {
      name: 'Mestre da Intriga',
      description: 'Você ganha proficiência com o kit de disfarce, kit de falsificação e uma ferramenta de jogos à sua escolha.',
      level: 3,
      subclass: 'Mastermind'
    },
    {
      name: 'Mestre da Tática',
      description: 'Você pode usar a ação Ajudar como ação bônus. Além disso, quando usar a ação Ajudar para ajudar um aliado em um ataque.',
      level: 3,
      subclass: 'Mastermind'
    }
  ],

  'Scout': [
    {
      name: 'Skirmisher',
      description: 'Você é difícil de fixar durante uma luta. Você pode se mover até metade de sua velocidade como reação.',
      level: 3,
      subclass: 'Scout'
    },
    {
      name: 'Sobrevivencialismo',
      description: 'Você ganha proficiência com Sobrevivência e Natureza. Sua proficiência dobra para qualquer teste que usar essas perícias.',
      level: 3,
      subclass: 'Scout'
    }
  ],

  'Phantom': [
    {
      name: 'Sussurros dos Mortos',
      description: 'Ecos dos mortos permanecem ao seu redor. Sempre que terminar um descanso curto ou longo, pode escolher uma perícia ou ferramenta.',
      level: 3,
      subclass: 'Phantom'
    },
    {
      name: 'Marca de Morte',
      description: 'Você pode marcar uma pessoa para morte. Como ação bônus, pode marcar uma criatura a até 36 metros.',
      level: 3,
      subclass: 'Phantom'
    }
  ],

  'Soulknife': [
    {
      name: 'Adagas Psiônicas',
      description: 'Você manifesta sua energia psiônica como adagas cintilantes de energia psíquica.',
      level: 3,
      subclass: 'Soulknife'
    },
    {
      name: 'Telepatia',
      description: 'Seu poder psiônico permite que você se comunique telepaticamente. Você pode se comunicar telepaticamente com qualquer criatura.',
      level: 3,
      subclass: 'Soulknife'
    }
  ],

  // SORCERER SUBCLASSES (Xanathar's + Tasha's)
  'Mente Aberrante': [
    {
      name: 'Mente Telepática',
      description: 'A partir do 1º nível, sua mente aberrante desenvolve poderes telepáticos. Você pode se comunicar telepaticamente com uma criatura.',
      level: 1,
      subclass: 'Mente Aberrante'
    },
    {
      name: 'Magias da Mente Aberrante',
      description: 'Você aprende magias adicionais quando alcança certos níveis nesta classe.',
      level: 1,
      subclass: 'Mente Aberrante'
    }
  ],

  'Alma Dracônica': [
    {
      name: 'Ancestralidade Dracônica',
      description: 'Você escolhe um tipo de dragão como seu ancestral. O tipo de dano associado a cada dragão é usado por recursos que você ganha mais tarde.',
      level: 1,
      subclass: 'Alma Dracônica'
    },
    {
      name: 'Resistência Dracônica',
      description: 'Como magia flui por seu corpo, ela faz com que traços físicos de seus ancestrais dragões emerjam.',
      level: 1,
      subclass: 'Alma Dracônica'
    }
  ],

  'Linhagem das Tempestades': [
    {
      name: 'Magia do Vento',
      description: 'A partir do 1º nível, você pode usar uma ação bônus em seu turno para causar redemoinhos de vento elemental.',
      level: 1,
      subclass: 'Linhagem das Tempestades'
    },
    {
      name: 'Afinidade Tempestuosa',
      description: 'A partir do 6º nível, você ganha resistência a dano de raio e trovão. Além disso, sempre que começar a lançar uma magia.',
      level: 6,
      subclass: 'Linhagem das Tempestades'
    }
  ],

  'Alma das Fadas': [
    {
      name: 'Magia Fey',
      description: 'Sua conexão inata com a magia fey permite que você aprenda magias normalmente fora do alcance da classe feiticeiro.',
      level: 1,
      subclass: 'Alma das Fadas'
    },
    {
      name: 'Presença Fey',
      description: 'A partir do 1º nível, sua presença fey pode encantar ou aterrorizar aqueles ao redor.',
      level: 1,
      subclass: 'Alma das Fadas',
      uses: { max: 1, rechargeOn: 'short' }
    }
  ],

  'Magia do Relógio': [
    {
      name: 'Magias da Magia do Relógio',
      description: 'Você aprende magias adicionais quando alcança certos níveis nesta classe.',
      level: 1,
      subclass: 'Magia do Relógio'
    },
    {
      name: 'Restaurar Equilíbrio',
      description: 'Sua conexão com o plano da ordem permite que você parie com a sorte.',
      level: 1,
      subclass: 'Magia do Relógio',
      uses: { max: 1, rechargeOn: 'long' }
    }
  ],

  'Magia Divina': [
    {
      name: 'Magia Divina',
      description: 'Sua conexão com o divino permite que você aprenda magias de clérigo.',
      level: 1,
      subclass: 'Magia Divina'
    },
    {
      name: 'Favor Divino',
      description: 'A partir do 1º nível, a presença divina dentro de você pode protegê-lo dos ferimentos.',
      level: 1,
      subclass: 'Magia Divina',
      uses: { max: 1, rechargeOn: 'short' }
    }
  ],

  // WARLOCK SUBCLASSES (Xanathar's + Tasha's)
  'O Celestial': [
    {
      name: 'Lista de Magias Expandida',
      description: 'O Celestial permite que você escolha de uma lista expandida de magias quando aprende uma magia de bruxo.',
      level: 1,
      subclass: 'O Celestial'
    },
    {
      name: 'Luz Curativa',
      description: 'No 1º nível, você ganha a habilidade de canalizar energia celestial para curar ferimentos.',
      level: 1,
      subclass: 'O Celestial',
      uses: { max: 1, rechargeOn: 'long' }
    }
  ],

  'O Hexblade': [
    {
      name: 'Lista de Magias Expandida',
      description: 'O Hexblade permite que você escolha de uma lista expandida de magias quando aprende uma magia de bruxo.',
      level: 1,
      subclass: 'O Hexblade'
    },
    {
      name: 'Guerreiro Hexblade',
      description: 'No 1º nível, você adquire o treinamento necessário para guerrear efetivamente com armas.',
      level: 1,
      subclass: 'O Hexblade'
    },
    {
      name: 'Maldição do Hexblade',
      description: 'A partir do 1º nível, você ganha a habilidade de amaldiçoar um inimigo.',
      level: 1,
      subclass: 'O Hexblade',
      uses: { max: 1, rechargeOn: 'short' }
    }
  ],

  'O Fathomless': [
    {
      name: 'Lista de Magias Expandida',
      description: 'O Fathomless permite que você escolha de uma lista expandida de magias quando aprende uma magia de bruxo.',
      level: 1,
      subclass: 'O Fathomless'
    },
    {
      name: 'Tentáculo das Profundezas',
      description: 'No 1º nível, você pode convocar magicamente um tentáculo espectral que ataca seus inimigos.',
      level: 1,
      subclass: 'O Fathomless',
      uses: { max: 1, rechargeOn: 'short' }
    }
  ],

  'O Gênio': [
    {
      name: 'Lista de Magias Expandida',
      description: 'O Gênio permite que você escolha de uma lista expandida de magias quando aprende uma magia de bruxo.',
      level: 1,
      subclass: 'O Gênio'
    },
    {
      name: 'Recipiente do Gênio',
      description: 'No 1º nível, seu patrono dá a você um recipiente mágico que concede poderes.',
      level: 1,
      subclass: 'O Gênio'
    },
    {
      name: 'Ira do Gênio',
      description: 'No 1º nível, você pode canalizar a natureza mágica de seu patrono.',
      level: 1,
      subclass: 'O Gênio',
      uses: { max: 1, rechargeOn: 'long' }
    }
  ],

  'O Morto Imortal': [
    {
      name: 'Lista de Magias Expandida',
      description: 'O Morto Imortal permite que você escolha de uma lista expandida de magias quando aprende uma magia de bruxo.',
      level: 1,
      subclass: 'O Morto Imortal'
    },
    {
      name: 'Entre a Vida e a Morte',
      description: 'No 1º nível, você aprende um truque de necromancia à sua escolha.',
      level: 1,
      subclass: 'O Morto Imortal'
    }
  ],

  // WIZARD SUBCLASSES (Xanathar's + Tasha's)
  'Guerra': [
    {
      name: 'Salvador da Guerra',
      description: 'A partir do 2º nível, você pode proteger a si mesmo e aos outros de efeitos com sua magia.',
      level: 2,
      subclass: 'Guerra'
    },
    {
      name: 'Magia Tática',
      description: 'A partir do 2º nível, você pode usar sua ação para dirigir um de seus companheiros em combate.',
      level: 2,
      subclass: 'Guerra',
      uses: { max: 1, rechargeOn: 'short' }
    }
  ],

  'Ordem dos Escribas': [
    {
      name: 'Livro de Feitiços Desperto',
      description: 'A partir do 2º nível, usando métodos especialmente preparados, você desperta uma consciência arcana.',
      level: 2,
      subclass: 'Ordem dos Escribas'
    },
    {
      name: 'Substituição Escrita',
      description: 'A partir do 2º nível, você pode mudar temporariamente o tipo de dano de uma magia.',
      level: 2,
      subclass: 'Ordem dos Escribas'
    }
  ],

  'Cronurgia': [
    {
      name: 'Savant Cronúrgico',
      description: 'A partir do 2º nível, aprender magias da escola de tempo e duração custa apenas metade do tempo e dinheiro.',
      level: 2,
      subclass: 'Cronurgia'
    },
    {
      name: 'Consciência Temporal',
      description: 'A partir do 2º nível, você pode adicionar seu modificador de Inteligência a suas jogadas de iniciativa.',
      level: 2,
      subclass: 'Cronurgia'
    }
  ],

  'Graviturgia': [
    {
      name: 'Savant Gravitúrgico',
      description: 'A partir do 2º nível, aprender magias que manipulam gravitação custa apenas metade do tempo e dinheiro.',
      level: 2,
      subclass: 'Graviturgia'
    },
    {
      name: 'Poço Gravitacional',
      description: 'A partir do 2º nível, você pode manipular a gravidade ao redor de uma criatura.',
      level: 2,
      subclass: 'Graviturgia',
      uses: { max: 1, rechargeOn: 'short' }
    }
  ]
};

export function getClassFeatures(className: string, level: number, subclass?: string): ClassFeature[] {
  const baseFeatures = baseClassFeatures[className] || [];
  const subclassFeaturesList = subclass ? subclassFeatures[subclass] || [] : [];
  const features = [...baseFeatures];

  // Add subclass features that are at or below the character level
  for (const feature of subclassFeaturesList) {
    if (feature.level <= level) {
      features.push({
        id: `${subclass}-${feature.name}-${feature.level}`,
        name: feature.name,
        description: feature.description,
        level: feature.level,
        subclass: feature.subclass,
        uses: feature.uses ? { ...feature.uses, current: feature.uses.max } : undefined,
      });
    }
  }

  return features;
}

export function getAvailableSubclasses(className: string): string[] {
  // Return all subclasses keys that belong to the className
  // This is a simplified approach; in a real app, you might have a mapping from class to subclasses
  const subclasses = Object.keys(subclassFeatures);
  // For this example, we assume subclass names contain the class name or are known
  // You can customize this mapping as needed
  const classSubclassesMap: Record<string, string[]> = {
    Artificer: ['Alquimista', 'Armeiro', 'Artilheiro'],
    Barbarian: ['Caminho do Ancestral Guardião', 'Caminho da Magia Selvagem', 'Caminho da Fera'],
    Bard: ['Colégio da Eloquência', 'Colégio da Criação', 'Colégio dos Sussurros', 'Colégio da Glamúria', 'Colégio das Espadas'],
    Cleric: ['Domínio da Forja', 'Domínio da Tumba', 'Domínio da Ordem', 'Domínio da Paz', 'Domínio do Crepúsculo'],
    Druid: ['Círculo dos Sonhos', 'Círculo do Pastor', 'Círculo das Estrelas', 'Círculo de Esporos', 'Círculo da Terra Devastada'],
    Fighter: ['Arcane Archer', 'Cavalier', 'Samurai', 'Eco Knight', 'Mestre de Runas', 'Guerreiro Psi'],
    Monk: ['Caminho do Kensei', 'Caminho do Mestre Bêbado', 'Caminho da Alma do Sol', 'Caminho da Misericórdia', 'Caminho do Astral Self'],
    Paladin: ['Juramento de Conquista', 'Juramento de Redenção', 'Juramento da Glória', 'Juramento dos Vigilantes'],
    Ranger: ['Caçador de Monstros', 'Horizonte Walker', 'Mestre das Feras', 'Fey Wanderer', 'Caçador de Enxames'],
    Rogue: ['Inquisitive', 'Mastermind', 'Scout', 'Phantom', 'Soulknife'],
    Sorcerer: ['Mente Aberrante', 'Alma Dracônica', 'Linhagem das Tempestades', 'Alma das Fadas', 'Magia do Relógio', 'Magia Divina'],
    Warlock: ['O Celestial', 'O Hexblade', 'O Fathomless', 'O Gênio', 'O Morto Imortal'],
    Wizard: ['Guerra', 'Ordem dos Escribas', 'Cronurgia', 'Graviturgia'],
  };

  return classSubclassesMap[className] || [];
}
