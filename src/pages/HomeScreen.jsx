import Navbar from "../components/common/NavbarWrapper"
import HERO from "../assets/hero.jpg"
import HeroWrapper from "../components/home/HeroWrapper"
import FeatureWrapper from "../components/home/FeatureWrapper"
import AboutWrapper from "../components/home/AboutWrapper"
import TestimonyWrapper from "../components/home/TestimonyWrapper"
import ContactWrapper from "../components/home/ContactWrapper"
import FooterWrapper from "../components/common/FooterWrapper"

function HomeScreen() {
  return (
    <div> 
        <Navbar/>  
        <HeroWrapper image={HERO}/> 
        <div className="w-full px-20">
          <div id="feature">
            <FeatureWrapper/>
          </div>
          <div id="about">
          <AboutWrapper/>

          </div>
          <div id="testimonials">
          <TestimonyWrapper/>

          </div>
          <div id="contact">
          <ContactWrapper/>
          </div>
        <FooterWrapper />
        </div>
  </div>
  )
}

export default HomeScreen