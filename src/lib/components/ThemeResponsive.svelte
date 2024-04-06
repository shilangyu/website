<span class="light"><slot name="light" /></span>
<span class="dark"><slot name="dark" /></span>

<style>
  :global([color-scheme='light']) .dark {
    display: none;
  }
  :global([color-scheme='dark']) .light {
    display: none;
  }
  :global([color-scheme='system']) .dark {
    display: none;
  }
  @media (prefers-color-scheme: dark) {
    :global([color-scheme='system']) .dark {
      display: unset;
    }
    :global([color-scheme='system']) .light {
      display: none;
    }
  }
</style>
