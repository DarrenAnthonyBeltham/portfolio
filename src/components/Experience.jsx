import React from 'react';
import TzuChi from '../image/Tzu Chi.png'
import TechUp from '../image/TechUp.png'
import UYS from '../image/UYS.png'
import SOL from '../image/SOL.png'

const experiences = [
  {
    id: 1,
    title: 'Volunteering for Tzu Chi Experience',
    img: TzuChi,
  },
  {
    id: 2,
    title: 'Publication & Registration Committee of BNCC Tech Up 2024',
    img: TechUp,
  },
  {
    id: 3,
    title: 'PIC of Event Operations for BMCC Uncover Your Skill 2024',
    img: UYS,
  },
  {
    id: 4,
    title: 'Sponsorship Committee for BNCC Slice of Life 2024',
    img: SOL,
  },
];

const Experience = () => {
  return (
    <div className="bg-[#D9D9D9] min-h-screen flex flex-col items-center p-8">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#6D4930] text-center font-spacemono">
        EXPERIENCE.
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-8 text-center max-w-2xl font-spacemono">
        Explore my experiences ✦ Each role showcases my professional growth,
        adaptability, and dedication to delivering meaningful, results-driven outcomes.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-7xl">
        {experiences.map((experience) => (
          <div
            key={experience.id}
            className="relative group bg-[#F1EBE1] shadow-lg rounded-lg overflow-hidden p-4 hover:shadow-2xl transition-shadow duration-500 ease-in-out transform hover:-translate-y-2"
          >
            <img
              src={experience.img}
              alt={experience.title}
              className="rounded-md w-full h-80 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
            <h3 className="mt-4 text-xl font-bold text-center group-hover:text-indigo-600 transition-colors duration-500 ease-in-out font-spacemono text-[#6D4930]">
              {experience.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
