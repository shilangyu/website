import { postMetadataSchema } from '$lib/types';
import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
  try {
    // support both /blog/post and /blog/post.html
    const slug = params.slug.replace(/.html$/, '');
    const post = await import(`../../../posts/${slug}.svx`);

    return {
      content: post.default,
      meta: postMetadataSchema.parse(post.metadata)
    };
  } catch (e) {
    console.error(e);
    throw error(404, `Could not find ${params.slug}`);
  }
};

export const entries: EntryGenerator = () => {
  const paths = import.meta.glob(`../../../posts/*.svx`, { eager: true });
  const posts = [];

  for (const path in paths) {
    const slug = path.split('/').at(-1)!.replace('.svx', '');

    posts.push({ slug });
  }

  return posts;
};
