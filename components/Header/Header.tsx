import { Popover } from "@headlessui/react";
import Image from "next/legacy/image";
import Link from "next/link";

import data from "@/data/portfolio.json";

export const Header = () => (
  <>
    <Popover className="block tablet:hidden mt-5">
      {({ open }) => (
        <>
          <div className="flex items-center justify-between">
            <Link href="/">
              <h1 className="font-medium p-2 laptop:p-0 text-primary">{data.name}.</h1>
            </Link>

            <div className="flex items-center">
              <Popover.Button className="btn btn-circle">
                {!open && <Image height={24} width={24} alt="Menu" src="/images/menu-white.svg" />}
                {open && (
                  <Image height={24} width={24} alt="Cancel" src="/images/cancel-white.svg" />
                )}
              </Popover.Button>
            </div>
          </div>
          <Popover.Panel className="absolute right-4 left-4 z-10 w-11/12 p-4 bg-slate-800 shadow-md rounded-md">
            <div className="grid grid-cols-1 gap-2">
              <Link href="/work">Work</Link>
              <Link href="/about">About</Link>

              <Link href="/contact">Contact</Link>
            </div>
          </Popover.Panel>
        </>
      )}
    </Popover>

    <div className="hidden flex-row items-center justify-between sticky text-white top-0 z-10 tablet:flex bg-base-100 py-4">
      <Link href="/">
        <h1 className="font-medium text-6xl cursor-pointer text-primary">{data.name}.</h1>
      </Link>
      <div className="flex gap-6 text-2xl">
        <Link href="/work" className="hover:text-primary">
          Work
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
