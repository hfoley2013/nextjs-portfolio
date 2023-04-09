import Image from 'next/image';

export default function About() {

  const profilePhoto = "/img/profile_img.jpg"
  const tagLine = "Bombs -> Banking -> Backend"
  const about1 = "My name is Harper Foley and I am a full-stack software developer with a background in tech investment banking and Navy Special Operations. I spent eight years leading elite teams of bomb technicians across the globe in extremely fast-paced and ambiguous environments with a 100% mission success rate."
  const about2 = "After transitioning from the military in 2021, I broke into investment banking as a financial analyst specializing in Tech M&A and advised on 10 projects valued at ~$3.5 billion."
  const about3 = "I decided to move into software development because after learning some basic VBA and Python coding to eliminate a series of manual processes at work, I realized that I really enjoyed designing software programs and loved being the creator of tools that solved real world problems."
  const about4 = "I am currently working on a project, Rainier Racing Co., to build the “Robinhood” of Play-To-Earn Gaming that gives Web3 gamers access to the financial market data they need to make informed purchases of gaming NFTs."
  const about5 = "You should bring me onboard because I can uniquely bridge the gap between your product, engineering, and business teams by leveraging my leadership, finance, and coding experience to help build amazing products that your customers will love."

  return (
    <>
      <h1 className="pt-4 mb-2 text-2xl font-bold text-center text-gray-300 sm:text-4xl">{tagLine}</h1>
      <div className="flex flex-col justify-center sm:flex-row">
        <span className="order-1 bg-slate-200 inline-block mt-3 mx-2 sm:mt-5 sm:mx-auto mb-4 p-1.5 text-center">
          <Image
            className="block"
            src={profilePhoto}
            height={500}
            width={400}
            alt="Profile Photo"
            priority
          />
          <p className="my-auto text-lg font-bold text-black">Harper Foley</p>
        </span>
          <div className="order-2 w-full p-4 mx-2 mt-3 mb-4 font-mono text-white bg-black rounded-lg sm:mt-5 sm:mb-5 sm:mx-auto md:w-1/2">
            <div className="flex">
              <div className="w-3 h-3 mr-2 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 mr-2 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="my-4 sm:text-xs">
              <span className="text-green-500">EOD@navy2013:</span>
              <span className="text-blue-500">~</span>
              <span className="text-white">$</span>
              <span className="mx-2 text-sm">{about1}</span><br/><br/>
              <span className="mx-2 text-sm">{about2}</span><br/><br/>
              <span className="mx-2 text-sm">{about3}</span><br/><br/>
              <span className="mx-2 text-sm">{about4}</span><br/><br/>
              <span className="mx-2 text-sm">{about5}</span>
            </div>
          </div>
      </div>
    </>
  );
};
