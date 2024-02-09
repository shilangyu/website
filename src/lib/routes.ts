// I am not aware of any consistent way of getting typed routes or getting a list of routes at all
// I therefore hardcode things here, hoping this will be improved in the future

import type { Post } from './posts';

export const routes = {
  root: '/',
  blog: {
    self: '/blog',
    post: (post: Post) => `/blog/${post.name}`,
    rss: `/blog/rss.xml`
  }
} as const;
