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

  let treeModal: HTMLDialogElement;
  let showModal = false;
  $: {
    if (treeModal) {
      if (showModal) {
        treeModal.showModal();
      } else {
        treeModal.close();
      }
    }
  }
</script>

<div class="root">
  <button
    class="segment"
    class:highlighted={showModal}
    style="--gap: {gap}"
    on:click={() => (showModal = true)}
  >
    <span>{getName(entry)}</span>
    {#if !isTrailing}
      <ChevronRight size="1em" />
    {/if}
  </button>

  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
  <dialog bind:this={treeModal} on:click|self={() => (showModal = false)}>
    <Explorer {entries} />
  </dialog>
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

  /* TODO: wrong position on chrome :))))))))))))) */
  dialog {
    left: unset;
    bottom: unset;
    right: unset;
    top: unset;
    border: currentColor solid 1px;
    padding: unset;
    position: absolute;
    width: 300px;

    &::backdrop {
      background-color: unset;
    }
  }
</style>
