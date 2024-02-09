<button on:click>
  <slot />
</button>

<style>
  button {
    all: unset;
    display: inline-block;
    line-height: 0px;
    cursor: pointer;
  }

  button:hover {
    background-color: var(--color-hover);
    border-radius: var(--border-radius);
  }
</style>
