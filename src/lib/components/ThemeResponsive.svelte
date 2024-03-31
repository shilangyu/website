<span class="light"><slot name="light" /></span>
<span class="dark"><slot name="dark" /></span>

<style>
  :global([color-scheme='light']) .dark {
    display: none;
  }
  :global([color-scheme='dark']) .light {
    display: none;
  }
</style>
