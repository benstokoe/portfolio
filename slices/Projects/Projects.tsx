import { SliceComponentProps } from "@prismicio/react";

import { WorkCard } from "@/components/WorkCard";
import { ProjectDocument, ProjectsSlice } from "@/types.generated";

const Projects = ({ slice }: SliceComponentProps<ProjectsSlice>) => (
  <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
    <h1 className="text-2xl text-bold">{slice.primary.title}.</h1>

    <div className="mt-5 laptop:mt-10 grid tablet:grid-cols-3 gap-6">
      {slice.items.map(({ projects: project }) => {
        const projectData = project as typeof project & {
          uid: string;
          data: Pick<ProjectDocument["data"], "name" | "mainImage" | "description">;
        };

        return (
          <WorkCard
            key={projectData.uid}
            image={projectData.data.mainImage}
            name={projectData.data.name as string}
            description={projectData.data.description as string}
          />
        );
      })}
    </div>
  </div>
);

export default Projects;
