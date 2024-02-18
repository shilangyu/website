import { posts } from '$lib/posts';
import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
  // support both /blog/post and /blog/post.html
  const slug = params.slug.replace(/.html$/, '');
  const post = posts.find((p) => p.name === slug);
  if (!post) {
    throw error(404, `Could not find ${params.slug}`);
  }

  return post;
};

export const entries: EntryGenerator = () => {
  const slugs = posts.map((p) => ({ slug: p.name }));

  return slugs;
};
