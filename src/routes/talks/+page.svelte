<script lang="ts">
  import TalkCard from './TalkCard.svelte';
  import { talks } from './talks';
</script>

<svelte:head>
  <title>shilangyu / talks</title>
</svelte:head>

<p>Some talks that I have given.</p>

<p>
  The slides for other, unrecorded talks can be found here: <a
    href="https://github.com/shilangyu/presentations">https://github.com/shilangyu/presentations</a
  >.
</p>

<div class="root">
  {#each talks as entry (entry)}
    <div>
      <TalkCard {entry} />
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
