<script lang="ts">
  export let id: string | undefined = undefined;
  export let viewTransitionName: string | undefined = undefined;
  export let rating: number;

  console.assert(rating >= 0 && rating <= 1, 'Rating must be between 0 and 1');
</script>

<div class="root" {id} style:--viewTransitionName={viewTransitionName}>
  <div class="rating-bar" style:--rating={rating} title="{Math.round(rating * 100)} / 100"></div>
</div>

<style>
  .root {
    width: 100%;
    view-transition-name: var(--viewTransitionName);
  }

  .rating-bar {
    border-radius: var(--border-radius);
    height: 1.5em;
    width: calc(var(--rating) * 100%);
    /* HSL linear interpolation between red and green */
    background-color: hsl(calc(126 * var(--rating)), 100%, 50%);
  }
</style>
