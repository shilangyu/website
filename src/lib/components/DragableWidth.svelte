<script lang="ts">
  export let minWidth: number;
  export let maxWidth: number;
  export let width: number;

  console.assert(minWidth <= width && width <= maxWidth);

  let previousX: number | undefined = undefined;

  function startDrag(event: MouseEvent) {
    previousX = event.pageX;
  }

  function stopDrag() {
    previousX = undefined;
  }

  function drag(event: MouseEvent) {
    if (previousX === undefined) return;
    const delta = event.pageX - previousX;
    previousX = event.pageX;
    width += delta;
  }
</script>

<svelte:window on:mouseup={stopDrag} on:mousemove={drag} />

<div class="root" style="width: {width}px; min-width: {minWidth}px; max-width: {maxWidth}px">
  <div class="content">
    <slot />
  </div>
  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
  <div
    class="divider"
    class:dragging={previousX !== undefined}
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
    width: 2px;
    height: 100%;
    background-color: var(--color-text-primary);
    cursor: col-resize;
  }
  .divider:hover,
  .dragging {
    width: 6px;
  }
</style>
