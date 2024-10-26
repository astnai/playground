"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="overflow-hidden rounded-none border border-neutral-200 bg-transparent transition-all duration-500 hover:border-neutral-300 hover:bg-trasnparent hover:shadow-md dark:border-neutral-800 dark:bg-transparent dark:hover:border-neutral-700 dark:hover:bg-transparent dark:hover:shadow-neutral-800"
    >
      <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm transition-all duration-300">
      <div className="flex items-center justify-between py-4">
        <Link
          href="https://agustinarias.com"
          className="group text-lg font-medium tracking-normal"
        >
          <span className="group-hover:underline">astnai</span>/playground
        </Link>
        <div className="flex items-center space-x-2 sm:space-x-4">
          <ThemeToggle />
          <Button
            variant="outline"
            size="icon"
            onClick={() =>
              window.open(
                "https://x.com/astnai",
                "_blank",
                "noopener,noreferrer"
              )
            }
            className="overflow-hidden rounded-none border border-neutral-200 bg-transparent transition-all duration-500 hover:border-neutral-300 hover:bg-trasnparent hover:shadow-md dark:border-neutral-800 dark:hover:border-neutral-700 dark:hover:shadow-neutral-800"
          >
            <svg
              className="h-3 w-3 fill-current"
              height="23"
              viewBox="0 0 1200 1227"
              width="23"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"></path>
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
}
