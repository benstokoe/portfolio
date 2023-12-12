import { ReactNode } from "react";

import { AnimateIn } from "@/components/AnimateIn";
import { cn } from "@/utils/cn";

type HomeSliceLayoutProps = {
  title?: string;
  titleColour: string;
  children: ReactNode;
  className?: string;
};

export const HomeSliceLayout = (
  { title, titleColour, children, className }: HomeSliceLayoutProps,
) => (
  <AnimateIn>
    <div className="mt-10 laptop:mt-32">
      {title && (
        <h2 className={cn("text-4xl text-bold", titleColour)}>
          {title}
        </h2>
      )}

      <div className={cn("mt-10 w-full", className)}>
        {children}
      </div>
    </div>
  </AnimateIn>
);
