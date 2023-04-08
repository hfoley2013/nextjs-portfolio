import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faEnvelope, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope as faEnvelopeSolid } from '@fortawesome/free-solid-svg-icons'

export default function Header() {


  return (
    <nav className="bg-gray-900">
      <div id='main-nav' className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex justify-center h-16">
          <div className="flex items-center">
            <Link href="/" className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-white">Home</Link>
            <Link href="/about" className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-white">About</Link>
            <Link href="/portfolio" className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-white">Portfolio</Link>
            <Link href="/resume" className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-white">Resume</Link>
          </div>
        </div>
        <div className="flex items-center justify-center">
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
      </div>
    </nav>
  );
}
