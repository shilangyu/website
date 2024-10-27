<script lang="ts" module>
  import blockquote from './blockquote.svelte';
  import img from './img.svelte';
  export { blockquote, img };
</script>

<script lang="ts">
  interface Props {
    children: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>

{@render children()}
