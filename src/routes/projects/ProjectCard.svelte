<script lang="ts">
  import Chip from '$lib/components/Chip.svelte';
  import TextButton from '$lib/components/TextButton.svelte';
  import ThemeResponsive from '$lib/components/ThemeResponsive.svelte';
  import { Code, ExternalLink } from 'lucide-svelte';
  import type { ProjectEntry } from './projects';

  interface Props {
    entry: ProjectEntry;
  }

  let { entry }: Props = $props();
  let { name, description, repository, technologies, website, image } = $derived(entry);
</script>

<div class="card">
  <ThemeResponsive>
    {#snippet light()}
      <img src={image.light} alt={image.alt} class="icon" />
    {/snippet}
    {#snippet dark()}
      <img src={image.dark ?? image.light} alt={image.alt} class="icon" />
    {/snippet}
  </ThemeResponsive>

  <h3 class="name">{name}</h3>
  <p class="description">{description}</p>

  <span class="spacer"></span>
  <div class="meta">
    <div class="technologies">
      {#each technologies as technology (technology)}
        <Chip>{technology}</Chip>
      {/each}
    </div>

    <span class="spacer"></span>

    <div class="links">
      {#if website}
        <TextButton href={website} external>
          <div class="links-item">
            <ExternalLink size="1em" />
          </div>
        </TextButton>
      {/if}
      <TextButton href={repository} external>
        <div class="links-item">
          <Code size="1em" />
        </div>
      </TextButton>
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

  .icon {
    object-fit: cover;
    aspect-ratio: 16 / 10;
    width: 100%;
  }

  .name {
    align-self: center;
    margin: 0.5em 0;
  }

  .description {
    margin: 0.5em 0;
  }

  .meta {
    display: flex;
    flex-direction: row;
  }

  .spacer {
    flex: 1;
  }

  .technologies {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.5em;
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
