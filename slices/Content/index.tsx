import { Content } from "@prismicio/client";
import {
  JSXMapSerializer,
  PrismicLink,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";

export type ContentProps = SliceComponentProps<Content.ContentSlice>;

const components: JSXMapSerializer = {
  heading1: ({ children, key }) => <h1 key={key}>{children}</h1>,
  heading2: ({ children, key }) => <h2 key={key}>{children}</h2>,
  heading3: ({ children, key }) => <h3 key={key}>{children}</h3>,
  heading4: ({ children, key }) => <h4 key={key}>{children}</h4>,
  heading5: ({ children, key }) => <h5 key={key}>{children}</h5>,
  heading6: ({ children, key }) => <h6 key={key}>{children}</h6>,
  paragraph: ({ children, key }) => (
    <p className="mb-4" key={key}>
      {children}
    </p>
  ),
  preformatted: ({ node, key }) => <pre key={key}>{node.text}</pre>,
  strong: ({ children, key }) => <strong key={key}>{children}</strong>,
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
