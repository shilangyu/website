<script lang="ts">
  import { ChevronRight } from 'lucide-svelte';
  import IconButton from '../IconButton.svelte';

  export let expanded: boolean;
</script>

<IconButton on:click>
  <div class="icon" class:expanded>
    <ChevronRight />
  </div>
</IconButton>

<style>
  .icon {
    transition: transform calc(var(--transition-duration) * 1ms);
  }

  .expanded {
    transform: rotate(90deg);
  }
</style>
