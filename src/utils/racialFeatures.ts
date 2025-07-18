
import { AbilityBonus, RacialFeature, RaceData } from './types';

// Define os bônus de habilidade racial para cada raça do Player's Handbook
export const raceAbilityBonuses: Record<string, AbilityBonus> = {
  // Raças Básicas do Player's Handbook
  'Humano': { strength: 1, dexterity: 1, constitution: 1, intelligence: 1, wisdom: 1, charisma: 1 },
  'Humano Variante': { extra1: 1, extra2: 1 },
  
  // Elfos
  'Elfo': { dexterity: 2 },
  'Alto Elfo': { dexterity: 2, intelligence: 1 },
  'Elfo da Floresta': { dexterity: 2, wisdom: 1 },
  'Elfo Negro (Drow)': { dexterity: 2, charisma: 1 },
  
  // Anões
  'Anão': { constitution: 2 },
  'Anão da Colina': { constitution: 2, wisdom: 1 },
  'Anão da Montanha': { constitution: 2, strength: 2 },
  
  // Halflings
  'Halfling': { dexterity: 2 },
  'Halfling Leve': { dexterity: 2, charisma: 1 },
  'Halfling Robusto': { dexterity: 2, constitution: 1 },
  
  // Draconatos
  'Draconato': { strength: 2, charisma: 1 },
  
  // Gnomos
  'Gnomo': { intelligence: 2 },
  'Gnomo da Floresta': { intelligence: 2, dexterity: 1 },
  'Gnomo da Rocha': { intelligence: 2, constitution: 1 },
  
  // Meio-raças
  'Meio-Elfo': { charisma: 2, extra1: 1, extra2: 1 },
  'Meio-Orc': { strength: 2, constitution: 1 },
  
  // Tieflings
  'Tiefling': { intelligence: 1, charisma: 2 }
};

// Características raciais completas do Player's Handbook
export const racialFeaturesData: Record<string, RaceData> = {
  'Humano': {
    features: [
      { name: 'Tamanho Médio', description: 'Você é de tamanho Médio.' },
      { name: 'Velocidade', description: 'Sua velocidade base de caminhada é 9 metros.' },
      { name: 'Versatilidade', description: 'Você ganha +1 em todas as habilidades.' },
      { name: 'Idioma Extra', description: 'Você pode falar, ler e escrever um idioma extra à sua escolha.' }
    ]
  },
  
  'Humano Variante': {
    features: [
      { name: 'Tamanho Médio', description: 'Você é de tamanho Médio.' },
      { name: 'Velocidade', description: 'Sua velocidade base de caminhada é 9 metros.' },
      { name: 'Talento', description: 'Você ganha um talento à sua escolha.' },
      { name: 'Perícia', description: 'Você ganha proficiência em uma perícia à sua escolha.' },
      { name: 'Idioma Extra', description: 'Você pode falar, ler e escrever um idioma extra à sua escolha.' }
    ]
  },

  'Elfo': {
    features: [
      { name: 'Tamanho Médio', description: 'Você é de tamanho Médio.' },
      { name: 'Velocidade', description: 'Sua velocidade base de caminhada é 9 metros.' },
      { name: 'Visão no Escuro', description: 'Você pode ver no escuro a até 18 metros como se fosse luz fraca.' },
      { name: 'Sentidos Aguçados', description: 'Você tem proficiência na perícia Percepção.' },
      { name: 'Ancestral Feérico', description: 'Você tem vantagem em testes de resistência contra ser enfeitiçado e magia não pode colocar você para dormir.' },
      { name: 'Transe', description: 'Você não precisa dormir. Em vez disso, você medita por 4 horas por dia.' },
      { name: 'Idiomas', description: 'Você pode falar, ler e escrever Comum e Élfico.' }
    ],
    subraces: {
      'Alto Elfo': [
        { name: 'Proficiência com Armas Élficas', description: 'Você tem proficiência com espadas longas, espadas curtas, arcos longos e arcos curtos.' },
        { name: 'Truque', description: 'Você conhece um truque à sua escolha da lista de magias de mago.' },
        { name: 'Idioma Extra', description: 'Você pode falar, ler e escrever um idioma extra à sua escolha.' }
      ],
      'Elfo da Floresta': [
        { name: 'Proficiência com Armas Élficas', description: 'Você tem proficiência com espadas longas, espadas curtas, arcos longos e arcos curtos.' },
        { name: 'Pés Ligeiros', description: 'Sua velocidade base de caminhada aumenta para 10,5 metros.' },
        { name: 'Máscara da Natureza', description: 'Você pode tentar se esconder mesmo quando apenas levemente obscurecido por folhagem, chuva forte, neve, névoa ou outros fenômenos naturais.' }
      ],
      'Elfo Negro (Drow)': [
        { name: 'Visão no Escuro Superior', description: 'Sua visão no escuro tem alcance de 36 metros.' },
        { name: 'Sensibilidade à Luz Solar', description: 'Você tem desvantagem em ataques e testes de Percepção que dependem da visão quando você, o alvo ou o que você está tentando perceber está sob luz solar direta.' },
        { name: 'Magia Drow', description: 'Você conhece o truque luzes dançantes. Quando alcança o 3º nível, pode conjurar fogo das fadas uma vez por dia. Quando alcança o 5º nível, pode conjurar escuridão uma vez por dia.' },
        { name: 'Proficiência com Armas Drow', description: 'Você tem proficiência com rapieiras, espadas curtas e bestas de mão.' }
      ]
    }
  },

  'Anão': {
    features: [
      { name: 'Tamanho Médio', description: 'Você é de tamanho Médio.' },
      { name: 'Velocidade', description: 'Sua velocidade base de caminhada é 7,5 metros. Sua velocidade não é reduzida por usar armadura pesada.' },
      { name: 'Visão no Escuro', description: 'Você pode ver no escuro a até 18 metros como se fosse luz fraca.' },
      { name: 'Resistência Anã', description: 'Você tem vantagem em testes de resistência contra veneno e resistência a dano de veneno.' },
      { name: 'Proficiência com Ferramentas', description: 'Você ganha proficiência com ferramentas de artesão à sua escolha: ferramentas de ferreiro, suprimentos de cervejeiro ou ferramentas de pedreiro.' },
      { name: 'Conhecimento de Pedra', description: 'Sempre que fizer um teste de Inteligência (História) relacionado à origem de um trabalho em pedra, você é considerado proficiente na perícia História e adiciona o dobro do seu bônus de proficiência ao teste.' },
      { name: 'Idiomas', description: 'Você pode falar, ler e escrever Comum e Anão.' }
    ],
    subraces: {
      'Anão da Colina': [
        { name: 'Tenacidade Anã', description: 'Seu máximo de pontos de vida aumenta em 1, e aumenta em 1 a cada vez que você ganha um nível.' }
      ],
      'Anão da Montanha': [
        { name: 'Proficiência com Armaduras', description: 'Você tem proficiência com armaduras leves e médias.' }
      ]
    }
  },

  'Halfling': {
    features: [
      { name: 'Tamanho Pequeno', description: 'Você é de tamanho Pequeno.' },
      { name: 'Velocidade', description: 'Sua velocidade base de caminhada é 7,5 metros.' },
      { name: 'Sortudo', description: 'Quando você rolar um 1 no d20 para um teste de ataque, teste de habilidade ou teste de resistência, pode rolar novamente o dado e deve usar o novo resultado.' },
      { name: 'Bravura', description: 'Você tem vantagem em testes de resistência contra ser amedrontado.' },
      { name: 'Agilidade Halfling', description: 'Você pode mover-se através do espaço de qualquer criatura que seja de um tamanho maior que o seu.' },
      { name: 'Idiomas', description: 'Você pode falar, ler e escrever Comum e Halfling.' }
    ],
    subraces: {
      'Halfling Leve': [
        { name: 'Furtividade Natural', description: 'Você pode tentar se esconder mesmo quando obscurecido apenas por uma criatura que seja pelo menos um tamanho maior que você.' }
      ],
      'Halfling Robusto': [
        { name: 'Resistência Halfling Robusto', description: 'Você tem vantagem em testes de resistência contra veneno e resistência a dano de veneno.' }
      ]
    }
  },

  'Draconato': {
    features: [
      { name: 'Tamanho Médio', description: 'Você é de tamanho Médio.' },
      { name: 'Velocidade', description: 'Sua velocidade base de caminhada é 9 metros.' },
      { name: 'Ancestralidade Dracônica', description: 'Você tem ancestralidade dracônica. Escolha um tipo de dragão da tabela de Ancestralidade Dracônica. Sua arma de sopro e resistência a dano são determinadas pelo tipo de dragão.' },
      { name: 'Arma de Sopro', description: 'Você pode usar sua ação para exalar energia destrutiva. Quando usar sua arma de sopro, cada criatura na área da exalação deve fazer um teste de resistência. O CD para este teste de resistência é igual a 8 + seu modificador de Constituição + seu bônus de proficiência.' },
      { name: 'Resistência a Dano', description: 'Você tem resistência ao tipo de dano associado à sua ancestralidade dracônica.' },
      { name: 'Idiomas', description: 'Você pode falar, ler e escrever Comum e Dracônico.' }
    ]
  },

  'Gnomo': {
    features: [
      { name: 'Tamanho Pequeno', description: 'Você é de tamanho Pequeno.' },
      { name: 'Velocidade', description: 'Sua velocidade base de caminhada é 7,5 metros.' },
      { name: 'Visão no Escuro', description: 'Você pode ver no escuro a até 18 metros como se fosse luz fraca.' },
      { name: 'Astúcia Gnômica', description: 'Você tem vantagem em todos os testes de resistência de Inteligência, Sabedoria e Carisma contra magia.' },
      { name: 'Idiomas', description: 'Você pode falar, ler e escrever Comum e Gnômico.' }
    ],
    subraces: {
      'Gnomo da Floresta': [
        { name: 'Ilusionista Nato', description: 'Você conhece o truque ilusão menor. Inteligência é sua habilidade de conjuração para esta magia.' },
        { name: 'Falar com Bestas Pequenas', description: 'Através de sons e gestos, você pode comunicar ideias simples com bestas Pequenas ou menores.' }
      ],
      'Gnomo da Rocha': [
        { name: 'Conhecimento de Artífice', description: 'Sempre que fizer um teste de Inteligência (História) relacionado a itens mágicos, objetos alquímicos ou dispositivos tecnológicos, pode adicionar o dobro do seu bônus de proficiência.' },
        { name: 'Engenhoqueiro', description: 'Você tem proficiência com ferramentas de artífice (ferramentas de engenhoqueiro). Usando essas ferramentas, pode gastar 1 hora e 10 po em materiais para construir um dispositivo Miúdo.' }
      ]
    }
  },

  'Meio-Elfo': {
    features: [
      { name: 'Tamanho Médio', description: 'Você é de tamanho Médio.' },
      { name: 'Velocidade', description: 'Sua velocidade base de caminhada é 9 metros.' },
      { name: 'Visão no Escuro', description: 'Você pode ver no escuro a até 18 metros como se fosse luz fraca.' },
      { name: 'Ancestral Feérico', description: 'Você tem vantagem em testes de resistência contra ser enfeitiçado e magia não pode colocar você para dormir.' },
      { name: 'Versatilidade de Perícia', description: 'Você ganha proficiência em duas perícias à sua escolha.' },
      { name: 'Idiomas', description: 'Você pode falar, ler e escrever Comum, Élfico e um idioma extra à sua escolha.' }
    ]
  },

  'Meio-Orc': {
    features: [
      { name: 'Tamanho Médio', description: 'Você é de tamanho Médio.' },
      { name: 'Velocidade', description: 'Sua velocidade base de caminhada é 9 metros.' },
      { name: 'Visão no Escuro', description: 'Você pode ver no escuro a até 18 metros como se fosse luz fraca.' },
      { name: 'Resistência Implacável', description: 'Quando você é reduzido a 0 pontos de vida mas não é morto, pode voltar a 1 ponto de vida. Não pode usar esta característica novamente até terminar um descanso longo.', uses: { max: 1, rechargeOn: 'long' } },
      { name: 'Ataques Selvagens', description: 'Quando você consegue um acerto crítico com um ataque corpo a corpo, pode rolar um dos dados de dano da arma mais uma vez e adicioná-lo ao dano extra do acerto crítico.' },
      { name: 'Idiomas', description: 'Você pode falar, ler e escrever Comum e Orc.' }
    ]
  },

  'Tiefling': {
    features: [
      { name: 'Tamanho Médio', description: 'Você é de tamanho Médio.' },
      { name: 'Velocidade', description: 'Sua velocidade base de caminhada é 9 metros.' },
      { name: 'Visão no Escuro', description: 'Você pode ver no escuro a até 18 metros como se fosse luz fraca.' },
      { name: 'Resistência Infernal', description: 'Você tem resistência a dano de fogo.' },
      { name: 'Legado Infernal', description: 'Você conhece o truque taumaturgia. Quando alcança o 3º nível, pode conjurar repreensão infernal como uma magia de 2º nível uma vez com esta característica. Quando alcança o 5º nível, pode conjurar escuridão uma vez com esta característica. Carisma é sua habilidade de conjuração para essas magias.' },
      { name: 'Idiomas', description: 'Você pode falar, ler e escrever Comum e Infernal.' }
    ]
  }
};

// Lista de raças disponíveis do Player's Handbook
export const availableRaces = [
  'Humano', 'Humano Variante', 'Elfo', 'Alto Elfo', 'Elfo da Floresta', 'Elfo Negro (Drow)',
  'Anão', 'Anão da Colina', 'Anão da Montanha', 'Halfling', 'Halfling Leve', 'Halfling Robusto',
  'Draconato', 'Gnomo', 'Gnomo da Floresta', 'Gnomo da Rocha', 'Meio-Elfo', 'Meio-Orc', 'Tiefling'
];

// Função para obter bônus de habilidade racial
export const getRaceAbilityBonus = (race: string): AbilityBonus => {
  return raceAbilityBonuses[race] || {};
};

// Função para obter características raciais
export const getRacialFeatures = (race: string, subrace?: string): RacialFeature[] => {
  const customRaces = getCustomRaces();
  
  // Check custom races first
  if (customRaces[race]) {
    const raceData = customRaces[race];
    let features = [...raceData.features];
    
    if (subrace && raceData.subraces && raceData.subraces[subrace]) {
      features = [...features, ...raceData.subraces[subrace]];
    }
    
    return features;
  }
  
  // Check default races
  const raceData = racialFeaturesData[race];
  if (!raceData) return [];
  
  let features = [...raceData.features];
  
  if (subrace && raceData.subraces && raceData.subraces[subrace]) {
    features = [...features, ...raceData.subraces[subrace]];
  }
  
  return features;
};

// Função para obter subraças disponíveis
export const getAvailableSubraces = (race: string): string[] => {
  const customRaces = getCustomRaces();
  
  // Check custom races first
  if (customRaces[race] && customRaces[race].subraces) {
    return Object.keys(customRaces[race].subraces);
  }
  
  // Check default races
  const raceData = racialFeaturesData[race];
  if (raceData && raceData.subraces) {
    return Object.keys(raceData.subraces);
  }
  
  return [];
};

// Função para obter raças personalizadas do localStorage
export const getCustomRaces = (): Record<string, RaceData> => {
  try {
    const stored = localStorage.getItem('dnd-custom-races');
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
};

// Função para salvar uma nova raça personalizada
export const saveCustomRace = (raceName: string, raceData: RaceData): void => {
  try {
    const customRaces = getCustomRaces();
    customRaces[raceName] = raceData;
    localStorage.setItem('dnd-custom-races', JSON.stringify(customRaces));
  } catch (error) {
    console.error('Error saving custom race:', error);
  }
};

// Função para obter todas as raças (padrão + personalizadas)
export const getAllRaces = (): string[] => {
  const standardRaces = Object.keys(racialFeaturesData);
  const customRaces = Object.keys(getCustomRaces());
  return [...standardRaces, ...customRaces];
};
