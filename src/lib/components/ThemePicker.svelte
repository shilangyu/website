<script lang="ts">
  import { browser } from '$app/environment';
  import { theme } from '$lib/theme';
  import { fly } from 'svelte/transition';
</script>

<button
  on:click={() =>
    theme.update((val) =>
      (() => {
        switch (val) {
          case 'dark':
            return 'light';
          case 'light':
            return 'system';
          case 'system':
            return 'dark';
        }
      })(),
    )}
  aria-label="Toggle theme"
>
  {#if browser}
    {#if $theme === 'dark'}
      <div in:fly={{ y: -10 }}>
        <span>Dark</span>
      </div>
    {:else if $theme === 'light'}
      <div in:fly={{ y: -10 }}>
        <span>Light</span>
      </div>
    {:else if $theme === 'system'}
      <div in:fly={{ y: -10 }}>
        <span>System</span>
      </div>
    {/if}
  {:else}
    <span>-</span>
  {/if}
</button>
