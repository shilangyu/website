// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }

  declare module '*.svx' {
    const component: import('svelte').ComponentType;
    export default component;
    export const metadata: unknown;
  }

  // view transition API types
  interface ViewTransition {
    finished: Promise<void>;
    ready: Promise<void>;
    updateCallbackDone: Promise<void>;
  }

  interface Document {
    startViewTransition(setupPromise: () => Promise<void> | void): ViewTransition;
  }

  interface CSSStyleDeclaration {
    viewTransitionName: string;
  }
}

export {};
