<script lang="ts">
  import { X } from 'lucide-svelte';

  import TextButton from './TextButton.svelte';

  export let onRemove: () => void;
</script>

<div class="chip">
  <slot />
  <TextButton on:click={onRemove} icon><X size="1.5em" /></TextButton>
</div>

<style>
  .chip {
    border-radius: var(--border-radius);
    border: 1px solid var(--color-text-primary);
    padding: 4px;
    display: flex;
    flex-direction: row;
  }
</style>
