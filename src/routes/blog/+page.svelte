<script lang="ts" module>
  export const tagsFilterName = 'tags';
</script>

<script lang="ts">
  import Chip from '$lib/components/Chip.svelte';
  import TextButton from '$lib/components/TextButton.svelte';
  import { routes } from '$lib/routes';
  import { formatDate } from '$lib/utils';
  import { queryParameters } from 'sveltekit-search-params';
  import { posts } from './posts';

  const filters = queryParameters({
    tags: {
      encode: (value) => {
        if (value === null || value.length === 0) return undefined;
        return value.join(',');
      },
      decode: (value) => value?.split(',') ?? null,
    },
  });

  const filteredPosts = $derived(
    posts.filter((post) => {
      if ($filters.tags === null || $filters.tags.length === 0) return true;
      return $filters.tags.some((tag) => post.meta.tags.includes(tag));
    }),
  );
</script>

<svelte:head>
  <title>shilangyu / blog</title>
</svelte:head>

<p>
  Here you can find random blog posts with no quality guarantee. I talk about programming languages,
  mathematics, and more rarely hobbies and tutorials.
</p>

<div class="tags-filters">
  {#each $filters.tags ?? [] as tag}
    <Chip onRemove={() => ($filters.tags = ($filters.tags ?? []).filter((t) => t !== tag))}>
      #{tag}
    </Chip>
  {/each}
</div>

{#each filteredPosts as post}
  <h3 class="title"><a href={routes.blog.post(post)}>{post.meta.title}</a></h3>
  • {formatDate(post.meta.date)}

  <p>
    {post.meta.description}
  </p>
  <div class="tags">
    {#each post.meta.tags as tag}
      <TextButton
        selected={$filters.tags?.includes(tag) ?? false}
        onClick={() => ($filters.tags = [...new Set([...($filters.tags ?? []), tag])])}
      >
        <span>
          #{tag}
        </span>
      </TextButton>
    {/each}
  </div>
  <hr />
{:else}
  <span>No posts found.</span>
{/each}

<style>
  .title {
    display: inline-block;
    margin-bottom: 0px;
  }

  .tags {
    display: flex;
    gap: 8px;
  }

  .tags-filters {
    display: flex;
    gap: 8px;
  }
</style>
