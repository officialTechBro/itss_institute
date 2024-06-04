import Link from "next/link"
import Image from "next/image"
import { FaFacebook, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa"


const Footer = () => {

    const currentYear = new Date().getFullYear()

  return (
    <div className="py-4 bg-gray-500">
        <div className="container mx-auto flex flex-col space-y-6 md:flex-row items-center justify-between px-4">
            <Link className="flex flex-shrink-0 items-center" href='/'>
                <Image 
                    src='/images/itssc2.png'
                    alt='itssc'
                    className="object-cover h-24 w-24 md:h-32 md:w-32"
                    width={0}
                    height={0}
                    size='100vw'
                    priority={true}
                    unoptimized
                />
            </Link>
            <div className="flex flex-col md:flex-row md:space-x-14">
                <div className="flex flex-col items-center justify-center space-y-2">
                    <Link href='/' className= "text-white font-nav font-bold hover:border-solid hover:border-b-2 hover:border-white">Home</Link>
                    <Link href='/program' className= "text-white font-nav font-bold hover:border-solid hover:border-b-2 hover:border-white">Program</Link>
                    <Link href='/about' className= "text-white font-nav font-bold hover:border-solid hover:border-b-2 hover:border-white">About Us</Link>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                    <Link href='/contact' className= "text-white font-nav font-bold hover:border-solid hover:border-b-2 hover:border-white">Contact Us</Link>
                    <Link href='/career' className= "text-white font-nav font-bold hover:border-solid hover:border-b-2 hover:border-white">Career</Link>
                    <Link href='/apply' className= "text-white font-nav font-bold hover:border-solid hover:border-b-2 hover:border-white">Apply</Link>
                </div>
            </div>
            <div>
                <p className="text-sm text-white mt-2 font-nav md:mt-0">
                    &copy; {currentYear} ITSSC. All right reserve
                </p>
            </div>
        </div>
    </div>
  )
}
export default Footer