import { SliceComponentProps } from "@prismicio/react";

import { AnimateIn } from "@/components/AnimateIn";
import { TechStatsSlice } from "@/prismicio-types";

const TechStats = ({ slice }: SliceComponentProps<TechStatsSlice>) => (
  <div className="laptop:mt-20 mt-10">
    {slice.primary.title && <h2 className="mb-4 text-3xl text-info">{slice.primary.title}</h2>}

    <AnimateIn>
      <div className="stats shadow w-full stats-vertical laptop:stats-horizontal bg-base-300">
        <div className="stat place-items-center">
          <p className="stat-title">React</p>
          <p className="stat-value">9 years</p>
        </div>

        <div className="stat place-items-center">
          <p className="stat-title">Next.js</p>
          <p className="stat-value">4 years</p>
        </div>

        <div className="stat place-items-center">
          <p className="stat-title">GraphQL</p>
          <p className="stat-value">4 years</p>
        </div>

        <div className="stat place-items-center">
          <p className="stat-title">CSS</p>
          <p className="stat-value">10 years</p>
        </div>
      </div>
    </AnimateIn>
  </div>
);

export default TechStats;
