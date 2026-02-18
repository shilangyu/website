<script lang="ts" module>
  export const mainContentId = 'main-content';
</script>

<script lang="ts">
  import { base } from '$app/paths';
  import Footer from '$lib/components/Footer.svelte';
  import Splitter from '$lib/components/Splitter.svelte';
  import Explorer from '$lib/components/explorer/Explorer.svelte';
  import '$lib/mdsvex/mdsvex.css';
  import '../app.css';
  import type { LayoutData } from './$types';
  import MainBody from './MainBody.svelte';

  interface Props {
    data: LayoutData;
    children: import('svelte').Snippet;
  }

  let { data, children }: Props = $props();

  let bottomDrawerOpen = $state(false);
</script>

<svelte:head>
  <link rel="alternate" type="application/atom+xml" href="{base}/blog/rss.xml" />
  <script lang="ts" type="module">
    // Synchronous script in the head to prevent flashing of the theme
    // should be kept in sync with src/lib/theme.ts
    const localStorageKey = 'theme:v1';
    const attribute = 'color-scheme';
    const defaultTheme = 'system';

    const theme = localStorage.getItem(localStorageKey) ?? defaultTheme;

    document.documentElement.setAttribute(attribute, theme);
  </script>
</svelte:head>

<a href="#{mainContentId}" class="jump-to-content">Jump to content</a>

<div class="container">
  <div class="body">
    <Splitter direction="row" extent={300} maxExtent={600} minExtent={200} hideOnSmallScreen>
      {#snippet a()}
        <nav>
          <Explorer />
        </nav>
      {/snippet}

      {#snippet b()}
        <MainBody url={data.url} bind:bottomDrawerOpen>{@render children()}</MainBody>
      {/snippet}
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

  /* Copied from Wikipedia */
  .jump-to-content:not(:focus) {
    display: block;
    position: absolute !important;
    clip: rect(1px, 1px, 1px, 1px);
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    overflow: hidden;
    user-select: none;
  }
</style>
