import type { ComponentType } from 'svelte';
import { z } from 'zod';

const postMetadataSchema = z
  .object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    lastUpdated: z.optional(z.coerce.date()),
    tags: z.array(z.string()),
  })
  .strict();

export type PostMetadata = z.infer<typeof postMetadataSchema>;
export type Post = {
  name: string;
  meta: PostMetadata;
  content: ComponentType;
};

type LoadSvx = {
  default: ComponentType;
  metadata: unknown;
};

const postsLoad = import.meta.glob<LoadSvx>(`../posts/*.svx`, { eager: true });

export const posts = Object.entries(postsLoad).map(([path, raw]) => ({
  name: path.split('/').at(-1)!.replace('.svx', ''),
  meta: postMetadataSchema.parse(raw.metadata),
  content: raw.default,
}));
