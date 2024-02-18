<script lang="ts" context="module">
  export const tagsFilterName = 'tags';
</script>

<script lang="ts">
  import Chip from '$lib/components/Chip.svelte';
  import TextButton from '$lib/components/TextButton.svelte';
  import { posts } from '$lib/posts';
  import { routes } from '$lib/routes';
  import { formatDate } from '$lib/utils';
  import { queryParam } from 'sveltekit-search-params';

  const tagsFilter = queryParam<string[]>(tagsFilterName, {
    encode: (value) => {
      if (value === null || value.length === 0) return undefined;
      return value.join(',');
    },
    decode: (value) => value?.split(',') ?? null,
  });

  $: filteredPosts = posts.filter((post) => {
    if ($tagsFilter === null || $tagsFilter.length === 0) return true;
    return $tagsFilter.some((tag) => post.meta.tags.includes(tag));
  });
</script>

<p>
  Here you can find random blog posts with no quality guarantee. I talk about programming languages,
  mathematics, and more rarely hobbies and tutorials.
</p>

<div class="tags-filters">
  {#each $tagsFilter ?? [] as tag}
    <Chip onRemove={() => ($tagsFilter = ($tagsFilter ?? []).filter((t) => t !== tag))}>
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
        selected={$tagsFilter?.includes(tag) ?? false}
        on:click={() => ($tagsFilter = [...new Set([...($tagsFilter ?? []), tag])])}
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
