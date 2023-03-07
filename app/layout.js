import './globals.css';
import Header from './Header.js';
import Footer from './Footer.js';


export const metadata = {
  title: 'Harper Foley: Full-Stack Developer',
  description: 'The personal & professional software portfolio of Harper Foley.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"/>
      </head>
      <body className='bg-gray-900'>
        <div className="flex flex-col min-h-screen">
          <div className='flex-grow'>
            <Header />
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
