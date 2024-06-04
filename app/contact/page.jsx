import Image from "next/image"
import { FaMapMarker, FaGlobe, FaPhone, FaFacebook, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa"


const ContactPage = () => {
  return (
    <div className="mb-4">
       <div className="h-[300px] md:h-[500px] bg-black text-white">
          <div className="grid grid-cols-1 items-center justify-between gap-10 md:grid-cols-2">
            <div className="p-6">
                <div className="font-nav px-4 py-6 md:max-w-8xl">
                  <h3 className="mt-8 text-2xl  font-bold md:text-6xl">CONTACT US</h3>
                  <p className="mt-2 md:m-2 text-md md:text-lg ">We want to hear from you! Visit our office or Reach out and share comments, suggestions, or concerns on all social media platforms.</p>
                </div>
            </div>
            <Image 
                src='/images/itssc1.png'
                alt=""
                className="hidden md:block object-cover h-[80%] w-[80%]"
                width={0}
                height={0}
                size='100vw'
                priority={true}
                unoptimized
            />
        </div>
      </div>
      <div className="container-xl lg:container m-auto">
      <div className="grid grid-cols-1 items-center justify-between px-4 py-2 space-y-6 md:space-x-8 lg:grid-cols-2">
        <div className="mt-8">
          <h1 className="text-2xl py-2 text-center font-bold font-sans tracking-wide md:text-4xl md:text-left">Contact Us at</h1>
           <div>
              <div className="flex items-center gap-8 mt-4">
                  <FaMapMarker className="h-6 w-6 text-red-500" />
                  <p className="font-nav text-sm">WestOne building, Opposite Environmental Task force, Agodi GRA, Ibadan</p>
              </div>
              <div className="flex items-center gap-8 mt-4">
                  <FaGlobe className="h-6 w-6 text-blue-500" />
                  <p className="font-nav text-sm">info@itssng.com</p>
              </div>
              <div className="flex items-center gap-8 mt-4">
                  <FaPhone className="h-6 w-6 text-black" />
                  <p className="font-nav text-sm">+234 111 222 3333</p>
              </div>
              <div className="flex items-center gap-8 mt-4">
                  <FaFacebook className="h-6 w-6 text-blue-700" />
                  <p className="font-nav text-sm">ITSSC</p>
              </div>
              <div className="flex items-center gap-8 mt-4">
                  <FaInstagram className="h-6 w-6 text-red-700" />
                  <p className="font-nav text-sm">@itssc</p>
              </div>
              <div className="flex items-center gap-8 mt-4">
                  <FaLinkedinIn className="h-6 w-6 text-blue-600" />
                  <p className="font-nav text-sm">ITSSC</p>
              </div>
              <div className="flex items-center gap-8 mt-4">
                  <FaTwitter className="h-6 w-6 text-black" />
                  <p className="font-nav text-sm">@itssc</p>
              </div>
              </div>
          </div>
          <Image 
            src='/images/map.png'
            alt='teams'
            className="object-cover h-full w-full p-4"
            width={0}
            height={0}
            size='100vw'
            priority={true}
            unoptimized
          /> 
        </div>
      </div>
    </div>
  )
}
export default ContactPage
