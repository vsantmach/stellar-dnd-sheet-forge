
import { ClassFeature } from './types';
import { baseClassFeatures, allSubclassFeatures, allAvailableSubclasses } from './classes';

export function getClassFeatures(className: string, level: number, subclass?: string): ClassFeature[] {
  // Check for custom classes first
  const customClassFeatures = getCustomClassFeatures(className, level);
  if (customClassFeatures.length > 0) {
    return customClassFeatures;
  }

  // Use default class features
  const baseFeatures = baseClassFeatures[className] || [];
  const subclassFeaturesList = subclass ? allSubclassFeatures[subclass] || [] : [];
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

function getCustomClassFeatures(className: string, level: number): ClassFeature[] {
  try {
    const savedFeatures = localStorage.getItem('custom-class-features');
    if (!savedFeatures) return [];
    
    const classFeatures = JSON.parse(savedFeatures);
    const features = classFeatures[className] || [];
    
    return features
      .filter((feature: any) => feature.level <= level)
      .map((feature: any, index: number) => ({
        id: `custom-${className}-${feature.name}-${index}`,
        name: feature.name,
        description: feature.description,
        level: feature.level,
        uses: undefined
      }));
  } catch (error) {
    console.log('Error loading custom class features:', error);
    return [];
  }
}

export function getAvailableSubclasses(className: string): string[] {
  // Custom classes don't have subclasses for now
  const customClasses = getCustomClassNames();
  if (customClasses.includes(className)) {
    return [];
  }
  
  return allAvailableSubclasses[className] || [];
}

export function getCustomClassNames(): string[] {
  try {
    const savedClasses = localStorage.getItem('custom-classes');
    if (!savedClasses) return [];
    
    const classes = JSON.parse(savedClasses);
    return classes.map((cls: any) => cls.name);
  } catch (error) {
    console.log('Error loading custom class names:', error);
    return [];
  }
}

export function isCustomClass(className: string): boolean {
  return getCustomClassNames().includes(className);
}
