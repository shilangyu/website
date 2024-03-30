<script lang="ts">
  export let title: string;
  export let selected: boolean;
</script>

<button class:selected on:click>
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
