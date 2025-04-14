"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, FileCode, Download, Star, Clock } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample script data
const SCRIPTS = [
  {
    id: 1,
    title: "Admin Commands",
    description: "Powerful admin commands for game management",
    category: "Admin",
    downloads: 12453,
    rating: 4.8,
    date: "2025-03-15",
    tags: ["admin", "commands", "popular"],
  },
  {
    id: 2,
    title: "ESP Overlay",
    description: "See players and items through walls with customizable colors",
    category: "Visual",
    downloads: 8932,
    rating: 4.5,
    date: "2025-03-20",
    tags: ["esp", "visual", "overlay"],
  },
  {
    id: 3,
    title: "Auto Farm",
    description: "Automated resource gathering and farming",
    category: "Automation",
    downloads: 15678,
    rating: 4.9,
    date: "2025-03-10",
    tags: ["farm", "automation", "resources"],
  },
  {
    id: 4,
    title: "Teleport GUI",
    description: "Easy teleportation to any location with saved waypoints",
    category: "Movement",
    downloads: 7654,
    rating: 4.3,
    date: "2025-03-25",
    tags: ["teleport", "movement", "gui"],
  },
  {
    id: 5,
    title: "Item Spawner",
    description: "Spawn any item in the game with customizable properties",
    category: "Items",
    downloads: 9876,
    rating: 4.7,
    date: "2025-03-18",
    tags: ["items", "spawn", "customization"],
  },
  {
    id: 6,
    title: "Anti-Ban Protection",
    description: "Advanced protection against detection and banning",
    category: "Security",
    downloads: 21345,
    rating: 4.9,
    date: "2025-03-05",
    tags: ["security", "protection", "anti-ban"],
  },
]

export default function ScriptHub() {
  const [searchTerm, setSearchTerm] = useState("")
  const [category, setCategory] = useState("all")
  const [sortBy, setSortBy] = useState("popular")

  // Filter and sort scripts
  const filteredScripts = SCRIPTS.filter((script) => {
    const matchesSearch =
      script.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      script.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      script.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesCategory = category === "all" || script.category.toLowerCase() === category.toLowerCase()

    return matchesSearch && matchesCategory
  }).sort((a, b) => {
    if (sortBy === "popular") return b.downloads - a.downloads
    if (sortBy === "rating") return b.rating - a.rating
    if (sortBy === "newest") return new Date(b.date).getTime() - new Date(a.date).getTime()
    return 0
  })

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
          <Input
            placeholder="Search scripts..."
            className="pl-10 bg-gray-800 border-gray-700"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex gap-2 w-full md:w-auto">
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-[140px] bg-gray-800 border-gray-700">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-700">
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="admin">Admin</SelectItem>
              <SelectItem value="visual">Visual</SelectItem>
              <SelectItem value="automation">Automation</SelectItem>
              <SelectItem value="movement">Movement</SelectItem>
              <SelectItem value="items">Items</SelectItem>
              <SelectItem value="security">Security</SelectItem>
            </SelectContent>
          </Select>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[140px] bg-gray-800 border-gray-700">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-700">
              <SelectItem value="popular">Most Popular</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredScripts.length > 0 ? (
          filteredScripts.map((script) => (
            <motion.div
              key={script.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 p-4 hover:border-gray-600 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg flex items-center">
                  <FileCode className="h-5 w-5 mr-2 text-gray-400" />
                  {script.title}
                </h3>
                <Badge className="bg-gray-700">{script.category}</Badge>
              </div>
              <p className="text-gray-400 text-sm mb-3">{script.description}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {script.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="text-xs border-gray-600">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4 text-xs text-gray-400">
                  <span className="flex items-center">
                    <Download className="h-3 w-3 mr-1" />
                    {script.downloads.toLocaleString()}
                  </span>
                  <span className="flex items-center">
                    <Star className="h-3 w-3 mr-1 text-gray-300" />
                    {script.rating}
                  </span>
                  <span className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {new Date(script.date).toLocaleDateString()}
                  </span>
                </div>
                <Button size="sm" className="bg-gray-700 hover:bg-gray-600 text-xs">
                  Download
                </Button>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="col-span-2 text-center py-10 text-gray-400">
            No scripts found matching your search criteria.
          </div>
        )}
      </div>
    </div>
  )
}
