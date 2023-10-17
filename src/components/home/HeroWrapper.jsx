import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// eslint-disable-next-line react/prop-types
function HeroWrapper({ image }) {
  return (
    <div className="relative w-full h-[100vh]">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
      <img src={image} alt="hero" className="w-full h-full object-cover z-100" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-200 space-y-6">
        <h1 className="text-xl lg:text-4xl font-semibold ">Your trusted Partner for Seamless Property Management</h1>
        <h4 className="text-xs lg:text-lg text-white/80 font-normal">Experience Effortless Property Management with Inganta Facility Management Platform.</h4>
        <a href="#feature" className="inline-block px-4 py-3 bg-violet-800 rounded-md text-xs lg:text-md font-semibold">Discover Our Plateform  <FontAwesomeIcon icon={faArrowRight} /></a>
        
      </div>
    </div>
  );
}

export default HeroWrapper;
