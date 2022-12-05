import { SliceZone } from "@prismicio/react";
import { SliceSimulator } from "@prismicio/slice-simulator-react";

import { components } from "@/slices";

import state from "../.slicemachine/libraries-state.json";

const SliceSimulatorPage = () => (
  <SliceSimulator
    // eslint-disable-next-line react/no-unstable-nested-components
    sliceZone={(props) => <SliceZone {...props} components={components} />}
    state={state}
  />
);

export default SliceSimulatorPage;

export const getStaticProps = async () => {
  if (process.env.NODE_ENV === "production") {
    return { notFound: true };
  }

  return { props: {} };
};
