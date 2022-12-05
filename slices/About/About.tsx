import { SliceComponentProps } from "@prismicio/react";

import { AboutSlice } from "@/types.generated";

const About = ({ slice }: SliceComponentProps<AboutSlice>) => (
  <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
    <h1 className="text-2xl text-bold">{slice.primary.title}.</h1>

    <p className="tablet:m-10 mt-2 text-xl laptop:text-3xl w-full laptop:w-3/5">
      {slice.primary.about}
    </p>
  </div>
);

export default About;
