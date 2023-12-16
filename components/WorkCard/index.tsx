import { ImageField, isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";

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
  <div className="group">
    {isFilled.image(image) && (
      <div className="rounded-xl overflow-hidden group-hover:scale-105 transition-transform">
        <div className="flex w-full gap-1.5 rounded-t-xl bg-base-300 p-3">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>
        <div className="relative overflow-hidden w-auto">
          <PrismicNextImage
            field={image}
            width="720"
            layout="responsive"
            imgixParams={{ width: 720, height: 500 }}
            loading={!imagePriority ? "lazy" : undefined}
            priority={imagePriority}
          />
        </div>
      </div>
    )}
    <h2 className="mt-5 text-xl font-medium group-hover:text-primary transition-colours">
      {name}
    </h2>
    <p className="opacity-50 mt-2 group-hover:opacity-100">
      {description}
    </p>

    {technologies && (
      <h3 className="mt-4 text-sm text-info group-hover:text-accent">
        {technologies}
      </h3>
    )}
  </div>
);
