<script lang="ts">
  import Tooltip from '$lib/components/Tooltip.svelte';
  import { Info } from 'lucide-svelte';

  interface Props {
    id?: string;
    viewTransitionName?: string;
    name: string;
    helpText: string;
  }

  let { id = undefined, viewTransitionName = undefined, name, helpText }: Props = $props();
</script>

<div class="root" {id} style:--viewTransitionName={viewTransitionName}>
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
    view-transition-name: var(--viewTransitionName);
  }
</style>
