import '@/assets/styles/globals.css'
import Navbar from '@/components/Navbar'

export const metadata = {
    title: 'ITSSC',
    description: 'Become An IT Pro',
    keywords: 'Aptech, ITSSC, Training Center, Agodi Ibadan, Kids Can Code, Coding School, Tech, IT, Programming, Computer School'
}

const MainLayout = ({children}) => {
  return (
   <html lang='en'>
    <body>
        <Navbar />
        <div>{children}</div>
    </body>
   </html>
  )
}
export default MainLayout