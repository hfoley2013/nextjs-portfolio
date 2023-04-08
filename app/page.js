import Devicons from './Devicons.js';

export default function Home() {
  return (
    <>
      <section className="h-full px-4 pt-4 mx-auto bg-gray-900 max-w-screen sm:px-6 lg:px-8">
        <div className="container flex flex-col items-center justify-center mx-auto sm:flex-row sm:pt-4">
          <div className="justify-center mx-1 sm:pr-6">
            <h1 className="mb-1 text-2xl font-bold leading-tight text-teal-600 sm:text-xl">Hi, my name is</h1>
            <h2 className="mb-2 text-5xl font-bold leading-tight text-white sm:text-7xl">Harper Foley</h2>
            <h3 className="mb-3 text-2xl font-medium text-gray-400 sm:text-5xl">I build for banks and blockchains.</h3>
            <p className="max-w-md mt-5 mb-1 text-lg text-gray-400 sm:text-xl">I am a full stack engineer with experience in FinTech and blockchain technologies.</p>
            <p className="max-w-md mt-5 mb-5 text-lg text-gray-400 sm:text-xl">Currently, I am bringing greater insights into the gaming NFT marketplace at <a href="https://rainierracingco.com" target="_blank" className="text-white text-teal-600 underline">Rainier Racing NFT</a>.</p>
          </div>
          <div className="flex items-center">
            <Devicons />
          </div>
        </div>
      </section>

    </>
  );
}
