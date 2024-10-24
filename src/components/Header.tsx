"use client";

import Link from "next/link";
import { SunIcon, MoonIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-none shadow-none hover:bg-transparent hover:border-black dark:hover:border-white transition-all duration-300"
    >
      <SunIcon className="h-[1.2rem] w-[1.2rem] transition-all rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] transition-all rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

interface HeaderProps {
  isScrolled: boolean;
}

export function Header({ isScrolled }: HeaderProps) {
  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 bg-background/80 backdrop-blur-sm border-b border-transparent ${
        isScrolled ? "border-gray-200 dark:border-neutral-800" : ""
      }`}
    >
      <div className="flex items-center justify-between max-w-6xl px-4 py-4 mx-auto sm:px-6">
        <Link
          href="https://agustinarias.com"
          className="text-lg font-medium tracking-normal group"
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
            className="rounded-none shadow-none hover:bg-transparent hover:border-black dark:hover:border-white transition-all duration-300"
          >
            <svg
              className="w-3 h-3 fill-current"
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
