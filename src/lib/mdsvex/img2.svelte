<script lang="ts">
  import ThemeResponsive from '$lib/components/ThemeResponsive.svelte';

  interface Props {
    src: string;
    alt: string;
    darkModeInvert?: boolean;
  }

  let { src, alt, darkModeInvert = false }: Props = $props();
</script>

<figure>
  <ThemeResponsive>
    {#snippet light()}
      <img {src} {alt} />
    {/snippet}
    {#snippet dark()}
      <img {src} {alt} class:invert={darkModeInvert} />
    {/snippet}
  </ThemeResponsive>
  <!-- TODO: this does not render KaTeX -->
  <figcaption aria-hidden="true">{alt}</figcaption>
</figure>

<style>
  figure {
    display: block;
    text-align: center;
    margin: 1em 0;
  }
  figure img {
    border: none;
    margin: 0 auto;
    max-width: 100% !important;
  }
  figcaption {
    font-size: 0.8em;
    font-style: italic;
    margin: 0 0 0.8em;
  }

  .invert {
    filter: invert(1);
  }
</style>
