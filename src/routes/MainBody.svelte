<script lang="ts">
  import PageTransition from '$lib/components/PageTransition.svelte';
  import Splitter from '$lib/components/Splitter.svelte';
  import BottomPanel from '$lib/components/bottom_panel/BottomPanel.svelte';
  import Breadcrumbs from '$lib/components/breadcrumbs/Breadcrumbs.svelte';

  export let url: string;
  export let bottomDrawerOpen: boolean;
</script>

<Splitter
  direction="column"
  baselineSlot="b"
  extent={200}
  maxExtent={450}
  minExtent={100}
  hide={bottomDrawerOpen ? undefined : 'b'}
>
  <main slot="a">
    <Breadcrumbs />

    <div class="main-content">
      <PageTransition {url}>
        <slot />
      </PageTransition>
    </div>
  </main>

  <aside slot="b"><BottomPanel /></aside>
</Splitter>

<style>
  main {
    padding: 2rem;
  }

  aside {
    height: 100%;
  }

  .main-content {
    max-width: 56em;
    margin: 0 auto;
  }
</style>
