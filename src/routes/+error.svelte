<script>
  import { page } from '$app/state';
</script>

<div class="error">
  <h1>{page.status}: {page.error?.message}</h1>

  <p>
    Did some link lead you here and you expected to see some content? If so, please consider letting
    me know about the place that led you here:

    <a
      href="https://github.com/shilangyu/website/issues/new?labels=deadlink&title=Link+led+to+no+page:+{page
        .url.pathname}&body=I+was+led+to+this+page+by+a+link+on+...">Open a github issue</a
    >
  </p>
</div>

<style>
  .error {
    height: 100%;
    display: grid;
    place-content: center;
  }
</style>
