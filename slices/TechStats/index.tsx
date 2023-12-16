import { SliceComponentProps } from "@prismicio/react";
import { differenceInYears } from "date-fns";

import { TechStatsSlice } from "@/prismicio-types";

const TechStats = ({ slice }: SliceComponentProps<TechStatsSlice>) => (
  <div className="laptop:mt-20 mt-10">
    {slice.primary.title && (
      <h2 className="mb-4 text-3xl text-info">{slice.primary.title}</h2>
    )}

    <div className="stats shadow w-full stats-vertical laptop:stats-horizontal bg-base-300">
      <div className="stat place-items-center">
        <p className="stat-title">React</p>
        <p className="stat-value">
          {differenceInYears(
            new Date(),
            new Date(slice.primary.react as string),
          )} years
        </p>
      </div>

      <div className="stat place-items-center">
        <p className="stat-title">Next.js</p>
        <p className="stat-value">
          {differenceInYears(
            new Date(),
            new Date(slice.primary.next as string),
          )} years
        </p>
      </div>

      <div className="stat place-items-center">
        <p className="stat-title">GraphQL</p>
        <p className="stat-value">
          {differenceInYears(
            new Date(),
            new Date(slice.primary.graphql as string),
          )} years
        </p>
      </div>

      <div className="stat place-items-center">
        <p className="stat-title">CSS</p>
        <p className="stat-value">
          {differenceInYears(new Date(), new Date(slice.primary.css as string))}
          {" "}
          years
        </p>
      </div>
    </div>
  </div>
);

export default TechStats;
