<script lang="ts" context="module">
  export type Tree = {
    icon: ComponentType<SvelteComponent<{ size?: number | string }>>;
    href: string;
    // if not present, href trailing child will be used instead
    name?: string;
    external?: boolean;
    children: Tree[];
  };

  export function getName(tree: Tree): string {
    return tree.name || normalizeUrl(tree.href).split('/').pop() || '/';
  }
</script>

<script lang="ts">
  import { page } from '$app/stores';
  import { slide } from 'svelte/transition';

  import { isSamePath, normalizeUrl } from '$lib/utils';
  import type { ComponentType, SvelteComponent } from 'svelte';
  import Expander, { expanderSize } from './Expander.svelte';

  export let tree: Tree;
  export let depth = 0;

  const { icon, href, children, external = false } = tree;
  const name = getName(tree);

  const transitionDuration = 200;

  const isDirectory = children.length > 0;

  let expanded = $page.url.pathname.startsWith(href);
</script>

<div
  class="file-entry"
  style="padding-left: calc({depth} * 0.75rem + {isDirectory ? 0 : expanderSize}px)"
  class:highlight={isSamePath($page.url.pathname, href)}
>
  {#if isDirectory}
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
    align-items: center;
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
