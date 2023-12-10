import Link from "next/link";
import { ReactNode } from "react";

type NavLinkProps = {
  children: ReactNode;
  href: string;
  className?: string;
};

export const NavLink = ({ children, href, className }: NavLinkProps) => (
  <Link
    href={href}
    className={`${className} transition-colors`}
  >
    {children}
  </Link>
);
