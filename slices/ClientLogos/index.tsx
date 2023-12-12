import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

import { HomeSliceLayout } from "@/components/HomeSliceLayout";
import { ClientLogosSlice } from "@/prismicio-types";

const ClientLogos = ({ slice }: SliceComponentProps<ClientLogosSlice>) => (
  <HomeSliceLayout
    title={slice.primary.title as string}
    titleColour="text-info"
    className="grid grid-cols-3 tablet:grid-cols-4 gap-8 items-center"
  >
    {slice.items.map((logo) => (
      <div
        className="w-full grayscale hover:grayscale-0"
        key={logo.clientLogo.url}
      >
        <PrismicNextImage
          width={120}
          field={logo.clientLogo}
          className="mx-auto max-w-auto max-h-auto max-h-16"
          loading="lazy"
        />
      </div>
    ))}
  </HomeSliceLayout>
);

export default ClientLogos;
