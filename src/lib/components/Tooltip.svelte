<script lang="ts">
  interface Props {
    text: string;
    children: import('svelte').Snippet;
  }

  let { text, children }: Props = $props();
</script>

<div class="root">
  {@render children()}
  <span class="tooltip">{text}</span>
</div>

<style>
  .root {
    position: relative;
  }

  .tooltip {
    position: absolute;
    z-index: 1;
    text-align: center;
    border-radius: var(--border-radius);
    padding: 5px;
    top: -6px;
    left: 50%;
    transform: translate(-50%, -100%);
    width: max-content;
    max-width: 200px;

    background-color: var(--color-text-primary);
    color: var(--color-background);

    visibility: hidden;
    opacity: 0;
    transition: opacity 0.3s;
  }

  .root:hover > .tooltip {
    visibility: visible;
    opacity: 1;
  }
</style>
