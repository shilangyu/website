<script lang="ts">
  interface Props {
    url: string;
  }

  let { url }: Props = $props();
  let isShowing = $state(false);
</script>

{#if isShowing}
  <iframe title="External blog post" src={url}></iframe>
{:else}
  The blog post has been posted here: <a href={url} target="_blank" rel="noopener noreferrer"
    >{url}</a
  >
  <br />
  <button onclick={() => (isShowing = true)}
    >You can inline the blog post here (please don't)</button
  >
{/if}

<style>
  iframe {
    border: none;
    width: 100%;
    flex: 1;
    height: 50vh;
  }

  button {
    font-size: 0.5em;
  }
</style>
