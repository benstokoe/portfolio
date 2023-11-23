import { notFound } from "next/navigation";

import { BlogPostCard } from "@/components/BlogPostCard/BlogPostCard";
import { createClient } from "@/prismicio";

export default async function Page() {
  const client = createClient();
  const blogPosts = await client
    .getAllByType("blogPost", {
      orderings: { field: "my.blogPost.publishDate", direction: "desc" },
    })
    .catch(() => notFound());

  return (
    <div className="laptop:mt-20 mt-10">
      <h1
        className={`text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold w-4/5 mob:w-full laptop:w-4/5 text-${"accent"}`}
      >
        Blog.
      </h1>

      <div className="mt-10 grid grid-cols-3 gap-12">
        {blogPosts.map((blogPost) => (
          <BlogPostCard key={blogPost.data.postTitle} blogPost={blogPost} />
        ))}
      </div>
    </div>
  );
}
