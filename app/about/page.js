import Image from 'next/image';

export default function About() {

  const profilePhoto = "/img/profile_img.jpg"
  const tagLine = "Bombs => Banking => Backend"
  const tagLine2 = "Fusing high-stakes leadership, financial acumen, and engineering proficiency to drive breakthrough innovation"
  const about1 = "Hey there, I'm Harper Foley, a full-stack software developer who's had a pretty interesting journey. I started off in Navy Special Ops, leading bomb tech teams around the world in intense and unpredictable situations. It was all about mission success, and we nailed it every single time."
  const about2 = "But then, in 2021, I made a shift and jumped into the world of investment banking as a financial analyst. I specialized in Tech M&A, advising on projects worth a whopping $3.5 billion! It was exhilarating, but something inside me craved more."
  const about3 = "That's when I discovered my passion for software development. It all began with me tinkering around with VBA and Python to automate some mundane tasks at work. I realized how much I loved designing software programs and being the creator of tools that solve real-world problems."
  const about4 = "Right now, I'm knee-deep in an exciting project called Rainier Racing Co. Our aim? To build the \"Robinhood\" of Play-To-Earn Gaming, giving Web3 gamers access to the financial market data they need for smart purchases of gaming NFTs. It's cutting-edge stuff, and I'm loving every minute of it."
  const about5 = "Why should you bring me onboard? Well, I bring a unique blend of leadership, finance, and coding experience. I can be the bridge between your product, engineering, and business teams, ensuring we build amazing products that your customers will absolutely love."
  const about6 = "So, if you're looking for someone who's been in the trenches, knows how to handle high-pressure situations, and can code up a storm, look no further. Let's team up and create something truly incredible together!"

  return (
    <>
      <h1 className="pt-4 mb-2 text-2xl font-bold text-center text-gray-300 sm:text-4xl">{tagLine}</h1>
      <h2 className="pt-4 mb-2 text-xl font-bold text-center text-gray-300 sm:text-2xl">{tagLine2}</h2>
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
              <span className="mx-2 text-sm">{about5}</span><br/><br/>
              <span className="mx-2 text-sm">{about6}</span>
            </div>
          </div>
      </div>
    </>
  );
};
