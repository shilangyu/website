<script lang="ts">
  export let href: string | undefined = undefined;
  export let external = false;
  export let icon = false;
  export let selected = false;
  export let ariaLabel: string | undefined = undefined;
</script>

{#if href}
  <a
    {href}
    class="container"
    class:padded={!icon}
    class:selected
    aria-label={ariaLabel}
    rel={external ? 'external' : undefined}
    target={external ? '_blank' : undefined}
  >
    <slot />
  </a>
{:else}
  <button class="container" class:padded={!icon} class:selected on:click aria-label={ariaLabel}>
    <slot />
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
    background-color: var(--color-accent-primary);
  }

  .container {
    border-radius: var(--border-radius);
  }

  .container:hover {
    background-color: var(--color-hover);
  }
</style>
