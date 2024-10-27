<script lang="ts">
  import { browser } from '$app/environment';
  import { theme } from '$lib/theme.svelte';
  import { Moon, Sun, SunMoon } from 'lucide-svelte';
  import { fly } from 'svelte/transition';
  import TextButton from './TextButton.svelte';

  theme.init();
</script>

<TextButton onClick={theme.toggle} ariaLabel="Toggle theme">
  <div class="container">
    {#if browser}
      {#if theme.value === 'dark'}
        <span class="icon" in:fly={{ y: -10 }} out:fly={{ y: 10 }}>
          <Moon size="1em" />
        </span>
      {:else if theme.value === 'light'}
        <span class="icon" in:fly={{ y: -10 }} out:fly={{ y: 10 }}>
          <Sun size="1em" />
        </span>
      {:else if theme.value === 'system'}
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
