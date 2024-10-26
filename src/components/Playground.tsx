"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects, Project } from "@/data/projects";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Playground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-white dark:bg-black" />;
  }

  return (
    <div className="flex min-h-screen flex-col text-sm text-foreground transition-colors duration-300">
      <Header />
      <main className="flex-grow">
        <div className="mx-auto py-5">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
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
      className="group overflow-hidden border border-neutral-200 transition-all duration-500 hover:border-neutral-300 hover:shadow-md focus-within:ring-2 focus-within:ring-neutral-300 dark:border-neutral-800 dark:hover:border-neutral-700 dark:hover:shadow-neutral-800 dark:focus-within:ring-neutral-700"
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
          className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110 sm:h-60"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-all duration-300 group-hover:opacity-100">
          <Link
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex transform items-center space-x-1 text-sm text-white transition-transform duration-300 translate-y-1 group-hover:translate-y-0 hover:underline focus:outline-none focus:underline"
            aria-label={`View ${project.title} project`}
          >
            <span>View project</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
      <div className="p-4">
        <h2 className="mb-2 text-base font-semibold">{project.title}</h2>
        <p className="mb-3 text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">
          {project.about}
        </p>
      </div>
    </div>
  );
}
