import type { Component } from 'svelte';
import { z } from 'zod';

const postMetadataSchema = z
  .object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    lastUpdated: z.optional(z.coerce.date()),
    repository: z.optional(z.url()),
    discussion: z
      .object({
        reddit: z.optional(z.url()),
        hackerNews: z.optional(z.url()),
      })
      .default({}),
    tags: z.array(z.string()).min(1),
  })
  .strict();

export type PostMetadata = z.infer<typeof postMetadataSchema>;
export type Post = {
  name: string;
  meta: PostMetadata;
  content: Component;
};

const postsLoad = import.meta.glob<typeof import('*.svx')>(`../../posts/*.svx`, { eager: true });

// sorted from newest to oldest
export const posts = Object.entries(postsLoad)
  .map(([path, raw]) => ({
    name: path.split('/').at(-1)!.replace('.svx', ''),
    meta: postMetadataSchema.parse(raw.metadata),
    content: raw.default,
  }))
  .sort((a, b) => b.meta.date.getTime() - a.meta.date.getTime());
