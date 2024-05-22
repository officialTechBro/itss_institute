import Image from "next/image"
import Link from "next/link"


const Work = () => {
  return (
    <section className="md:h-[500px]">
        <div className="container-xl lg:container m-auto">
            <div className="grid grid-cols-1 items-center justify-around gap-8 p-8 mt-8 md:grid-cols-2" >
                <div className="px-4 py-6 flex flex-col items-center justify-center md:block">
                    <h1 className="text-2xl font-bold tracking-widest font-nav my-4 text-center md:text-left text-black md:text-4xl">
                        What we do
                    </h1>
                    <p className="p-2 tracking-wider text-center md:text-left">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Amet eos delectus similique. Beatae illo nemo velit non 
                        facere quaerat obcaecati totam iure dignissimos delectus! Ipsam, ipsum 
                        explicabo animi blanditiis possimus quo labore accusamus quisquam 
                        minima eius neque eveniet eaque dicta!
                    </p>
                    <div className="border-solid border-2 text-sm tracking-widest bg-black text-white px-6 py-2 rounded-full mt-4 md:w-[300px] md:py-4 md:text-lg text-center transition duration-500 ease-in-out hover:bg-white hover:text-black">
                        <Link href='/about'>
                            Read More
                        </Link>
                    </div>
                </div>
                <div className="hidden md:block shadow-xl">
                    <Image 
                        src='/images/img4.jpg'
                        alt=""
                        className="object-cover h-1/2 w-full "
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