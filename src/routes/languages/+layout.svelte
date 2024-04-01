<script lang="ts">
  import { onNavigate } from '$app/navigation';
  import { viewTransitionData } from './LanguageCard.svelte';

  onNavigate((navigation) => {
    const langName = navigation.from?.params?.lang || navigation.to?.params?.lang;

    // if the view transition API is available use it for nice navigation transitions
    if (
      !langName ||
      !document.startViewTransition ||
      matchMedia('(prefers-reduced-motion: reduce)').matches
    )
      return;

    // true if we are going from grid to detail view
    const isForwards = navigation.to?.params?.lang === langName;

    return new Promise((resolve) => {
      const { setTransitionNames, unsetTransitionNames } = viewTransitionData(langName);
      // if going forwards, we want to set the transition names before the transition starts
      if (isForwards) setTransitionNames();

      const transition = document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
        if (!isForwards) setTransitionNames();
      });

      transition.finished.finally(() => {
        // the transition is done, we remove leftover transition names
        if (!isForwards) unsetTransitionNames();
      });
    });
  });
</script>

<slot />
