"use client";

import { Popover } from "@headlessui/react";
import Image from "next/legacy/image";
import Link from "next/link";

import data from "@/data/portfolio.json";

export const MobileHeader = () => (
  <Popover className="block tablet:hidden mt-5">
    {({ open }) => (
      <>
        <div className="flex items-center justify-between">
          <Link href="/" className="font-medium p-2 laptop:p-0 text-primary">
            {data.name}.
          </Link>

          <div className="flex items-center">
            <Popover.Button className="btn btn-circle">
              {!open && <Image height={24} width={24} alt="Menu" src="/images/menu-white.svg" />}
              {open && <Image height={24} width={24} alt="Cancel" src="/images/cancel-white.svg" />}
            </Popover.Button>
          </div>
        </div>
        <Popover.Panel className="absolute right-4 left-4 z-10 w-11/12 p-4 bg-slate-800 shadow-md rounded-md">
          <div className="grid grid-cols-1 gap-2">
            <Link href="/work">Work.</Link>
            <Link href="/blog">Blog.</Link>
            <Link href="/about">About.</Link>
            <Link href="/contact">Contact.</Link>
          </div>
        </Popover.Panel>
      </>
    )}
  </Popover>
);
