import { Content, Query } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Link from "next/link";

import { BlogPostCard } from "@/components/BlogPostCard";
import { HomeSliceLayout } from "@/components/HomeSliceLayout";
import { BlogPostDocument } from "@/prismicio-types";

export type BlogPostsProps = SliceComponentProps<
  Content.BlogPostsSlice,
  { blogPosts: Query<BlogPostDocument> }
>;

const BlogPosts = ({ slice, context }: BlogPostsProps) => (
  <HomeSliceLayout
    title={slice.primary.title as string}
    titleColour="text-accent"
    className="grid tablet:grid-cols-2 gap-8 gap-y-12"
    link={
      <div className="mt-10 flex flex-1 justify-center">
        <Link
          href="/blog"
          className="btn hover:bg-primary hover:text-neutral w-full laptop:w-1/2"
        >
          View all
        </Link>
      </div>
    }
  >
    {context?.blogPosts?.results.map((blogPost) => (
      <BlogPostCard
        key={blogPost.data.postTitle}
        blogPost={blogPost}
      />
    ))}
  </HomeSliceLayout>
);

export default BlogPosts;
