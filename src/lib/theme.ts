import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export type Theme = 'light' | 'dark' | 'system';
const localStorageKey = 'theme:v1';
const attribute = 'color-scheme';
const defaultTheme: Theme = 'system';

export const theme = writable<Theme>(
  (browser ? (localStorage.getItem(localStorageKey) as Theme) : null) ?? defaultTheme,
);

if (browser) {
  // sync store with localStorage/html
  theme.subscribe((value) => {
    localStorage.setItem(localStorageKey, value);

    document.documentElement.setAttribute(attribute, value);
  });
}
