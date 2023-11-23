import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

import { ProjectImagesSlice } from "@/prismicio-types";

const WorkImages = ({ slice }: SliceComponentProps<ProjectImagesSlice>) => (
  <div className="mt-8">
    {slice.primary.title && <h2 className="mb-4 text-3xl">{slice.primary.title}</h2>}

    <div className="grid grid-cols-2 tablet:grid-cols-3 gap-4 relative">
      {slice.items.map(({ image }) => (
        <div className="relative rounded-lg overflow-hidden">
          <PrismicNextImage field={image} className="w-full h-full rounded-lg" />
          <p className="opacity-80 mt-2">{image.alt}</p>
        </div>
      ))}
    </div>
  </div>
);

export default WorkImages;
