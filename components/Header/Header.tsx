"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { MobileHeader } from "@/components/MobileHeader";
import data from "@/data/portfolio.json";

import NavLink from "../NavLink/NavLink";

export const Header = () => (
  <>
    <MobileHeader />

    <div className="hidden flex-row items-center justify-between sticky text-white top-0 z-10 tablet:flex bg-base-100 py-4">
      <Link
        href="/"
        className="font-medium text-6xl mb-0 cursor-pointer overflow-hidden h-[60px]"
      >
        <motion.div whileHover={{ y: -60 }}>
          <span className="flex items-center text-primary">
            {data.name}
          </span>
          <span className="flex items-center text-secondary">
            {data.name}
          </span>
        </motion.div>
      </Link>
      <div className="flex gap-6 text-2xl">
        <NavLink href="/work" hoverColour="text-primary">Work</NavLink>
        <NavLink href="/blog" hoverColour="text-accent">Blog</NavLink>
        <NavLink href="/about" hoverColour="text-secondary">About</NavLink>
        <NavLink href="/contact" hoverColour="text-info">Contact</NavLink>
      </div>
    </div>
  </>
);
