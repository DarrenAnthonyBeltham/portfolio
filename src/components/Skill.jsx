import React from 'react';
import HardSkill from '../image/HardSkill.png';
import SoftSkill from '../image/SoftSkill.png';

export default function Skills() {
  return (
    <div className="min-h-screen bg-[#C0CFB2] flex flex-col items-center justify-center py-16 px-8 font-spacemono">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#F1EBE1]">SKILL.</h1>
      <div className="w-full h-px bg-gray-300 mb-4"></div> 
      <p className="text-lg md:text-xl text-gray-600 mb-8 text-center max-w-2xl">
        Explore some of my skills ✦ Each one reflects my passion and commitment to mastering
        techniques that turn concepts into impactful solutions.
      </p>
      
      <div className="flex flex-col md:flex-row justify-around w-full max-w-6xl mb-2">

        <div className="flex flex-col items-center bg-[#F1EBE1] rounded-xl p-6 shadow-md w-full md:w-1/2 mx-4 mb-8 md:mb-0">
          <img src={SoftSkill} alt="Soft Skills" className="h-20 mb-4"/>
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Soft Skills</h2>
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
        </div>

        <div className="flex flex-col items-center bg-[#F1EBE1] rounded-xl p-6 shadow-md w-full md:w-1/2 mx-4">
          <img src={HardSkill} alt="Hard Skills" className="h-20 mb-4"/>
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Hard Skills</h2>
          <ul className="text-left text-gray-700 space-y-2 list-disc list-inside">
            <li>C#</li>
            <li>Figma</li>
            <li>HTML/CSS</li>
            <li>React.Js</li>
            <li>Python</li>
            <li>R</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
