"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Apple,
  Check,
  Download,
  Gamepad2,
  Laptop,
  Lock,
  Smartphone,
  Sparkles,
  TabletSmartphone,
  HeadsetIcon as VrHeadset,
  ComputerIcon as Windows,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Platform {
  id: string
  name: string
  icon: React.ReactNode
  description: string
  features: string[]
  requirements: string
  version: string
  size: string
  exclusive: boolean
  superExclusive: boolean
  comingSoon?: boolean
}

const platforms: Platform[] = [
  {
    id: "windows",
    name: "Windows",
    icon: <Windows className="h-5 w-5" />,
    description: "The full-featured Crimson executor for Windows with all capabilities and optimizations.",
    features: [
      "Full script execution with all APIs",
      "Memory manipulation and injection",
      "Auto-update and script management",
      "Game detection and compatibility layer",
      "Advanced debugging tools",
    ],
    requirements: "Windows 10/11 64-bit, 8GB RAM, .NET Framework 4.8",
    version: "v3.0.1",
    size: "24.8 MB",
    exclusive: false,
    superExclusive: false,
  },
  {
    id: "android",
    name: "Android",
    icon: <Smartphone className="h-5 w-5" />,
    description: "Mobile-optimized version of Crimson for Android devices with touch-friendly interface.",
    features: [
      "Mobile-optimized script execution",
      "Touch-friendly UI with gesture controls",
      "Background execution mode",
      "Script repository access",
      "Reduced resource usage for mobile devices",
    ],
    requirements: "Android 9.0+, 4GB RAM, ARM64 processor",
    version: "v2.8.5",
    size: "18.2 MB",
    exclusive: false,
    superExclusive: false,
  },
  {
    id: "macos",
    name: "Mac OS",
    icon: <Apple className="h-5 w-5" />,
    description: "Exclusive Mac OS version with native Apple Silicon support and macOS optimizations.",
    features: [
      "Native Apple Silicon (M1/M2/M3) support",
      "macOS security bypass technology",
      "Sandboxed execution environment",
      "Metal API acceleration",
      "Seamless integration with macOS security",
    ],
    requirements: "macOS 11.0+, 8GB RAM, Intel or Apple Silicon",
    version: "v2.5.0",
    size: "22.4 MB",
    exclusive: true,
    superExclusive: false,
  },
  {
    id: "vr",
    name: "VR",
    icon: <VrHeadset className="h-5 w-5" />,
    description: "Exclusive VR version for executing scripts in virtual reality environments with 3D interface.",
    features: [
      "3D script visualization and manipulation",
      "Hand tracking for code interaction",
      "VR-optimized UI with spatial awareness",
      "Direct integration with VR game engines",
      "Real-time script effects visualization",
    ],
    requirements: "SteamVR or Oculus compatible headset, VR-ready PC",
    version: "v1.8.2",
    size: "34.6 MB",
    exclusive: true,
    superExclusive: false,
  },
  {
    id: "console",
    name: "Console",
    icon: <Gamepad2 className="h-5 w-5" />,
    description: "Super exclusive console version that works through custom firmware integration.",
    features: [
      "Custom firmware integration for script execution",
      "Kernel-level access for maximum compatibility",
      "Undetectable by console security measures",
      "Cross-game memory manipulation",
      "Controller-optimized interface",
    ],
    requirements: "Modified console with custom firmware, USB drive",
    version: "v1.2.0",
    size: "16.8 MB",
    exclusive: false,
    superExclusive: true,
  },
  {
    id: "iphone",
    name: "iPhone",
    icon: <TabletSmartphone className="h-5 w-5" />,
    description: "Super exclusive iOS version that works through enterprise certificates and JIT compilation.",
    features: [
      "iOS security bypass using enterprise certificates",
      "JIT compilation for script execution",
      "Kernel exploit for unrestricted access",
      "Sideloading without jailbreak",
      "Background execution even when app is closed",
    ],
    requirements: "iOS 14.0+, iPhone X or newer",
    version: "v1.0.5",
    size: "20.2 MB",
    exclusive: false,
    superExclusive: true,
    comingSoon: true,
  },
  {
    id: "linux",
    name: "Linux",
    icon: <Laptop className="h-5 w-5" />,
    description: "Linux version with native performance and compatibility with major distributions.",
    features: [
      "Native Linux performance with no emulation",
      "Wine integration for maximum game compatibility",
      "Terminal and GUI interfaces",
      "Proton and Steam Deck compatibility",
      "Low-level system access for advanced features",
    ],
    requirements: "Ubuntu 20.04+, Arch, or other major distros, 8GB RAM",
    version: "v2.4.8",
    size: "21.5 MB",
    exclusive: false,
    superExclusive: false,
  },
]

interface DownloadModalProps {
  buttonText?: string
  buttonVariant?: "default" | "outline" | "ghost"
  buttonSize?: "default" | "sm" | "lg" | "icon"
  fullWidth?: boolean
  className?: string
}

export default function DownloadModal({
  buttonText = "Download",
  buttonVariant = "default",
  buttonSize = "default",
  fullWidth = false,
  className = "",
}: DownloadModalProps) {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={buttonVariant as any}
          size={buttonSize as any}
          className={`${fullWidth ? "w-full" : ""} ${className}`}
        >
          <Download className="mr-2 h-4 w-4" />
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-gray-900/90 backdrop-blur-lg border border-gray-800 max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">Download Crimson</DialogTitle>
          <DialogDescription>Select your platform to download the appropriate version of Crimson.</DialogDescription>
        </DialogHeader>

        <div className="mt-4">
          <Tabs defaultValue="platforms" className="w-full">
            <TabsList className="grid grid-cols-2 bg-gray-900/50 backdrop-blur-md mb-4">
              <TabsTrigger value="platforms">Platforms</TabsTrigger>
              <TabsTrigger value="instructions">Download Instructions</TabsTrigger>
            </TabsList>

            <TabsContent value="platforms" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {platforms.map((platform) => (
                  <div
                    key={platform.id}
                    className={`
                      relative rounded-lg border p-4 cursor-pointer transition-all duration-300
                      ${
                        selectedPlatform?.id === platform.id
                          ? "bg-gray-800/70 border-gray-600"
                          : "bg-gray-900/50 border-gray-800 hover:border-gray-700"
                      }
                      ${
                        platform.superExclusive
                          ? "border-purple-900/50 hover:border-purple-800/70"
                          : platform.exclusive
                            ? "border-blue-900/50 hover:border-blue-800/70"
                            : ""
                      }
                    `}
                    onClick={() => setSelectedPlatform(platform)}
                  >
                    {platform.superExclusive && (
                      <Badge className="absolute top-2 right-2 bg-purple-900/70">SUPER EXCLUSIVE</Badge>
                    )}
                    {platform.exclusive && !platform.superExclusive && (
                      <Badge className="absolute top-2 right-2 bg-blue-900/70">EXCLUSIVE</Badge>
                    )}
                    {platform.comingSoon && (
                      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        <Badge className="bg-yellow-900/70 text-lg py-1 px-3">COMING SOON</Badge>
                      </div>
                    )}

                    <div className="flex items-center">
                      <div
                        className={`
                        p-2 rounded-full mr-3
                        ${
                          platform.superExclusive
                            ? "bg-purple-900/30 text-purple-400"
                            : platform.exclusive
                              ? "bg-blue-900/30 text-blue-400"
                              : "bg-gray-800 text-gray-400"
                        }
                      `}
                      >
                        {platform.icon}
                      </div>
                      <div>
                        <h3 className="font-medium">{platform.name}</h3>
                        <p className="text-xs text-gray-400">
                          {platform.version} • {platform.size}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <AnimatePresence>
                {selectedPlatform && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div
                      className={`
                      mt-4 rounded-lg border p-5
                      ${
                        selectedPlatform.superExclusive
                          ? "bg-gray-900/70 border-purple-900/50"
                          : selectedPlatform.exclusive
                            ? "bg-gray-900/70 border-blue-900/50"
                            : "bg-gray-900/70 border-gray-800"
                      }
                    `}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-medium flex items-center">
                            {selectedPlatform.icon}
                            <span className="ml-2">{selectedPlatform.name} Version</span>
                            {selectedPlatform.superExclusive && <Sparkles className="ml-2 h-4 w-4 text-purple-400" />}
                          </h3>
                          <p className="text-sm text-gray-400 mt-1">{selectedPlatform.description}</p>
                        </div>
                        <div className="text-right text-sm">
                          <div className="text-gray-400">{selectedPlatform.version}</div>
                          <div className="text-gray-500">{selectedPlatform.size}</div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-sm font-medium mb-2">Features:</h4>
                        <ul className="space-y-1">
                          {selectedPlatform.features.map((feature, index) => (
                            <li key={index} className="text-sm text-gray-400 flex items-start">
                              <Check className="h-4 w-4 text-green-500 mr-2 shrink-0 mt-0.5" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-sm font-medium mb-1">System Requirements:</h4>
                        <p className="text-sm text-gray-400">{selectedPlatform.requirements}</p>
                      </div>

                      <div className="flex justify-end">
                        {selectedPlatform.comingSoon ? (
                          <Button disabled className="bg-gray-800 text-gray-400 cursor-not-allowed">
                            <Lock className="mr-2 h-4 w-4" />
                            Coming Soon
                          </Button>
                        ) : selectedPlatform.superExclusive ? (
                          <Button className="bg-purple-900/70 hover:bg-purple-900 text-white border-none">
                            <Download className="mr-2 h-4 w-4" />
                            Download Exclusive Version
                          </Button>
                        ) : selectedPlatform.exclusive ? (
                          <Button className="bg-blue-900/70 hover:bg-blue-900 text-white border-none">
                            <Download className="mr-2 h-4 w-4" />
                            Download Exclusive Version
                          </Button>
                        ) : (
                          <Button className="bg-gray-800 hover:bg-gray-700 border border-gray-700">
                            <Download className="mr-2 h-4 w-4" />
                            Download Now
                          </Button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </TabsContent>

            <TabsContent value="instructions" className="space-y-4">
              <div className="bg-gray-900/50 rounded-lg border border-gray-800 p-5">
                <h3 className="text-lg font-medium mb-3">Download Instructions</h3>

                <div className="space-y-4">
                  <div className="flex">
                    <div className="bg-gray-800 rounded-full h-6 w-6 flex items-center justify-center text-sm mr-3 shrink-0 mt-0.5">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium">Select your platform</h4>
                      <p className="text-sm text-gray-400">
                        Choose the appropriate version for your device from the Platforms tab.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="bg-gray-800 rounded-full h-6 w-6 flex items-center justify-center text-sm mr-3 shrink-0 mt-0.5">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium">Download the installer</h4>
                      <p className="text-sm text-gray-400">
                        Click the download button to get the latest version for your platform.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="bg-gray-800 rounded-full h-6 w-6 flex items-center justify-center text-sm mr-3 shrink-0 mt-0.5">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium">Run the installer</h4>
                      <p className="text-sm text-gray-400">
                        Open the downloaded file and follow the installation instructions.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="bg-gray-800 rounded-full h-6 w-6 flex items-center justify-center text-sm mr-3 shrink-0 mt-0.5">
                      4
                    </div>
                    <div>
                      <h4 className="font-medium">Launch Crimson</h4>
                      <p className="text-sm text-gray-400">
                        After installation, open Crimson and log in with your account.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-yellow-900/20 border border-yellow-900/30 rounded-lg">
                  <h4 className="font-medium flex items-center text-yellow-400">
                    <svg
                      className="h-5 w-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Important Note
                  </h4>
                  <p className="text-sm text-gray-300 mt-1">
                    Some antivirus software may flag Crimson as potentially unwanted. This is a false positive due to
                    the nature of script execution. You may need to add an exception in your antivirus software.
                  </p>
                </div>
              </div>

              <div className="bg-gray-900/50 rounded-lg border border-gray-800 p-5">
                <h3 className="text-lg font-medium mb-3">Platform-Specific Notes</h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium flex items-center">
                      <Windows className="h-4 w-4 mr-2" />
                      Windows
                    </h4>
                    <p className="text-sm text-gray-400 mt-1">
                      Run as administrator for best performance. Requires .NET Framework 4.8 and Visual C++
                      Redistributable 2019.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium flex items-center">
                      <Smartphone className="h-4 w-4 mr-2" />
                      Android
                    </h4>
                    <p className="text-sm text-gray-400 mt-1">
                      You may need to enable "Install from Unknown Sources" in your device settings.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium flex items-center">
                      <Apple className="h-4 w-4 mr-2" />
                      Mac OS
                    </h4>
                    <p className="text-sm text-gray-400 mt-1">
                      Right-click the app and select "Open" to bypass Gatekeeper security. Apple Silicon users will get
                      native performance.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium flex items-center">
                      <TabletSmartphone className="h-4 w-4 mr-2" />
                      iPhone
                    </h4>
                    <p className="text-sm text-gray-400 mt-1">
                      Installation requires following special sideloading instructions provided after download.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  )
}
