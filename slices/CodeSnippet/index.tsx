"use server";

import { asText, Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Code } from "bright";

import theme from "./theme";

export type CodeSnippetProps = SliceComponentProps<Content.CodeSnippetSlice>;

const CodeSnippet = ({ slice }: CodeSnippetProps) => (
  <section
    data-slice-type={slice.slice_type}
    data-slice-variation={slice.variation}
    className="mb-4"
  >
    <Code
      lang="js"
      lineNumbers
      theme={theme}
    >
      {asText(slice.primary.code)}
    </Code>
  </section>
);

export default CodeSnippet;
