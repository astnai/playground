"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

type Project = {
  id: number
  title: string
  about: string
  technologies: string[]
  imageUrl: string
  projectUrl: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "3D Flag",
    about: "A modern chat interface with AI-powered responses.",
    technologies: ["Three.js", "TypeScript", "web"],
    imageUrl: "/3d-flag.png",
    projectUrl: "https://hecosh5.v0.build/",
  },
  {
    id: 2,
    title: "3D Product Viewer",
    about: "Interactive 3D product viewer for e-commerce.",
    technologies: ["Three.js", "WebGL", "Next.js"],
    imageUrl: "/placeholder.svg?height=300&width=400",
    projectUrl: "https://example.com/3d-viewer",
  },
  {
    id: 3,
    title: "Crypto Dashboard",
    about: "Real-time cryptocurrency tracking dashboard.",
    technologies: ["React", "D3.js", "Cryptocurrency API"],
    imageUrl: "/placeholder.svg?height=300&width=400",
    projectUrl: "https://example.com/crypto-dashboard",
  },
  {
    id: 4,
    title: "AR Business Card",
    about: "Augmented reality business card creator.",
    technologies: ["AR.js", "Three.js", "Vue.js"],
    imageUrl: "/placeholder.svg?height=300&width=400",
    projectUrl: "https://example.com/ar-business-card",
  },
];

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (!theme) {
      setTheme('system')
    }
  }, [theme, setTheme])

  if (!mounted) return null

  const cycleTheme = () => {
    if (theme === 'system') setTheme('light')
    else if (theme === 'light') setTheme('dark')
    else setTheme('system')
  }

  return (
    <button 
      onClick={cycleTheme} 
      className="text-[10px] text-gray-600 dark:text-gray-400 hover:underline focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-700 rounded-sm transition-all duration-300"
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
        <div className="max-w-4xl mx-auto px-4 py-12">
          <header className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-4">v0 playground</h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto leading-relaxed">
              v0 is my experimental playground where I develop mini-demos in my free time and share them through this page.
            </p>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="border border-gray-200 dark:border-gray-800 rounded-md overflow-hidden transition-all duration-300 hover:border-gray-300 dark:hover:border-gray-700 focus-within:ring-2 focus-within:ring-gray-300 dark:focus-within:ring-gray-700 group"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Link 
                      href={project.projectUrl}
                      className="text-white text-xs hover:underline focus:underline focus:outline-none flex items-center space-x-1 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300"
                      aria-label={`View ${project.title} project`}
                    >
                      <span>View project</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
                <div className="p-4">
                  <h2 className="text-base font-semibold mb-2">{project.title}</h2>
                  <p className="text-gray-600 dark:text-gray-400 text-xs mb-3 leading-relaxed">{project.about}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded-sm transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <footer className="py-4 text-center text-gray-600 dark:text-gray-400 text-[10px] flex justify-center items-center space-x-2">
        <span>built by astnai and v0</span>
        <span>|</span>
        <ThemeToggle />
      </footer>
    </div>
  )
}