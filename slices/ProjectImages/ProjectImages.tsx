import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

import { ProjectImagesSlice } from "@/types.generated";

const ProjectImages = ({ slice }: SliceComponentProps<ProjectImagesSlice>) => (
  <div className="mt-8 flex gap-4">
    {slice.items.map(({ image }) => (
      <div className="relative rounded-lg overflow-hidden transition-all ease-out duration-300">
        <PrismicNextImage
          field={image}
          className="h-full w-full hover:scale-110 transition-all ease-out duration-300 rounded-lg"
        />
      </div>
    ))}
  </div>
);

export default ProjectImages;
