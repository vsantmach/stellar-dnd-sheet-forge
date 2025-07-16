
import { ClassFeature, SubclassFeature } from './types';
import { baseClassFeatures, allSubclassFeatures, allAvailableSubclasses } from './classes/index';

console.log('Debug - baseClassFeatures:', Object.keys(baseClassFeatures));
console.log('Debug - allSubclassFeatures:', Object.keys(allSubclassFeatures));
console.log('Debug - allAvailableSubclasses:', Object.keys(allAvailableSubclasses));

// Classes
export const classFeatures: Record<string, ClassFeature[]> = baseClassFeatures;

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
