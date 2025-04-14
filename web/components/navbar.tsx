"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { LifeBuoy, LogIn, Menu, UserPlus, X, FileCode, Info, Plus } from "lucide-react"
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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/40 backdrop-blur-lg border-b border-gray-800" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <motion.span
              className="text-2xl font-bold bg-gradient-to-r from-red-500 to-purple-600 text-transparent bg-clip-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              CRIMSON
            </motion.span>
            <motion.span
              className="ml-2 text-xs text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              v3.0.1
            </motion.span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="#updates" className="text-gray-300 hover:text-white transition-colors">
              Updates
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white transition-colors flex items-center">
              <Info className="mr-1 h-4 w-4" />
              About
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white transition-colors flex items-center">
              <FileCode className="mr-1 h-4 w-4" />
              Script Hub
            </Link>
            <Link href="/plugins" className="text-gray-300 hover:text-white transition-colors flex items-center">
              <Plus className="mr-1 h-4 w-4" />
              Plugins
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white transition-colors flex items-center">
              <LifeBuoy className="mr-1 h-4 w-4" />
              Support
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-gray-300 hover:text-white"
              onClick={() => window.open("https://discord.gg/crimson", "_blank")}
            >
              <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
              Discord
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" className="text-gray-300 hover:text-white">
                  <LogIn className="mr-2 h-4 w-4" />
                  Login
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-gray-900/90 backdrop-blur-lg border border-gray-800">
                <DialogHeader>
                  <DialogTitle>Login to your account</DialogTitle>
                  <DialogDescription>Enter your credentials to access your Crimson account.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="login-email">Email</Label>
                    <Input id="login-email" type="email" className="bg-gray-800 border-gray-700" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="login-password">Password</Label>
                    <Input id="login-password" type="password" className="bg-gray-800 border-gray-700" />
                  </div>
                </div>
                <DialogFooter>
                  <Button className="bg-gray-800 hover:bg-gray-700 border border-gray-700">Login</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-gray-800 hover:bg-gray-700 border border-gray-700">
                  <UserPlus className="mr-2 h-4 w-4" />
                  Register
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-gray-900/90 backdrop-blur-lg border border-gray-800">
                <DialogHeader>
                  <DialogTitle>Create an account</DialogTitle>
                  <DialogDescription>Register to access all Crimson features and updates.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="register-username">Username</Label>
                    <Input id="register-username" className="bg-gray-800 border-gray-700" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="register-email">Email</Label>
                    <Input id="register-email" type="email" className="bg-gray-800 border-gray-700" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="register-password">Password</Label>
                    <Input id="register-password" type="password" className="bg-gray-800 border-gray-700" />
                  </div>
                </div>
                <DialogFooter>
                  <Button className="bg-gray-800 hover:bg-gray-700 border border-gray-700">Register</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-lg border-b border-gray-800">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="#"
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#updates"
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Updates
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-white transition-colors py-2 flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Info className="mr-2 h-4 w-4" />
                About
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-white transition-colors py-2 flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <FileCode className="mr-2 h-4 w-4" />
                Script Hub
              </Link>
              <Link
                href="/plugins"
                className="text-gray-300 hover:text-white transition-colors py-2 flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Plus className="mr-2 h-4 w-4" />
                Plugins
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-white transition-colors py-2 flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <LifeBuoy className="mr-2 h-4 w-4" />
                Support
              </Link>
            </nav>
            <div className="flex flex-col space-y-2">
              <Button
                variant="outline"
                className="w-full border-gray-700 flex items-center justify-center"
                onClick={() => window.open("https://discord.gg/crimson", "_blank")}
              >
                <svg
                  className="mr-2 h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
                Discord
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full border-gray-700">
                    <LogIn className="mr-2 h-4 w-4" />
                    Login
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-gray-900/90 backdrop-blur-lg border border-gray-800">
                  <DialogHeader>
                    <DialogTitle>Login to your account</DialogTitle>
                    <DialogDescription>Enter your credentials to access your Crimson account.</DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="mobile-login-email">Email</Label>
                      <Input id="mobile-login-email" type="email" className="bg-gray-800 border-gray-700" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="mobile-login-password">Password</Label>
                      <Input id="mobile-login-password" type="password" className="bg-gray-800 border-gray-700" />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button className="bg-gray-800 hover:bg-gray-700 border border-gray-700">Login</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full bg-gray-800 hover:bg-gray-700 border border-gray-700">
                    <UserPlus className="mr-2 h-4 w-4" />
                    Register
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-gray-900/90 backdrop-blur-lg border border-gray-800">
                  <DialogHeader>
                    <DialogTitle>Create an account</DialogTitle>
                    <DialogDescription>Register to access all Crimson features and updates.</DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="mobile-register-username">Username</Label>
                      <Input id="mobile-register-username" className="bg-gray-800 border-gray-700" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="mobile-register-email">Email</Label>
                      <Input id="mobile-register-email" type="email" className="bg-gray-800 border-gray-700" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="mobile-register-password">Password</Label>
                      <Input id="mobile-register-password" type="password" className="bg-gray-800 border-gray-700" />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button className="bg-gray-800 hover:bg-gray-700 border border-gray-700">Register</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
