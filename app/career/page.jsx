import Footer from "@/components/Footer"
import { Button, OPENINGS } from "@/const"
import Image from "next/image"
import Link from "next/link"

const CareerPage = () => {
  return (
    <section >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-start justify-center gap-4 my-20 px-4 text-blue-950">
          <h1 className="text-4xl font-bold font-nav max-w-4xl md:text-6xl">Discover new opportunities and join a team to get you there</h1>
          <p className="text-md font-nav max-w-6xl md:text-lg">Join our dynamic team and embark on a fulfilling career where innovation, collaboration, and growth are at the heart of everything we do. At ITSSC, we value diverse perspectives and foster a culture of inclusivity and respect. Our employees enjoy opportunities for professional development, competitive benefits, and a supportive work environment. Whether you're just starting out or looking to take the next step in your career, you'll find a place to thrive with us. Discover your potential and make an impact with ITSSC.</p>
          <Button 
            classes=  '  text-blue-900 mt-6 w-[250px] font-nav border-solid border-2 border-blue-900 rounded-full px-6 py-2 text-md md:text-xl hover:bg-blue-900 hover:text-white'
            link = '#roles'
            text = 'View Our Roles'
          />
        </div>
        <div className="grid grid-cols-1 items-center justify-between px-4 py-2 space-y-6 md:space-x-8 lg:grid-cols-2">
          <Image 
            src='/images/teams.jpg'
            alt='teams'
            className="object-cover h-full w-full shadow-xl"
            width={0}
            height={0}
            size='100vw'
            priority={true}
            unoptimized
          />
          <div>
           <p className="text-md font-nav md:text-lg text-blue-950">
            At ITSSC, we believe that our greatest asset is our people. We are committed to creating an environment where innovation thrives, collaboration is key, and every team member feels valued and empowered. Our inclusive culture celebrates diversity and encourages continuous learning and professional growth. With competitive benefits, flexible work options, and numerous opportunities for advancement, we ensure that our employees have the resources they need to succeed both personally and professionally. Whether you're an experienced professional or just starting your career, you'll find a supportive community and a place where your contributions truly make a difference. Join us at ITSSC and help shape the future while building a rewarding career.
           </p>
          </div>
        </div>
        <div className="mt-20 px-4">
        <h1 className="text-blue-950 text-2xl text-center font-bold font-sans tracking-wide md:text-4xl lg:text-6xl" id="roles">Our Roles</h1>
        <div className="my-6">
          {OPENINGS.map((name, index) => (
            <Link href='#' key={index} >
              <div  key={index} className="max-w-6xl mx-auto">
                <div  key={index} className="flex items-center justify-between font-nav px-4 py-6 bg-gray-100 shadow-md rounded-md mt-6 md:max-w-8xl hover:bg-blue-900 hover:text-white">
                  <h3 className="text-lg">{name.job}</h3>
                  <p className="text-sm">{name.type}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}
export default CareerPage