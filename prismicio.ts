import * as prismic from "@prismicio/client";
import * as prismicNext from "@prismicio/next";
import { CreateClientConfig } from "@prismicio/next";
import { FilledContentRelationshipField, PrismicDocument } from "@prismicio/types";

import sm from "./sm.json";

export const repositoryName = prismic.getRepositoryName(sm.apiEndpoint);

export const linkResolver = (doc: FilledContentRelationshipField) => {
  if (doc.url === "/home") {
    return "/";
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
