import { Button } from "@/const"
import { ProgramBox1, ProgramBox2 } from "@/components/ProgramBox"
import Footer from "@/components/Footer"

const ProgramsPage = () => {
  return (
    <section className="px-4 py-6">
      <div className="container max-w-7xl px-6 mx-auto ">
        <h1 className="text-2xl font-bold tracking-widest font-nav my-12 text-center text-blue-950 md:text-4xl">
            Our Top Courses
        </h1>
        <ProgramBox1 
          imageSrc='/images/ui_ux.jpg'
          title = 'UI / UX'
          text = 'UI (User Interface) and UX (User Experience) development are integral components of designing digital products, such as websites, applications, and software. UI development focuses on the visual and interactive aspects, ensuring that the product is aesthetically pleasing and easy to navigate. This involves designing layouts, choosing color schemes, and creating interactive elements like buttons and menus. UX development, on the other hand, is concerned with the overall experience of the user, emphasizing the usability and functionality of the product. This includes conducting user research, creating prototypes, and testing for usability. Together, UI and UX development aim to create products that are not only visually appealing but also provide a seamless, efficient, and enjoyable experience for the user.'
        />
        <ProgramBox2 
          imageSrc='/images/frontend.jpg'
          title = 'Front-End Development'
          text = 'Front-end development is the practice of building and designing the part of a website or application that users directly interact with. It involves creating the visual elements and user interfaces that define the user experience on a web page or application. Front-end developers use a combination of technologies such as HTML, CSS, and JavaScript to implement designs, ensure responsiveness across different devices, and enhance interactivity. Their work bridges the gap between design and functionality, translating visual concepts into functional, accessible, and engaging digital interfaces. By focusing on performance, accessibility, and user-centric design, front-end development plays a crucial role in the success and usability of digital products.'
        />
        <ProgramBox1 
          imageSrc='/images/backend.jpg'
          title = 'Back-End Development'
          text = 'Back-end development is the practice of creating and managing the server-side components of a website or application, focusing on how the system works and ensuring its functionality, scalability, and performance. It involves building and maintaining the core application logic, databases, server configurations, and APIs (Application Programming Interfaces) that power the front-end. Back-end developers use programming languages such as Python, Java, Ruby, PHP, and frameworks like Node.js and Django to develop the infrastructure that handles data processing, storage, and communication between the server and the client. Their work ensures that the application can handle user requests, perform computations, and deliver data efficiently, providing a seamless and reliable user experience.'
        />
        <ProgramBox2 
          imageSrc='/images/project_mgt.jpg'
          title = 'Graphic Design'
          text = 'Graphic design is a creative discipline that uses visual elements to communicate messages and ideas effectively. It involves the use of typography, imagery, color, and layout to create a wide range of visual content, from logos and branding materials to websites, advertisements, and print media. Graphic designers utilize tools like Adobe Creative Suite and principles such as color theory and composition to craft aesthetically pleasing and functional designs. This field requires a blend of creativity and technical skill, making it essential for enhancing visual communication in various industries.'
        />
        <ProgramBox1 
          imageSrc='/images/mobile.jpg'
          title = 'Mobile Development'
          text = 'Mobile development encompasses both the front-end (user interface and experience) and back-end (server-side logic and data management) aspects of application creation. Developers focus on ensuring that mobile apps are responsive, intuitive, and optimized for performance and battery efficiency. They also consider factors such as device compatibility, screen sizes, and touch-based interactions. The goal of mobile development is to create engaging, user-friendly, and high-performing applications that provide a seamless experience for users on the go. This involves rigorous testing, iterative design, and continuous updates to adapt to the evolving mobile landscape and user expectations.'
        />
        <ProgramBox2 
          imageSrc='/images/cloud.jpg'
          title = 'T24 Core Banking'
          text = 'T24, developed by Temenos Group, is a comprehensive core banking software suite designed to cater to the needs of financial institutions of all sizes, from small community banks to large multinational banks. It features a modular architecture, allowing banks to customize and scale the system according to their specific needs. With real-time transaction processing, multi-channel support, and robust regulatory compliance tools, T24 enhances operational efficiency and customer experience. Its extensibility through APIs enables seamless integration with other systems, making it a versatile and future-proof solution for modern banking challenges.'
        />
        <div className="flex items-center justify-center my-6">
          <Button 
              classes = 'border-solid border-2 text-sm tracking-widest bg-blue-900 text-white px-6 py-2 rounded-full mt-4 md:w-full lg:w-[300px] md:py-4 md:text-lg text-center transition duration-500 ease-in-out hover:bg-white hover:text-blue-950'
              link = 'https://forms.gle/JsUVMFHnnuoxLTeM9'
              text = 'Apply Now'
          />
        </div>
      </div>
      <Footer />
    </section>
  )
}
export default ProgramsPage