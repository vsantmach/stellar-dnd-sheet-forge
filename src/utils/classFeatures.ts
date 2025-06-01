
import { ClassFeature } from './types';
import { baseClassFeatures, allSubclassFeatures, allAvailableSubclasses } from './classes';

export function getClassFeatures(className: string, level: number, subclass?: string): ClassFeature[] {
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

export function getAvailableSubclasses(className: string): string[] {
  return allAvailableSubclasses[className] || [];
}
