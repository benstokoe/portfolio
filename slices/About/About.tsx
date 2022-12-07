import { isFilled } from "@prismicio/helpers";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import { AboutSlice } from "@/types.generated";

const About = ({ slice }: SliceComponentProps<AboutSlice>) =>
  isFilled.richText(slice.primary.about) ? (
    <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
      <h1 className="text-2xl text-bold">{slice.primary.title}.</h1>

      <p className="tablet:mt-10 mt-2 text-xl w-full laptop:w-3/5">
        <PrismicRichText field={slice.primary.about} />
      </p>
    </div>
  ) : null;

export default About;
