import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import {
  JSXMapSerializer,
  PrismicLink,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

export type ContentProps = SliceComponentProps<Content.ContentSlice>;

const components: JSXMapSerializer = {
  heading2: ({ children, key }) => (
    <h2 key={key} className="text-2xl mb-4 font-semibold text-secondary">
      {children}
    </h2>
  ),
  heading3: ({ children, key }) => <h3 key={key}>{children}</h3>,
  heading4: ({ children, key }) => <h4 key={key}>{children}</h4>,
  heading5: ({ children, key }) => <h5 key={key}>{children}</h5>,
  heading6: ({ children, key }) => <h6 key={key}>{children}</h6>,
  paragraph: ({ children, key }) => (
    <p className="mb-4" key={key}>
      {children}
    </p>
  ),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: ({ node, key }) => <PrismicNextImage key={key} field={node as any} className="w-full" />,
  preformatted: ({ node, key }) => (
    <SyntaxHighlighter showLineNumbers style={dracula} wrapLines key={key}>
      {node.text}
    </SyntaxHighlighter>
  ),
  strong: ({ children, key }) => (
    <strong key={key} className="font-semibold">
      {children}
    </strong>
  ),
  em: ({ children, key }) => <em key={key}>{children}</em>,
  listItem: ({ children, key }) => <li key={key}>{children}</li>,
  oListItem: ({ children, key }) => <li key={key}>{children}</li>,
  list: ({ children, key }) => <ul key={key}>{children}</ul>,
  oList: ({ children, key }) => <ol key={key}>{children}</ol>,
  hyperlink: ({ node, children, key }) => (
    <PrismicLink key={key} field={node.data} className="underline hover:text-primary">
      {children}
    </PrismicLink>
  ),
};

const Content = ({ slice }: ContentProps): JSX.Element => (
  <section
    data-slice-type={slice.slice_type}
    data-slice-variation={slice.variation}
    className="mb-4"
  >
    <PrismicRichText field={slice.primary.content} components={components} />
  </section>
);

export default Content;
