"use client"

import { useState, useCallback } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { Home, Users, Briefcase, MessageSquare, Info, HelpCircle, LogIn, Moon, Sun, Menu, X } from "lucide-react"
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks"
import { toggleUserView } from "@/lib/redux/features/userViewSlice"

export default function Sidebar() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const dispatch = useAppDispatch()
  const userView = useAppSelector((state) => state.userView.view)
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])

  const toggleView = useCallback(() => {
    dispatch(toggleUserView())
  }, [dispatch])

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark")
  }, [theme, setTheme])

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/influencers", label: "Influencers", icon: Users },
    { href: "/businesses", label: "Businesses", icon: Briefcase },
    { href: "/messages", label: "Messages", icon: MessageSquare },
    { href: "/what-we-do", label: "What We Do", icon: Info },
    { href: "/contact-us", label: "Contact Us", icon: HelpCircle },
  ]

  return (
    <>
      <Button variant="ghost" size="icon" className="fixed left-4 top-4 z-50 lg:hidden" onClick={toggleSidebar}>
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      <div
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 transform border-r bg-background transition-transform duration-200 ease-in-out lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex h-full flex-col">
          <div className="flex h-16 items-center justify-center border-b px-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold text-primary">InfluMarket</span>
            </Link>
          </div>

          <nav className="flex-1 space-y-1 px-2 py-4">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                  <Button variant="ghost" className={cn("w-full justify-start", pathname === item.href && "bg-muted")}>
                    <Icon className="mr-2 h-5 w-5" />
                    {item.label}
                  </Button>
                </Link>
              )
            })}
          </nav>

          <div className="border-t p-4 space-y-2">
            <Button variant="outline" className="w-full justify-start" onClick={toggleView}>
              {userView === "business" ? (
                <>
                  <Users className="mr-2 h-5 w-5" />
                  Switch to Influencer View
                </>
              ) : (
                <>
                  <Briefcase className="mr-2 h-5 w-5" />
                  Switch to Business View
                </>
              )}
            </Button>

            <Button variant="outline" className="w-full justify-start" onClick={toggleTheme}>
              {theme === "dark" ? (
                <>
                  <Sun className="mr-2 h-5 w-5" />
                  Light Mode
                </>
              ) : (
                <>
                  <Moon className="mr-2 h-5 w-5" />
                  Dark Mode
                </>
              )}
            </Button>

            <Link href="/login" className="block" onClick={() => setIsOpen(false)}>
              <Button variant="outline" className="w-full justify-start">
                <LogIn className="mr-2 h-5 w-5" />
                Login / Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

