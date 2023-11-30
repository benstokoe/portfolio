import { PrismicNextImage } from "@prismicio/next";
import { PrismicLink } from "@prismicio/react";
import { format } from "date-fns";

import { BlogPostDocument } from "@/prismicio-types";

import { AnimateIn } from "../AnimateIn";

type BlogPostCardProps = {
  blogPost: BlogPostDocument;
};

export const BlogPostCard = ({ blogPost }: BlogPostCardProps) => (
  <AnimateIn>
    <PrismicLink document={blogPost}>
      <PrismicNextImage
        field={blogPost.data.postImage}
        width="320"
        layout="responsive"
        imgixParams={{ width: 320 }}
      />

      <p className="font-semibold text-xl mt-4">{blogPost.data.postTitle}</p>
      <p className="mt-2 text-sm">
        {format(new Date(blogPost.data.publishDate as string), "MMM d, yyyy")}
      </p>
    </PrismicLink>
  </AnimateIn>
);
