import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

import { AnimateIn } from "@/components/AnimateIn";
import { ClientLogosSlice } from "@/types.generated";

const ClientLogos = ({ slice }: SliceComponentProps<ClientLogosSlice>) => (
  <div className="mt-10 laptop:mt-32">
    <h1 className="text-4xl text-bold">{slice.primary.title}.</h1>

    <AnimateIn>
      <div className="grid grid-cols-3 tablet:grid-cols-4 mt-6 gap-8 items-center">
        {slice.items.map((logo) => (
          <div className="w-full grayscale hover:grayscale-0">
            <PrismicNextImage
              width={120}
              field={logo.clientLogo}
              className="mx-auto max-w-auto max-h-auto max-h-16"
            />
          </div>
        ))}
      </div>
    </AnimateIn>
  </div>
);

export default ClientLogos;
