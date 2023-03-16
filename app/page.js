import Devicons from './Devicons.js';

export default function Home() {
  return (
    <>
      <section className="bg-gray-900 h-full max-w-screen mx-auto px-4 pt-4 sm:px-6 lg:px-8">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center sm:pt-4">
          <div className="justify-center mx-1 sm:pr-6">
            <h1 className="text-2xl sm:text-xl font-bold leading-tight text-teal-600 mb-1">Hi, my name is</h1>
            <h2 className="text-5xl sm:text-7xl font-bold leading-tight text-white mb-2">Harper Foley</h2>
            <h3 className="text-2xl sm:text-5xl font-medium text-gray-400 mb-3">I build for banks and blockchains.</h3>
            <p className="text-lg sm:text-xl text-gray-400 max-w-md mt-5 mb-1">I am a full stack engineer with experience in FinTech and blockchain technologies.</p>
            <p className="text-lg sm:text-xl text-gray-400 max-w-md mt-5 mb-5">Currently, I am bringing greater insights into the gaming NFT marketplace at <a href="https://rainierracingco.com" target="_blank" className="text-white underline text-teal-600">Rainier Racing NFT</a>.</p>
          </div>
          <div className="flex items-center">
            <Devicons />
          </div>
        </div>
      </section>

    </>
  );
}
