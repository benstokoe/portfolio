import { isFilled } from "@prismicio/helpers";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Link from "next/link";
import { ReactNode } from "react";

import { AboutSlice } from "@/types.generated";

const richTextComponents = {
  paragraph: ({ children }: { children: ReactNode }) => <p className="mb-4">{children}</p>,
};

const About = ({ slice }: SliceComponentProps<AboutSlice>) =>
  isFilled.richText(slice.primary.about) ? (
    <div className="mt-10 laptop:mt-32">
      <h1 className="text-4xl text-bold">{slice.primary.title}.</h1>

      <p className="tablet:mt-10 mt-4 text-xl w-full laptop:w-3/5">
        <PrismicRichText field={slice.primary.about} components={richTextComponents} />
      </p>

      {slice.primary.showMore && (
        <Link className="opacity-50 hover:opacity-100" href="/about">
          Find out more about me
        </Link>
      )}
    </div>
  ) : null;

export default About;
