<script lang="ts">
  interface Props {
    light: import('svelte').Snippet;
    dark: import('svelte').Snippet;
  }

  let { light, dark }: Props = $props();
</script>

<span class="light">{@render light()}</span>
<span class="dark">{@render dark()}</span>

<style>
  :global([color-scheme='light']) .dark {
    display: none;
  }
  :global([color-scheme='dark']) .light {
    display: none;
  }
  :global([color-scheme='system']) .dark {
    display: none;
  }
  @media (prefers-color-scheme: dark) {
    :global([color-scheme='system']) .dark {
      display: unset;
    }
    :global([color-scheme='system']) .light {
      display: none;
    }
  }
</style>
