import Link from "next/link"

const Apply = () => {
  return (
    <section className=" h-full">
      <div className="container max-w-7xl px-6 mx-auto mt-10">
        <div className="rounded-lg bg-gray-50 text-black pb-6">
              <h2 className="font-bold text-lg text-center font-nav pt-8 md:text-2xl">Transform into a world-class software Engineer Today</h2>
              <p className="text-sm max-w-4xl text-center font-nav mt-2">Join our software engineering program for expertise, mentorship, internship and job placement support. Elevate your career now!</p>
              <div className="mt-4">
                <h2 className="font-bold text-lg text-center font-nav md:text-xl">Top Courses</h2>
                <div className="grid grid-cols-2 items-center justify-around gap-8 p-4 mt-2 md:grid-cols-4 lg:grid-cols-5" >
                  <div className="bg-white px-2 py-4 shadow-md rounded-xl text-black font-bold font-nav text-center">
                      Front-End Engineering
                  </div>
                  <div className="bg-white px-2 py-4 shadow-md rounded-xl text-black font-bold font-nav text-center">
                      Back-End Engineering
                  </div>
                  <div className="bg-white px-2 py-4 shadow-md rounded-xl text-black font-bold font-nav text-center">
                      Cloud Engineering
                  </div>
                  <div className="bg-white px-2 py-4 shadow-md rounded-xl text-black font-bold font-nav text-center">
                      Dev-Op Engineering
                  </div>
                  <div className="bg-white px-2 py-4 shadow-md rounded-xl text-black font-bold font-nav text-center">
                      Project/Product Management
                  </div>
                </div>
              </div>
        </div>
        <div className="rounded-lg bg-gray-50 text-black mt-8 pb-6">
        <h2 className="font-bold text-lg text-center font-nav pt-8 md:text-2xl">Get started with you application</h2>
        <form className="mt-6 px-4 md:w-[600px] mx-auto">
        <div className="mb-4">
            <input 
                type="email"
                name="email"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Enter your email"
                required
            />
          </div>
          <button className="w-full text-center py-3 px-4 bg-black text-white rounded">
            <Link href='/'>Get Started</Link>
          </button>
        </form>
        </div>
      </div>
    </section>
    // <div className="bg-gray-100 h-full">
    //     <div className="flex flex-col items-center justify-center gap-6 mt-20">
    //       <div className="rounded-md bg-white text-black">
    //               <h1 className="uppercase text-center text-lg font-bold font-logo md:text-xl">training</h1>
    //               <h2 className="font-bold text-lg text-center font-nav md:text-xl">Transform into a world-class software Engineer Today</h2>
    //               <p className="text-sm max-w-2xl text-center font-nav">Join our software engineering program for expertise, mentorship, internship and job placement support. Elevate your career now!</p>
    //               <div>
    //                 <h2 className="font-bold text-lg text-center font-nav md:text-xl">Top Courses</h2>
    //               </div>
    //       </div>
    //     </div>
    // </div>
  )
}
export default Apply