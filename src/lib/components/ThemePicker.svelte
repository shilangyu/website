<script lang="ts">
  import { browser } from '$app/environment';
  import { theme } from '$lib/theme';
  import { Moon, Sun, SunMoon } from 'lucide-svelte';
  import { fly } from 'svelte/transition';
  import TextButton from './TextButton.svelte';
</script>

<TextButton
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
  ariaLabel="Toggle theme"
>
  <div class="container">
    {#if browser}
      {#if $theme === 'dark'}
        <span class="icon" in:fly={{ y: -10 }} out:fly={{ y: 10 }}>
          <Moon size="1em" />
        </span>
      {:else if $theme === 'light'}
        <span class="icon" in:fly={{ y: -10 }} out:fly={{ y: 10 }}>
          <Sun size="1em" />
        </span>
      {:else if $theme === 'system'}
        <span class="icon" in:fly={{ y: -10 }} out:fly={{ y: 10 }}>
          <SunMoon size="1em" />
        </span>
      {/if}
    {:else}
      <span>-</span>
    {/if}
  </div>
</TextButton>

<style>
  .container {
    display: grid;
  }

  .icon {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
  }
</style>
