import { ImageField, isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";

import { AnimateIn } from "@/components/AnimateIn";

type WorkCardProps = {
  image: ImageField;
  name: string;
  description: string;
  technologies?: string;
};

export const WorkCard = ({ image, name, description, technologies }: WorkCardProps) => (
  <AnimateIn>
    {isFilled.image(image) && (
      <div className="mockup-window bg-base-300 border-base-300 tablet:hover:scale-105 transition-all ease-out duration-300">
        <div className="relative overflow-hidden">
          <PrismicNextImage field={image} width="700" imgixParams={{ width: 700, height: 500 }} />
        </div>
      </div>
    )}
    <h1 className="mt-5 text-xl font-medium">{name}</h1>
    <h2 className="opacity-50">{description}</h2>

    {technologies && <h4 className="mt-4 text-sm text-info">{technologies}</h4>}

    <p className="mt-4 hover:text-secondary text-accent">View work</p>
  </AnimateIn>
);
