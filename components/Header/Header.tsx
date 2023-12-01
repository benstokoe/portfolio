import Link from "next/link";

import { MobileHeader } from "@/components/MobileHeader";
import data from "@/data/portfolio.json";

export const Header = () => (
  <>
    <MobileHeader />

    <div className="hidden flex-row items-center justify-between sticky text-white top-0 z-10 tablet:flex bg-base-100 py-4">
      <Link href="/" className="font-medium text-6xl mb-0 cursor-pointer text-primary">
        {data.name}.
      </Link>
      <div className="flex gap-6 text-2xl">
        <Link href="/work" className="hover:text-primary">
          Work
        </Link>
        <Link href="/blog" className="hover:text-accent">
          Blog
        </Link>
        <Link href="/about" className="hover:text-secondary">
          About
        </Link>
        <Link href="/contact" className="hover:text-accent">
          Contact
        </Link>
      </div>
    </div>
  </>
);
