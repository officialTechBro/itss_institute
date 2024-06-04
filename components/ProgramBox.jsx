import { Button } from "@/const"
import Image from "next/image"

export const ProgramBox1 = ({imageSrc, title, text}) => {
  return (
    <div className="flex flex-col gap-10 items-center justify-center">
            <div className="relative grid grid-cols-1 items-center justify-around gap-8 mt-2 lg:grid-cols-2" >
                <div className="py-6 flex flex-col items-center justify-center md:block">
                    <h1 className="text-2xl font-bold tracking-widest font-nav my-4 text-center lg:text-left text-blue-950 md:text-4xl">
                       {title}
                    </h1>
                    <p className="py-2 max-w-2xl tracking-wider text-justify text-blue-950">
                        {text}
                    </p>
                    <Button 
                        classes = 'border-solid border-2 text-sm tracking-widest bg-blue-900 text-white px-6 py-2 rounded-full mt-4 md:w-full lg:w-[300px] md:py-4 md:text-lg text-center transition duration-500 ease-in-out hover:bg-white hover:text-blue-950'
                        link = '/apply'
                        text = 'Apply Now'
                    />
                </div>
                <div className="hidden lg:block shadow-xl">
                    <Image 
                        src={imageSrc}
                        alt={title}
                        className="object-cover h-1/2 w-full shadow-xl"
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


export const ProgramBox2 = ({imageSrc, title, text}) => {
  return (
    <div className="flex flex-col gap-10 items-center justify-center">
            <div className="relative grid grid-cols-1 items-center justify-around gap-8  mt-2 lg:grid-cols-2" >
                <div className="py-6 flex flex-col items-center order-last justify-center md:block">
                    <h1 className="text-2xl font-bold tracking-widest font-nav my-4 text-center lg:text-right text-blue-950 md:text-4xl">
                       {title}
                    </h1>
                    <p className="py-2 max-w-2xl tracking-wider text-justify text-blue-950">
                        {text}
                    </p>
                    <Button 
                        classes = 'border-solid border-2 text-sm tracking-widest bg-blue-900 text-white px-6 py-2 rounded-full mt-4 text-center transition duration-500 ease-in-out hover:bg-white hover:text-blue-950 md:w-full lg:w-[300px] md:py-4 md:text-lg'
                        link = '/apply'
                        text = 'Apply Now'
                    />
                </div>
                <div className="hidden lg:block shadow-xl">
                    <Image 
                        src={imageSrc}
                        alt={title}
                        className="object-cover h-1/2 w-full shadow-xl"
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


