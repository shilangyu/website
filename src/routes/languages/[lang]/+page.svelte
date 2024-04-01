<script lang="ts">
  import TextButton from '$lib/components/TextButton.svelte';
  import ThemeResponsive from '$lib/components/ThemeResponsive.svelte';
  import { routes } from '$lib/routes';
  import { ChevronUp } from 'lucide-svelte';
  import RatingBar from '../RatingBar.svelte';
  import RatingName from '../RatingName.svelte';

  export let data;

  const { icon, iconDark, name, ratings, review } = data;
</script>

<div class="root">
  <ThemeResponsive>
    <img slot="light" src={icon} alt="{name} logo" class="icon" />
    <img slot="dark" src={iconDark ?? icon} alt="{name} logo" class="icon" />
  </ThemeResponsive>
  <h2>{name}</h2>
  <div class="ratings">
    <RatingName
      name="Overall"
      helpText="Feel-based general impression of the language"
      viewTransitionName="lang-rating-overall-name"
    />
    <RatingBar rating={ratings.overall} viewTransitionName="lang-rating-overall-bar" />

    <RatingName
      name="Tooling"
      helpText="The overall developer experience (LSP, build tools, dependency management, etc)"
      viewTransitionName="lang-rating-tooling-name"
    />
    <RatingBar rating={ratings.tooling} viewTransitionName="lang-rating-tooling-bar" />

    <RatingName
      name="Relevance"
      helpText="Whether other languages supersede it in its domain"
      viewTransitionName="lang-rating-relevance-name"
    />
    <RatingBar rating={ratings.relevance} viewTransitionName="lang-rating-relevance-bar" />

    <RatingName
      name="Expressiveness"
      helpText="How expressive the language is, how easy it is to create abstractions"
      viewTransitionName="lang-rating-expressiveness-name"
    />
    <RatingBar
      rating={ratings.expressiveness}
      viewTransitionName="lang-rating-expressiveness-bar"
    />
  </div>

  <div class="review">
    <svelte:component this={review} />
  </div>

  <TextButton href={routes.languages.self(data)}><ChevronUp /></TextButton>
</div>

<style>
  .root {
    padding: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .icon {
    object-fit: contain;
    width: 10em;
    height: 10em;
    view-transition-name: lang-icon;
  }

  h2 {
    view-transition-name: lang-name;
  }

  .ratings {
    margin-bottom: 0.5em;
    display: grid;
    width: 100%;
    grid-template-columns: max-content 1fr;
    row-gap: 0.25em;
    column-gap: 4px;
  }

  .review {
    width: 100%;
  }
</style>
