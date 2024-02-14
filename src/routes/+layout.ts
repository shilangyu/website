import type { LayoutLoad } from './$types';

export const prerender = true;
export const trailingSlash = 'always';

export const load: LayoutLoad = async ({ url }) => {
  return {
    url: url.pathname,
  };
};
