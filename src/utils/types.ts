
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
