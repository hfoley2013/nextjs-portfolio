import Link from 'next/link';

export default function Header() {
  
  return (
    <nav className="bg-gray-900 align-bottom">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-around h-16">
          <div className="hidden md:block flex items-center">
            <div className="ml-10 flex items-center space-x-4 h-full">
              <Link href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link href="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</Link>
              <Link href="/portfolio" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Portfolio</Link>
              <Link href="/resume" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Resume</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
