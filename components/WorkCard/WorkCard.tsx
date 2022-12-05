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
    <div
      className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto"
      style={{ height: "600px" }}
    >
      {isFilled.image(image) && (
        <PrismicNextImage
          field={image}
          className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
        />
      )}
    </div>
    <h1 className="mt-5 text-3xl font-medium">{name}</h1>
    <h2 className="text-xl opacity-50">{description}</h2>
  </div>
);
