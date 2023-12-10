import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

import { AnimateIn } from "@/components/AnimateIn";
import { ClientLogosSlice } from "@/prismicio-types";

const ClientLogos = ({ slice }: SliceComponentProps<ClientLogosSlice>) => (
  <AnimateIn>
    <div className="mt-10 laptop:mt-32">
      <h2 className="text-4xl text-bold text-info">{slice.primary.title}.</h2>

      <div className="grid grid-cols-3 tablet:grid-cols-4 mt-10 gap-8 items-center">
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
      </div>
    </div>
  </AnimateIn>
);

export default ClientLogos;
