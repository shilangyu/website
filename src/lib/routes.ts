// I am not aware of any consistent way of getting typed routes or getting a list of routes at all
// I therefore hardcode things here, hoping this will be improved in the future

import { resolve } from '$app/paths';
import { tagsFilterName } from '../routes/blog/+page.svelte';
import type { Post } from '../routes/blog/posts';
import type { LanguageReviewEntry } from '../routes/languages/languages';

export const routes = {
  root: resolve('/'),
  resume: resolve('/resume.pdf'),
  blog: {
    self: (tags: string[] = []) =>
      resolve('/blog') + (tags.length ? `?${tagsFilterName}=${tags.join(',')}` : ''),
    post: (post: Post) => resolve('/blog/[slug]', { slug: post.name }),
    rss: resolve(`/blog/rss.xml`),
  },
  projects: resolve('/projects'),
  languages: {
    self: (lang?: LanguageReviewEntry) => resolve('/languages') + (lang ? `#${lang.pathName}` : ''),
    language: (lang: LanguageReviewEntry) => resolve('/languages/[lang]', { lang: lang.pathName }),
  },
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
