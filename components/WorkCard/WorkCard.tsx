import { ImageField, isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";

import { AnimateIn } from "@/components/AnimateIn";

type WorkCardProps = {
  image: ImageField;
  name: string;
  description: string;
  technologies?: string;
  imagePriority?: boolean;
};

export const WorkCard = ({
  image,
  name,
  description,
  technologies,
  imagePriority,
}: WorkCardProps) => (
  <AnimateIn>
    {isFilled.image(image) && (
      <div className="mockup-window bg-base-300 border-base-300 tablet:hover:scale-105 transition-all ease-out duration-300">
        <div className="relative overflow-hidden">
          <PrismicNextImage
            field={image}
            width="700"
            imgixParams={{ width: 700, height: 500 }}
            loading={!imagePriority ? "lazy" : undefined}
            priority={imagePriority}
          />
        </div>
      </div>
    )}
    <h2 className="mt-5 text-xl font-medium">{name}</h2>
    <p className="opacity-50">{description}</p>

    {technologies && <h3 className="mt-4 text-sm text-info">{technologies}</h3>}

    <p className="mt-4 hover:text-secondary text-accent">View work</p>
  </AnimateIn>
);
