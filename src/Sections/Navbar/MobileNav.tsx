import SearchBox from "@/components/SearchBox"
import { Switch } from "@/components/ui/switch"
import { cn } from "@/lib/utils"
import { ArrowBigLeft, Search } from "lucide-react"
import Link from "next/link"
import React from "react"

type NavLink = {
  id: number | string
  name: string
  path: string
}

type MobileNavProps = {
  navLinks: NavLink[]
  theme: string | undefined
  switchThem: (val: boolean) => void
  isOpen: boolean
  toggle: () => void
}

const MobileNav = ({ navLinks, theme, switchThem , toggle , isOpen }: MobileNavProps) => (
  <>
    {/* overlay */}
    <div onClick={() => {toggle()}} className={cn("fixed top-0 left-0 w-full h-full bg-secondray-50/50 backdrop-blur-sm transition-all duration-300 z-10", isOpen?  `translate-x-0` : `translate-x-full`)}></div>

    <div className={cn("w-[70%] h-full bg-background shadow-sm p-4 fixed top-0 right-0 md:hidden transition-all duration-300 delay-150 z-50" , isOpen?  `translate-x-0` : `translate-x-full`)}>

      {/* Header */}
      <div className={cn("flex items-center gap-4 w-full")}>
        <ArrowBigLeft onClick={() => toggle()} className="cursor-pointer text-secondary-800 hover:fill-secondary-800 transition-all duration-300" />

        {/* Search Box */}
        <SearchBox />
      </div>

      {/* Nav Links */}
      <ul className="flex flex-col gap-y-4 mt-6 text-sm font-medium">
        {navLinks.map((link) => (
          <li key={link.id} className="text-2xl font-medium">
            <Link href={link.path} className="hover:opacity-70 transition">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Toggle Dark Mode */}
      <div className="flex items-center gap-2 mt-6">
        <Switch
          checked={theme === "dark"}
          onCheckedChange={switchThem} />
      </div>
    </div>

  </>
)

export default MobileNav
