import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faEnvelope, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope as faEnvelopeSolid } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  return (
    <footer className="justify-around w-full bg-gray-900">
      <div className="container px-4 py-8 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="flex items-center">
            <span className="mr-2 font-semibold text-gray-300">Connect with me:</span>
            <a href="https://github.com/hfoley2013" target="_blank" rel="noopener noreferrer" className="mr-4 text-gray-300 hover:text-white">
              <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/harper-e-foley/" target="_blank" rel="noopener noreferrer" className="mr-4 text-gray-300 hover:text-white">
              <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/rainier_racing_nft/" target="_blank" rel="noopener noreferrer" className="mr-4 text-gray-300 hover:text-white">
              <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
            </a>
            <a href="https://twitter.com/RainierRacingCo/" target="_blank" rel="noopener noreferrer" className="mr-4 text-gray-300 hover:text-white">
              <FontAwesomeIcon icon={faTwitter} className="w-5 h-5" />
            </a>
            <a href="mailto:harper.e.foley@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              <FontAwesomeIcon icon={faEnvelopeSolid} className="w-5 h-5" />
            </a>
          </div>
          <div className="mt-4 md:mt-0">
            <span className="text-gray-300">© 2023 Harper Foley</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
