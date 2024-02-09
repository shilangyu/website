<script lang="ts">
  import { ChevronRight } from 'lucide-svelte';

  export let expanded: boolean;
</script>

<button class="expander" on:click>
  <div class="icon" class:expanded>
    <ChevronRight />
  </div>
</button>

<style>
  .expander {
    all: unset;
    display: inline-block;
    line-height: 0px;
    cursor: pointer;
  }

  .expander:hover {
    background-color: var(--color-hover);
    border-radius: var(--border-radius);
  }

  .icon {
    transition: transform calc(var(--transition-duration) * 1ms);
  }

  .expanded {
    transform: rotate(90deg);
  }
</style>
