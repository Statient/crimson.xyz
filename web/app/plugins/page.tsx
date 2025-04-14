"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Download, Plus, Search, Star, Tag, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample plugin data
const PLUGINS = [
  {
    id: 1,
    name: "MultiAPI",
    description: "Advanced multi-tooling API for cross-game compatibility",
    version: "v2.1.3",
    size: "1.2 MB",
    categories: ["API", "Multi-tool", "Utility"],
    downloads: 8742,
    premium: false,
    new: false,
    exclusive: false,
  },
  {
    id: 2,
    name: "ScriptOptimizer",
    description: "Automatically optimizes scripts for better performance",
    version: "v1.5.0",
    size: "0.8 MB",
    categories: ["Optimization", "Performance"],
    downloads: 5621,
    premium: false,
    new: false,
    exclusive: false,
  },
  {
    id: 3,
    name: "SecureExecute",
    description: "Enhanced security features to minimize detection",
    version: "v3.0.2",
    size: "2.1 MB",
    categories: ["Security", "Anti-detection"],
    downloads: 12453,
    premium: true,
    new: false,
    exclusive: false,
  },
  {
    id: 4,
    name: "GameAnalyzer",
    description: "Analyzes game code to find vulnerabilities",
    version: "v1.2.8",
    size: "1.5 MB",
    categories: ["Analysis", "Security"],
    downloads: 7321,
    premium: true,
    new: false,
    exclusive: false,
  },
  {
    id: 5,
    name: "AutoInject",
    description: "Automatically injects scripts when games start",
    version: "v2.0.1",
    size: "0.6 MB",
    categories: ["Automation", "Utility"],
    downloads: 9876,
    premium: false,
    new: true,
    exclusive: true,
  },
  {
    id: 6,
    name: "MemoryBypass",
    description: "Advanced memory manipulation for bypassing game restrictions",
    version: "v3.1.0",
    size: "1.8 MB",
    categories: ["Memory", "Bypass", "Advanced"],
    downloads: 15432,
    premium: true,
    new: true,
    exclusive: true,
  },
  {
    id: 7,
    name: "ScriptHub+",
    description: "Enhanced script hub with premium scripts and auto-updates",
    version: "v2.2.4",
    size: "2.5 MB",
    categories: ["Scripts", "Hub", "Premium"],
    downloads: 11234,
    premium: true,
    new: false,
    exclusive: false,
  },
  {
    id: 8,
    name: "DeepScan",
    description: "Deep scanning of game memory for advanced exploits",
    version: "v1.0.2",
    size: "1.7 MB",
    categories: ["Memory", "Scanning", "Advanced"],
    downloads: 4321,
    premium: false,
    new: true,
    exclusive: true,
  },
]

export default function PluginsPage() {
  const [mounted, setMounted] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [category, setCategory] = useState("all")
  const [filter, setFilter] = useState("all")
  const particlesRef = useRef<HTMLCanvasElement>(null)

  // Particle animation
  useEffect(() => {
    if (!particlesRef.current) return

    const canvas = particlesRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Particle properties
    const particles: {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
    }[] = []

    // Create particles
    const createParticles = () => {
      const particleCount = Math.floor(window.innerWidth / 10)

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: Math.random() * 0.5 - 0.25,
          speedY: Math.random() * 0.5 - 0.25,
          opacity: Math.random() * 0.5 + 0.1,
        })
      }
    }

    createParticles()

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(200, 230, 255, ${particle.opacity})`
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [particlesRef])

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // Filter plugins
  const filteredPlugins = PLUGINS.filter((plugin) => {
    const matchesSearch =
      plugin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plugin.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plugin.categories.some((cat) => cat.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesCategory =
      category === "all" || plugin.categories.some((cat) => cat.toLowerCase() === category.toLowerCase())

    const matchesFilter =
      filter === "all" ||
      (filter === "premium" && plugin.premium) ||
      (filter === "free" && !plugin.premium) ||
      (filter === "new" && plugin.new) ||
      (filter === "exclusive" && plugin.exclusive)

    return matchesSearch && matchesCategory && matchesFilter
  })

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Ice particle background */}
      <canvas ref={particlesRef} className="absolute inset-0 z-0 opacity-40" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/40 to-black/80" />

      {/* Main content */}
      <div className="relative z-10 min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <div className="flex items-center mb-8">
            <Link href="/" className="mr-4">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-black/30 backdrop-blur-md hover:bg-black/50"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-4xl font-bold">Plugins</h1>
          </div>

          <div className="backdrop-blur-md bg-black/30 rounded-xl border border-gray-800 p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                <Input
                  placeholder="Search plugins..."
                  className="pl-10 bg-black/50 border-gray-700"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="flex gap-2 w-full md:w-auto">
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger className="w-[140px] bg-black/50 border-gray-700">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-900 border-gray-700">
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="api">API</SelectItem>
                    <SelectItem value="utility">Utility</SelectItem>
                    <SelectItem value="security">Security</SelectItem>
                    <SelectItem value="performance">Performance</SelectItem>
                    <SelectItem value="automation">Automation</SelectItem>
                  </SelectContent>
                </Select>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-black/50 border border-gray-700 hover:bg-black/70">
                      <Upload className="mr-2 h-4 w-4" />
                      Upload
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-gray-900/90 backdrop-blur-lg border border-gray-800">
                    <DialogHeader>
                      <DialogTitle>Upload Plugin</DialogTitle>
                      <DialogDescription>Share your plugin with the Crimson community.</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid gap-2">
                        <Label htmlFor="plugin-name">Plugin Name</Label>
                        <Input id="plugin-name" className="bg-gray-800 border-gray-700" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="plugin-description">Description</Label>
                        <Input id="plugin-description" className="bg-gray-800 border-gray-700" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="plugin-version">Version</Label>
                        <Input id="plugin-version" className="bg-gray-800 border-gray-700" placeholder="v1.0.0" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="plugin-file">Plugin File</Label>
                        <div className="border-2 border-dashed border-gray-700 rounded-md p-6 flex flex-col items-center justify-center">
                          <Plus className="h-8 w-8 text-gray-500 mb-2" />
                          <p className="text-sm text-gray-400 mb-1">Drag and drop your plugin file here</p>
                          <p className="text-xs text-gray-500">or</p>
                          <Button variant="outline" size="sm" className="mt-2 border-gray-700">
                            Browse Files
                          </Button>
                        </div>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button className="bg-gray-800 hover:bg-gray-700 border border-gray-700">Upload Plugin</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            <div className="mt-4">
              <Tabs defaultValue="all" onValueChange={setFilter}>
                <TabsList className="bg-black/50 backdrop-blur-md">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="premium">Premium</TabsTrigger>
                  <TabsTrigger value="free">Free</TabsTrigger>
                  <TabsTrigger value="new">New</TabsTrigger>
                  <TabsTrigger value="exclusive">Exclusive</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPlugins.map((plugin) => (
              <motion.div
                key={plugin.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="backdrop-blur-md bg-black/30 rounded-xl border border-gray-800 overflow-hidden hover:border-gray-700 transition-all duration-300"
              >
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">{plugin.name}</h3>
                    <div className="flex gap-1">
                      {plugin.premium && <Badge className="bg-gray-800 text-xs">Premium</Badge>}
                      {plugin.new && <Badge className="bg-blue-900/70 text-xs">NEW</Badge>}
                      {plugin.exclusive && <Badge className="bg-purple-900/70 text-xs">EXCLUSIVE</Badge>}
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm mb-3">{plugin.description}</p>

                  <div className="flex items-center justify-between mb-3 text-xs text-gray-500">
                    <span>{plugin.version}</span>
                    <span>{plugin.size}</span>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {plugin.categories.map((category, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-gray-700">
                        {category}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between bg-black/50 px-5 py-3 border-t border-gray-800">
                  <div className="flex items-center text-xs text-gray-400">
                    <Download className="h-3 w-3 mr-1" />
                    {plugin.downloads.toLocaleString()}
                  </div>
                  <Button size="sm" className="bg-gray-800 hover:bg-gray-700 text-xs">
                    Download
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 backdrop-blur-md bg-black/30 rounded-xl border border-gray-800 p-6">
            <div className="flex items-center mb-4">
              <Star className="h-5 w-5 text-blue-400 mr-2" />
              <h2 className="text-xl font-bold">Exclusive Features</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-black/50 rounded-lg border border-gray-800 p-4">
                <h3 className="font-medium mb-2 flex items-center">
                  <Tag className="h-4 w-4 text-blue-400 mr-2" />
                  Memory Manipulation
                </h3>
                <p className="text-sm text-gray-400">
                  Advanced memory manipulation capabilities not available in any other executor. Bypass game
                  restrictions with ease.
                </p>
              </div>

              <div className="bg-black/50 rounded-lg border border-gray-800 p-4">
                <h3 className="font-medium mb-2 flex items-center">
                  <Tag className="h-4 w-4 text-blue-400 mr-2" />
                  Auto-Injection
                </h3>
                <p className="text-sm text-gray-400">
                  Automatically inject scripts when games start. Save time and automate your workflow.
                </p>
              </div>

              <div className="bg-black/50 rounded-lg border border-gray-800 p-4">
                <h3 className="font-medium mb-2 flex items-center">
                  <Tag className="h-4 w-4 text-blue-400 mr-2" />
                  Deep Scanning
                </h3>
                <p className="text-sm text-gray-400">
                  Scan game memory at a deeper level than other executors, finding exploits others miss.
                </p>
              </div>

              <div className="bg-black/50 rounded-lg border border-gray-800 p-4">
                <h3 className="font-medium mb-2 flex items-center">
                  <Tag className="h-4 w-4 text-blue-400 mr-2" />
                  Cross-Game API
                </h3>
                <p className="text-sm text-gray-400">
                  Use the same scripts across multiple games with our unique cross-game compatibility layer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
