<script lang="ts">
  import { fade } from 'svelte/transition';

  export let url: string;
</script>

<!-- TODO: the scroll position is not set to zero on transition -->
{#key url}
  <div in:fade={{ duration: 200 }}>
    <slot />
  </div>
{/key}
