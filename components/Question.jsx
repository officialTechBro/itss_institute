import Link from "next/link"


const Question = () => {
  return (
    <section className="md:h-[500px] bg-gray-50">
        <div className="container-xl lg:container m-auto">
            <h1 className="text-2xl font-bold tracking-widest font-nav my-12 text-center text-black md:text-4xl">
                Talk To Us
            </h1>
            <div className="grid grid-cols-1 items-center justify-around gap-8 p-8 mt-8 md:grid-cols-2" >
                <div className="md:block">
                    <form>
                        <div className="mb-4">
                            <input 
                                type="text"
                                name="name"
                                className="border rounded w-full py-2 px-3 mb-2"
                                placeholder="Name"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <input 
                                type="email"
                                name="email"
                                className="border rounded w-full py-2 px-3 mb-2"
                                placeholder="Email"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <textarea 
                                name="message"
                                className="border rounded w-full py-2 px-3 mb-2"
                                placeholder="Message"
                                rows="4"
                                required
                            ></textarea>
                        </div>
                        <div className="mb-4">
                            <button className="border rounded-full w-full py-3 px-3 mb-2 bg-black text-white focus:outline-none hover:bg-gray-500">
                                Send
                            </button>
                        </div>
                    </form>
                </div>
                <div className="px-4 py-2 flex flex-col items-center justify-center md:block">
                    <h1 className="text-xl font-bold tracking-widest font-nav my-4 text-center text-black md:text-2xl">
                        Our Office
                    </h1>
                    <p className="p-2 tracking-wider text-center md:text-left">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, voluptatibus nobis! Illo voluptates quam modi? Quam est, quos natus dolorum hic culpa maxime soluta, sit placeat blanditiis officiis asperiores excepturi.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}
export default Question