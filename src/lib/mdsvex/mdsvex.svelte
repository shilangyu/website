<script lang="ts" module>
  export { default as blockquote } from './blockquote.svelte';
  export { default as img } from './img.svelte';
</script>

<script lang="ts">
  interface Props {
    children: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>

{@render children()}
