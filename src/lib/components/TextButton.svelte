<script lang="ts">
  export let href: string | undefined = undefined;
  export let external = false;
  export let icon = false;
</script>

{#if href}
  <a {href} class="container" class:padded={!icon} rel={external ? 'external' : undefined}>
    <slot />
  </a>
{:else}
  <button class="container" class:padded={!icon} on:click>
    <slot />
  </button>
{/if}

<style>
  button {
    all: unset;
    line-height: 0px;
    cursor: pointer;
  }

  a {
    all: unset;
    cursor: pointer;
  }

  .padded {
    padding: 2px 6px;
  }

  .container:hover {
    background-color: var(--color-hover);
    border-radius: var(--border-radius);
  }
</style>
