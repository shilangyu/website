<script lang="ts" context="module">
  // this abomination is needed for the transition API. We need an imperative way
  // to attach and detach transition names to elements
  export function viewTransitionData(languagePathName: string) {
    const iconLightId = `lang-icon-light-${languagePathName}`;
    const iconDarkId = `lang-icon-dark-${languagePathName}`;
    const nameId = `lang-name-${languagePathName}`;
    const ratingOverallNameId = `lang-rating-overall-name-${languagePathName}`;
    const ratingToolingNameId = `lang-rating-tooling-name-${languagePathName}`;
    const ratingRelevanceNameId = `lang-rating-relevance-name-${languagePathName}`;
    const ratingExpressivenessNameId = `lang-rating-expressiveness-name-${languagePathName}`;
    const ratingOverallBarId = `lang-rating-overall-bar-${languagePathName}`;
    const ratingToolingBarId = `lang-rating-tooling-bar-${languagePathName}`;
    const ratingRelevanceBarId = `lang-rating-relevance-bar-${languagePathName}`;
    const ratingExpressivenessBarId = `lang-rating-expressiveness-bar-${languagePathName}`;

    return {
      iconLightId,
      iconDarkId,
      nameId,
      ratingOverallNameId,
      ratingToolingNameId,
      ratingRelevanceNameId,
      ratingExpressivenessNameId,
      ratingOverallBarId,
      ratingToolingBarId,
      ratingRelevanceBarId,
      ratingExpressivenessBarId,
      setTransitionNames() {
        // the transition name should be kept up to date with ./[lang]/+page.svelte
        document.querySelector<HTMLElement>(`#${iconLightId}`)!.style.viewTransitionName =
          'lang-icon';
        document.querySelector<HTMLElement>(`#${iconDarkId}`)!.style.viewTransitionName =
          'lang-icon';
        document.querySelector<HTMLElement>(`#${nameId}`)!.style.viewTransitionName = 'lang-name';
        document.querySelector<HTMLElement>(`#${ratingOverallNameId}`)!.style.viewTransitionName =
          'lang-rating-overall-name';
        document.querySelector<HTMLElement>(`#${ratingToolingNameId}`)!.style.viewTransitionName =
          'lang-rating-tooling-name';
        document.querySelector<HTMLElement>(`#${ratingRelevanceNameId}`)!.style.viewTransitionName =
          'lang-rating-relevance-name';
        document.querySelector<HTMLElement>(
          `#${ratingExpressivenessNameId}`,
        )!.style.viewTransitionName = 'lang-rating-expressiveness-name';
        document.querySelector<HTMLElement>(`#${ratingOverallBarId}`)!.style.viewTransitionName =
          'lang-rating-overall-bar';
        document.querySelector<HTMLElement>(`#${ratingToolingBarId}`)!.style.viewTransitionName =
          'lang-rating-tooling-bar';
        document.querySelector<HTMLElement>(`#${ratingRelevanceBarId}`)!.style.viewTransitionName =
          'lang-rating-relevance-bar';
        document.querySelector<HTMLElement>(
          `#${ratingExpressivenessBarId}`,
        )!.style.viewTransitionName = 'lang-rating-expressiveness-bar';
      },
      unsetTransitionNames() {
        const ids = [
          iconLightId,
          iconDarkId,
          nameId,
          ratingOverallNameId,
          ratingToolingNameId,
          ratingRelevanceNameId,
          ratingExpressivenessNameId,
          ratingOverallBarId,
          ratingToolingBarId,
          ratingRelevanceBarId,
          ratingExpressivenessBarId,
        ];
        for (const id of ids) {
          document
            .querySelector<HTMLElement>(`#${id}`)!
            .style.removeProperty('view-transition-name');
        }
      },
    };
  }
</script>

<script lang="ts">
  import TextButton from '$lib/components/TextButton.svelte';
  import ThemeResponsive from '$lib/components/ThemeResponsive.svelte';
  import { routes } from '$lib/routes';
  import { ChevronDown } from 'lucide-svelte';
  import RatingBar from './RatingBar.svelte';
  import RatingName from './RatingName.svelte';
  import type { LanguageReviewEntry } from './languages';

  export let entry: LanguageReviewEntry;
  const { icon, iconDark, name, pathName, ratings } = entry;

  const viewTransition = viewTransitionData(pathName);
</script>

<div class="card">
  <ThemeResponsive>
    <img slot="light" src={icon} alt="{name} logo" class="icon" id={viewTransition.iconLightId} />
    <img
      slot="dark"
      src={iconDark ?? icon}
      alt="{name} logo"
      class="icon"
      id={viewTransition.iconDarkId}
    />
  </ThemeResponsive>
  <h3 id={viewTransition.nameId}>{name}</h3>
  <div class="ratings">
    <RatingName
      id={viewTransition.ratingOverallNameId}
      name="Overall"
      helpText="Feel-based general impression of the language"
    />
    <RatingBar id={viewTransition.ratingOverallBarId} rating={ratings.overall} />

    <RatingName
      id={viewTransition.ratingToolingNameId}
      name="Tooling"
      helpText="The overall developer experience (LSP, build tools, dependency management, etc)"
    />
    <RatingBar id={viewTransition.ratingToolingBarId} rating={ratings.tooling} />

    <RatingName
      id={viewTransition.ratingRelevanceNameId}
      name="Relevance"
      helpText="Whether other languages supersede it in its domain"
    />
    <RatingBar id={viewTransition.ratingRelevanceBarId} rating={ratings.relevance} />

    <RatingName
      id={viewTransition.ratingExpressivenessNameId}
      name="Expressiveness"
      helpText="How expressive the language is, how easy it is to create abstractions"
    />
    <RatingBar id={viewTransition.ratingExpressivenessBarId} rating={ratings.expressiveness} />
  </div>

  <TextButton href={routes.languages.language(entry)}><ChevronDown /></TextButton>
</div>

<style>
  .card {
    border: 1px dashed var(--color-text-primary);
    padding: 1em;
    padding-bottom: 0.5em;
    border-radius: var(--border-radius);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .icon {
    object-fit: contain;
    width: 5em;
    height: 5em;
  }

  h3 {
    margin: 0.5em 0;
  }

  .ratings {
    margin-bottom: 0.5em;
    display: grid;
    width: 100%;
    grid-template-columns: max-content 1fr;
    row-gap: 0.25em;
    column-gap: 4px;
  }
</style>
