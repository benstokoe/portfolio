import { filter } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

export default async function Page() {
  const client = createClient();

  const page = await client.getByUID("page", "home");

  const work = await client
    .getByType("project", {
      orderings: {
        field: "my.project.date",
        direction: "desc",
      },
      pageSize: 4,
      fetch: [
        "project.name",
        "project.description",
        "project.mainImage",
        "project.technologies",
      ],
    })
    .catch(() => notFound());

  const logos = await client.getAllByType("project", {
    orderings: {
      field: "my.project.date",
      direction: "desc",
    },
    fetch: ["project.logo"],
    filters: [
      filter.has("my.project.logo"),
    ],
  });

  const blogPosts = await client
    .getByType("blogPost", {
      orderings: { field: "my.blogPost.publishDate", direction: "desc" },
      pageSize: 2,
    })
    .catch(() => notFound());

  return (
    <SliceZone
      slices={page.data.slices}
      components={components}
      context={{ work, blogPosts, logos }}
    />
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();

  const page = await client.getByUID("page", "home").catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
