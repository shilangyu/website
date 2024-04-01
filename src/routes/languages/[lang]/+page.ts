import { error, redirect } from '@sveltejs/kit';
import { languages } from '../languages';
import type { EntryGenerator, PageLoad } from './$types';

export const load: PageLoad = async ({ params, url }) => {
  const langNormalized = params.lang.toLowerCase();
  if (langNormalized !== params.lang) {
    redirect(301, url.toString().replace(params.lang, langNormalized));
  }

  const language = languages.find((l) => l.pathName === langNormalized);
  if (!language) {
    error(404, `Could not find language ${langNormalized}`);
  }

  return language;
};

export const entries: EntryGenerator = () => {
  return languages.map((p) => ({ lang: p.pathName }));
};
