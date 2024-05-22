import Image from "next/image"

const Hero = () => {
  return (
    <section>
        <div className="mb-4">
            <div>
                <div className="relative h-[400px] md:h-[600px]">
                    <Image 
                        src='/images/hero.jpg'
                        alt=""
                        className="object-cover h-full w-full"
                        width={0}
                        height={0}
                        size='100vw'
                        priority={true}
                        unoptimized
                    />
                    <div className="absolute top-0 left-0 flex justify-center items-center h-full w-full bg-grad-0">
                        <div className="flex flex-col items-center justify-center mt-8">
                            <div className="flex flex-col items-center justify-center text-white space-y-2 mb-2">
                                <p className="text-sm uppercase tracking-wide font-tiny font-light md:tracking-widest md:text-lg lg:text-2xl">start your career in tech</p>
                                <h1 className="text-2xl font-bold font-logo tracking-wide md:text-4xl lg:text-6xl">Study to become a global talent</h1>
                                <p className="text-[12px] max-w-md text-center tracking-wide md:max-w-2xl lg:max-w-4xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid iure aut voluptate, natus sapiente tempora nostrum similique officiis nam ipsum, tenetur officia adipisci eligendi exercitationem! Voluptatibus in</p>
                            </div>
                            <button className="text-white text-sm tracking-widest px-6 py-2 border border-white rounded-full mt-4 transition duration-500 ease-in-out hover:scale-75 md:w-[300px] md:py-4 md:text-lg">
                                Apply Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
export default Hero