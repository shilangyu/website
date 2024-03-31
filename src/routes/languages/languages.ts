import type { ComponentType } from 'svelte';

export interface LanguageReviewEntry {
  name: string;
  icon: string;
  iconDark?: string;
  ratings: {
    overall: number;
    tooling: number;
    relevance: number;
    expressiveness: number;
  };
  review: ComponentType;
}

export const languages: LanguageReviewEntry[] = [];
