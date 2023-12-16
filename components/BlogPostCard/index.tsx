import { PrismicNextImage } from "@prismicio/next";
import { PrismicLink } from "@prismicio/react";
import { format } from "date-fns";

import { BlogPostDocument } from "@/prismicio-types";

import { BlogTags } from "../BlogTags";

type BlogPostCardProps = {
  blogPost: BlogPostDocument;
  imagePriority?: boolean;
};

export const BlogPostCard = (
  { blogPost, imagePriority }: BlogPostCardProps,
) => (
  <PrismicLink document={blogPost}>
    <div className="rounded-xl overflow-hidden hover:scale-105 transition-transform">
      <PrismicNextImage
        field={blogPost.data.postImage}
        width="500"
        layout="responsive"
        loading={!imagePriority ? "lazy" : undefined}
        priority={imagePriority}
        imgixParams={{ width: 500 }}
        className="aspect-2"
        style={{ objectFit: "cover" }}
      />
    </div>

    <p className="font-semibold text-xl mt-4">{blogPost.data.postTitle}</p>
    <p className="mt-2 text-sm">
      {format(new Date(blogPost.data.publishDate as string), "MMM d, yyyy")}
    </p>
    <div className="mt-4 flex gap-2 flex-wrap">
      <BlogTags tags={blogPost.data.tags} />
    </div>
  </PrismicLink>
);
