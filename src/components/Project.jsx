// Project.js

import React from 'react';
import miniProjectImg from '../image/TPM.png';
import jetFlixImg from '../image/JetFlix.png';
import nusaTifImg from '../image/Nusatif.png';
import hackathonImg from '../image/Hackathon.png';
import watchOverImg from '../image/WatchOver.png';
import socialAIImg from '../image/SocialAI.png';

const projects = [
  {
    id: 1,
    title: 'Mini Project - TPM',
    img: miniProjectImg,
    link: 'https://github.com/',
    buttonText: 'GitHub',
    bgColor: 'bg-black',
    textColor: 'text-white',
  },
  {
    id: 2,
    title: 'JetFlix',
    img: jetFlixImg,
    link: 'https://github.com/',
    buttonText: 'GitHub',
    bgColor: 'bg-black',
    textColor: 'text-white',
  },
  {
    id: 3,
    title: 'IoFest - NUSATIF',
    img: nusaTifImg,
    link: 'https://www.figma.com/',
    buttonText: 'Figma',
    bgColor: 'bg-[#D8B77D]',
    textColor: 'text-black',
  },
  {
    id: 4,
    title: 'Hackathon - Tema Event',
    img: hackathonImg,
    link: 'https://github.com/',
    buttonText: 'GitHub',
    bgColor: 'bg-[#FAD46A]',
    textColor: 'text-black',
  },
  {
    id: 5,
    title: 'WatchOver',
    img: watchOverImg,
    link: 'https://github.com/',
    buttonText: 'GitHub',
    bgColor: 'bg-black',
    textColor: 'text-white',
  },
  {
    id: 6,
    title: 'SocialAI',
    img: socialAIImg,
    link: 'https://www.figma.com/',
    buttonText: 'Figma',
    bgColor: 'bg-[#7B4AC3]',
    textColor: 'text-white',
  },
];

const Project = () => {
  return (
    <div className="bg-[#F1EBE1] min-h-screen flex flex-col items-center p-8">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#403F3C] text-center">
        PROJECT.
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-8 text-center max-w-2xl">
        Explore some of my projects ✦ Each one reflects my technical expertise
        and commitment to turning innovative concepts into practical, impactful
        solutions.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`${project.bgColor} ${project.textColor} rounded-lg p-4 flex flex-col items-start justify-between`}
          >
            <img
              src={project.img}
              alt={project.title}
              className="rounded-md mb-4"
            />
            <h3 className="text-xl font-bold">{project.title}</h3>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-3 py-1 rounded-full mt-4"
            >
              {project.buttonText}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;