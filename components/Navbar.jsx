'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import {FaBars} from 'react-icons/fa'



const Navbar = () => {

    const [mobileMenu, setMobileMenu] = useState(false)
    const path = usePathname()

  return (
    <div className="relative bg-white border-b border-blue-200 shadow-md">
        <div className="mx-auto max-w-7xl px-2 sm:px-2 lg:px-8">
            <div className="flex h-20 items-center justify-between">
                {/* hamburger */}
                <div className="absolute left-0 flex items-center md:hidden">
                    <FaBars 
                        className="text-black text-4xl shadow-md p-2 rounded-full hover:ring-1 focus:ring-black"
                        onClick={() => setMobileMenu((prev) => !prev)}
                    />
                </div>
                {/* Logo */}
                <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                    <Link className="flex flex-shrink-0 items-center" href='/'>
                        <span className="text-black text-2xl font-bold font-logo ml-2 uppercase">Training</span>
                    </Link>
                </div>
                {/* Navigation */}
                <div className="hidden md:block md:ml-6">
                    <div className="flex items-center space-x-6">
                        <Link href='/' className={` ${path === '/' ? 'border-solid border-b-2 border-black' : ''} text-black font-nav font-bold hover:text-gray-400`}>Home</Link>
                        <Link href='/program' className={` ${path === '/program' ? 'border-solid border-b-2 border-black' : ''} text-black font-nav font-bold hover:text-gray-400`}>Program</Link>
                        <Link href='/about' className={` ${path === '/organization' ? 'border-solid border-b-2 border-black' : ''} text-black font-nav font-bold hover:text-gray-400`}>About Us</Link>
                        <Link href='/contact' className={` ${path === '/about' ? 'border-solid border-b-2 border-black' : ''} text-black font-nav font-bold hover:text-gray-400`}>Contact Us</Link>
                        <Link href='/apply' className="py-2 px-6 bg-black text-white font-nav rounded-full transition duration-500 ease-in-out hover:scale-75">Apply</Link>   
                    </div>
                </div>
            </div>

            {/* mobile menu */}
            {mobileMenu && (
                <div id="mobile-menu">
                <div className="flex flex-col space-y-1 px-2 pb-3">
                    <Link href='/' className="text-black font-nav font-bold hover:bg-gray-400 px-3 py-2">
                        Home
                    </Link>
                    <Link href='/program' className="text-black font-nav font-bold hover:bg-gray-400 px-3 py-2">
                        Programs
                    </Link>
                    <Link href='/about' className="text-black font-nav font-bold hover:bg-gray-400 px-3 py-2">
                        About Us
                    </Link>
                    <Link href='/contact' className="text-black font-nav font-bold hover:bg-gray-400 px-3 py-2">
                        Contact Us
                    </Link>
                    <Link href='/apply' className="py-2 px-6 bg-black text-white font-nav rounded-full w-[100px] transition duration-500 ease-in-out hover:scale-75">
                        Apply
                    </Link>
                </div>
            </div>
            )}
        </div>
    </div>
  )
}
export default Navbar