<script lang="ts" context="module">
  export const gap = '6px';
</script>

<script lang="ts">
  import { ChevronRight } from 'lucide-svelte';
  import Explorer from '../explorer/Explorer.svelte';
  import { getName, type Tree } from '../explorer/FileEntry.svelte';

  export let isTrailing: boolean;
  export let entry: Tree;
  export let entries: Tree[];

  let showModal = false;
</script>

<div class="root">
  <button
    class="segment"
    class:highlighted={showModal}
    style:--gap={gap}
    on:click={() => (showModal = true)}
  >
    <span>{getName(entry)}</span>
    {#if !isTrailing}
      <ChevronRight size="1em" />
    {/if}
  </button>

  {#if showModal}
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="backdrop" on:click|self={() => (showModal = false)}></div>

    <div class="dialog">
      <Explorer {entries} />
    </div>
  {/if}
</div>

<style>
  .root {
    position: relative;
  }
  .segment {
    all: unset;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: var(--gap);

    &:hover,
    &.highlighted {
      color: var(--color-text-secondary);
    }
  }

  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9998;
  }

  .dialog {
    border: var(--color-text-primary) solid 1px;
    background-color: var(--color-background);
    position: absolute;
    width: 300px;
    z-index: 9999;
  }
</style>
