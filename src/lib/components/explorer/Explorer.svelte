<script lang="ts">
  import { posts } from '$lib/posts';
  import { routes } from '$lib/routes';
  import { BookOpen, BookOpenText, Home, Rss } from 'lucide-svelte';
  import FileEntry, { type Tree } from './FileEntry.svelte';

  const tree: Tree = {
    icon: Home,
    href: routes.root,
    children: [
      {
        icon: BookOpen,
        href: routes.blog.self,
        children: [
          ...posts.map((post) => ({
            icon: BookOpenText,
            href: routes.blog.post(post),
            children: []
          })),
          // TODO: clicking does not navigate where needed
          {
            icon: Rss,
            href: routes.blog.rss,
            children: []
          }
        ]
      }
    ]
  };
</script>

<FileEntry {tree} />
