import { Query } from "@prismicio/client";
import { PrismicLink, SliceComponentProps } from "@prismicio/react";
import Link from "next/link";

import { HomeSliceLayout } from "@/components/HomeSliceLayout";
import { WorkCard } from "@/components/WorkCard";
import { ProjectDocument, ProjectsSlice } from "@/prismicio-types";

export type WorkProps = SliceComponentProps<
  ProjectsSlice,
  { work: Query<ProjectDocument> }
>;

const Work = ({ slice, context }: WorkProps) => (
  <HomeSliceLayout
    title={slice.primary.title as string}
    titleColour="text-primary"
    className="grid tablet:grid-cols-2 gap-8 gap-y-12"
    link={
      <div className="mt-10 flex flex-1 justify-center">
        <Link
          href="/work"
          className="btn hover:bg-primary hover:text-neutral w-full laptop:w-1/2"
        >
          View all
        </Link>
      </div>
    }
  >
    {context?.work?.results.map((data, index) => {
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
            technologies={workData.data.technologies as string}
            imagePriority={index === 0 || index === 1}
          />
        </PrismicLink>
      );
    })}
  </HomeSliceLayout>
);

export default Work;
