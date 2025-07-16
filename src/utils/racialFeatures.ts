
import { AbilityBonus, RacialFeature, RaceData } from './types';

// Define os bônus de habilidade racial para cada raça
export const raceAbilityBonuses: Record<string, AbilityBonus> = {
  'Humano': { strength: 1, dexterity: 1, constitution: 1, intelligence: 1, wisdom: 1, charisma: 1 },
  'Elfo da Floresta': { dexterity: 2, wisdom: 1 },
  'Elfo Negro (Drow)': { dexterity: 2, charisma: 1 },
  'Anão da Colina': { constitution: 2, wisdom: 1 },
  'Anão da Montanha': { constitution: 2, strength: 2 },
  'Halfling Leve': { dexterity: 2, charisma: 1 },
  'Halfling Robusto': { dexterity: 2, constitution: 1 },
  'Draconato': { strength: 2, charisma: 1 },
  'Gnomo da Floresta': { intelligence: 2, dexterity: 1 },
  'Gnomo da Rocha': { intelligence: 2, constitution: 1 },
  'Meio-Elfo': { charisma: 2, extra1: 1, extra2: 1 },
  'Meio-Orc': { strength: 2, constitution: 1 },
  'Tiefling': { intelligence: 1, charisma: 2 },
  'Aasimar': { charisma: 2, wisdom: 1 },
  'Firbolg': { wisdom: 2, strength: 1 },
  'Goliath': { strength: 2, constitution: 1 },
  'Kenku': { dexterity: 2, wisdom: 1 },
  'Lizardfolk': { constitution: 2, wisdom: 1 },
  'Tabaxi': { dexterity: 2, charisma: 1 },
  'Triton': { strength: 1, constitution: 1, charisma: 1 },
  'Bugbear': { strength: 2, dexterity: 1 },
  'Goblin': { dexterity: 2, constitution: 1 },
  'Hobgoblin': { constitution: 2, intelligence: 1 },
  'Orc': { strength: 2, constitution: 1, intelligence: -2 },
  'Kobold': { dexterity: 2, strength: -2 },
  'Yuan-ti Pureblood': { charisma: 2, intelligence: 1 },
  'Tortle': { strength: 2, wisdom: 1 },
  'Aarakocra': { dexterity: 2, wisdom: 1 },
  'Genasi do Ar': { dexterity: 2, intelligence: 1 },
  'Genasi da Água': { constitution: 2, wisdom: 1 },
  'Genasi do Fogo': { intelligence: 2, constitution: 1 },
  'Genasi da Terra': { strength: 2, wisdom: 1 },
  'Githyanki': { strength: 2, intelligence: 1 },
  'Githzerai': { wisdom: 2, intelligence: 1 },
  'Centauro': { strength: 2, wisdom: 1 },
  'Loxodon': { constitution: 2, wisdom: 1 },
  'Minotauro': { strength: 2, charisma: 1 },
  'Simic Hybrid': { constitution: 2, extra1: 1 },
  'Vedalken': { intelligence: 2, wisdom: 1 },
  'Kalashtar': { wisdom: 2, charisma: 1 },
  'Changeling': { charisma: 2, dexterity: 1 },
  'Shifter (Beasthide)': { strength: 2, dexterity: 1 },
  'Shifter (Longtooth)': { strength: 2, wisdom: 1 },
  'Shifter (Swiftstride)': { dexterity: 2, charisma: 1 },
  'Shifter (Wildhunt)': { wisdom: 2, dexterity: 1 },
  'Warforged': { constitution: 2, extra1: 1 },
  ' অটোম্যাটন ': { constitution: 2, extra1: 1 },
};

// Default racial features data
export const racialFeaturesData: Record<string, RaceData> = {
  'Humano': {
    features: [
      { name: 'Versatilidade', description: '+1 em todas as habilidades' },
      { name: 'Talento Extra', description: 'Ganha um talento adicional no 1º nível' }
    ]
  },
  'Elfo da Floresta': {
    features: [
      { name: 'Visão no Escuro', description: 'Enxerga no escuro até 18 metros' },
      { name: 'Sentidos Aguçados', description: 'Proficiência em Percepção' },
      { name: 'Ancestral Feérico', description: 'Vantagem contra charme e imune a sono mágico' }
    ]
  },
  'Anão da Montanha': {
    features: [
      { name: 'Visão no Escuro', description: 'Enxerga no escuro até 18 metros' },
      { name: 'Resistência Anã', description: 'Vantagem contra veneno' },
      { name: 'Proficiência com Armaduras', description: 'Proficiência com armaduras leves e médias' }
    ]
  }
};

// Lista de raças disponíveis
export const availableRaces = [
  'Humano', 'Elfo da Floresta', 'Elfo Negro (Drow)', 'Anão da Colina', 'Anão da Montanha',
  'Halfling Leve', 'Halfling Robusto', 'Draconato', 'Gnomo da Floresta', 'Gnomo da Rocha',
  'Meio-Elfo', 'Meio-Orc', 'Tiefling', 'Aasimar', 'Firbolg', 'Goliath', 'Kenku', 'Lizardfolk',
  'Tabaxi', 'Triton', 'Bugbear', 'Goblin', 'Hobgoblin', 'Orc', 'Kobold', 'Yuan-ti Pureblood',
  'Tortle', 'Aarakocra', 'Genasi do Ar', 'Genasi da Água', 'Genasi do Fogo', 'Genasi da Terra',
  'Githyanki', 'Githzerai', 'Centauro', 'Loxodon', 'Minotauro', 'Simic Hybrid', 'Vedalken',
  'Kalashtar', 'Changeling', 'Shifter (Beasthide)', 'Shifter (Longtooth)', 'Shifter (Swiftstride)',
  'Shifter (Wildhunt)', 'Warforged', ' অটোম্যাটন '
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
