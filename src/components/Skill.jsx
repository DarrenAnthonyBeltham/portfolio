import React from 'react';
import HardSkill from '../image/HardSkill.png';
import SoftSkill from '../image/SoftSkill.png';
import { motion } from 'framer-motion';

export default function Skills() {
  return (
    <div className="bg-[#C0CFB2] flex flex-col items-center justify-center px-8 py-32 font-spacemono">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#F1EBE1]">SKILLS.</h1>
      <p className="text-lg md:text-xl text-gray-600 mb-16 text-center max-w-2xl">
        Explore some of my skills ✦ Each one reflects my passion and commitment to mastering techniques that turn concepts into impactful solutions.
      </p>

      <div className="flex flex-col md:flex-row justify-around w-full max-w-6xl space-y-12 md:space-y-0 md:space-x-12">

        <motion.div
          className="flex flex-col items-center bg-[#F1EBE1] rounded-xl p-10 shadow-lg transform transition duration-500 hover:scale-105 w-full md:w-1/2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.img 
            src={SoftSkill} 
            alt="Soft Skills" 
            className="h-24 mb-6" 
            initial={{ scale: 0.8 }} 
            animate={{ scale: 1 }} 
            transition={{ duration: 0.5, ease: 'easeInOut' }} 
          />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Soft Skills</h2>
          <ul className="text-left text-gray-700 space-y-2 list-disc list-inside">
            <li>Leadership</li>
            <li>Communication</li>
            <li>Time Management</li>
            <li>Public Speaking</li>
            <li>Decision Making</li>
            <li>Adaptability</li>
            <li>Motivated</li>
            <li>Confidence</li>
          </ul>
        </motion.div>

        <motion.div
          className="flex flex-col items-center bg-[#F1EBE1] rounded-xl p-10 shadow-lg transform transition duration-500 hover:scale-105 w-full md:w-1/2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.img 
            src={HardSkill} 
            alt="Hard Skills" 
            className="h-24 mb-6" 
            initial={{ scale: 0.8 }} 
            animate={{ scale: 1 }} 
            transition={{ duration: 0.5, ease: 'easeInOut' }} 
          />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Hard Skills</h2>
          <ul className="text-left text-gray-700 space-y-2 list-disc list-inside">
            <li>C#</li>
            <li>Figma</li>
            <li>HTML/CSS</li>
            <li>React.Js</li>
            <li>Python</li>
            <li>R</li>
          </ul>
        </motion.div>

      </div>
    </div>
  );
}
