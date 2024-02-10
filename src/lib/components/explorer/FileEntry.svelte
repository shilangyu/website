<script lang="ts" context="module">
  export type Tree = {
    icon: ComponentType<SvelteComponent<{ size?: number | string }>>;
    href: string;
    external?: boolean;
    children: Tree[];
  };
</script>

<script lang="ts">
  import { page } from '$app/stores';
  import { slide } from 'svelte/transition';

  import type { ComponentType, SvelteComponent } from 'svelte';
  import Expander from './Expander.svelte';

  export let tree: Tree;
  export let depth = 0;

  const { icon, href, children, external = false } = tree;

  const name = href.split('/').pop() || '/';
  const transitionDuration = 200;

  let expanded = $page.url.pathname.startsWith(href);
</script>

<!-- TODO: prevent hover effect of file entry when there is hover over expander -->
<div
  class="file-entry"
  style="padding-left: calc({depth} * 1.5rem)"
  class:highlight={$page.url.pathname === href}
>
  {#if children.length}
    <Expander
      {expanded}
      on:click={() => (expanded = !expanded)}
      --transition-duration={transitionDuration}
    />
  {/if}
  <a {href} rel={external ? 'external' : undefined}>
    <div class="icon"><svelte:component this={icon} size={14} /></div>
    {name}
  </a>
</div>

{#if expanded}
  <div transition:slide={{ duration: transitionDuration }}>
    {#each children as tree}
      <svelte:self {tree} depth={depth + 1} />
    {/each}
  </div>
{/if}

<style>
  .file-entry,
  a {
    display: flex;
    align-items: end;
    padding: 1px;
  }

  .file-entry:hover,
  .highlight {
    background-color: var(--color-hover);
  }

  .icon {
    margin-right: 0.5rem;
  }
</style>
