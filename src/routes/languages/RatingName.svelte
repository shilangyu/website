<script lang="ts">
  import Tooltip from '$lib/components/Tooltip.svelte';
  import { Info } from 'lucide-svelte';

  export let name: string;
  export let helpText: string;
</script>

<div class="root">
  <span class="name">{name}</span>
  <Tooltip text={helpText}>
    <Info size="1em" />
  </Tooltip>
</div>

<style>
  .root {
    display: flex;
    gap: 4px;
    align-items: center;
    width: 100%;
  }
</style>
