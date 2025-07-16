
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
