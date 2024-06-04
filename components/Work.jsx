import Image from "next/image"
import { Button } from "@/const"


const Work = () => {
  return (
    <section className="md:h-full">
        <div className="container-xl lg:container m-auto">
            <div className="grid grid-cols-1 items-center justify-around gap-8 p-8 mt-8 md:grid-cols-2" >
                <div className="px-4 py-6 flex flex-col items-center justify-center text-blue-950 md:block">
                    <h1 className="text-2xl font-bold tracking-widest font-nav my-4 text-center md:text-left md:text-4xl">
                        What we do
                    </h1>
                    <p className="p-2 tracking-wider text-justify md:text-left"> 
                        Introducing our comprehensive suite of software development, implementation, and training services. Our team of experienced IT professionals delivers cutting-edge solutions to streamline any business operations and drive digital transformation. With a focus on information technologies and consulting, we provide tailored services to optimize workflows, enhance productivity, and unlock new avenues for growth. We are seasoned software engineering firm specializing in fintech solutions that empower financial institutions to innovate and thrive in the digital age...
                    </p>
                    <Button 
                        classes = 'text-white bg-blue-900 text-sm tracking-widest px-6 py-2 border border-white rounded-full mt-4 transition duration-500 ease-in-out hover:scale-75 md:w-[300px] md:py-4 md:text-lg'
                        link = '/about'
                        text = 'Read More'
                    />
                </div>
                <div className="hidden md:block shadow-xl">
                    <Image 
                        src='/images/img4.jpg'
                        alt=""
                        className="object-cover h-1/2 w-full shadow-2xl"
                        width={0}
                        height={0}
                        size='100vw'
                        priority={true}
                        unoptimized
                    />
                </div>
            </div>
        </div>
    </section>
  )
}
export default Work