import { z } from 'zod';

export const postMetadataSchema = z
  .object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string())
  })
  .strict();

export type PostMetadata = z.infer<typeof postMetadataSchema>;
