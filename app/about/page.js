import Image from 'next/image';

export default function About() {
  
  const profilePhoto = "/img/profile_img.jpg"
  const tagLine = "Bombs -> Banking -> Backend"
  const about = "My name is Harper Foley and I am a full-stack software developer with a background in tech investment banking and Navy Special Operations. I spent eight years leading elite teams of bomb technicians across the globe in extremely fast-paced and ambiguous environments with a 100% mission success rate. After transitioning from the military in 2021, I broke into investment banking as a financial analyst specializing in Tech M&A and advised on 10 projects valued at ~$3.5 billion. I decided to move into software development because after learning some basic VBA and Python coding to eliminate a series of manual processes at work, I realized that I really enjoyed designing software programs and loved being the creator of tools that solved real world problems. I am currently working on a project, Rainier Racing Co., to build the “Robinhood” of Play-To-Earn Gaming that gives Web3 gamers access to the financial market data they need to make informed purchases of gaming NFTs. You should bring me onboard because I can uniquely bridge the gap between your product, engineering, and business teams by leveraging my leadership, finance, and coding experience to help build amazing products that your customers will love."

  return (
    <>
      <h1 className="text-4xl text-gray-300 mb-4 text-center">{tagLine}</h1>
      <div className="flex mx-auto">
        <span className="bg-slate-200 inline-block mt-14 mx-20 mb-8 pt-3.5 px-3.5 pb-7 text-center relative">  
          <Image
            className="block"
            src={profilePhoto}
            height={500}
            width={400}
            alt="Profile Photo"
            priority
          />
          <p className="text-black font-bold text-lg my-auto">Harper Foley</p>
        </span>
        <div className="bg-black text-white font-mono p-4 mx-auto rounded-lg w-1/2">
          <div className="flex">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="my-4">
            <span className="text-green-500">guest@localhost:</span>
            <span className="text-blue-500">~</span>
            <span className="text-white">$</span>
            <span className="mx-2 text-sm">{about}</span>
          </div>
        </div>
      </div>
    </>
  );
}
