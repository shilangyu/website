<script lang="ts">
  import TextButton from '$lib/components/TextButton.svelte';
  import { posts } from '$lib/posts';
  import { routes } from '$lib/routes';
  import { formatDate } from '$lib/utils';
  import { queryParam } from 'sveltekit-search-params';

  const tagsFilter = queryParam<string[]>('tags', {
    encode: (value) => value?.join(','),
    decode: (value) => value?.split(',') ?? null,
  });
</script>

{#each posts as post}
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
{/each}

<style>
  .title {
    display: inline-block;
    margin-bottom: 0px;
  }

  .tags {
    display: flex;
    gap: 2px;
  }
</style>
