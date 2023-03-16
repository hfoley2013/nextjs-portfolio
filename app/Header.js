import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faEnvelope, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope as faEnvelopeSolid } from '@fortawesome/free-solid-svg-icons'

export default function Header() {


  return (
    <nav className="bg-gray-900">
      <div id='main-nav' className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
            <Link href="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</Link>
            <Link href="/portfolio" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Portfolio</Link>
            <Link href="/resume" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Resume</Link>
          </div>
        </div>
        <div className="flex justify-center items-center">
            <a href="https://github.com/hfoley2013" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white mr-4">
              <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/harper-e-foley/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white mr-4">
              <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/rainier_racing_nft/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white mr-4">
              <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
            </a>
            <a href="https://twitter.com/RainierRacingCo/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white mr-4">
              <FontAwesomeIcon icon={faTwitter} className="w-5 h-5" />
            </a>
            <a href="mailto:harper.e.foley@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              <FontAwesomeIcon icon={faEnvelopeSolid} className="w-5 h-5" />
            </a>
          </div>
      </div>
    </nav>
  );
}
