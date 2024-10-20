"use client";

import Link from "next/link";
import { ArrowUpRight, SunIcon, MoonIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

type Project = {
  id: number;
  title: string;
  about: string;
  videoUrl: string;
  projectUrl: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Hover Footer",
    about: "An interactive footer that reveals more on hover.",
    videoUrl: "/hover-footer.mp4",
    projectUrl: "https://b_rdv3W9iBYeM.v0.build/",
  },
  {
    id: 2,
    title: "Pokemon Battle",
    about: "A Pokémon battle simulator with engaging gameplay.",
    videoUrl: "/pokemon-battle.mp4",
    projectUrl: "https://hecosh5.v0.build/",
  },
  {
    id: 3,
    title: "Ipod Classic",
    about: "A digital replica of the iPod Classic.",
    videoUrl: "/ipod-classic.mp4",
    projectUrl: "https://b_lGHev2NvKKb.v0.build/",
  },
  {
    id: 4,
    title: "Practical Typing",
    about: "A game to improve typing speed and accuracy.",
    videoUrl: "/type.mp4",
    projectUrl: "https://b_jyzi3ug3h6o.v0.build/",
  },
];

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-none shadow-none hover:bg-transparent hover:border-black dark:hover:border-white"
    >
      <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

export default function Playground() {
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-white dark:bg-black"></div>;
  }

  return (
    <div
      className={`min-h-screen bg-background text-foreground font-mono text-sm flex flex-col transition-colors duration-300`}
    >
      <header
        className={`
          sticky top-0 z-50 
          bg-background/80 backdrop-blur-sm
          border-b border-transparent
          transition-all duration-300 
          ${isScrolled ? "border-gray-200 dark:border-neutral-800" : ""}
        `}
      >
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
          <div className="text-lg font-medium tracking-tight">
            astnai/playground
          </div>
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
              className="rounded-none shadow-none hover:bg-transparent hover:border-black dark:hover:border-white"
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

      <main className="flex-grow">
        <div className="max-w-5xl mx-auto px-4 py-5 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </main>
      <footer className="mt-20 sm:mt-40 border-t border-neutral-200 dark:border-neutral-800">
        <div className="mx-auto max-w-5xl px-4 py-6 text-center text-sm text-muted-foreground sm:px-6">
          Built by{" "}
          <HoverCard>
            <HoverCardTrigger asChild>
              <span className="cursor-pointer font-medium text-foreground">
                astnai
              </span>
            </HoverCardTrigger>
            <HoverCardContent
              className="w-80 rounded-none bg-popover shadow-none"
              sideOffset={22}
            >
              <div className="flex justify-between space-x-4">
                <Avatar>
                  <AvatarImage src="https://github.com/astnai.png" />
                  <AvatarFallback>AA</AvatarFallback>
                </Avatar>
                <div className="space-y-1 text-left">
                  <h4 className="text-sm font-semibold">@astnai</h4>
                  <p className="text-sm">
                    Software Engineer from Patagonia, Argentina.
                  </p>
                  <div className="flex items-center pt-2">
                    <Button
                      className="rounded-none border border-neutral-200 bg-transparent text-neutral-800 shadow-none hover:border-black hover:bg-transparent dark:border-neutral-800 dark:bg-transparent dark:text-neutral-100 dark:hover:border-white dark:hover:bg-transparent"
                      asChild
                    >
                      <a
                        href="https://twitter.com/astnai"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Follow on Twitter
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </footer>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const handleInteraction = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div
      className="border border-neutral-200 dark:border-neutral-800 overflow-hidden transition-all duration-300 hover:border-neutral-800 dark:hover:border-neutral-50 focus-within:ring-2 focus-within:ring-neutral-300 dark:focus-within:ring-neutral-700 group"
      onClick={handleInteraction}
    >
      <div className="relative overflow-hidden">
        <video
          ref={videoRef}
          src={project.videoUrl}
          loop
          muted
          autoPlay
          playsInline
          className="w-full h-48 sm:h-60 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <Link
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-sm hover:underline focus:underline focus:outline-none flex items-center space-x-1 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300"
            aria-label={`View ${project.title} project`}
          >
            <span>View project</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-base font-semibold mb-2">{project.title}</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-xs mb-3 leading-relaxed">
          {project.about}
        </p>
      </div>
    </div>
  );
}
