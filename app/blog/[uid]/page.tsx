import { SliceZone } from "@prismicio/react";
import { kv } from "@vercel/kv";
import { format } from "date-fns";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import { BlogTags } from "@/components/BlogTags";
import { BlogVotes } from "@/components/BlogVotes/BlogVotes";
import data from "@/data/portfolio.json";
import { createClient } from "@/prismicio";
import { components } from "@/slices";

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
  const votes: number = (await kv.get(params.uid)) ?? 0;
  const client = createClient();

  const page = await client.getByUID("blogPost", params.uid).catch(() => notFound());

  return (
    <div className="mt-10 laptop:mt-20">
      <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold w-4/5 mob:w-full laptop:w-4/5">
        {page.data.postTitle}
      </h1>
      <p className="text-accent text-base mt-2">
        {format(new Date(page.data.publishDate as string), "MMM d, yyyy")}
      </p>

      <div className="mt-10 flex gap-2 flex-wrap">
        <BlogVotes uid={params.uid} votes={votes} />

        <BlogTags tags={page.data.tags} />
      </div>

      <div className="mt-10 laptop:mt-20">
        <SliceZone slices={page.data.slices} components={components} />
      </div>

      <div className="mt-10 flex gap-2 flex-wrap">
        <BlogVotes uid={params.uid} votes={votes} />

        <BlogTags tags={page.data.tags} />
      </div>
    </div>
  );
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const client = createClient();

  const page = await client.getByUID("blogPost", params.uid).catch(() => notFound());

  return {
    title: `${page.data.postTitle} | Blog | ${data.name}`,
    description: page.data.meta_description,
  };
}

export async function generateStaticParams() {
  const client = createClient();

  const pages = await client.getAllByType("blogPost");

  return pages.map((page) => ({ uid: page.uid }));
}
