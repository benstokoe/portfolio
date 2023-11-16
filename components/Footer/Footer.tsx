import { AnimateIn } from "@/components/AnimateIn";
import { Contact } from "@/components/Contact";

export const Footer = () => (
  <div className="mt-40">
    <h1 className="text-4xl text-bold text-accent">Contact.</h1>

    <AnimateIn>
      <Contact />
    </AnimateIn>
  </div>
);
