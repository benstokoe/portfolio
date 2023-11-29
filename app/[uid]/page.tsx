import { SliceZone } from "@prismicio/react";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import data from "@/data/portfolio.json";
import { createClient } from "@/prismicio";
import { components } from "@/slices";

type Params = { uid: string };

const titleColour: Record<string, string> = {
  about: "secondary",
  contact: "accent",
};

export default async function Page({ params }: { params: Params }) {
  const client = createClient();

  const page = await client
    .getByUID("page", params.uid, {
      fetchLinks: ["project.name", "project.mainImage", "project.description"],
    })
    .catch(() => notFound());

  return (
    <div className="mt-10 laptop:mt-20">
      {page.data.title && (
        <div className="laptop:mt-20 mt-10">
          <h1
            className={`text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold w-4/5 mob:w-full laptop:w-4/5 text-${
              titleColour[page.data.title.toLowerCase()] || "primary"
            }`}
          >
            {page.data.title}.
          </h1>
        </div>
      )}

      <div className="mt-10 laptop:mt-20">
        <SliceZone slices={page.data.slices} components={components} />
      </div>
    </div>
  );
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const client = createClient();

  const page = await client.getByUID("page", params.uid).catch(() => notFound());

  return {
    title: `${page.data.title} | ${data.name}`,
    description: page.data.meta_description,
  };
}

export async function generateStaticParams() {
  const client = createClient();

  const pages = await client.getAllByType("page");

  return pages.map((page) => ({ uid: page.uid }));
}
