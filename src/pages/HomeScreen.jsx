import Navbar from "../components/common/NavbarWrapper"
import HeroWrapper from "../components/home/HeroWrapper"
import FeatureWrapper from "../components/home/FeatureWrapper"
import AboutWrapper from "../components/home/AboutWrapper"
import TestimonyWrapper from "../components/home/TestimonyWrapper"
import ContactWrapper from "../components/home/ContactWrapper"
import FooterWrapper from "../components/common/FooterWrapper"

import HERO from "../assets/hero.jpg"
import ABOUT from "../assets/about.jpg"

function HomeScreen() {
  return (
    <div> 
        <Navbar/>  
        <HeroWrapper image={HERO}/> 
        <div className="w-full px-3 lg:px-20">
          <div id="feature">
            <FeatureWrapper/>
          </div>
          <div id="about">
          <AboutWrapper image={ABOUT}/>
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