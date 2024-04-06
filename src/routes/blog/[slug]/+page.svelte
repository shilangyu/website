<script lang="ts">
  import SimpleIcon from '$lib/components/SimpleIcon.svelte';
  import TextButton from '$lib/components/TextButton.svelte';
  import { external, routes } from '$lib/routes';
  import { formatDate } from '$lib/utils';
  import { Code, SpellCheck2 } from 'lucide-svelte';
  import { siReddit, siYcombinator } from 'simple-icons';

  export let data;

  $: ({ meta, content, name } = data);
</script>

<svelte:head>
  <title>{meta.title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content={meta.title} />
  <meta property="og:description" content={meta.description} />
</svelte:head>

<!-- TODO: vscode-like overview of symbols for sections -->

<article>
  <hgroup class="title-group">
    <h1 class="title">{meta.title}</h1>
    <p class="subtitle">
      Published {formatDate(meta.date)}{#if meta.lastUpdated}
        <br /><em>Last updated {formatDate(meta.lastUpdated)}</em>
      {/if}
    </p>
    <div class="tags">
      {#each meta.tags as tag}
        <a href={routes.blog.self([tag])}>&num;{tag}</a>
      {/each}
    </div>
  </hgroup>

  <div class="content">
    <svelte:component this={content} />
  </div>

  <div class="links">
    <TextButton href={external.repository(`src/posts/${name}.svx`)} external>
      <span class="links-item">
        <SpellCheck2 /> Correct mistake
      </span>
    </TextButton>

    {#if meta.repository}
      <TextButton href={meta.repository} external>
        <span class="links-item">
          <Code /> Repository
        </span>
      </TextButton>
    {/if}
    {#if meta.discussion.reddit}
      <TextButton href={meta.discussion.reddit} external>
        <span class="links-item">
          <SimpleIcon data={siReddit} /> Reddit discussion
        </span>
      </TextButton>
    {/if}
    {#if meta.discussion.hackerNews}
      <TextButton href={meta.discussion.hackerNews} external>
        <span class="links-item">
          <SimpleIcon data={siYcombinator} /> Hacker News discussion
        </span>
      </TextButton>
    {/if}
  </div>
</article>

<style>
  .title-group {
    text-align: center;
  }
  .title {
    margin-bottom: 0.5rem;
    font-size: 2em;
  }
  .subtitle {
    color: var(--color-text-secondary);
    margin-top: 0;
  }
  .tags {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .content {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .links {
    font-size: 1.5em;

    display: flex;
    gap: 4px 16px;
    justify-content: center;
    flex-wrap: wrap;
  }
  .links-item {
    display: flex;
    align-items: center;
    gap: 8px;
  }
</style>
