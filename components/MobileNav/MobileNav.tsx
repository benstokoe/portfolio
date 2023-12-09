import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import { FiX } from "react-icons/fi";

import { MobileNavLink } from "@/components/MobileNavLink";

type MobileNavProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const navVariants = {
  open: {
    x: "0%",
    borderTopLeftRadius: "2rem",
    borderBottomLeftRadius: "2rem",
    opacity: 1,
  },
  closed: {
    x: "100%",
    borderTopLeftRadius: "50vw",
    borderBottomLeftRadius: "50vw",
    opacity: 0,
  },
};

const linkWrapperVariants = {
  open: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

export const MobileNav = ({ isOpen, setIsOpen }: MobileNavProps) => (
  <motion.nav
    className="fixed top-0 z-50 bottom-0 w-screen bg-neutral"
    animate={isOpen ? "open" : "closed"}
    variants={navVariants}
    initial="closed"
  >
    <motion.button
      className="text-xl bg-base-100 text-white p-4 rounded-full absolute top-2 right-8"
      whileHover={{ rotate: "180deg" }}
      onClick={() => setIsOpen(false)}
      whileTap={{ scale: 0.9 }}
    >
      <FiX />
    </motion.button>
    <motion.div
      variants={linkWrapperVariants}
      className="flex flex-col gap-4 absolute bottom-8 left-8 right-8"
    >
      <MobileNavLink href="/work" colour="primary">Work</MobileNavLink>
      <MobileNavLink href="/blog" colour="accent">Blog</MobileNavLink>
      <MobileNavLink href="/about" colour="secondary">About</MobileNavLink>
      <MobileNavLink href="/contact" colour="info">Contact</MobileNavLink>
    </motion.div>
  </motion.nav>
);
