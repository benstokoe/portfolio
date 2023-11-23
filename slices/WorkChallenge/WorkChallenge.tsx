import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import { ProjectChallengeSlice } from "@/prismicio-types";

const WorkChallenge = ({ slice }: SliceComponentProps<ProjectChallengeSlice>) => (
  <div className="mt-8">
    <h2 className="text-4xl laptop:text-5xl font-semibold">Challenge</h2>

    <div className="mt-6">
      <PrismicRichText field={slice.primary.challenge} />
    </div>
  </div>
);

export default WorkChallenge;
