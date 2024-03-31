<script lang="ts">
  import TextButton from '$lib/components/TextButton.svelte';
  import { ChevronDown } from 'lucide-svelte';
  import RatingBar from './RatingBar.svelte';
  import RatingName from './RatingName.svelte';
  import type { LanguageReviewEntry } from './languages';

  export let entry: LanguageReviewEntry;
  const { icon, name, ratings } = entry;
</script>

<div class="card">
  <img src={icon} alt="{name} logo" class="icon" />
  <h3>{name}</h3>
  <div class="ratings">
    <RatingName name="Overall" helpText="Feel-based general impression of the language" />
    <RatingBar rating={ratings.overall} />

    <RatingName
      name="Tooling"
      helpText="The overall developer experience (LSP, build tools, dependency management, etc)"
    />
    <RatingBar rating={ratings.tooling} />

    <RatingName name="Relevance" helpText="Whether other languages supersede it in its domain" />
    <RatingBar rating={ratings.relevance} />

    <RatingName
      name="Expressiveness"
      helpText="How expressive the language is, how easy it is to create abstractions"
    />
    <RatingBar rating={ratings.expressiveness} />
  </div>

  <!-- TODO: expand to full screen with review -->
  <TextButton><ChevronDown /></TextButton>
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
    width: 5em;
    height: 5em;
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
