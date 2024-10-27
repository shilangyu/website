<script lang="ts" module>
  export const expanderSize = 24;
</script>

<script lang="ts">
  import { ChevronRight } from 'lucide-svelte';
  import TextButton from '../TextButton.svelte';

  interface Props {
    expanded: boolean;
    onClick: () => void;
  }

  let { expanded, onClick }: Props = $props();
</script>

<TextButton icon {onClick} ariaLabel={expanded ? 'Collapse' : 'Expand'}>
  <div class="icon" class:expanded>
    <ChevronRight strokeWidth={1} size={expanderSize} />
  </div>
</TextButton>

<style>
  .icon {
    transition: transform calc(var(--transition-duration) * 1ms);
  }

  .expanded {
    transform: rotate(90deg);
  }
</style>
