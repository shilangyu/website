<script lang="ts">
  import { formatDate } from '$lib/utils';

  export let data;

  const { meta, content } = data;
</script>

<svelte:head>
  <title>{meta.title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content={meta.title} />
</svelte:head>

<article>
  <hgroup>
    <h1>{meta.title}</h1>
    <p>Published at {formatDate(meta.date)}</p>
  </hgroup>

  <div>
    {#each meta.tags as tag}
      <span>&num;{tag}</span>
    {/each}
  </div>

  <div>
    <svelte:component this={content} />
  </div>
</article>
