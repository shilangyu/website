<script lang="ts">
  import { fade } from 'svelte/transition';

  interface Props {
    url: string;
    children: import('svelte').Snippet;
  }

  let { url, children }: Props = $props();
</script>

<!-- TODO: the scroll position is not set to zero on transition -->
{#key url}
  <div in:fade={{ duration: 200 }}>
    {@render children()}
  </div>
{/key}
