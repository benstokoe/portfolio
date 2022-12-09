import { SliceComponentProps } from "@prismicio/react";

import { TechStatsSlice } from "@/types.generated";

const TechStats = ({ slice }: SliceComponentProps<TechStatsSlice>) => (
  <div className="laptop:mt-20 mt-10">
    {slice.primary.title && <h2 className="mb-4 text-3xl">{slice.primary.title}</h2>}

    <div className="grid tablet:grid-cols-2">
      <div className="flex gap-8 items-center">
        <p className="text-xl tablet:text-3xl font-bold">React</p>
        <p className="text-4xl tablet:text-6xl font-bold">{slice.primary.react} years</p>
      </div>

      <div className="flex gap-8 items-center">
        <p className="text-xl tablet:text-3xl font-bold">Next.js</p>
        <p className="text-4xl tablet:text-6xl font-bold">{slice.primary.next} years</p>
      </div>
    </div>
  </div>
);

export default TechStats;
