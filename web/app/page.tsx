"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Code, Settings, Terminal, UserPlus, Zap, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Navbar from "@/components/navbar"
import PricingCard from "@/components/pricing-card"
import CountdownTimer from "@/components/countdown-timer"
import ScriptHub from "@/components/script-hub"
import Credits from "@/components/credits"
import { Badge } from "@/components/ui/badge"
import DownloadModal from "@/components/download-modal"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const pricingRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setMounted(true)

    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = "smooth"

    return () => {
      document.documentElement.style.scrollBehavior = "auto"
    }
  }, [])

  const scrollToPricing = () => {
    pricingRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-800/20 rounded-full filter blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-700/20 rounded-full filter blur-[100px] animate-pulse-slow" />
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <Navbar />

        <main className="container mx-auto px-4 py-16">
          <section className="flex flex-col items-center justify-center text-center mb-20 min-h-[80vh] flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="glow-text"
            >
              <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-red-500 to-purple-600 text-transparent bg-clip-text mb-4">
                CRIMSON
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mb-8">
                The ultimate script executor with unparalleled performance and compatibility
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex gap-4 mb-12"
            >
              <DownloadModal
                buttonText="Get Now"
                buttonSize="lg"
                className="bg-gray-800 hover:bg-gray-700 border border-gray-700"
              />
              <Button
                size="lg"
                variant="outline"
                className="border-gray-700 hover:bg-gray-800"
                onClick={() => window.open("https://discord.gg/CYzYjTsD9u", "_blank")}
              >
                Join Discord{" "}
                <svg
                  className="ml-2 h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" variant="outline" className="border-gray-700 hover:bg-gray-800">
                    Register <UserPlus className="ml-2 h-4 w-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-gray-900/90 backdrop-blur-lg border border-gray-800">
                  <DialogHeader>
                    <DialogTitle>Create an account</DialogTitle>
                    <DialogDescription>Register to access all Crimson features and updates.</DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="username">Username</Label>
                      <Input id="username" className="bg-gray-800 border-gray-700" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" className="bg-gray-800 border-gray-700" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" type="password" className="bg-gray-800 border-gray-700" />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button className="bg-gray-800 hover:bg-gray-700 border border-gray-700">Register</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </motion.div>

            <div className="mb-16">
              <h2 className="text-xl font-semibold mb-4">Release Countdown</h2>
              <CountdownTimer targetDate="2025-05-01T00:00:00" />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="w-full max-w-4xl bg-gray-900/40 backdrop-blur-md rounded-xl border border-gray-800 overflow-hidden"
            >
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture.PNG-C7vhV4RQBpfoXWVnMQsnXmfBoPCuwf.png"
                alt="Crimson Executor Interface"
                className="w-full h-auto"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="mt-12"
            >
              <Button
                variant="ghost"
                size="lg"
                className="text-gray-400 hover:text-white flex items-center gap-2 animate-bounce"
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
              >
                Scroll Down <ChevronDown className="h-5 w-5" />
              </Button>
            </motion.div>
          </section>

          <section className="mb-20" id="updates">
            <h2 className="text-3xl font-bold text-center mb-8">Latest Updates</h2>
            <div className="max-w-4xl mx-auto bg-gray-900/40 backdrop-blur-md rounded-xl border border-gray-800 p-6">
              <div className="flex items-center mb-4">
                <h3 className="text-2xl font-bold mr-3">v3.0.4</h3>
                <Badge className="bg-purple-600 hover:bg-purple-700">BETA</Badge>
                <Badge className="ml-2 bg-red-600 hover:bg-red-700">UNRELEASED</Badge>
              </div>

              <motion.ul
                className="space-y-3 text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Added new UI with improved performance and aesthetics
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  New Tab: AI Assistant for script generation and optimization
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Fixed compatibility issues with latest game updates
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Enhanced script execution speed by 35%
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Added multi-language support for scripts
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Improved error handling and debugging tools
                </li>
              </motion.ul>
            </div>
          </section>

          <section className="mb-20" ref={pricingRef}>
            <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <PricingCard
                  title="Free"
                  price="$0"
                  features={[
                    "100% Script Support",
                    "Customization",
                    "Multi-Tool & Languages",
                    "99% Uncompromised",
                    "No AutoAPI & Fast-INJ",
                  ]}
                  buttonText="Download Now"
                  popular={false}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <PricingCard
                  title="Premium"
                  price="$5"
                  features={[
                    "100% Script Support",
                    "Extra Customization",
                    "Faster-Injection & AutoAPI-Fix",
                    "Multi-Tool & Languages",
                    "100% Uncompromised",
                  ]}
                  buttonText="Upgrade Now"
                  popular={true}
                />
              </motion.div>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
            <Tabs defaultValue="features" className="max-w-4xl mx-auto">
              <TabsList className="grid grid-cols-5 bg-gray-900/50 backdrop-blur-md">
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="support">Support</TabsTrigger>
                <TabsTrigger value="scripthub">Script Hub</TabsTrigger>
                <TabsTrigger value="credits">Credits</TabsTrigger>
              </TabsList>
              <TabsContent
                value="features"
                className="bg-gray-900/40 backdrop-blur-md p-6 rounded-b-lg border border-gray-800 border-t-0"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-gray-800/50 border-gray-700 hover:border-red-500/50 transition-all duration-300 hover:shadow-glow">
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Zap className="mr-2 h-5 w-5 text-red-500" />
                          Fast Injection
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-400">
                          Lightning-fast script execution with minimal latency and maximum performance.
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-glow">
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Code className="mr-2 h-5 w-5 text-purple-500" />
                          Multi-Language Support
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-400">
                          Execute scripts in multiple programming languages with seamless integration.
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-glow">
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Settings className="mr-2 h-5 w-5 text-blue-500" />
                          Customization
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-400">
                          Fully customizable interface with themes, layouts, and personalized settings.
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-gray-800/50 border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:shadow-glow">
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Terminal className="mr-2 h-5 w-5 text-green-500" />
                          AutoAPI Fix
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-400">
                          Automatic API compatibility fixes and updates to ensure your scripts always work.
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </TabsContent>
              <TabsContent
                value="about"
                className="bg-gray-900/40 backdrop-blur-md p-6 rounded-b-lg border border-gray-800 border-t-0"
              >
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">About Crimson</h3>
                    <p className="text-gray-300 mb-4">
                      Crimson is a powerful script executor designed for maximum performance and compatibility. Our team
                      of developers has created a tool that allows you to execute scripts with unparalleled speed and
                      reliability.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Common Issues & Fixes</h3>
                    <div className="space-y-4">
                      <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                        <h4 className="font-medium text-red-400 mb-2">Missing .NET Framework</h4>
                        <p className="text-gray-300 mb-3">
                          Crimson requires .NET Framework 4.8 or higher to function properly. If you're experiencing
                          startup issues, you may need to install or update your .NET Framework.
                        </p>
                        <DownloadModal
                          buttonText="Download .NET Framework 4.8"
                          buttonVariant="outline"
                          className="border-gray-600"
                        />
                      </div>

                      <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                        <h4 className="font-medium text-red-400 mb-2">Script Injection Failures</h4>
                        <p className="text-gray-300 mb-3">
                          If scripts fail to inject, try running Crimson as administrator. Some security software may
                          also interfere with script execution.
                        </p>
                        <ul className="list-disc list-inside text-gray-400 space-y-1">
                          <li>Right-click Crimson and select "Run as administrator"</li>
                          <li>Temporarily disable your antivirus software</li>
                          <li>Check if your game is running in the correct mode</li>
                        </ul>
                      </div>

                      <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                        <h4 className="font-medium text-red-400 mb-2">Visual C++ Redistributable</h4>
                        <p className="text-gray-300 mb-3">
                          Crimson requires Visual C++ Redistributable 2019 or newer. Missing this component can cause
                          crashes or prevent the application from starting.
                        </p>
                        <DownloadModal
                          buttonText="Download Visual C++ Redistributable"
                          buttonVariant="outline"
                          className="border-gray-600"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent
                value="support"
                className="bg-gray-900/40 backdrop-blur-md p-6 rounded-b-lg border border-gray-800 border-t-0"
              >
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Contact Support</h3>
                  <p className="text-gray-400">
                    Our support team is available 24/7 to help you with any issues or questions you may have.
                  </p>
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="support-email">Email</Label>
                      <Input
                        id="support-email"
                        type="email"
                        placeholder="Your email"
                        className="bg-gray-800 border-gray-700"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="support-message">Message</Label>
                      <textarea
                        id="support-message"
                        rows={4}
                        placeholder="Describe your issue..."
                        className="bg-gray-800 border border-gray-700 rounded-md p-2 resize-none focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                    <Button className="bg-gray-800 hover:bg-gray-700 border border-gray-700">Send Message</Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent
                value="scripthub"
                className="bg-gray-900/40 backdrop-blur-md p-6 rounded-b-lg border border-gray-800 border-t-0"
              >
                <ScriptHub />
              </TabsContent>
              <TabsContent
                value="credits"
                className="bg-gray-900/40 backdrop-blur-md p-6 rounded-b-lg border border-gray-800 border-t-0"
              >
                <Credits />
              </TabsContent>
            </Tabs>
          </section>
        </main>

        <footer className="border-t border-gray-800 py-8">
          <div className="container mx-auto px-4 text-center text-gray-500">
            <p>© {new Date().getFullYear()} Crimson. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
