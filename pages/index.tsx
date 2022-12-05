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

const Home = ({ page }: IndexProps) => {
  // Ref
  // const workRef = useRef(null);
  // const aboutRef = useRef(null);

  // Handling Scroll
  const handleWorkScroll = () => {
    // window.scrollTo({
    //   top: workRef.current?.offsetTop,
    //   left: 0,
    //   behavior: "smooth",
    // });
  };

  const handleAboutScroll = () => {
    // window.scrollTo({
    //   top: aboutRef.current?.offsetTop,
    //   left: 0,
    //   behavior: "smooth",
    // });
  };

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="gradient-circle" />
      <div className="gradient-circle-bottom" />

      <div className="container mx-auto mb-10">
        <Header handleWorkScroll={handleWorkScroll} handleAboutScroll={handleAboutScroll} />

        <SliceZone slices={page.data.slices} components={components} />

        <Footer />
      </div>
    </div>
  );
};

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
    fetchLinks: ["project.name", "project.mainImage", "project.technology.name", "technology.logo"],
  });

  return {
    props: {
      page,
    },
  };
};

export default Home;
