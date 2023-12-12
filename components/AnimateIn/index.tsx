"use client";

import clsx from "clsx";
import { useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

type AnimateInProps = {
  children: ReactNode;
  className?: string;
};

export const AnimateIn = ({ children, className }: AnimateInProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div
      className={clsx("transition-all duration-500", {
        "opacity-100": isInView,
        "opacity-0": !isInView,
        [className as string]: className,
      })}
      ref={ref}
    >
      {children}
    </div>
  );
};
