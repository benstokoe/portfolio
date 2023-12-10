import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";

import Socials from "@/components/Socials";
import { HomeHeroSlice } from "@/prismicio-types";

const components: JSXMapSerializer = {
  em: ({ children }) => <span className="text-accent">{children}</span>,
};

const HomeHero = ({ slice }: SliceComponentProps<HomeHeroSlice>) => {
  const { primary } = slice;

  return (
    <div className="laptop:mt-20 mt-10">
      <span className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold w-4/5 mob:w-full laptop:w-4/5">
        {primary.taglineOne}
      </span>
      <h1>
        <span className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold w-full laptop:w-4/5">
          <PrismicRichText field={primary.taglineTwo} components={components} />
        </span>
        <span className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold w-full">
          <PrismicRichText
            field={primary.taglineThree}
            components={components}
          />
        </span>
        <span className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold w-full">
          {primary.taglineFour}
        </span>
      </h1>

      <Socials className="mt-6" />
    </div>
  );
};

export default HomeHero;
