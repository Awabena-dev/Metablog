'use client'

import { Switch } from '@/components/ui/switch'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, Search } from 'lucide-react'
import MobileNav from './MobileNav'
import SearchBox from '@/components/SearchBox'
const Navlinks = [
    { id: 0, path: '/', name: "Home" },
    { id: 1, path: '/blogs', name: "Blog" },
    { id: 2, path: '/#', name: "Subscribe" },
    { id: 3, path: '/contact', name: "Contact" },
]

const Navbar = () => {

    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const [isOpen, setisOpen] = useState(false)


    const toggle = () => {
        setisOpen(!isOpen)
    }

    useEffect(() => setMounted(true), [])
    if (!mounted) return null

    function switchThem(val: boolean) {
        setTheme(val ? 'dark' : 'light')
    }

    return (
        <div className='w-full dark:bg-secondray-900 flex justify-center fixed top-0 left-0 bg-secondray-50 z-99'>
            <div className="max-wrapper py-6 bg-secondray-50 w-full dark:bg-secondray-900  flex items-center justify-between">

                {/* Logo */}
                <Image src={theme === "light" ? "/LogoLight.svg" : "/LogoDark.svg"} width={158} height={36} alt='logo' />

                {/* navlinks */}
                <ul className="md:flex hidden gap-x-6 text-sm font-medium ">
                    {Navlinks.map((link) => (
                        <li key={link.id} className='text-[16px] font-medium'>
                            <Link href={link.path} className="hover:opacity-70 transition">
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>


                <div className='md:flex hidden items-center gap-4'>
                    {/* Search Box */}
                    <SearchBox />

                    {/* Toggle Dark Mode */}
                    <div className="flex items-center gap-2">
                        <Switch
                            checked={theme === "dark"}
                            onCheckedChange={switchThem}
                            className="relative"
                        />
                    </div>

                </div>

                {/* Menu */}
                <Menu className='block md:hidden size-6' onClick={() => { toggle() }} />
                {/* mobile Navbar */}
                <MobileNav navLinks={Navlinks} theme={theme} switchThem={switchThem} isOpen={isOpen} toggle={toggle} />
            </div>
        </div>
    )
}

export default Navbar
