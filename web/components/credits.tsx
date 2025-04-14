"use client"

import { motion } from "framer-motion"
import { Github, Twitter, Globe, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TeamMember {
  name: string
  role: string
  avatar: string
  social: {
    github?: string
    twitter?: string
    website?: string
  }
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Alex Mercer",
    role: "Lead Developer",
    avatar: "/placeholder.svg?height=100&width=100",
    social: {
      github: "https://github.com",
      twitter: "https://twitter.com",
      website: "https://example.com",
    },
  },
  {
    name: "Sarah Chen",
    role: "UI/UX Designer",
    avatar: "/placeholder.svg?height=100&width=100",
    social: {
      github: "https://github.com",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "Marcus Johnson",
    role: "Script Engine Developer",
    avatar: "/placeholder.svg?height=100&width=100",
    social: {
      github: "https://github.com",
      website: "https://example.com",
    },
  },
  {
    name: "Olivia Rodriguez",
    role: "Security Specialist",
    avatar: "/placeholder.svg?height=100&width=100",
    social: {
      github: "https://github.com",
      twitter: "https://twitter.com",
    },
  },
]

export default function Credits() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold mb-2">Meet Our Team</h3>
        <p className="text-gray-400">
          Crimson is made possible by these talented individuals who work tirelessly to create the best script executor
          available.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {TEAM_MEMBERS.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 p-4 flex flex-col items-center text-center hover:border-gray-600 transition-all duration-300"
          >
            <div className="w-20 h-20 rounded-full overflow-hidden mb-4 ring-1 ring-gray-600">
              <img src={member.avatar || "/placeholder.svg"} alt={member.name} className="w-full h-full object-cover" />
            </div>
            <h4 className="font-semibold">{member.name}</h4>
            <p className="text-sm text-gray-400 mb-4">{member.role}</p>
            <div className="flex gap-2 mt-auto">
              {member.social.github && (
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-8 w-8 rounded-full hover:text-gray-300 hover:bg-gray-700/50"
                >
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Button>
              )}
              {member.social.twitter && (
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-8 w-8 rounded-full hover:text-gray-300 hover:bg-gray-700/50"
                >
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </Button>
              )}
              {member.social.website && (
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-8 w-8 rounded-full hover:text-gray-300 hover:bg-gray-700/50"
                >
                  <Globe className="h-4 w-4" />
                  <span className="sr-only">Website</span>
                </Button>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <h3 className="text-xl font-semibold mb-4">Special Thanks</h3>
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg border border-gray-700 p-6 max-w-2xl mx-auto">
          <p className="text-gray-300 mb-4">
            We would like to extend our gratitude to the open-source community and all the contributors who have helped
            make Crimson possible.
          </p>
          <div className="flex justify-center">
            <Button
              variant="outline"
              className="border-gray-600 hover:border-red-500/50 hover:bg-gray-800/50 flex items-center gap-2"
            >
              <Heart className="h-4 w-4 text-red-500" />
              Support the Project
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
