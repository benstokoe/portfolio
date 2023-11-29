import * as prismic from "@prismicio/client";
import { FilledContentRelationshipField } from "@prismicio/client";
import * as prismicNext from "@prismicio/next";
import { CreateClientConfig } from "@prismicio/next";

import sm from "./slicemachine.config.json";

export const repositoryName = prismic.getRepositoryName(sm.apiEndpoint);

export const linkResolver = (doc: FilledContentRelationshipField) => {
  if (doc.url === "/home") {
    return "/";
  }

  if (doc.uid) {
    return `/${doc.uid}`;
  }

  return "/";
};

const routes = [
  { type: "blogPost", path: "/blog/:uid" },
  { type: "project", path: "/work/:uid" },
];

export const createClient = (config: CreateClientConfig = {}) => {
  const client = prismic.createClient(sm.apiEndpoint, {
    routes,
    fetchOptions:
      process.env.NODE_ENV === "production"
        ? { next: { tags: ["prismic"] }, cache: "force-cache" }
        : { next: { revalidate: 5 } },
    ...config,
  });

  prismicNext.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  });

  return client;
};
