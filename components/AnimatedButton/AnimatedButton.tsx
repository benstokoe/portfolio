/* eslint-disable react/button-has-type */
import { ReactNode } from "react";

type AnimatedButtonProps = {
  children: ReactNode;
  type?: "button" | "submit";
};

export const AnimatedButton = (
  { children, type = "button" }: AnimatedButtonProps,
) => (
  <button
    type={type}
    className={`
      relative z-0 flex items-center gap-2 overflow-hidden
      whitespace-nowrap rounded-lg border-[1px] 
      border-neutral-700 px-4 py-1.5 font-medium
      text-white transition-all duration-300

      before:absolute before:inset-0
      before:-z-10 before:translate-y-[200%]
      before:scale-[2.5]
      before:rounded-[100%] before:bg-primary
      before:transition-transform before:duration-1000
      before:content-[""]

      hover:scale-105 hover:border-primary hover:text-neutral-900
      hover:before:translate-y-[0%]

      group-hover:scale-105 group-hover:border-primary group-hover:text-neutral-900
      group-hover:before:translate-y-[0%]
      active:scale-100
    `}
  >
    {children}
  </button>
);
