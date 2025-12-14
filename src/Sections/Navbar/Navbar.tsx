'use client'

import { Switch } from '@/components/ui/switch'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, Search } from 'lucide-react'
import MobileNav from './MobileNav'
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
        <div className="max-wrapper py-12 flex items-center justify-between">

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
                <div className='flex items-center pl-4 py-2 pr-2  bg-secondary'>
                    <input
                        type="text"
                        placeholder="Search…"
                        className="rounded-md outline-none ronunded-[5px]"
                    />
                    <Search className='size-4' />
                </div>

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
            <Menu className='block md:hidden size-6' onClick={() => {toggle()}}/>
            {/* mobile Navbar */}
            <MobileNav navLinks={Navlinks} theme={theme} switchThem={switchThem} isOpen={isOpen} toggle={toggle}/>
        </div>
    )
}

export default Navbar
