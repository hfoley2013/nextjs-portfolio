'use client';
import React, {useState} from 'react';
import Image from 'next/image';
import ProjectDetails from './ProjectDetails.js';

const portfolio = [
  {
    "title": "CleanAir Compass",
    "startDate": "2023",
    "description": "A web application that allows users to view an interactive Air Quality Index (AQI) heatmap of the United States and receive SMS alerts for areas of interest.",
    "images": [
      "/img/portfolio/cleanaircompass/cac_home.png",
      "/img/portfolio/cleanaircompass/cac_heatmap.png",
      "/img/portfolio/cleanaircompass/cac_modal.png",
      "/img/portfolio/cleanaircompass/cac_demo.gif"
    ],
    "url": "https://clean-air-compass-mzvbj.ondigitalocean.app/",
    "technologies": [
      {
        "class": "devicon-python-plain",
        "name": "Python"
      },
      {
        "class": "devicon-django-plain",
        "name": "Django (DRF)"
      },
      {
        "class": "devicon-nextjs-original",
        "name": "Next.js"
      },
      {
        "class": "devicon-sqlite-plain",
        "name": "SQLite"
      },
      {
        "class": "devicon-kaggle-plain",
        "name": "Kaggle"
      },
      {
        "class": "devicon-google-plain",
        "name": "Google"
      }
    ]
  },
  {
    "title": "ThroughZED Analytics",
    "startDate": "2023",
    "description": "The number one tool for valuing NFT horses on the ZED RUN digital horse racing platform.",
    "images": [
      "/img/portfolio/throughzed/tz_demo.gif"
    ],
    "url": "https://github.com/ThoroughZed-Analytics/Thoroughzed",
    "technologies": [
      {
        "class": "devicon-python-plain",
        "name": "Python"
      },
      {
        "class": "devicon-sqlite-plain",
        "name": "SQLite"
      },
      {
        "class": "devicon-kaggle-plain",
        "name": "Kaggle"
      },
      {
        "class": "devicon-pandas-plain",
        "name": "Pandas"
      }
    ]
  },
  {
    "title": "Rainier Racing Co. NFT",
    "startDate": "2022",
    "description": "Building out the 'CapitalIQ' of Play-To-Earn gaming. RRC gives Web3 gamers access to the financial market data they need to make informed purchases of gaming NFTs and start generating higher ROI. MVP consists of concentrated focus on the digital horse racing game ZED Run and tracking its associated secondary market of NFT sales.",
    "images": [
      "/img/portfolio/rrc/RRC-home.png",
      "/img/portfolio/rrc/RRC-screener.png"
    ],
    "url": "https://rainierracingco.com/",
    "technologies": [
      {
        "class": "devicon-react-plain",
        "name": "React"
      },
      {
        "class": "devicon-html5-plain",
        "name": "HTML"
      },
      {
        "class": "devicon-javascript-plain",
        "name": "JavaScript"
      },
      {
        "class": "devicon-css3-plain",
        "name": "CSS3"
      }
    ]
  },
  {
    "title": "Target Practice",
    "startDate": "2022",
    "description": "Target Practice is a JavaScript based game where the goal is to shoot down ducks. Based on the Nintendo classic Duck Hunt, our game pays homage to a true classic while also flexing skills with HTML, CSS, and vanilla JavaScript. Compete against players from around the globe and see how high you can score!",
    "images": [
      "/img/portfolio/targetpractice/target-practice-cover.png",
      "/img/portfolio/targetpractice/game-page.png"
    ],
    "url": "https://cf201-team-black.github.io/target-practice/",
    "technologies": [
      {
        "class": "devicon-html5-plain",
        "name": "HTML"
      },
      {
        "class": "devicon-javascript-plain",
        "name": "JavaScript"
      },
      {
        "class": "devicon-css3-plain",
        "name": "CSS3"
      }
    ]
  }
]

export default function Portfolio() {
  const [detailsModalShow, setDetailsModalShow] = useState(false);
  const [deps, setDeps] = useState({});

  const handleDetailsModalShow = (data) => {
    setDetailsModalShow(true);
    setDeps(data);
  };

  const handleDetailsModalClose = () => setDetailsModalShow(false);

  const sectionName = "Projects";

  const projects = portfolio.map((project) => (
    <div key={project.title} className="w-full sm:w-1/2 md:w-1/3 px-4 mb-4">
      <div className="">
        <Image
          src={project.images[0]}
          alt="projectImages"
          height={230}
          width={200}
        />
      </div>
      <div className="bg-white rounded-lg shadow-lg p-4">
        <div className="bg-gray-200 text-gray-800 text-center rounded-full py-2 px-4 mb-2">
          {project.startDate}
        </div>
        <h3 className="text-xl text-center font-bold mb-2">{project.title}</h3>
        {/* Add other project details here */}
      </div>
    </div>
  ));

  return (
    <div className="container mx-auto px-4">
    <h2 className="text-3xl text-gray-300 text-center font-bold mb-4">{sectionName}</h2>
    <div className="flex flex-wrap -mx-4">
      {projects}
    </div>
  </div>
  );
};
