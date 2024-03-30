<script lang="ts">
  import { base } from '$app/paths';
  import Footer from '$lib/components/Footer.svelte';
  import Splitter from '$lib/components/Splitter.svelte';
  import Breadcrumbs from '$lib/components/breadcrumbs/Breadcrumbs.svelte';
  import Explorer from '$lib/components/explorer/Explorer.svelte';
  // import for the side-effect prefers-color listener
  import '$lib/theme';
  import '../app.css';
  import PageTransition from '../lib/components/PageTransition.svelte';

  export let data;
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
    <Splitter width={300} maxWidth={600} minWidth={200} hideOnSmallScreen>
      <nav slot="a">
        <Explorer />
      </nav>
      <main slot="b">
        <Breadcrumbs />

        <div class="main-content">
          <PageTransition url={data.url}>
            <slot />
          </PageTransition>
        </div>
      </main>
    </Splitter>
  </div>

  <Footer />
</div>

<style>
  main {
    padding: 2rem;
    flex: 1;
  }

  .main-content {
    max-width: 56em;
    margin: 0 auto;
  }

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
