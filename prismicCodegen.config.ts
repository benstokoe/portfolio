import type { Config } from "prismic-ts-codegen";

const config: Config = {
  models: ["./customtypes/**/index.json", "./slices/**/model.json"],
};

export default config;
