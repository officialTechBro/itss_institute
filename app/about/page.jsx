
export const metadata = {
  title: 'About ITSSC',
  description: 'Learn more about ITSSC',
  keywords: 'Aptech, ITSSC, Training Center, Agodi Ibadan, About ITSSC, Coding School, Tech, IT, Programming, Computer School'
}

const AboutPage = () => {
  return (
    <section >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-start justify-center gap-4 my-10 px-4 mb-10">
          <div className="mb-10">
            <h1 className=" text-center text-blue-950 text-2xl font-bold tracking-widest font-nav my-4 md:text-left md:text-4xl">
              About Us
            </h1>
            <p className="p-2 tracking-wider text-justify text-blue-950">
              Welcome to <span className="text-blue-800 font-bold">INFO-TECH SOLUTION AND SERVICES CONSULTS (ITSSC)</span>, introducing our comprehensive suite of software development, implementation, and training services. Our team of experienced IT professionals delivers cutting-edge solutions to streamline any business operations and drive digital transformation. With a focus on information technologies and consulting, we provide tailored services to optimize workflows, enhance productivity, and unlock new avenues for growth. We are seasoned software engineering firm specializing in fintech solutions that empower financial institutions to innovate and thrive in the digital age. From the core banking application to the digital banking transformation. We provide training services for individuals, coporate organizations, and business owners on the latest technologies. We have a franchise with Aptech Computer Education
            </p>
          </div>

          <div className="flex flex-col items-center gap-6 mb-10 mx-2 md:flex-row">
            <div className="bg-blue-100 py-4 px-6">
              <h1 className="text-xl text-blue-950 font-bold tracking-widest font-nav my-4 text-center md:text-left md:text-2xl">
                Our Mission
              </h1>
              <p className="p-2 tracking-wider text-justify text-blue-950">
                Our mission is to provide high-quality, accessible education in computer programming. We aim to inspire and empower students to achieve their full potential, fostering a lifelong love for coding and continuous learning.
              </p>
            </div>
            <div className="bg-red-100 py-4 px-6">
              <h1 className="text-xl text-blue-950 font-bold tracking-widest font-nav my-4 text-center md:text-left md:text-2xl">
                Our Vision
              </h1>
              <p className="p-2 tracking-wider text-justify text-blue-950">
                We envision a world where anyone with the passion and dedication can become a proficient programmer. By offering comprehensive, hands-on training, we strive to bridge the gap between aspiring developers and the tech industry’s ever-evolving demands.
              </p>
            </div>
          </div>

          <div>
              <h1 className="text-xl text-blue-950 font-bold tracking-widest font-nav my-4 text-center md:text-left md:text-2xl">
                Our Value
              </h1>
              <ul className="list-disc px-6">
                <li className="p-2 tracking-wider text-justify text-blue-950">
                  <span className="font-bold">Excellence:</span> We are committed to delivering top-notch education and ensuring our students are well-prepared for their careers.
                </li>
                <li className="p-2 tracking-wider text-justify text-blue-950">
                  <span className="font-bold">Innovation:</span> We are committed to continuous improvement and staying ahead of the curve through creativity and technological advancement.
                </li>
                <li className="p-2 tracking-wider text-justify text-blue-950">
                  <span className="font-bold">Integrity:</span> We conduct our business with the highest ethical standards, ensuring transparency, honesty, and respect in all our dealings.
                </li>
                <li className="p-2 tracking-wider text-justify text-blue-950">
                  <span className="font-bold">Sustainability:</span> We are dedicated to minimizing our environmental impact and promoting sustainability in all aspects of our operations.
                </li>
                <li className="p-2 tracking-wider text-justify text-blue-950">
                  <span className="font-bold">Community:</span> We believe in giving back to the community and making a positive impact through our corporate social responsibility initiatives.
                </li>
              </ul>
          </div>

          {/* <div className="mt-6 bg-gray-50 px-6 md:grid md:grid-cols-2 space-x-10">
              <div className="md:flex md:flex-col items-center justify-center">
                <h1 className="text-xl font-bold tracking-widest font-nav my-4 text-center md:text-left md:text-2xl">
                  Meet Our Team
                </h1>
                <p className="text-sm py-2 tracking-wider text-center md:text-left md:text-xl">
                  Our team is composed of talented and dedicated professionals who share a common goal: to provide the best possible experience for our customers. With a diverse range of skills and expertise, we work together to bring our vision to life and achieve our mission.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 my-4 gap-4">
                {Teams.map((staff) => (
                  <div className="bg-white shadow-md px-4 py-6">
                    <h3>{staff.name}</h3>
                    <p>{staff.position}</p>
                  </div>
                ))}
              </div>
          </div> */}

        </div>
      </div>
    </section>
  )
}
export default AboutPage