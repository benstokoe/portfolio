import { motion } from "framer-motion";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import site from "@/data/site.json";

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
    transition: { delayChildren: 0.3, staggerChildren: 0.1 },
  },
  closed: {
    transition: { when: "afterChildren", staggerChildren: 0.1 },
  },
};

const navLinkVariants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: -10 },
};

const links: { href: string; label: string; colour: string }[] = [
  { href: "/work", label: "Work", colour: "text-primary" },
  { href: "/blog", label: "Blog", colour: "text-accent" },
  { href: "/about", label: "About", colour: "text-secondary" },
  { href: "/contact", label: "Contact", colour: "text-info" },
];

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container flex items-center justify-between my-2 tablet:hidden">
      <a href="/" className="font-medium text-3xl text-primary">
        {site.name}.
      </a>

      <motion.button
        whileHover={{ rotate: "180deg" }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="text-xl bg-neutral text-white p-4 rounded-full"
        aria-label="Open Menu"
      >
        <FiMenu />
      </motion.button>

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
          aria-label="Close Menu"
        >
          <FiX />
        </motion.button>

        <motion.div
          variants={linkWrapperVariants}
          className="flex flex-col gap-4 absolute bottom-8 left-8 right-8"
        >
          {links.map(({ href, label, colour }) => (
            <a href={href} key={href}>
              <motion.span
                className={`block z-10 ${colour} font-black text-3xl text-right`}
                variants={navLinkVariants}
              >
                {label}
              </motion.span>
            </a>
          ))}
        </motion.div>
      </motion.nav>
    </div>
  );
};

export default MobileHeader;
