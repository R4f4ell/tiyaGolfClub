import Hero from "../components/hero/Hero";
import AboutTiya from "../components/about/AboutTiya";
import WaveSection from "../components/wave/WaveSection";
import Membership from "../components/membership/Membership";
import UpcomingEvents from "../components/upcomingEvents/UpcomingEvents";

const Home = () => {
  return (
    <main>
      <Hero />
      <AboutTiya />
      <WaveSection />
      <Membership />
      <UpcomingEvents />
    </main>
  )
}

export default Home