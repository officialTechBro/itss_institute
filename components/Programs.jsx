import Link from "next/link"
import { FaArrowRight } from "react-icons/fa"
import { COURSE } from "@/const"

export const Course = ({courseTitle}) => {
    return (
        <div className="bg-white px-4 py-6 shadow-md rounded-xl text-blue-950 font-bold font-nav text-center transition ease-in-out delay-150 hover:-translate-y-1 hover-scale-150 duration-300">
                {courseTitle}
        </div>
    )
}

const Programs = () => {
  return (
    <section className="md:h-full pb-10">
    <div className="container-xl md: container lg:container m-auto">
        <h1 className="text-2xl font-bold tracking-widest font-nav my-12 text-center text-blue-950 md:text-4xl">
            Featured Courses
        </h1>
        <div className="grid grid-cols-2 items-center justify-around gap-10 p-8 mt-8 md:grid-cols-4 lg:grid-cols-7" >
            {COURSE.map((course, index) => (
                <Course  key={index} courseTitle={course}/>
            ))}
        </div>
        <Link href="/program" className="px-6 flex items-center justify-center gap-4 text-blue-900"><FaArrowRight className="w-8 h-8 text-blue-900 ring-1 ring-blue-900 p-1 rounded-full ring-offset-2" /> View more</Link>
    </div>
</section>
  )
}
export default Programs