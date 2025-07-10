import Hero from "../components/hero/Hero";
import AboutTiya from "../components/about/AboutTiya";
import WaveSection from "../components/wave/WaveSection";
import Membership from "../components/membership/Membership";
import UpcomingEvents from "../components/upcomingEvents/UpcomingEvents";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import OndaFinal from "../components/ondaFinal/OndaFinal";

const Home = () => {
  return (
    <main>
      <Hero />
      <AboutTiya />
      <WaveSection />
      <Membership />
      <UpcomingEvents />
      <Contact />
      <Footer />
      <OndaFinal />
    </main>
  )
}

export default Home