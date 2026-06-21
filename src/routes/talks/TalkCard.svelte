<script lang="ts">
  import TextButton from '$lib/components/TextButton.svelte';
  import { formatDate } from '$lib/utils';
  import { Wallpaper } from 'lucide-svelte';
  import type { TalkEntry } from './talks';

  interface Props {
    entry: TalkEntry;
  }

  let { entry }: Props = $props();
  let { title, description, youtubeId, slides, date, place } = $derived(entry);
</script>

<div class="card">
  <iframe
    src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  ></iframe>

  <h3 class="title">{title}</h3>
  <p class="description">{description}</p>

  <span class="spacer"></span>
  <div class="meta">
    <span>{place}</span>
    <span>•</span>
    <span>{formatDate(date)}</span>
    <span class="spacer"></span>

    <div class="links">
      {#if slides}
        <TextButton href={slides} external>
          <div class="links-item">
            <Wallpaper size="1em" />
          </div>
        </TextButton>
      {/if}
    </div>
  </div>
</div>

<style>
  .card {
    border: 1px dashed var(--color-text-primary);
    padding: 0.5em 1em;
    border-radius: var(--border-radius);
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    height: 100%;
  }

  iframe {
    border: none;
    object-fit: cover;
    aspect-ratio: 16 / 9;
    width: 100%;
  }

  .title {
    align-self: center;
    margin: 0.5em 0;
  }

  .description {
    margin: 0.5em 0;
  }

  .meta {
    display: flex;
    flex-direction: row;
    gap: 0.5em;
  }

  .spacer {
    flex: 1;
  }

  .links {
    display: flex;
    flex-direction: row;
    align-self: end;

    & .links-item {
      padding: 4px;
    }
  }
</style>
