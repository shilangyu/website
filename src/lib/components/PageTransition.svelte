<script lang="ts">
  import { fade } from 'svelte/transition';

  export let url: string;
</script>

{#key url}
  <div in:fade={{ duration: 200 }}>
    <slot />
  </div>
{/key}
