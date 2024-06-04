import '@/assets/styles/globals.css'
import Navbar from '@/components/Navbar'

export const metadata = {
    title: 'ITSSC',
    description: 'Become An IT Pro',
    keywords: 'IT, Training, ITSS, T24, Infinity, WebDevelopment'
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