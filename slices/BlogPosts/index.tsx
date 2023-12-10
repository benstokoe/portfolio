import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `BlogPosts`.
 */
export type BlogPostsProps = SliceComponentProps<Content.BlogPostsSlice>;

/**
 * Component for "BlogPosts" Slices.
 */
const BlogPosts = ({ slice }: BlogPostsProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      Placeholder component for blog_posts (variation: {slice.variation}) Slices
    </section>
  );
};

export default BlogPosts;
