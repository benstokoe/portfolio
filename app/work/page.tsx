import { PrismicNextLink } from "@prismicio/next";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import { WorkCard } from "@/components/WorkCard";
import data from "@/data/portfolio.json";
import { createClient } from "@/prismicio";
import { ProjectDocument } from "@/prismicio-types";

const titleColour: Record<string, string> = {
  work: "primary",
  about: "secondary",
  contact: "accent",
};

export default async function Page() {
  const client = createClient();

  const page = await client.getByUID("page", "work").catch(() => notFound());

  const work = await client
    .getByType("project", {
      orderings: {
        field: "document.date",
        direction: "desc",
      },
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
        <div className="mt-5 laptop:mt-10 grid tablet:grid-cols-2 gap-8 gap-y-12">
          {work.results.map((doc) => {
            const workData = doc.data as typeof doc.data & {
              uid: string;
              data: Pick<ProjectDocument["data"], "name" | "mainImage" | "description">;
            };

            return (
              <PrismicNextLink document={doc} key={workData.uid}>
                <WorkCard
                  key={workData.uid}
                  image={workData.mainImage}
                  name={workData.name as string}
                  description={workData.description as string}
                  technologies={workData.technologies as string}
                />
              </PrismicNextLink>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();

  const page = await client.getByUID("page", "work").catch(() => notFound());

  return {
    title: `${page.data.title} | ${data.name}`,
    description: page.data.meta_description,
  };
}
