import { isFilled } from "@prismicio/helpers";
import { PrismicNextImage } from "@prismicio/next";
import { SliceZone } from "@prismicio/react";
import { GetStaticPropsResult, PreviewData } from "next";
import Head from "next/head";
import { ProjectDocument } from "types.generated";

import Layout from "@/components/Layout";
import data from "@/data/portfolio.json";
import { createClient } from "@/prismicio";
import { components } from "@/slices";

type ProjectProps = {
  project: ProjectDocument;
};

const Project = ({ project }: ProjectProps) => (
  <Layout>
    <Head>
      <title>
        {project.data.name} | {data.name}
      </title>
    </Head>

    <div className="mt-10 laptop:mt-20">
      <div className="mb-5 grid tablet:grid-cols-2 gap-8">
        <h1 className="text-4xl tablet:text-6xl laptopl:text-8xl text-bold text-primary">
          {project.data.name}
        </h1>

        <div className="flex flex-col gap-4">
          <div>
            <h2 className="opacity-50 mb-2">DESCRIPTION</h2>
            <p>{project.data.description}</p>
          </div>

          <div className="gap-4 grid tablet:grid-cols-2">
            <div>
              <h2 className="opacity-50 mb-2">ROLE</h2>
              <p>{project.data.role}</p>
            </div>

            <div>
              <h2 className="opacity-50 mb-2">TECHNOLOGIES</h2>
              <p>{project.data.technologies}</p>
            </div>
          </div>
        </div>
      </div>

      {isFilled.image(project.data.mainImage) && (
        <div className="mt-8 laptop:mt-24 relative rounded-lg overflow-hidden transition-all ease-out duration-300">
          <PrismicNextImage priority field={project.data.mainImage} className="h-full w-full" />
        </div>
      )}

      <div className="mt-8 text-2xl">
        <p>{project.data.companyDescription}</p>
      </div>
    </div>

    {Boolean(project.data.slices.length) && (
      <div className="border-b border-white w-full h-0.5 mt-8" />
    )}

    <SliceZone slices={project.data.slices} components={components} />
  </Layout>
);

type GetStaticProps = {
  params: {
    id: string;
  };
  locale: string;
  previewData: PreviewData;
};

export const getStaticProps = async ({
  params,
  locale,
  previewData,
}: GetStaticProps): Promise<GetStaticPropsResult<ProjectProps>> => {
  const client = createClient({ previewData });

  const project = await client.getByUID("project", params.id, {
    lang: locale,
  });

  return {
    props: {
      project,
    },
  };
};

export async function getStaticPaths() {
  const client = createClient();

  const projects = await client.getAllByType("project");

  const paths = projects.map((project) => ({
    params: { id: project.uid },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default Project;
