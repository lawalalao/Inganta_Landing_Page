import {
  faBars,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import COVER from "../../assets/inganta_logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white text-black p-4 lg:top-0 w-full lg:z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div  className="flex items-center">
          <a to="#">
            <img src={COVER} className="w-40" alt="Logo" />
          </a>
        </div>
        <div className="font-semibold hidden lg:flex lg:items-center lg:justify-center space-x-4">
          <a href="#" className="hover:text-violet-700">
           Home
          </a>
          <a href="#features" className="hover:text-violet-700">
            Features
          </a>
          <a href="#testimonials" className="hover:text-violet-700">
            Testimonials
          </a>
          <a href="#about" className="hover:text-violet-700">
            About
          </a>
          <a href="#contact" className="hover:text-violet-700">
            Contact us
          </a>
        </div>
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? (
              <FontAwesomeIcon icon={faClose} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden w-full flex flex-col gap-3 mt-2 justify-center items-center bg-gray-900">
          <a href="#" className="hover:text-violet-700">
           Home
          </a>
          <a href="#features" className="hover:text-violet-700">
            Features
          </a>
          <a href="#testimonials" className="hover:text-violet-700">
            Testimonials
          </a>
          <a href="#about" className="hover:text-violet-700">
            About
          </a>
          <a href="#contact" className="hover:text-violet-700">
            Contact us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
