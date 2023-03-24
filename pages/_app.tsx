import "@/styles/globals.css";

import { PrismicPreview } from "@prismicio/next";
import { PrismicProvider } from "@prismicio/react";
import { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { createClient, linkResolver, repositoryName } from "prismicio";

const client = createClient();

const App = ({ Component, pageProps }: AppProps) => (
  <PrismicProvider client={client} linkResolver={linkResolver}>
    <PrismicPreview repositoryName={repositoryName}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </PrismicPreview>
  </PrismicProvider>
);

export default App;
