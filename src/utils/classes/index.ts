
import { ClassFeature, SubclassFeature } from '../types';
import { artificerSubclasses, artificerAvailableSubclasses } from './artificer';
import { barbarianFeatures, barbarianSubclasses, barbarianAvailableSubclasses } from './barbarian';
import { bardFeatures, bardSubclasses, bardAvailableSubclasses } from './bard';
import { clericFeatures, clericSubclasses, clericAvailableSubclasses } from './cleric';

// Combine all base class features
const baseClassFeatures: Record<string, ClassFeature[]> = {
  Barbarian: barbarianFeatures,
  Bard: bardFeatures,
  Cleric: clericFeatures,
  // Add other base class features as needed
};

// Combine all subclass features
const allSubclassFeatures: Record<string, SubclassFeature[]> = {
  ...artificerSubclasses,
  ...barbarianSubclasses,
  ...bardSubclasses,
  ...clericSubclasses,
};

// Combine all available subclasses mappings
const allAvailableSubclasses: Record<string, string[]> = {
  Artificer: artificerAvailableSubclasses,
  Barbarian: barbarianAvailableSubclasses,
  Bard: bardAvailableSubclasses,
  Cleric: clericAvailableSubclasses,
};

export { baseClassFeatures, allSubclassFeatures, allAvailableSubclasses };
