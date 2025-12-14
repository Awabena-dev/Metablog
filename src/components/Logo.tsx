import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

const Logo = ({ theme="light" , className , ...props } : {theme: "light" | "dark" , className: string}) => {
  return (
    <Image src={theme === "light" ? "/LogoLight.svg" : "/LogoDark.svg"} width={158} height={36} alt='logo' 
    className={cn(className)} />
  )
}

export default Logo