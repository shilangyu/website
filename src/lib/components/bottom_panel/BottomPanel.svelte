<script lang="ts">
  import PanelTab from './PanelTab.svelte';

  enum Tabs {
    Problems = 'PROBLEMS',
    Output = 'OUTPUT',
  }

  let selectedTab: Tabs = Tabs.Problems;
</script>

<div class="root">
  <div class="tabs-row">
    {#each Object.values(Tabs) as tab}
      <PanelTab title={tab} selected={selectedTab === tab} on:click={() => (selectedTab = tab)} />
    {/each}
  </div>

  <div class="tab-content">
    {#if selectedTab === Tabs.Problems}
      No problems have been detected.
    {:else if selectedTab === Tabs.Output}
      <pre>
EDITOR=nvim
VISUAL=code
SHELL=fish
OS=Linux/Arch,MacOS
TERMINAL=alacritty
TERMINAL_MULTIPLEXER=tmux
			</pre>
    {/if}
  </div>
</div>

<style>
  .root {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    box-sizing: border-box;
    max-height: 100%;
  }

  .tabs-row {
    display: flex;
    gap: 1rem;
  }

  .tab-content {
    flex: 1;
    overflow-y: auto;
  }

  pre {
    margin: 0;
  }
</style>
