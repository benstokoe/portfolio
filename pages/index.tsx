import { SliceZone } from "@prismicio/react";
import { GetStaticPropsResult, PreviewData } from "next";
import Head from "next/head";
import { PageDocument } from "types.generated";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { createClient } from "@/prismicio";
import { components } from "@/slices";

import data from "../data/portfolio.json";

type IndexProps = {
  page: PageDocument;
};

const Home = ({ page }: IndexProps) => (
  <div className="relative">
    <Head>
      <title>{data.name}</title>
    </Head>

    <div className="gradient-circle" />
    <div className="gradient-circle-bottom" />

    <div className="container mx-auto mb-10">
      <Header />

      <SliceZone slices={page.data.slices} components={components} />

      <Footer />
    </div>
  </div>
);

type GetStaticProps = {
  locale: string;
  previewData: PreviewData;
};

export const getStaticProps = async ({
  locale,
  previewData,
}: GetStaticProps): Promise<GetStaticPropsResult<IndexProps>> => {
  const client = createClient({ previewData });

  const page = await client.getByUID("page", "home", {
    lang: locale,
    fetchLinks: ["project.name", "project.mainImage", "project.description"],
  });

  return {
    props: {
      page,
    },
  };
};

export default Home;
