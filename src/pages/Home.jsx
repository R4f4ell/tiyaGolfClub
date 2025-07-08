import Hero from "../components/hero/Hero";
import AboutTiya from "../components/about/AboutTiya";
import WaveSection from "../components/wave/WaveSection";
import Membership from "../components/membership/Membership";

const Home = () => {
  return (
    <main>
      <Hero />
      <AboutTiya />
      <WaveSection />
      <Membership />
      {/* Outras sections da Home virão depois */}
    </main>
  )
}

export default Home