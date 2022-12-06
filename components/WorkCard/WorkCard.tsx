import { isFilled } from "@prismicio/helpers";
import { PrismicNextImage } from "@prismicio/next";
import { ImageField } from "@prismicio/types";
import React from "react";

type WorkCardProps = {
  image: ImageField;
  name: string;
  description: string;
};

export const WorkCard = ({ image, name, description }: WorkCardProps) => (
  <div className="overflow-hidden rounded-lg link">
    {isFilled.image(image) && (
      <div className="relative rounded-lg overflow-hidden transition-all ease-out duration-300">
        <PrismicNextImage
          field={image}
          layout="responsive"
          className="h-full w-full hover:scale-110 transition-all ease-out duration-300"
        />
      </div>
    )}
    <h1 className="mt-5 text-xl font-medium">{name}</h1>
    <h2 className="opacity-50">{description}</h2>
  </div>
);
