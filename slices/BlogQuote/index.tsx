import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `BlogQuote`.
 */
export type BlogQuoteProps = SliceComponentProps<Content.BlogQuoteSlice>;

/**
 * Component for "BlogQuote" Slices.
 */
const BlogQuote = ({ slice }: BlogQuoteProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      Placeholder component for blog_quote (variation: {slice.variation}) Slices
    </section>
  );
};

export default BlogQuote;
