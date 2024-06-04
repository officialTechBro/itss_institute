import { Button } from "@/const"

const Enroll = () => {
  return (
    <section>
        <div className="mb-4 bg-blue-950">
            <div className="flex flex-col items-center justify-center mb-4 md:block md:py-20 md:px-8 h-[400px] text-white ">
                <p className="text-sm uppercase tracking-wide font-tiny font-light md:tracking-widest md:text-[18px] mb-6">Take Your Tech Career To The Next Level</p>
                <h1 className="text-2xl font-bold font-sans tracking-wide md:text-4xl lg:text-6xl">Ready To Get Started?</h1>
                <p className="text-sm tracking-wide text-center font-tiny mt-4 md:tracking-wide md:text-[14px] md:text-left md:max-w-2xl mb-4">
                  Join a diverse community of learners from around the world, expanding your network and perspectives.
                </p>
                <Button 
                    classes = 'text-white text-sm tracking-widest px-6 py-2 border border-white rounded-full mt-4 transition duration-500 ease-in-out hover:scale-75 md:w-[300px] md:py-4 md:text-lg'
                    link = '/apply'
                    text = 'Apply Now'
                />
            </div>
        </div>
    </section>
  )
}
export default Enroll