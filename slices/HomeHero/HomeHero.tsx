"use client";

import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { useRef } from "react";

import { stagger } from "@/animations";
import Socials from "@/components/Socials";
import { HomeHeroSlice } from "@/prismicio-types";
import { useIsomorphicLayoutEffect } from "@/utils";

const components: JSXMapSerializer = {
  em: ({ children }) => <span className="text-accent">{children}</span>,
};

const HomeHero = ({ slice }: SliceComponentProps<HomeHeroSlice>) => {
  const textOne = useRef(null);
  const textTwo = useRef(null);
  const textThree = useRef(null);
  const textFour = useRef(null);

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" },
    );
  }, []);

  const { primary } = slice;

  return (
    <div className="laptop:mt-20 mt-10">
      <h1 className="mt-5">
        <span
          ref={textOne}
          className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold w-4/5 mob:w-full laptop:w-4/5"
        >
          {primary.taglineOne}
        </span>
        <span
          ref={textTwo}
          className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold w-full laptop:w-4/5"
        >
          <PrismicRichText field={primary.taglineTwo} components={components} />
        </span>
        <span
          ref={textThree}
          className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold w-full"
        >
          <PrismicRichText field={primary.taglineThree} components={components} />
        </span>
        <span
          ref={textFour}
          className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold w-full"
        >
          {primary.taglineFour}
        </span>
      </h1>

      <Socials className="mt-6" />
    </div>
  );
};

export default HomeHero;
