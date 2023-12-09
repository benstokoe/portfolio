import { ImageField, isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";

import { AnimatedButton } from "@/components/AnimatedButton";
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
  <AnimateIn className="group">
    {isFilled.image(image) && (
      <div className="rounded-xl overflow-hidden">
        <div className="flex w-full gap-1.5 rounded-t-xl bg-base-300 p-3">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>
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

    <div className="mt-4">
      <AnimatedButton>View work</AnimatedButton>
    </div>
  </AnimateIn>
);
