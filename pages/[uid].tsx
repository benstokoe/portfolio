import { SliceZone } from "@prismicio/react";
import { GetStaticPropsResult, PreviewData } from "next";
import Head from "next/head";
import { PageDocument } from "types.generated";

import Layout from "@/components/Layout";
import data from "@/data/portfolio.json";
import { createClient } from "@/prismicio";
import { components } from "@/slices";

type PageProps = {
  page: PageDocument;
};

const Page = ({ page }: PageProps) => (
  <Layout>
    <Head>
      <title>
        {page.data.title} | {data.name}
      </title>
    </Head>

    {page.data.title && (
      <div className="laptop:mt-20 mt-10">
        <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold w-4/5 mob:w-full laptop:w-4/5">
          {page.data.title}.
        </h1>
      </div>
    )}

    <SliceZone slices={page.data.slices} components={components} />
  </Layout>
);

export default Page;

type GetStaticProps = {
  params: {
    uid: string;
  };
  locale: string;
  previewData: PreviewData;
};

export const getStaticProps = async ({
  params,
  locale,
  previewData,
}: GetStaticProps): Promise<GetStaticPropsResult<PageProps>> => {
  const client = createClient({ previewData });

  const page = await client.getByUID("page", params.uid, {
    lang: locale,
    fetchLinks: ["project.name", "project.mainImage", "project.description"],
  });

  return {
    props: {
      page,
    },
  };
};

export const getStaticPaths = async () => {
  const client = createClient();

  const pages = await client.getAllByType("page", { lang: "*" });

  return {
    paths: pages.map((page) => ({
      params: { uid: page.uid },
    })),
    fallback: false,
  };
};
