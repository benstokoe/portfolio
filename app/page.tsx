import { SliceZone } from "@prismicio/react";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import data from "@/data/portfolio.json";
import { createClient } from "@/prismicio";
import { components } from "@/slices";

export default async function Page() {
  const client = createClient();

  const page = await client.getByUID("page", "home", {
    fetchLinks: ["project.name", "project.mainImage", "project.description", "about.about"],
  });

  return <SliceZone slices={page.data.slices} components={components} />;
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();

  const page = await client.getByUID("page", "home").catch(() => notFound());

  return {
    title: data.name,
    description: page.data.meta_description,
  };
}