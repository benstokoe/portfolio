import { isFilled } from "@prismicio/client";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import Link from "next/link";

import { AnimateIn } from "@/components/AnimateIn";
import { AboutSlice } from "@/prismicio-types";

const components: JSXMapSerializer = {
  paragraph: ({ children }) => <p className="mb-4">{children}</p>,
};

const About = ({ slice }: SliceComponentProps<AboutSlice>) =>
  isFilled.richText(slice.primary.about)
    ? (
      <AnimateIn>
        <div className="mt-10 laptop:mt-32">
          <h2 className="text-4xl text-bold text-secondary">
            {slice.primary.title}.
          </h2>

          <div className="tablet:mt-10 mt-4 text-xl w-full laptop:w-3/5">
            <PrismicRichText
              field={slice.primary.about}
              components={components}
            />
          </div>

          {slice.primary.showMore && (
            <Link className="text-accent" href="/about">
              Find out more about me
            </Link>
          )}
        </div>
      </AnimateIn>
    )
    : null;

export default About;
