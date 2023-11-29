/* eslint-disable import/no-extraneous-dependencies */

"use client";

import { SliceZone, SliceZoneProps } from "@prismicio/react";
import { SliceSimulator } from "@slicemachine/adapter-next/simulator";

import { components } from "@/slices";

const SliceZoneComponent = (props: SliceZoneProps) => (
  <SliceZone {...props} components={components} />
);

const SliceSimulatorPage = () => <SliceSimulator sliceZone={SliceZoneComponent} />;

export default SliceSimulatorPage;
