import { ClassFeature, SubclassFeature } from '../types';
import { artificerSubclasses, artificerAvailableSubclasses } from './artificer';
import { barbarianFeatures, barbarianSubclasses, barbarianAvailableSubclasses } from './barbarian';
import { bardFeatures, bardSubclasses, bardAvailableSubclasses } from './bard';
import { clericFeatures, clericSubclasses, clericAvailableSubclasses } from './cleric';
import { fighterFeatures, fighterSubclasses, fighterAvailableSubclasses } from './fighter';
import { monkFeatures, monkSubclasses, monkAvailableSubclasses } from './monk';
import { paladinFeatures, paladinSubclasses, paladinAvailableSubclasses } from './paladin';
import { rangerFeatures, rangerSubclasses, rangerAvailableSubclasses } from './ranger';
import { rogueFeatures, rogueSubclasses, rogueAvailableSubclasses } from './rogue';
import { sorcererFeatures, sorcererSubclasses, sorcererAvailableSubclasses } from './sorcerer';
import { warlockFeatures, warlockSubclasses, warlockAvailableSubclasses } from './warlock';
import { wizardFeatures, wizardSubclasses, wizardAvailableSubclasses } from './wizard';

// Combine all base class features
const baseClassFeatures: Record<string, ClassFeature[]> = {
  Artificer: [], // Artificer não tem características base definidas ainda
  Barbarian: barbarianFeatures,
  Bard: bardFeatures,
  Cleric: clericFeatures,
  Fighter: fighterFeatures,
  Monk: monkFeatures,
  Paladin: paladinFeatures,
  Ranger: rangerFeatures,
  Rogue: rogueFeatures,
  Sorcerer: sorcererFeatures,
  Warlock: warlockFeatures,
  Wizard: wizardFeatures,
};

// Combine all subclass features
const allSubclassFeatures: Record<string, SubclassFeature[]> = {
  ...artificerSubclasses,
  ...barbarianSubclasses,
  ...bardSubclasses,
  ...clericSubclasses,
  ...fighterSubclasses,
  ...monkSubclasses,
  ...paladinSubclasses,
  ...rangerSubclasses,
  ...rogueSubclasses,
  ...sorcererSubclasses,
  ...warlockSubclasses,
  ...wizardSubclasses,
};

// Combine all available subclasses mappings
const allAvailableSubclasses: Record<string, string[]> = {
  Artificer: artificerAvailableSubclasses,
  Barbarian: barbarianAvailableSubclasses,
  Bard: bardAvailableSubclasses,
  Cleric: clericAvailableSubclasses,
  Fighter: fighterAvailableSubclasses,
  Monk: monkAvailableSubclasses,
  Paladin: paladinAvailableSubclasses,
  Ranger: rangerAvailableSubclasses,
  Rogue: rogueAvailableSubclasses,
  Sorcerer: sorcererAvailableSubclasses,
  Warlock: warlockAvailableSubclasses,
  Wizard: wizardAvailableSubclasses,
};

// Classes
export const classFeatures: Record<string, ClassFeature[]> = {
  Barbarian: [],
  Bard: [],
  Cleric: [],
  Fighter: [],
  Monk: [],
  Paladin: [],
  Ranger: [],
  Rogue: [],
  Sorcerer: [],
  Warlock: [],
  Wizard: [],
};

// Função para obter classes personalizadas do localStorage
export const getCustomClasses = (): string[] => {
  try {
    const stored = localStorage.getItem('dnd-custom-classes');
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

// Função para salvar uma nova classe personalizada
export const saveCustomClass = (className: string): void => {
  try {
    const customClasses = getCustomClasses();
    if (!customClasses.includes(className)) {
      customClasses.push(className);
      localStorage.setItem('dnd-custom-classes', JSON.stringify(customClasses));
    }
  } catch (error) {
    console.error('Error saving custom class:', error);
  }
};

// Função para obter todas as classes (padrão + personalizadas)
export const getAllClasses = (): string[] => {
  const standardClasses = Object.keys(classFeatures);
  const customClasses = getCustomClasses();
  return [...standardClasses, ...customClasses];
};

export { baseClassFeatures, allSubclassFeatures, allAvailableSubclasses };
