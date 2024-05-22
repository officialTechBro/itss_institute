import Link from "next/link"

const Footer = () => {

    const currentYear = new Date().getFullYear()

  return (
    <div className="py-4 bg-gray-500">
        <div className="container mx-auto flex flex-col space-y-6 md:flex-row items-center justify-between px-4">
            <Link className="flex flex-shrink-0 items-center" href='/'>
                <span className="text-white text-xl font-bold font-logo ml-2 uppercase">Training</span>
            </Link>
            <div className="flex flex-col items-center justify-center space-y-2">
                <Link href='/' className= "text-white font-nav font-bold hover:border-solid hover:border-b-2 hover:border-white">Home</Link>
                <Link href='/program' className= "text-white font-nav font-bold hover:border-solid hover:border-b-2 hover:border-white">Program</Link>
                <Link href='/about' className= "text-white font-nav font-bold hover:border-solid hover:border-b-2 hover:border-white">About Us</Link>
                <Link href='/contact' className= "text-white font-nav font-bold hover:border-solid hover:border-b-2 hover:border-white">Contact Us</Link>
            </div>
            <div>
                <p className="text-sm text-white mt-2 font-nav md:mt-0">
                    &copy; {currentYear} Training. All right reserve
                </p>
            </div>
        </div>
    </div>
  )
}
export default Footer