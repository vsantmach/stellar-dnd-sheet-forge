
export interface ClassFeature {
  id: string;
  name: string;
  description: string;
  level: number;
  subclass?: string;
  uses?: {
    max: number;
    current: number;
    rechargeOn: 'short' | 'long' | 'other';
  };
}

export interface SubclassFeature {
  name: string;
  description: string;
  level: number;
  subclass: string;
  uses?: {
    max: number;
    rechargeOn: 'short' | 'long' | 'other';
  };
}

export interface AbilityBonus {
  strength?: number;
  dexterity?: number;
  constitution?: number;
  intelligence?: number;
  wisdom?: number;
  charisma?: number;
  extra1?: number;
  extra2?: number;
}

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
  subraces?: { [key: string]: RacialFeature[] };
}

export interface Character {
  id: string;
  name: string;
  class: string;
  level: number;
  race: string;
  subclass?: string;
  background?: string;
  alignment?: string;
  experiencePoints?: number;
  abilityScores?: {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
  };
  proficiencyBonus?: number;
  savingThrows?: {
    [key: string]: { bonus: string; proficient: boolean };
  };
  skills?: {
    [key: string]: { bonus: string; proficient: boolean };
  };
  hitPoints?: {
    current: number;
    maximum: number;
    temporary: number;
  };
  armorClass?: number;
  speed?: number;
  hitDice?: string;
}
