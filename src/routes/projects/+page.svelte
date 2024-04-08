<script lang="ts">
  import ProjectCard from './ProjectCard.svelte';

  import { projects } from './projects';
</script>

<svelte:head>
  <title>shilangyu / projects</title>
</svelte:head>

<p>A subset of projects that I have contributed to over the years that I find interesting.</p>

<div class="root">
  {#each projects as entry}
    <div>
      <ProjectCard {entry} />
    </div>
  {/each}
</div>

<style>
  .root {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20em, 1fr));
    gap: 1em;
  }
</style>
