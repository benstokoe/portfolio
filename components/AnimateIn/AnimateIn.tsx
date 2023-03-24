import clsx from "clsx";
import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

type AnimateInProps = {
  children: ReactNode;
};

export const AnimateIn = ({ children }: AnimateInProps) => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <div
      className={clsx("transition-all duration-500", {
        "opacity-100": inView,
        "opacity-0": !inView,
      })}
      ref={ref}
    >
      {children}
    </div>
  );
};
