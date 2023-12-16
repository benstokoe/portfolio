"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";

import { MobileNav } from "@/components/MobileNav";
import data from "@/data/portfolio.json";

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container flex items-center justify-between my-2 tablet:hidden">
      <Link
        href="/"
        className="font-medium text-3xl text-primary"
      >
        {data.name}.
      </Link>

      <motion.button
        whileHover={{ rotate: "180deg" }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="text-xl bg-neutral text-white p-4 rounded-full"
        aria-label="Open Menu"
      >
        <FiMenu />
      </motion.button>

      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default MobileHeader;
