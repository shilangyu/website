<script lang="ts">
  import { X } from 'lucide-svelte';

  import TextButton from './TextButton.svelte';

  interface Props {
    onRemove?: () => void;
    children: import('svelte').Snippet;
  }

  let { onRemove = undefined, children }: Props = $props();
</script>

<div class="chip">
  {@render children()}
  {#if onRemove}
    <TextButton onClick={onRemove} icon><X size="1.5em" /></TextButton>
  {/if}
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
