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

<div class="root" style="width: {width}px">
  <div class="content">
    <slot />
  </div>
  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
  <div
    class="divider"
    class:dragging={initial !== undefined}
    on:mousedown={startDrag}
    role="separator"
  ></div>
</div>

<style>
  .root {
    display: flex;
    flex-direction: row;
    height: 100%;
  }

  .content {
    flex: 1;
  }

  .divider {
    width: 1px;
    height: 100%;
    background-color: var(--color-divider);
    cursor: col-resize;
  }
  .divider:hover,
  .dragging {
    /* TODO: center the expanding width */
    width: 6px;
  }
</style>
