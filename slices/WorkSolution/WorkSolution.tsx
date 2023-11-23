import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import { ProjectSolutionSlice } from "@/prismicio-types";

const WorkSolution = ({ slice }: SliceComponentProps<ProjectSolutionSlice>) => (
  <div className="mt-8">
    <h2 className="text-4xl laptop:text-5xl font-semibold">Solution</h2>

    <div className="mt-6">
      <PrismicRichText field={slice.primary.solution} />
    </div>
  </div>
);

export default WorkSolution;
