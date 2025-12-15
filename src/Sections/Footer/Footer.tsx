'use client'
import Logo from "@/components/Logo"
import SubForm from "@/components/SubForm"
import { useTheme } from "next-themes"
import Link from "next/link"



const catogray = ["LifeStyle", "Technology", "Travel", "Sport", "Economy"]
const quickLinks = [
    {
        name: "Home",
        url: "/",
    },
    {
        name: "About",
        url: "/",
    },
    {
        name: "Blogs",
        url: "/",
    },
    {
        name: "Contact",
        url: "/",
    },
]

const Footer = () => {

    const { theme } = useTheme()
     
    return (
        <div className='bg-secondray-50 dark:bg-secondray-900 w-full py-16 mt-30'>
            {/* up content */}
            <div className='max-wrapper'>
                <div className="flex flex-wrap justify-between gap-6">
                    {/* about */}
                    <div className='max-w-70'>
                        <h3 className='def-text-lg text-secondray-800 font-semibold mb-3'>About</h3>
                        <p className=' text-secondray-500 body-4 mb-6 font-jakarta'>This website is dedicated to sharing short, clear, and up-to-date
                            technology articles. We focus on topics such as web development, software tools,
                            artificial intelligence, and digital trends.</p>
                        <h3 className='body-4 text-secondray-500 font-jakarta'><span className='text-secondray-800 font-semibold'>Email: </span>info@Metablog.com</h3>
                        <h3 className='body-4 text-secondray-500 font-jakarta'><span className='text-secondray-800 font-semibold'>Phone: </span>880 - 123456789</h3>
                    </div>

                    {/* quick link */}
                    <div>
                        <h3 className='def-text-lg text-secondray-800 font-semibold mb-3'>Quick Links</h3>
                        <ul>
                            {quickLinks.map((link) => (
                                <li key={link.name} className="body-4 text-secondray-500 font-normal font-jakarta"><Link href={link.url} />{link.name}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Catgory */}
                    <div>
                        <h3 className='def-text-lg text-secondray-800 font-semibold mb-3'>Catogray</h3>
                        <ul>
                            {catogray.map((cat) => (
                                <li key={cat} className="body-4 text-secondray-500 font-normal font-jakarta"><Link href={"/"} />{cat}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Subscripe */}
                    <div>
                        <SubForm />
                    </div>

                </div>
            </div>

            {/* Down Content */}
            <div className="max-wrapper flex items-center justify-between pt-8 mt-8 border-t border-secondray-100">
                <div>
                    <Logo theme={theme} className="w-15 h-10 md:w-59.5 md:h-8" />
                </div>
                <ul className="flex items-center gap-x-6">
                    <li className="body-3">Terms Of Us</li>
                    <li className="body-3">Privacy Poilcy</li>
                    <li className="body-3">Cookes</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer