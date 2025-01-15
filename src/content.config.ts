import { defineCollection, reference, z } from "astro:content";
import { glob, file } from "astro/loaders";

const tags = defineCollection({
  loader: file("src/data/tags.json"),
  schema: () =>
    z.object({
      id: z.number(),
      name: z.string(),
    }),
});

const jobs = defineCollection({
  loader: file("src/data/jobs.json"),
  schema: ({ image }) =>
    z.object({
      id: z.number(),
      title: z.string(),
      date: z.string(),
      desc: z.string(),
      portraid: image(),
      tags: z.array(reference("tags")),
      resources: z.array(z.string()),
    }),
});

export const collections = {
  tags,
  jobs,
};
