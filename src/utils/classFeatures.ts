
import { ClassFeature, SubclassFeature } from './types';

// Combine all base class features
const baseClassFeatures: Record<string, ClassFeature[]> = {
  Artificer: [],
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

// Combine all subclass features
const allSubclassFeatures: Record<string, SubclassFeature[]> = {};

// Combine all available subclasses mappings
const allAvailableSubclasses: Record<string, string[]> = {
  Artificer: [],
  Barbarian: ['Path of the Berserker', 'Path of the Totem Warrior'],
  Bard: ['College of Lore', 'College of Valor'],
  Cleric: ['Life Domain', 'Light Domain', 'Trickery Domain'],
  Fighter: ['Champion', 'Battle Master', 'Eldritch Knight'],
  Monk: ['Way of the Open Hand', 'Way of Shadow', 'Way of the Four Elements'],
  Paladin: ['Oath of Devotion', 'Oath of the Ancients', 'Oath of Vengeance'],
  Ranger: ['Hunter', 'Beast Master'],
  Rogue: ['Thief', 'Assassin', 'Arcane Trickster'],
  Sorcerer: ['Draconic Bloodline', 'Wild Magic'],
  Warlock: ['The Fiend', 'The Great Old One', 'The Archfey'],
  Wizard: ['School of Evocation', 'School of Abjuration', 'School of Divination'],
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

// Função para obter características de classe
export const getClassFeatures = (className: string, level: number, subclass?: string): ClassFeature[] => {
  const customClasses = getCustomClasses();
  
  // Check if it's a custom class
  if (customClasses[className]) {
    const classData = customClasses[className];
    return classData.features.filter(feature => feature.level <= level);
  }
  
  // Return default class features (empty for now)
  return baseClassFeatures[className] || [];
};

// Função para obter subclasses disponíveis
export const getAvailableSubclasses = (className: string): string[] => {
  const customClasses = getCustomClasses();
  
  // Check if it's a custom class
  if (customClasses[className]) {
    return customClasses[className].subclasses || [];
  }
  
  return allAvailableSubclasses[className] || [];
};

// Função para verificar se é uma classe personalizada
export const isCustomClass = (className: string): boolean => {
  const customClasses = getCustomClasses();
  return !!customClasses[className];
};

// Função para obter classes personalizadas do localStorage
export const getCustomClasses = (): Record<string, any> => {
  try {
    const stored = localStorage.getItem('dnd-custom-classes');
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
};

// Função para salvar uma nova classe personalizada
export const saveCustomClass = (className: string, classData: any): void => {
  try {
    const customClasses = getCustomClasses();
    customClasses[className] = classData;
    localStorage.setItem('dnd-custom-classes', JSON.stringify(customClasses));
  } catch (error) {
    console.error('Error saving custom class:', error);
  }
};

// Função para obter todas as classes (padrão + personalizadas)
export const getAllClasses = (): string[] => {
  const standardClasses = Object.keys(classFeatures);
  const customClasses = Object.keys(getCustomClasses());
  return [...standardClasses, ...customClasses];
};

export { baseClassFeatures, allSubclassFeatures, allAvailableSubclasses };
