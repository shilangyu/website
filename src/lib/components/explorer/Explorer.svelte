<script lang="ts" context="module">
  export const explorerTree: Tree = {
    icon: Home,
    href: routes.root,
    children: [
      {
        icon: BookOpen,
        href: routes.blog.self(),
        children: [
          ...posts.map((post) => ({
            icon: BookOpenText,
            href: routes.blog.post(post),
            name: post.meta.title,
            children: [],
          })),
          {
            icon: Rss,
            href: routes.blog.rss,
            external: true,
            children: [],
          },
        ],
      },
      {
        icon: BookA,
        href: routes.languages,
        children: [],
      },
      {
        icon: Hammer,
        href: routes.projects,
        children: [],
      },
    ],
  };
</script>

<script lang="ts">
  import { posts } from '$lib/posts';
  import { routes } from '$lib/routes';
  import { BookA, BookOpen, BookOpenText, Hammer, Home, Rss } from 'lucide-svelte';
  import FileEntry, { type Tree } from './FileEntry.svelte';

  export let entries = [explorerTree];
</script>

{#each entries as tree}
  <FileEntry {tree} />
{/each}
