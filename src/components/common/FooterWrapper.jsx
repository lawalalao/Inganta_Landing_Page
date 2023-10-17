import { faFacebookF, faTwitter, faInstagram, faLinkedin, faYoutube, faPinterest } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function FooterWrapper() {
  const iconSize = "1x"; // Vous pouvez ajuster la taille des icônes selon vos préférences

  return (
    <footer className="text-black/80 py-4">
      {/* Ligne horizontale */}
      <hr className="border-gray-300/80 my-4" />
      <div className="container mx-auto flex flex-col gap-4 lg:gap-0 lg:flex-row items-center justify-between">
        <div className="flex space-x-4">
          {/* Icônes sociales */}
          <a href="#" className="text-white hover:text-gray-400">
            <FontAwesomeIcon icon={faFacebookF} size={iconSize} className='text-violet-600' />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FontAwesomeIcon icon={faTwitter} size={iconSize} className='text-violet-600' />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FontAwesomeIcon icon={faInstagram} size={iconSize} className='text-violet-600' />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FontAwesomeIcon icon={faLinkedin} size={iconSize} className='text-violet-600' />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FontAwesomeIcon icon={faYoutube} size={iconSize} className='text-violet-600' />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FontAwesomeIcon icon={faPinterest} size={iconSize} className='text-violet-600' />
          </a>
        </div>
        <div className="text-center">
          {/* Copyright */}
          <p>&copy; {new Date().getFullYear()} Inganta Agency. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

export default FooterWrapper;
