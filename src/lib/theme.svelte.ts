import { browser } from '$app/environment';

export type Theme = 'light' | 'dark' | 'system';
const localStorageKey = 'theme:v1';
const attribute = 'color-scheme';
const defaultTheme: Theme = 'system';

class State {
  value: Theme = $state(
    (browser ? (localStorage.getItem(localStorageKey) as Theme) : null) ?? defaultTheme,
  );

  init = () => {
    this.#syncLocalStorage();
  };

  toggle = () => {
    switch (this.value) {
      case 'dark':
        this.value = 'light';
        break;
      case 'light':
        this.value = 'system';
        break;
      case 'system':
        this.value = 'dark';
        break;
    }
  };

  #syncLocalStorage = () => {
    // sync store with localStorage/html
    $effect(() => {
      localStorage.setItem(localStorageKey, this.value);

      document.documentElement.setAttribute(attribute, this.value);
    });
  };
}

export const theme = new State();
