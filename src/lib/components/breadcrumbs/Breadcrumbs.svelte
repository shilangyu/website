<script lang="ts">
  import { page } from '$app/state';
  import { normalizeUrl } from '$lib/utils';
  import { explorerTree } from '../explorer/Explorer.svelte';
  import type { Tree } from '../explorer/FileEntry.svelte';
  import BreadcrumbSegment, { gap } from './BreadcrumbSegment.svelte';

  function findEntries(
    href: string,
    tree = explorerTree,
    children = [explorerTree],
  ): { entry: Tree; entries: Tree[] } | undefined {
    if (normalizeUrl(tree.href) == href) {
      return { entry: tree, entries: children };
    }

    for (const child of tree.children) {
      const found = findEntries(href, child, tree.children);
      if (found) return found;
    }

    return undefined;
  }

  // TODO: this does not respect `base`
  const segments = $derived([
    '/',
    ...normalizeUrl(page.url.pathname)
      .split('/')
      .slice(1)
      .reduce<string[]>((acc, curr) => [...acc, (acc.at(-1) ?? '') + '/' + curr], []),
  ]);
  const breadcrumbsId = $derived(segments.join('-'));
</script>

<div class="root" style:--gap={gap}>
  {#each segments as href, i (breadcrumbsId + href)}
    {@const tree = findEntries(href) ?? { entry: explorerTree, entries: [explorerTree] }}
    <BreadcrumbSegment isTrailing={i === segments.length - 1} {...tree} />
  {/each}
</div>

<style>
  .root {
    display: flex;
    align-items: center;
    gap: var(--gap);
  }
</style>
