import "@/styles/globals.css";

import { PrismicPreview } from "@prismicio/next";
import { PrismicProvider } from "@prismicio/react";
import { AppProps } from "next/app";
import { createClient, linkResolver, repositoryName } from "prismicio";

const client = createClient();

const App = ({ Component, pageProps }: AppProps) => (
  <PrismicProvider client={client} linkResolver={linkResolver}>
    <PrismicPreview repositoryName={repositoryName}>
      <Component {...pageProps} />
    </PrismicPreview>
  </PrismicProvider>
);

export default App;
