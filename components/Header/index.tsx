import dynamic from "next/dynamic";
import Link from "next/link";

import { NavLink } from "@/components/NavLink";
import data from "@/data/portfolio.json";

const MobileHeader = dynamic(() => import("@/components/MobileHeader"), {
  ssr: false,
});

export const Header = () => (
  <>
    <MobileHeader />

    <div className="hidden flex-row items-center justify-between sticky text-white top-0 z-10 tablet:flex bg-base-100 py-4">
      <Link
        href="/"
        className="font-medium text-6xl mb-0 cursor-pointer text-primary"
      >
        {data.name}
      </Link>
      <div className="flex gap-6 text-2xl">
        <NavLink href="/work" className="hover:text-primary">Work</NavLink>
        <NavLink href="/blog" className="hover:text-accent">Blog</NavLink>
        <NavLink href="/about" className="hover:text-secondary">About</NavLink>
        <NavLink href="/contact" className="hover:text-info">Contact</NavLink>
      </div>
    </div>
  </>
);
