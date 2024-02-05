import { browser } from '$app/environment';
import { get, writable } from 'svelte/store';

export type Theme = 'light' | 'dark' | 'system';
const localStorageKey = 'theme';
const attribute = 'color-scheme';
const defaultTheme: Theme = 'system';

export const theme = writable<Theme>(
  (browser ? (localStorage.getItem(localStorageKey) as Theme) : null) ?? defaultTheme
);

if (browser) {
  // react to system theme changes if the theme is set to system
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  prefersDark.addEventListener('change', (e) => {
    if (get(theme) === 'system') {
      document.documentElement.setAttribute(attribute, e.matches ? 'dark' : 'light');
    }
  });

  // sync store with localStorage
  theme.subscribe((value) => {
    localStorage.setItem(localStorageKey, value);

    const scheme = value === 'system' ? (prefersDark.matches ? 'dark' : 'light') : value;

    document.documentElement.setAttribute(attribute, scheme);
  });
}
