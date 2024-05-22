import Enroll from "@/components/Enroll"
import Footer from "@/components/Footer"
import Hero from "@/components/HeroSection"
import InfoBox from "@/components/InfoBox"
import Programs from "@/components/Programs"
import Question from "@/components/Question"
import Work from "@/components/Work"

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Work />
      <InfoBox />
      <Programs />
      <Enroll />
      <Question />
      <Footer />
    </div>
  )
}

export default HomePage