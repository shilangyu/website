// I am not aware of any consistent way of getting typed routes or getting a list of routes at all
// I therefore hardcode things here, hoping this will be improved in the future

import { base } from '$app/paths';
import { trailingSlash } from '../routes/+layout';
import { tagsFilterName } from '../routes/blog/+page.svelte';
import type { Post } from './posts';

const trailing = trailingSlash === 'always' ? '/' : '';

export const routes = {
  root: base + '/',
  blog: {
    self: (tags: string[] = []) =>
      base + '/blog' + trailing + (tags.length ? `?${tagsFilterName}=${tags.join(',')}` : ''),
    post: (post: Post) => base + `/blog/${post.name}` + trailing,
    rss: base + `/blog/rss.xml` + trailing,
  },
  projects: base + '/projects' + trailing,
  languages: base + '/languages' + trailing,
} as const;

export const external = {
  githubPages: (project: string) => `https://github.shilangyu.dev/${project}`,
  repository: (file?: string) =>
    'https://github.com/shilangyu/website' + (file ? `/blob/main/${file}` : ''),
  avatarRepository: 'https://github.com/shilangyu/avatar',
  git: 'https://github.com/shilangyu',
  reddit: 'https://reddit.com/u/k4kshi',
  hackerNews: 'https://news.ycombinator.com/user?id=shilangyu',
  telegram: 'https://t.me/shilangyu',
  email: 'mailto:xmarcinmarcin@gmail.com',
};
