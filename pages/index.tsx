import { SliceZone } from "@prismicio/react";
import { GetStaticPropsResult, PreviewData } from "next";
import { PageDocument } from "types.generated";

import Layout from "@/components/Layout";
import { createClient } from "@/prismicio";
import { components } from "@/slices";

type IndexProps = {
  page: PageDocument;
};

const Home = ({ page }: IndexProps) => (
  <Layout>
    <SliceZone slices={page.data.slices} components={components} />
  </Layout>
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
    fetchLinks: ["project.name", "project.mainImage", "project.description", "about.about"],
  });

  return {
    props: {
      page,
    },
  };
};

export default Home;
