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
  <HomeSliceLayout title={slice.primary.title} titleColour="text-accent">
    {context?.blogPosts?.results.map((blogPost, index) => (
      <BlogPostCard
        key={blogPost.data.postTitle}
        blogPost={blogPost}
        imagePriority={index === 0 || index === 1}
      />
    ))}

    <div className="mt-10 flex flex-1 justify-center">
      <Link
        href="/blog"
        className="btn hover:bg-primary hover:text-neutral w-full laptop:w-1/2"
      >
        View all
      </Link>
    </div>
  </HomeSliceLayout>
);

export default BlogPosts;
