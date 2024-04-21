<script>
  import LanguageCard from './LanguageCard.svelte';
  import { languages } from './languages';
</script>

<svelte:head>
  <title>shilangyu / languages</title>
</svelte:head>

<p>
  Here one can find a collection of reviews of various programming languages that I had the pleasure
  (or displeasure) to work with over the years. <strong>Warning</strong>: the reviews are highly
  subjective and may not reflect the general opinion. I enjoy learning programming languages for the
  fun of it, so many of my reviews are based on side projects, not production code.
</p>

<p>
  Please be encouraged to let me know when some information being stated here is incorrect or
  outdated.
</p>

<div class="root">
  {#each languages as entry}
    <div id={entry.pathName}>
      <LanguageCard {entry} />
    </div>
  {/each}
</div>

<style>
  .root {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(15em, 1fr));
    gap: 1em;
  }
</style>
