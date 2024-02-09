<script lang="ts">
  import { base } from '$app/paths';
  import DragableWidth from '$lib/components/DragableWidth.svelte';
  import ThemePicker from '$lib/components/ThemePicker.svelte';
  import Explorer from '$lib/components/explorer/Explorer.svelte';
  import '../app.css';
  import PageTransition from './PageTransition.svelte';

  export let data;
</script>

<svelte:head>
  <link rel="alternate" type="application/atom+xml" href="{base}/blog/rss.xml" />
  <script lang="ts" type="module">
    // Synchronous script in the head to prevent flashing of the theme
    // should be kept in sync with src/lib/theme.ts
    const localStorageKey = 'theme';
    const attribute = 'color-scheme';
    const defaultTheme = 'system';

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    const theme = localStorage.getItem(localStorageKey) ?? defaultTheme;

    const scheme = theme === 'system' ? (prefersDark.matches ? 'dark' : 'light') : theme;
    document.documentElement.setAttribute(attribute, scheme);
  </script>
</svelte:head>

<div class="parent">
  <nav>
    <DragableWidth width={300} maxWidth={600} minWidth={200}>
      <Explorer />
    </DragableWidth>
  </nav>
  <main>
    <ThemePicker />
    <PageTransition url={data.url}>
      <slot />
    </PageTransition>
  </main>
</div>

<style>
  .parent {
    display: flex;
    flex-direction: row;
  }

  nav {
    position: sticky;
    top: 0;
    left: 0;
  }

  main {
    padding: 20px;
  }
</style>
