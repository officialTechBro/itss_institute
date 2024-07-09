import Enroll from "@/components/Enroll"
import Footer from "@/components/Footer"
// import Hero from "@/components/HeroSection"
import InfoBox from "@/components/InfoBox"
import Programs from "@/components/Programs"
import Question from "@/components/Question"
import Slider from "@/components/Slider"
import Work from "@/components/Work"

const HomePage = () => {
  return (
    <div>
      <Slider />
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