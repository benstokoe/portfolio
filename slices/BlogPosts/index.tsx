import { Content, Query } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Link from "next/link";

import { BlogPostCard } from "@/components/BlogPostCard";
import { BlogPostDocument } from "@/prismicio-types";

export type BlogPostsProps = SliceComponentProps<
  Content.BlogPostsSlice,
  { blogPosts: Query<BlogPostDocument> }
>;

const BlogPosts = ({ slice, context }: BlogPostsProps) => (
  <section
    className="mt-10 laptop:mt-32"
    data-slice-type={slice.slice_type}
    data-slice-variation={slice.variation}
  >
    {slice.primary.title && (
      <h2 className="text-4xl text-bold text-primary">
        {slice.primary.title}.
      </h2>
    )}

    <div className="mt-10 grid tablet:grid-cols-2 gap-12">
      {context?.blogPosts?.results.map((blogPost, index) => (
        <BlogPostCard
          key={blogPost.data.postTitle}
          blogPost={blogPost}
          imagePriority={index === 0 || index === 1}
        />
      ))}
    </div>

    <div className="mt-10 flex flex-1 justify-center">
      <Link
        href="/blog"
        className="btn hover:bg-primary hover:text-neutral w-full laptop:w-1/2"
      >
        View all
      </Link>
    </div>
  </section>
);

export default BlogPosts;
