<script lang="ts">
  interface Props {
    children: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>

<blockquote>
  {@render children()}
</blockquote>

<style>
  blockquote {
    border-left: 4px solid var(--color-divider);
    padding: 0.5em 1em;
    margin: 1em 0;
    color: var(--color-text-secondary);
    border-radius: 0.5rem;
  }
</style>
