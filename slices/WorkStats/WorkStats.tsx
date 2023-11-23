import { SliceComponentProps } from "@prismicio/react";

import { WorkStatsSlice } from "@/prismicio-types";

const WorkStats = ({ slice }: SliceComponentProps<WorkStatsSlice>) => (
  <div>{slice.primary.next}</div>
);

export default WorkStats;
