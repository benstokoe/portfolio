import { defineCollection, z } from "astro:content";

const home = defineCollection({
  type: "data",
  schema: z.object({
    metaTitle: z.string(),
    metaDescription: z.string(),
    heroTaglineOne: z.string(),
    heroTaglineTwo: z.string(),
    heroTaglineThree: z.string(),
    heroTaglineFour: z.string(),
    aboutTitle: z.string(),
    about: z.string(),
    workTitle: z.string(),
    blogTitle: z.string(),
    clientLogosTitle: z.string(),
    techStatsTitle: z.string(),
    techStats: z.object({
      react: z.string(),
      next: z.string(),
      graphql: z.string(),
      css: z.string(),
    }),
  }),
});

const pages = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
  }),
});

const work = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    url: z.string().url().optional(),
    description: z.string(),
    mainImage: z.string().optional(),
    role: z.string().optional(),
    technologies: z.string().optional(),
    companyDescription: z.string().optional(),
    date: z.coerce.date(),
    logo: z.string().optional(),
    showInClientLogos: z.boolean().default(false),
  }),
});

const blog = defineCollection({
  type: "content",
  schema: z.object({
    postTitle: z.string(),
    postImage: z.string().optional(),
    publishDate: z.coerce.date(),
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { home, pages, work, blog };
