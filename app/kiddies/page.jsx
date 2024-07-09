import Image from "next/image"
import Link from "next/link"
import { FaCheck } from "react-icons/fa"
import { KIDS_COURSES } from "@/const"
import Footer from "@/components/Footer"

export const metadata = {
    title: 'Kids Programming School',
    description: 'Enrol Your Kid into ITSSC Summer Tech Academy',
    keywords: 'Aptech, ITSSC, Training Center, Agodi Ibadan, Kids Can Code, Coding School, Tech, IT, Programming, Computer School'
}

const Kiddies = () => {
  return (
   <section>
    <div className="max-w-7xl mx-auto mt-10">
        <div className="grid grid-cols-1 items-center justify-between px-4 py-2 space-y-6 md:space-x-8 lg:grid-cols-2">
            <Image 
                src='/images/kids.jpg'
                alt='teams'
                className="object-cover h-full w-full shadow-xl"
                width={0}
                height={0}
                size='100vw'
                priority={true}
                unoptimized
            />
            <div>
                <h1 className="text-2xl font-bold tracking-widest font-nav my-12 text-center text-blue-950 md:text-4xl">
                    ITSSC Kids Package
                </h1>
                <p className="text-md font-nav md:text-lg text-blue-950">
                Enrolling kids in our <strong>Summer Tech Academy</strong> is a strategic move to prepare them for the digital age, where technology is deeply integrated into various aspects of life and work. Such training programs offer a robust foundation in essential skills, including coding, software use, cybersecurity, and hardware understanding. These programs can spark interest in STEM (Science, Technology, Engineering, and Mathematics) fields, fostering critical thinking, problem-solving, and creativity. They also provide a safe and structured environment for kids to explore technology, guided by experienced instructors. Additionally, early exposure to computer tech can enhance academic performance, improve digital literacy, and open up future career opportunities in an increasingly tech-driven world. By enrolling children in these programs, parents are investing in their future, ensuring they are not just consumers of technology but active, informed participants in its development and use.
                </p>
                <Link href='https://forms.gle/JsUVMFHnnuoxLTeM9' className="flex py-3 md:py-4 bg-blue-950  text-white md:w-[300px] rounded-full mt-10 text-center mx-auto justify-center hover:bg-blue-800">
                    Apply Now
                </Link>
            </div >
        </div>

        <div className="my-10">
            <h1 className="text-xl py-2 text-center font-bold font-sans tracking-wide md:text-4xl">Our Courses</h1>
            <div className="my-6 grid grid-cols-1 md:grid-cols-2 items-center justify-start">
                {KIDS_COURSES.map((course, index) => (
                    <div key={index} >
                        <div className="flex items-center space-x-6 mx-8 font-nav px-20 py-1 rounded-md mt-6 md:max-w-8xl ">
                            <FaCheck />
                            <h3 className="text-lg">{course}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    <Footer />
   </section>
  )
}
export default Kiddies