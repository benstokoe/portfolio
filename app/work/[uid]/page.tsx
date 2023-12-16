import { isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceZone } from "@prismicio/react";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import data from "@/data/portfolio.json";
import { createClient } from "@/prismicio";
import { components } from "@/slices";

type Params = { params: { uid: string } };

export default async function Page({ params }: Params) {
  const client = createClient();

  const project = await client.getByUID("project", params.uid).catch(() =>
    notFound()
  );

  return (
    <>
      <div className="mt-10 laptop:mt-20">
        <div className="mb-5 grid tablet:grid-cols-2 gap-8">
          <h1 className="text-4xl tablet:text-6xl laptopl:text-8xl text-bold text-primary">
            {project.data.name}
          </h1>

          <div className="flex flex-col gap-4">
            <div>
              <h2 className="opacity-50 mb-2">DESCRIPTION</h2>
              <p>{project.data.description}</p>
            </div>

            <div className="gap-4 grid tablet:grid-cols-2">
              <div>
                <h2 className="opacity-50 mb-2">ROLE</h2>
                <p>{project.data.role}</p>
              </div>

              <div>
                <h2 className="opacity-50 mb-2">TECHNOLOGIES</h2>
                <p>{project.data.technologies}</p>
              </div>
            </div>
          </div>
        </div>

        {isFilled.image(project.data.mainImage) && (
          <div className="mt-8 laptop:mt-24 relative rounded-lg overflow-hidden transition-all ease-out duration-300">
            <PrismicNextImage
              priority
              field={project.data.mainImage}
              className="h-full w-full"
              imgixParams={{ fm: "avif" }}
            />
          </div>
        )}

        <div className="mt-8 text-2xl">
          <p>{project.data.companyDescription}</p>
        </div>
      </div>

      {Boolean(project.data.slices.length) && (
        <div className="border-b border-white w-full h-0.5 mt-8" />
      )}

      <SliceZone slices={project.data.slices} components={components} />
    </>
  );
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const client = createClient();

  const page = await client.getByUID("project", params.uid).catch(() =>
    notFound()
  );

  return {
    title: `${page.data.name} | ${data.name}`,
    description: page.data.description,
  };
}

export async function generateStaticParams() {
  const client = createClient();

  const projects = await client.getAllByType("project");

  return projects.map((project) => ({ uid: project.uid }));
}
