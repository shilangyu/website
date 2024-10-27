<script lang="ts">
  import { external, routes } from '$lib/routes';
  import { AlertTriangle, GitBranch, Info, RefreshCw, Rss, XCircle } from 'lucide-svelte';
  import TextButton from './TextButton.svelte';
  import ThemePicker from './ThemePicker.svelte';

  interface Props {
    onProblemsClick: () => void;
  }

  let { onProblemsClick }: Props = $props();
</script>

<footer>
  <TextButton href={external.repository()}>
    <span class="item">
      <GitBranch size="1em" /> main
    </span>
  </TextButton>
  <!-- TODO: make less static? -->
  <span>
    <RefreshCw size="1em" />
  </span>
  <TextButton onClick={onProblemsClick}>
    <span class="item">
      <Info size="1em" /> 0
      <AlertTriangle size="1em" /> 0
      <XCircle size="1em" /> 0
    </span>
  </TextButton>
  <span class="spacer"></span>
  <ThemePicker />
  <TextButton href={routes.blog.rss} external>
    <span class="item">
      <Rss size="1em" /> RSS
    </span>
  </TextButton>
  <!-- TODO: make less static? -->
  <span class="item">Ln 17, Col 14</span>
  <span class="item">UTF-8</span>
  <span class="item">LF</span>
  <!-- TODO: should source code language? -->
</footer>

<style>
  footer {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 2px 12px;
    border-top: 1px solid var(--color-divider);
  }

  .item {
    display: flex;
    align-items: center;
    gap: 2px;
  }

  .spacer {
    flex: 1;
  }
</style>
