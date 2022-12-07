import { PrismicLink, SliceComponentProps } from "@prismicio/react";

import { WorkCard } from "@/components/WorkCard";
import { ProjectDocument, ProjectsSlice } from "@/types.generated";

const Projects = ({ slice }: SliceComponentProps<ProjectsSlice>) => (
  <div className="mt-10 laptop:mt-30">
    <h1 className="text-2xl text-bold">{slice.primary.title}.</h1>

    <div className="mt-5 laptop:mt-10 grid tablet:grid-cols-2 gap-8 gap-y-12">
      {slice.items.map(({ projects: project }) => {
        const projectData = project as typeof project & {
          uid: string;
          data: Pick<ProjectDocument["data"], "name" | "mainImage" | "description">;
        };

        return (
          <PrismicLink field={project}>
            <WorkCard
              key={projectData.uid}
              image={projectData.data.mainImage}
              name={projectData.data.name as string}
              description={projectData.data.description as string}
            />

            <p className="mt-4">View work</p>
          </PrismicLink>
        );
      })}
    </div>
  </div>
);

export default Projects;
