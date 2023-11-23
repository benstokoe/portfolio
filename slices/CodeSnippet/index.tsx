'use client';

import { asText, Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

export type CodeSnippetProps = SliceComponentProps<Content.CodeSnippetSlice>;

const CodeSnippet = ({ slice }: CodeSnippetProps): JSX.Element => (
  <section
    data-slice-type={slice.slice_type}
    data-slice-variation={slice.variation}
    className="mb-4"
  >
    <SyntaxHighlighter
      showLineNumbers
      language="javascript"
      style={dracula}
      wrapLines
      lineProps={(lineNumber) => {
        const style = { display: "block", backgroundColor: "inherit" };

        if (slice.primary.addedLines?.includes(lineNumber.toString())) {
          style.backgroundColor = "#1d1e26";
        } else if (slice.primary.removedLines?.includes(lineNumber.toString())) {
          style.backgroundColor = "#15171b";
        }
        return { style };
      }}
    >
      {asText(slice.primary.code)}
    </SyntaxHighlighter>
  </section>
);

export default CodeSnippet;
