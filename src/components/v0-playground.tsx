"use client"


import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState, useRef } from "react"

type Project = {
  id: number
  title: string
  about: string
  technologies: string[]
  videoUrl: string 
  projectUrl: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "ASCII webcam",
    about: "A webcam that displays ASCII format of the video.",
    technologies: ["Next.js", "react-webcam", "ASCII"],
    videoUrl: "/ascii-webcam.mp4",
    projectUrl: "https://jrd80rp.v0.build",
  },
  {
    id: 2,
    title: "Pokemon Battle",
    about: "A pokemon battle simulator with music.",
    technologies: ["Next.js", "TypeScript", "Pokemon"],
    videoUrl: "/pokemon-battle.mp4",
    projectUrl: "https://hecosh5.v0.build/",
  },
  {
    id: 3,
    title: "Ipod Classic",
    about: "A replica of the iPod Classic.",
    technologies: ["Next.js", "TypeScript", "TailwindCSS"],
    videoUrl: "/ipod-classic.mp4",
    projectUrl: "https://b_lGHev2NvKKb.v0.build/",
  },
  {
    id: 4,
    title: "Practical typing",
    about: "A typing game.",
    technologies: ["Next.js", "TypeScript", "TailwindCSS"],
    videoUrl: "/type.mp4",
    projectUrl: "https://b_NpmscEPRAKT.v0.build/",
  },
  {
    id: 5,
    title: "Ipod Classic",
    about: "A replica of the iPod Classic.",
    technologies: ["Next.js", "TypeScript", "TailwindCSS"],
    videoUrl: "/ipod-classic.mp4",
    projectUrl: "https://b_lGHev2NvKKb.v0.build/",
  },
  {
    id: 6,
    title: "Login page",
    about: "A login page.",
    technologies: ["Next.js", "TypeScript", "TailwindCSS"],
    videoUrl: "/login-three.mp4",
    projectUrl: "https://b_4g99OUf.v0.build/",
  },
  {
    id: 7,
    title: "Ipod Classic",
    about: "A replica of the iPod Classic.",
    technologies: ["Next.js", "TypeScript", "TailwindCSS"],
    videoUrl: "/ipod-classic.mp4",
    projectUrl: "https://b_lGHev2NvKKb.v0.build/",
  },
  {
    id: 8,
    title: "Login page",
    about: "A login page.",
    technologies: ["Next.js", "TypeScript", "TailwindCSS"],
    videoUrl: "/login-three.mp4",
    projectUrl: "https://b_4g99OUf.v0.build/",
  },
];

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (theme === undefined) {
      setTheme('system')
    }
  }, [])

  if (!mounted) return null

  const cycleTheme = () => {
    if (theme === 'system') setTheme('light')
    else if (theme === 'light') setTheme('dark')
    else setTheme('system')
  }

  return (
    <button 
      onClick={cycleTheme} 
      onMouseDown={(e) => e.preventDefault()}
      className="text-sm text-neutral-600 dark:text-neutral-400 hover:underline focus:outline-none focus:ring-0 rounded-sm transition-all duration-300"
      aria-label="Toggle color theme"
    >
      {theme === 'system' ? 'System' : theme === 'light' ? 'Light' : 'Dark'}
    </button>
  )
}

export function V0Playground() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="min-h-screen bg-white dark:bg-black"></div>
  }

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'} font-mono text-sm flex flex-col transition-colors duration-300`}>
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 py-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </main>
      <footer className="py-4 text-center text-neutral-600 dark:text-neutral-400 text-sm flex justify-center items-center space-x-2">
        <span>
          built by{' '}
          <Link href="https://astnai.com" className="hover:underline">
            astnai
          </Link>
          {' '}and{' '}
          <Link href="https://v0.dev" className="hover:underline">
            v0
          </Link>
        </span>
        <span>|</span>
        <ThemeToggle />
      </footer>
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.pause()
    }
  }

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.play()
    }
  }

  return (
    <div 
      className="border border-neutral-200 dark:border-neutral-800 overflow-hidden transition-all duration-300 hover:border-neutral-800 dark:hover:border-neutral-50 focus-within:ring-2 focus-within:ring-neutral-300 dark:focus-within:ring-neutral-700 group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative overflow-hidden">
        <video
          ref={videoRef}
          src={project.videoUrl}
          loop
          muted
          autoPlay
          playsInline
          className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110"
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
        <p className="text-neutral-600 dark:text-neutral-400 text-xs mb-3 leading-relaxed">{project.about}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="bg-neutral-800 dark:bg-neutral-50 text-neutral-50 dark:text-neutral-800 text-xs px-2 py-1 transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
