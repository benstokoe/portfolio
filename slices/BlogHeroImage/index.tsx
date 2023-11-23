import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

export type BlogHeroProps = SliceComponentProps<Content.BlogHeroSlice>;

const BlogHero = ({ slice }: BlogHeroProps): JSX.Element => (
  <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
    Placeholder component for blog_hero (variation: {slice.variation}) Slices
  </section>
);

export default BlogHero;
