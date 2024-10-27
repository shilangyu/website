<script lang="ts">
  type Props = (
    | {
        href: string;
        external?: boolean;
      }
    | {
        onClick: () => void;
      }
  ) & {
    icon?: boolean;
    selected?: boolean;
    ariaLabel?: string;
    children: import('svelte').Snippet;
  };

  let {
    icon = false,
    ariaLabel = undefined,
    selected = false,
    children,
    ...rest
  }: Props = $props();
</script>

{#if 'href' in rest}
  <a
    href={rest.href}
    class="container"
    class:padded={!icon}
    class:selected
    aria-label={ariaLabel}
    rel={rest.external ? 'external' : undefined}
    target={rest.external ? '_blank' : undefined}
  >
    {@render children()}
  </a>
{:else}
  <button
    class="container"
    class:padded={!icon}
    class:selected
    onclick={rest.onClick}
    aria-label={ariaLabel}
  >
    {@render children()}
  </button>
{/if}

<style>
  button {
    all: unset;
    cursor: pointer;
  }

  a {
    all: unset;
    cursor: pointer;
  }

  .padded {
    padding: 2px 6px;
  }
  .selected {
    background-color: var(--color-accent-primary) !important;
  }

  .container {
    border-radius: var(--border-radius);
  }

  .container:hover {
    background-color: var(--color-hover);
  }
</style>
