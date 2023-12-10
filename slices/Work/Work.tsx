import { PrismicLink, SliceComponentProps } from "@prismicio/react";
import { notFound } from "next/navigation";

import { WorkCard } from "@/components/WorkCard";
import { createClient } from "@/prismicio";
import { ProjectDocument, ProjectsSlice } from "@/prismicio-types";

const Work = async ({ slice }: SliceComponentProps<ProjectsSlice>) => {
  const client = createClient();

  const work = await client
    .getByType("project", {
      orderings: {
        field: "document.date",
        direction: "desc",
      },
      fetchLinks: ["project.name", "project.mainImage", "project.description"],
      pageSize: 4,
    })
    .catch(() => notFound());

  return (
    <div className="mt-10 laptop:mt-32">
      {slice.primary.title && (
        <h2 className="text-4xl text-bold text-primary">
          {slice.primary.title}.
        </h2>
      )}

      <div className="mt-5 laptop:mt-10 grid tablet:grid-cols-2 gap-8 gap-y-12">
        {work.results.map((data, index) => {
          const workData = data as typeof data & {
            uid: string;
            data: Pick<
              ProjectDocument["data"],
              "name" | "mainImage" | "description"
            >;
          };

          return (
            <PrismicLink document={data} key={workData.uid}>
              <WorkCard
                key={workData.uid}
                image={workData.data.mainImage}
                name={workData.data.name as string}
                description={workData.data.description as string}
                imagePriority={index === 0 || index === 1}
              />
            </PrismicLink>
          );
        })}
      </div>
    </div>
  );
};

export default Work;
