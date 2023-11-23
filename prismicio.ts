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

  if (doc.type === "project") {
    return `/work/${doc.uid}`;
  }

  if (doc.type === "blogPost") {
    return `/blog/${doc.uid}`;
  }

  if (doc.uid) {
    return `/${doc.uid}`;
  }

  return "/";
};

export const createClient = (config: CreateClientConfig = {}) => {
  const client = prismic.createClient(sm.apiEndpoint, config);

  prismicNext.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  });

  return client;
};
