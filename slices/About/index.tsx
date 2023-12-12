import { isFilled } from "@prismicio/client";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import Link from "next/link";

import { HomeSliceLayout } from "@/components/HomeSliceLayout";
import { AboutSlice } from "@/prismicio-types";

const components: JSXMapSerializer = {
  paragraph: ({ children }) => <p className="mb-4">{children}</p>,
};

const About = ({ slice }: SliceComponentProps<AboutSlice>) =>
  isFilled.richText(slice.primary.about)
    ? (
      <HomeSliceLayout
        title={slice.primary.title as string}
        titleColour="text-secondary"
        className="laptop:w-3/5"
      >
        <PrismicRichText
          field={slice.primary.about}
          components={components}
        />

        <Link className="text-accent" href="/about">
          Find out more about me
        </Link>
      </HomeSliceLayout>
    )
    : null;

export default About;
