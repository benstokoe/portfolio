import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

const navLinkVariants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: -10 },
};

type MobileNavLinkProps = {
  children: ReactNode;
  href: string;
  colour: string;
};

export const MobileNavLink = (
  { children, href, colour }: MobileNavLinkProps,
) => (
  <Link href={href}>
    <motion.span
      className={`block z-10 text-${colour} font-black text-3xl text-right`}
      variants={navLinkVariants}
    >
      {children}
    </motion.span>
  </Link>
);
