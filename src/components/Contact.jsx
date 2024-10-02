import React from 'react';
import logo from '../image/Logo.png';
import { Link } from 'react-scroll';  

const Contact = () => {
  return (
    <div className="bg-[#44624A] text-white flex flex-col md:flex-row justify-between items-center p-10 space-y-8 md:space-y-0 md:space-x-20 font-mono">
      <div className="w-full md:w-auto flex justify-center md:justify-start">
        <img src={logo} alt="Dar Logo" className="w-16" />
      </div>

      <div className="text-center w-full md:w-auto">
        <p className="text-lg font-semibold">Drop me a line</p>
        <p className="text-xl font-bold mt-2">
          <a href="mailto:darrenanthonybeltham@gmail.com" className="underline">
            darrenanthonybeltham@gmail.com
          </a>
        </p>
      </div>

      <div className="flex justify-center md:justify-end w-full md:w-auto space-x-12">
        <div className="text-left">
          <p className="text-lg font-semibold">Link</p>
          <ul className="mt-2 space-y-2">
            <li>
              <Link
                to="skill"
                smooth={true}
                duration={800}
                offset={-70}
                className="underline cursor-pointer"
              >
                Skill
              </Link>
            </li>
            <li>
              <Link
                to="project"
                smooth={true}
                duration={800}
                offset={-70}
                className="underline cursor-pointer"
              >
                Project
              </Link>
            </li>
            <li>
              <Link
                to="experience"
                smooth={true}
                duration={800}
                offset={-70}
                className="underline cursor-pointer"
              >
                Experience
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-left">
          <p className="text-lg font-semibold">Social Media</p>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="https://instagram.com/darrenab_" target="_blank" rel="noopener noreferrer" className="underline">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/darrenab_" target="_blank" rel="noopener noreferrer" className="underline">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://wa.me/6285389970663" target="_blank" rel="noopener noreferrer" className="underline">
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
