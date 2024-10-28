"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDarkTheme = theme === 'dark' || (theme === 'system' && isSystemDark);

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(isDarkTheme ? "light" : "dark")}
      className="overflow-hidden rounded-sm border border-neutral-200 bg-transparent transition-all duration-200 shadow-none dark:border-neutral-700 hover:shadow-sm sm:hover:border-neutral-300 sm:hover:bg-transparent sm:hover:shadow-sm sm:dark:hover:border-neutral-600 sm:dark:hover:shadow-neutral-800"
    >
      <SunIcon className={`h-[1.2rem] w-[1.2rem] transition-all ${isDarkTheme ? 'rotate-90 scale-0' : 'rotate-0 scale-100'}`} />
      <MoonIcon className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${isDarkTheme ? 'rotate-0 scale-100' : '-rotate-90 scale-0'}`} />
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
            className="overflow-hidden rounded-sm border border-neutral-200 bg-transparent transition-all duration-200 shadow-none dark:border-neutral-700 hover:shadow-sm sm:hover:border-neutral-300 sm:hover:bg-transparent sm:hover:shadow-sm sm:dark:hover:border-neutral-600 sm:dark:hover:shadow-neutral-800"
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
