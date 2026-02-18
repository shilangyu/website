<script lang="ts">
  import PageTransition from '$lib/components/PageTransition.svelte';
  import Splitter from '$lib/components/Splitter.svelte';
  import BottomPanel from '$lib/components/bottom_panel/BottomPanel.svelte';
  import Breadcrumbs from '$lib/components/breadcrumbs/Breadcrumbs.svelte';
  import { mainContentId } from './+layout.svelte';

  interface Props {
    url: string;
    bottomDrawerOpen: boolean;
    children: import('svelte').Snippet;
  }

  let { url, bottomDrawerOpen = $bindable(), children }: Props = $props();
</script>

<Splitter
  direction="column"
  baselineSlot="b"
  extent={200}
  maxExtent={450}
  minExtent={100}
  hide={bottomDrawerOpen ? undefined : 'b'}
>
  {#snippet a()}
    <main>
      <Breadcrumbs />

      <div class="main-content" id={mainContentId}>
        <PageTransition {url}>
          {@render children()}
        </PageTransition>
      </div>
    </main>
  {/snippet}

  {#snippet b()}
    <aside><BottomPanel /></aside>
  {/snippet}
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
