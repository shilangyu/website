<script lang="ts">
  import { base } from '$app/paths';
  import Footer from '$lib/components/Footer.svelte';
  import Splitter from '$lib/components/Splitter.svelte';
  import Explorer from '$lib/components/explorer/Explorer.svelte';
  import MainBody from './MainBody.svelte';
  // import for the side-effect prefers-color listener
  import '$lib/theme';
  import '../app.css';
  import '../mdsvex.css';

  export let data;

  let bottomDrawerOpen = false;
</script>

<svelte:head>
  <link rel="alternate" type="application/atom+xml" href="{base}/blog/rss.xml" />
  <script lang="ts" type="module">
    // Synchronous script in the head to prevent flashing of the theme
    // should be kept in sync with src/lib/theme.ts
    const localStorageKey = 'theme:v1';
    const attribute = 'color-scheme';
    const defaultTheme = 'system';

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    const theme = localStorage.getItem(localStorageKey) ?? defaultTheme;

    const scheme = theme === 'system' ? (prefersDark.matches ? 'dark' : 'light') : theme;
    document.documentElement.setAttribute(attribute, scheme);
  </script>
</svelte:head>

<div class="container">
  <div class="body">
    <Splitter direction="row" extent={300} maxExtent={600} minExtent={200} hideOnSmallScreen>
      <nav slot="a">
        <Explorer />
      </nav>

      <MainBody url={data.url} bind:bottomDrawerOpen slot="b"><slot /></MainBody>
    </Splitter>
  </div>

  <Footer onProblemsClick={() => (bottomDrawerOpen = !bottomDrawerOpen)} />
</div>

<style>
  .container {
    height: 100%;

    display: flex;
    flex-direction: column;
  }

  .body {
    overflow: auto;
    flex: 1;
  }
</style>
