import { Popover } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

import { Button } from "@/components/Button";
import data from "@/data/portfolio.json";

type HeaderProps = {
  handleWorkScroll: () => void;
  handleAboutScroll: () => void;
};

export const Header = ({ handleWorkScroll, handleAboutScroll }: HeaderProps) => {
  const { theme, setTheme } = useTheme();

  const { name } = data;

  return (
    <>
      <Popover className="block tablet:hidden mt-5">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0">
              <Link href="/">
                <div className="flex items-center gap-0.5">
                  <Image src="/logo.svg" width={36} height={36} />
                  <h1 className="font-medium p-2 laptop:p-0 link">{name}.</h1>
                </div>
              </Link>

              <div className="flex items-center">
                {data.darkMode && (
                  <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                    <Image
                      height={24}
                      width={24}
                      src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                    />
                  </Button>
                )}

                <Popover.Button>
                  {!open && (
                    <Image
                      height={24}
                      width={24}
                      src={`/images/${theme === "dark" ? "menu-white.svg" : "menu.svg"}`}
                    />
                  )}
                  {open && (
                    <Image
                      height={24}
                      width={24}
                      src={`/images/${theme === "light" ? "cancel.svg" : "cancel-white.svg"}`}
                    />
                  )}
                </Popover.Button>
              </div>
            </div>
            <Popover.Panel
              className={`absolute right-0 z-10 w-11/12 p-4 ${
                theme === "dark" ? "bg-slate-800" : "bg-white"
              } shadow-md rounded-md`}
            >
              <div className="grid grid-cols-1">
                <Button onClick={handleWorkScroll}>Work</Button>
                <Button onClick={handleAboutScroll}>About</Button>

                <Button onClick={() => window.open("mailto:hello@chetanverma.com")}>Contact</Button>
              </div>
            </Popover.Panel>
          </>
        )}
      </Popover>
      <div
        className={`mt-10 hidden flex-row items-center justify-between sticky ${
          theme === "light" && "bg-white"
        } dark:text-white top-0 z-10 tablet:flex`}
      >
        <Link href="/">
          <div className="flex items-center gap-4">
            <Image src="/logo.svg" width={64} height={64} />
            <h1 className="font-medium text-2xl cursor-pointer mob:p-2 laptop:p-0">{name}.</h1>
          </div>
        </Link>
        <div className="flex">
          <Button onClick={handleWorkScroll}>Work</Button>
          <Button onClick={handleAboutScroll}>About</Button>

          <Button onClick={() => window.open("mailto:hello@chetanverma.com")}>Contact</Button>
          {theme && data.darkMode && (
            <Button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              classes="relative"
            >
              <Image
                height={24}
                width={24}
                src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
              />
            </Button>
          )}
        </div>
      </div>
    </>
  );
};
