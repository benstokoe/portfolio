import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

import { HomeSliceLayout } from "@/components/HomeSliceLayout";
import { ClientLogosSlice, ProjectDocument } from "@/prismicio-types";

export type ClientLogosProps = SliceComponentProps<
  ClientLogosSlice,
  { logos: ProjectDocument[] }
>;

const ClientLogos = ({ slice, context }: ClientLogosProps) => (
  <HomeSliceLayout
    title={slice.primary.title as string}
    titleColour="text-info"
    className="grid grid-cols-3 tablet:grid-cols-4 gap-8 items-center"
  >
    {context?.logos?.map((logo) => (
      <PrismicNextLink
        document={logo}
        className="w-full grayscale hover:grayscale-0"
        key={logo.id}
      >
        <PrismicNextImage
          width={120}
          field={logo.data.logo}
          layout="responsive"
          className="mx-auto max-w-auto max-h-auto max-h-16 object-contain"
          loading="lazy"
          imgixParams={{ fm: "avif", width: 120 }}
        />
      </PrismicNextLink>
    ))}
  </HomeSliceLayout>
);

export default ClientLogos;
