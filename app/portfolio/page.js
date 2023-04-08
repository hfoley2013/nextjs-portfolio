'use client';
import React, {useState} from 'react';
// import Image from 'next/image';
import ProjectDetails from './ProjectDetails.js';

const portfolio = [
  {
    "title": "CleanAir Compass",
    "startDate": "2023",
    "description": "A web application that allows users to view an interactive Air Quality Index (AQI) heatmap of the United States and receive SMS alerts for areas of interest.",
    "images": [
      "/img/portfolio/cleanaircompass/cac_demo.gif",
      "/img/portfolio/cleanaircompass/cac_home.png",
      "/img/portfolio/cleanaircompass/cac_heatmap.png",
      "/img/portfolio/cleanaircompass/cac_modal.png"
    ],
    "url": "https://clean-air-compass-mzvbj.ondigitalocean.app/",
    "technologies": [
      {
        "class": "devicon-python-plain",
        "name": "Python"
      },
      {
        "class": "devicon-django-plain",
        "name": "Django"
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
    <div key={project.title} className="max-w-lg m-5 overflow-hidden text-center bg-gray-400 rounded shadow-lg">
      <a href={project.url} className="font-bold text-2xl sm:text-3xl hover:text-gray-900/[0.7]">{project.title}</a>
      <a href={project.url} target="_blank">
        <img className="object-contain w-full p-3 h-96" src={project.images[0]} alt={project.title} />
      </a>
      <div className="px-6">
        <p className="text-lg text-gray-800 sm:text-xl">
          {project.description}
        </p>
      </div>
      <div className="flex flex-wrap justify-center px-6 pt-4 pb-2">
        {project.technologies.map((tech) => (
          <span key={tech.name} className="inline-block px-4 py-4 mx-1 my-1 text-2xl font-semibold text-gray-800 bg-gray-200 rounded-full sm:text-4xl">
            <div key={tech.name} className="flex flex-col items-center justify-center px-2 text-lg sm:text-xl">
              <i className={`${tech.class} text-2xl sm:text-4xl`}></i>
                <div className="justify-center">
                  <p className="mt-0 text-gray-800">{tech.name}</p>
                </div>
            </div>
          </span>
        ))}
      </div>
    </div>
  ));

  return (
    <div className="container px-4 mx-auto">
    <h2 className="pt-4 mb-4 text-2xl font-bold text-center text-gray-300 sm:text-4xl">{sectionName}</h2>
    <div className="flex flex-wrap justify-center">
      {projects}
    </div>
  </div>
  );
};
