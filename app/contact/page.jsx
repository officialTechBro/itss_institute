import Image from "next/image"
import { FaMapMarker, FaEnvelope, FaPhoneAlt, FaFacebook, FaLinkedinIn, FaInstagram } from "react-icons/fa"
import { FaXTwitter, FaLocationDot } from "react-icons/fa6";


const ContactPage = () => {
  return (
    <div className="mb-4">
       <div className="h-[300px] md:h-[500px] bg-blue-950 text-white">
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
                  <FaLocationDot className="h-6 w-6 text-black-500" />
                  <p className="text-blue-950 font-nav text-sm" style={{ whiteSpace: 'pre-wrap' }}>
                WestOne building, Opposite Oyo State Environmental Task force, {'\n'}
                Agodi GRA, Ibadan, Oyo State
            </p>              </div>
              <div className="flex items-center gap-8 mt-4">
                  <FaEnvelope className="h-6 w-6 text-black-500" />
                  <a href="mailto:info@itssng.com" className="text-blue-950 font-nav text-sm">
                info@itssng.com
            </a>
                 
              </div>
              <div className="flex items-center gap-8 mt-4">
                  <FaPhoneAlt className="h-6 w-6 text-black" />
                  <p className=" text-blue-950 font-nav text-sm">+234 707-049-1555</p>
              </div>
              {/*
              <div className="flex items-center gap-8 mt-4">
                  <FaFacebook className="h-6 w-6 text-black-700" />
                  <p className=" text-blue-950 font-nav text-sm">ITSSC</p>
              </div>
               */}
              <div className="flex items-center gap-8 mt-4">
                  <FaInstagram className="h-6 w-6 text-black-700" />
                  <a href="https://www.instagram.com/officialitssc/" target="_blank" rel="noopener noreferrer" 
                  className="text-blue-950 font-nav text-sm"> officialitssc</a>
              </div>
              {/*
              <div className="flex items-center gap-8 mt-4">
                  <FaLinkedinIn className="h-6 w-6 text-blue-600" />
                  <p className=" text-blue-950 font-nav text-sm">ITSSC</p>
              </div>
              */}
              <div className="flex items-center gap-8 mt-4">
                  <FaXTwitter className="h-6 w-6 text-black" />
                  <a   href="https://twitter.com/officialitssc" target="_blank" rel="noopener noreferrer"
                className="text-blue-950 font-nav text-sm" > officialitssc </a>
              </div>
              </div>
          </div>
          <Image 
            src='/images/map.png'
            alt='teams'
            className="object-cover h-full w-full p-4 shadow-md"
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
