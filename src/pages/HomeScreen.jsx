import Navbar from "../components/common/NavbarWrapper"
import HeroWrapper from "../components/home/HeroWrapper"
import FeatureWrapper from "../components/home/FeatureWrapper"
import AboutWrapper from "../components/home/AboutWrapper"
import TestimonyWrapper from "../components/home/TestimonyWrapper"
import ContactWrapper from "../components/home/ContactWrapper"
import FooterWrapper from "../components/common/FooterWrapper"

import HERO from "../assets/hero.jpg"
import ABOUT from "../assets/about.jpg"
import CardNewsletter from "../components/home/CardNewsletter"

function HomeScreen() {
  return (
    <div>
      <Navbar />
      <div className="lg:mt-[90px]">
        <HeroWrapper image={HERO} />
      </div>
      <div className="w-full px-3 lg:px-20 space-y-11">
        <div id="feature">
          <FeatureWrapper />
        </div>
        <div id="about">
          <AboutWrapper image={ABOUT} />
        </div>
        <div id="testimonial">
          <TestimonyWrapper />
        </div>
        <CardNewsletter />

        <div id="contact">
          <ContactWrapper />
        </div>
        <FooterWrapper />
      </div>
    </div>
  )
}

export default HomeScreen