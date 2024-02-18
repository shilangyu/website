<script lang="ts">
  export let src: string;
  export let alt: string;
</script>

<figure>
  <img {src} {alt} />
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
</style>
