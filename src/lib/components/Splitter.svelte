<script lang="ts">
  import { browser } from '$app/environment';

  export let direction: 'row' | 'column';
  export let baselineSlot: 'a' | 'b' = 'a';
  export let minExtent: number;
  export let maxExtent: number;
  export let extent: number;
  export let hideOnSmallScreen = false;
  export let hide: 'a' | 'b' | undefined = undefined;

  console.assert(minExtent <= extent && extent <= maxExtent);

  let initial: { extent: number; position: number } | undefined = undefined;

  $: {
    if (browser) {
      if (initial === undefined) {
        document.body.style.removeProperty('user-select');
      } else {
        document.body.style.userSelect = 'none';
      }
    }
  }

  function getPosition(event: MouseEvent): number {
    switch (direction) {
      case 'row':
        return event.pageX;
      case 'column':
        return event.pageY;
    }
  }

  function startDrag(event: MouseEvent) {
    initial = { extent, position: getPosition(event) };
  }

  function stopDrag() {
    initial = undefined;
  }

  function drag(event: MouseEvent) {
    if (initial === undefined) return;

    const sign = baselineSlot === 'a' ? 1 : -1;
    const delta = getPosition(event) - initial.position;
    const newExtent = Math.max(minExtent, Math.min(maxExtent, initial.extent + sign * delta));
    extent = newExtent;
  }
</script>

<svelte:window on:mouseup={stopDrag} on:mousemove={drag} />

<div
  class="root"
  style:--extent="{extent}px"
  class:direction-row={direction === 'row'}
  class:direction-column={direction === 'column'}
  class:baseline-slot-a={baselineSlot === 'a'}
  class:baseline-slot-b={baselineSlot === 'b'}
  class:hide-on-small-screen={hideOnSmallScreen}
>
  <div class="pane-a" class:hide={hide === 'a'}>
    <slot name="a" />
  </div>
  <div class="divider" class:hide={hide !== undefined}>
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <div class="divider-area" on:mousedown={startDrag} role="separator"></div>
    <div class="divider-indicator" class:dragging={initial !== undefined}></div>
  </div>
  <div class="pane-b" class:hide={hide === 'b'}>
    <slot name="b" />
  </div>
</div>

<style>
  .root {
    display: flex;
    height: 100%;
    --divider-width: 6px;

    &.direction-row {
      flex-direction: row;
    }
    &.direction-column {
      flex-direction: column;
    }
  }

  .hide {
    display: none;
  }

  .hide-on-small-screen > .divider {
    display: none;
  }
  .baseline-slot-a {
    &.direction-row > .pane-a {
      width: var(--extent);
    }
    &.direction-column > .pane-a {
      height: var(--extent);
    }
    & > .pane-b {
      flex: 1;
    }
    &.hide-on-small-screen > .pane-a {
      display: none;
    }
  }
  .baseline-slot-b {
    &.direction-row > .pane-b {
      width: var(--extent);
    }
    &.direction-column > .pane-b {
      height: var(--extent);
    }
    & > .pane-a {
      flex: 1;
    }
    &.hide-on-small-screen > .pane-b {
      display: none;
    }
  }

  .direction-row {
    & > .pane-a,
    & > .pane-b {
      overflow-y: auto;
    }
  }
  .direction-column {
    & > .pane-a,
    & > .pane-b {
      overflow-x: auto;
    }
  }

  .divider {
    position: relative;
  }

  @media only screen and (min-width: 480px) {
    .pane-a:not(.hide),
    .pane-b:not(.hide),
    .divider:not(.hide) {
      display: unset !important;
    }
  }

  .divider-area {
    position: absolute;
    z-index: 1;
  }
  .direction-row > .divider > .divider-area {
    cursor: col-resize;
    left: calc(var(--divider-width) / -2);
    width: var(--divider-width);
    height: 100%;
  }
  .direction-column > .divider > .divider-area {
    cursor: row-resize;
    top: calc(var(--divider-width) / -2);
    height: var(--divider-width);
    width: 100%;
  }

  .divider-indicator {
    position: absolute;
    background-color: var(--color-divider);
    z-index: 0;
  }
  .direction-row > .divider > .divider-indicator {
    width: 1px;
    height: 100%;
  }
  .direction-column > .divider > .divider-indicator {
    height: 1px;
    width: 100%;
  }

  .direction-row > .divider > .divider-area:hover + .divider-indicator,
  .direction-row > .divider > .dragging {
    left: calc(var(--divider-width) / -2);
    width: var(--divider-width);
  }
  .direction-column > .divider > .divider-area:hover + .divider-indicator,
  .direction-column > .divider > .dragging {
    top: calc(var(--divider-width) / -2);
    height: var(--divider-width);
  }
</style>
