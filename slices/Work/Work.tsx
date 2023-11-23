import { PrismicLink, SliceComponentProps } from "@prismicio/react";

import { WorkCard } from "@/components/WorkCard";
import { ProjectDocument, ProjectsSlice } from "@/prismicio-types";

const Work = ({ slice }: SliceComponentProps<ProjectsSlice>) => (
  <div className="mt-10 laptop:mt-32">
    {slice.primary.title && (
      <h1 className="text-4xl text-bold text-primary">{slice.primary.title}.</h1>
    )}

    <div className="mt-5 laptop:mt-10 grid tablet:grid-cols-2 gap-8 gap-y-12">
      {slice.items.map(({ work }) => {
        const workData = work as typeof work & {
          uid: string;
          data: Pick<ProjectDocument["data"], "name" | "mainImage" | "description">;
        };

        return (
          <PrismicLink field={work} key={workData.uid}>
            <WorkCard
              key={workData.uid}
              image={workData.data.mainImage}
              name={workData.data.name as string}
              description={workData.data.description as string}
            />

            <p className="mt-4 hover:text-secondary text-accent">View work</p>
          </PrismicLink>
        );
      })}
    </div>
  </div>
);

export default Work;
