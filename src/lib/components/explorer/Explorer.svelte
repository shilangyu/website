<script lang="ts" module>
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
      // TODO: bring back when done
      // {
      //   icon: BookA,
      //   href: routes.languages.self(),
      //   children: languages.map((language) => ({
      //     icon: Languages,
      //     href: routes.languages.language(language),
      //     name: language.name,
      //     children: [],
      //   })),
      // },
      {
        icon: Hammer,
        href: routes.projects,
        children: [],
      },
      {
        icon: FileBadge,
        href: routes.resume,
        external: true,
        children: [],
      },
    ],
  };
</script>

<script lang="ts">
  import { routes } from '$lib/routes';
  import { BookOpen, BookOpenText, FileBadge, Hammer, Home, Rss } from 'lucide-svelte';
  import { posts } from '../../../routes/blog/posts';
  import FileEntry, { type Tree } from './FileEntry.svelte';

  interface Props {
    entries?: Tree[];
  }

  let { entries = [explorerTree] }: Props = $props();
</script>

{#each entries as tree (tree.href)}
  <FileEntry {tree} />
{/each}
