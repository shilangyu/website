import { routes } from '$lib/routes';
import { normalizeUrl } from '$lib/utils';
import { error, redirect } from '@sveltejs/kit';
import type { EntryGenerator } from './$types';

// I give out urls that might redirect to some more elaborate urls. This page redirects those urls to the final destination.
const redirects: Record<string, string> = {
  wellingtons: routes.random.wellingtons,
};

export function load({ params }) {
  const destination = redirects[params.name];
  if (!destination) error(404, 'Not found');

  redirect(301, normalizeUrl(destination));
}

export const entries: EntryGenerator = () => {
  const entries = Object.keys(redirects).map((source) => ({ name: source }));

  return entries;
};
