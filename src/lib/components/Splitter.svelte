<script lang="ts">
  import { browser } from '$app/environment';

  export let minWidth: number;
  export let maxWidth: number;
  export let width: number;

  console.assert(minWidth <= width && width <= maxWidth);

  let initial: { width: number; x: number } | undefined = undefined;

  $: {
    if (browser) {
      if (initial === undefined) {
        document.body.style.removeProperty('user-select');
      } else {
        document.body.style.userSelect = 'none';
      }
    }
  }

  function startDrag(event: MouseEvent) {
    initial = { width, x: event.pageX };
  }

  function stopDrag() {
    initial = undefined;
  }

  function drag(event: MouseEvent) {
    if (initial === undefined) return;

    const dx = event.pageX - initial.x;
    const newWidth = Math.max(minWidth, Math.min(maxWidth, initial.width + dx));
    width = newWidth;
  }
</script>

<svelte:window on:mouseup={stopDrag} on:mousemove={drag} />

<div class="root">
  <div class="pane-a" style="width: {width}px">
    <slot name="a" />
  </div>
  <div class="divider">
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <div class="divider-area" on:mousedown={startDrag} role="separator"></div>
    <div class="divider-indicator" class:dragging={initial !== undefined}></div>
  </div>
  <div class="pane-b">
    <slot name="b" />
  </div>
</div>

<style>
  .root {
    display: flex;
    flex-direction: row;
    height: 100%;

    --div-width: 6px;
  }

  .pane-b {
    flex: 1;
  }

  .pane-a,
  .pane-b {
    overflow-y: auto;
  }

  .divider {
    position: relative;
  }

  .divider-area {
    position: absolute;
    left: calc(var(--div-width) / -2);
    width: var(--div-width);
    height: 100%;
    cursor: col-resize;
    z-index: 1;
  }

  .divider-indicator {
    position: absolute;
    width: 1px;
    height: 100%;
    background-color: var(--color-divider);
    z-index: 0;
  }

  .divider-area:hover + .divider-indicator,
  .dragging {
    left: calc(var(--div-width) / -2);
    width: var(--div-width);
  }
</style>
