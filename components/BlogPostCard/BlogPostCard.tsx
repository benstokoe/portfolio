import { PrismicImage, PrismicLink } from "@prismicio/react";

import { BlogPostDocument } from "@/prismicio-types";

type BlogPostCardProps = {
  blogPost: BlogPostDocument;
};

export const BlogPostCard = ({ blogPost }: BlogPostCardProps) => (
  <PrismicLink document={blogPost}>
    <PrismicImage field={blogPost.data.postImage} />

    <p className="font-semibold text-xl mt-4">{blogPost.data.postTitle}</p>
    <p className="mt-2 text-sm">{blogPost.data.publishDate}</p>
  </PrismicLink>
);
