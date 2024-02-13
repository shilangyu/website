<script lang="ts">
  import { ChevronRight } from 'lucide-svelte';
  import TextButton from '../TextButton.svelte';

  export let expanded: boolean;
</script>

<TextButton icon on:click>
  <div class="icon" class:expanded>
    <ChevronRight strokeWidth={1} />
  </div>
</TextButton>

<style>
  .icon {
    transition: transform calc(var(--transition-duration) * 1ms);
  }

  .expanded {
    transform: rotate(90deg);
  }
</style>
