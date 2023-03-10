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
    <div key={project.title} className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-400 m-5">
      <a href={project.url} target="_blank"><img className="w-full h-96 object-contain p-1" src={project.images[0]} alt={project.title} /></a>
      <div className="px-6 py-4 text-center">
        <a href={project.url} className="font-bold text-xl mb-2">{project.title}</a>
        <p className="text-gray-800 text-base">
          {project.description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 flex flex-wrap justify-center">
        {project.technologies.map((tech) => (
          <span key={tech.name} className="inline-block bg-gray-200 rounded-full px-3 py-3 text-4xl font-semibold text-gray-800 mx-1 my-1">
            <div key={tech.name} className="justify-center px-2 text-6xl sm:text-4xl">
              <i className={tech.class}>
                <div className="text-center">
                  <p className="text-gray-800 text-xl mt-0 sm:text-sm">{tech.name}</p>
                </div>
              </i>
            </div>
          </span>
        ))}
      </div>
    </div>
  ));

  return (
    <div className="container mx-auto px-4">
    <h2 className="text-3xl text-gray-300 text-center font-bold mb-4">{sectionName}</h2>
    <div className="flex flex-wrap justify-center">
      {projects}
    </div>
  </div>
  );
};
