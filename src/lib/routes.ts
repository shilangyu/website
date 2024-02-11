// I am not aware of any consistent way of getting typed routes or getting a list of routes at all
// I therefore hardcode things here, hoping this will be improved in the future

import { base } from '$app/paths';
import type { Post } from './posts';

export const routes = {
  root: base + '/',
  blog: {
    self: base + '/blog',
    post: (post: Post) => base + `/blog/${post.name}`,
    rss: base + `/blog/rss.xml`,
  },
} as const;

export const external = {
  githubPages: (project: string) => `https://github.shilangyu.dev/${project}`,
  repository: 'https://github.com/shilangyu/website',
};
