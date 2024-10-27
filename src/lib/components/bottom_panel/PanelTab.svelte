<script lang="ts">
  interface Props {
    title: string;
    selected: boolean;
    onClick: () => void;
  }

  let { title, selected, onClick }: Props = $props();
</script>

<button class:selected onclick={onClick}>
  {title}
</button>

<style>
  button {
    all: unset;
    cursor: pointer;
    color: var(--color-text-secondary);
    border-bottom: 1px solid transparent;

    &.selected {
      border-bottom-color: var(--color-accent-primary);
    }
    &.selected,
    &:hover {
      color: var(--color-text-primary);
    }
  }
</style>
