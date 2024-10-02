import React from 'react';
import { motion } from 'framer-motion';
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
    link: 'https://github.com/DarrenAnthonyBeltham/TPM_MiniProject',
    buttonText: 'GitHub',
  },
  {
    id: 2,
    title: 'JetFlix',
    img: jetFlixImg,
    link: 'https://github.com/DarrenAnthonyBeltham/JetFlix',
    buttonText: 'GitHub',
  },
  {
    id: 3,
    title: 'IoFest - NUSATIF',
    img: nusaTifImg,
    link: 'https://www.figma.com/design/biuQSL5Vj0BskijODMy3EG/IOFest-Untar-Nusatif---Design?node-id=0-1&node-type=canvas&t=GRB0PuQmEMK5Jw40-0',
    buttonText: 'Figma',
  },
  {
    id: 4,
    title: 'Hackathon - Tema Event',
    img: hackathonImg,
    link: 'https://github.com/aranlv/TPMFinalProject',
    buttonText: 'GitHub',
  },
  {
    id: 5,
    title: 'WatchOver',
    img: watchOverImg,
    link: 'https://github.com/DarrenAnthonyBeltham/WatchOver',
    buttonText: 'GitHub',
  },
  {
    id: 6,
    title: 'SocialAI',
    img: socialAIImg,
    link: 'https://www.figma.com/design/8JwHhxb93Jq5t53SVxgVCd/SocialAI_AOL-AI?node-id=0-1&node-type=canvas&t=ppCjDOZFKaeiuevD-0',
    buttonText: 'Figma',
  },
];

const Project = () => {
  return (
    <div className="bg-[#F1EBE1] min-h-screen flex flex-col items-center p-8 py-32">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#403F3C] text-center font-spacemono">
        PROJECT.
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-8 text-center max-w-2xl font-spacemono">
        Explore some of my projects ✦ Each one reflects my technical expertise
        and commitment to turning innovative concepts into practical, impactful
        solutions.
      </p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1, 
            },
          },
        }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="rounded-lg p-4 flex flex-col items-start justify-between font-spacemono transform transition-all duration-300" 
            whileHover={{ 
              scale: 1.08, 
              rotate: 2, 
              boxShadow: '0px 15px 25px rgba(0,0,0,0.1)' 
            }}
            whileTap={{ scale: 0.96 }}
            variants={{
              hidden: { opacity: 0, scale: 0.85, rotate: -3 },
              visible: { opacity: 1, scale: 1, rotate: 0 },
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 15,
            }}
          >
            <motion.img
              src={project.img}
              alt={project.title}
              className="rounded-md mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }} 
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
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Project;
