import { BlogPostDocumentDataTagsItem } from "@/prismicio-types";

type BlogTagsProps = {
  tags: BlogPostDocumentDataTagsItem[];
};

export const BlogTags = ({ tags }: BlogTagsProps) => (
  <>
    {tags.map(({ tag }) => (
      <div className="rounded-full bg-neutral p-4 text-base hover:bg-primary hover:text-black whitespace-nowrap">
        {tag}
      </div>
    ))}
  </>
);
