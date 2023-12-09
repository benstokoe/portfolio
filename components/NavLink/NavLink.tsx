import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

type NavLinkProps = {
  children: ReactNode;
  href: string;
  hoverColour?: string;
};

const NavLink = ({ children, href, hoverColour }: NavLinkProps) => (
  <Link href={href} className="overflow-hidden h-8">
    <motion.div whileHover={{ y: -32 }}>
      <span className="flex items-center">
        {children}
      </span>
      <span className={`flex items-center ${hoverColour}`}>
        {children}
      </span>
    </motion.div>
  </Link>
);

export default NavLink;
