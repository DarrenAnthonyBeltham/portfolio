import React from 'react';
import logo from '../image/Logo.png';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      when: 'beforeChildren',
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Contact = () => {
  return (
    <motion.div
      className="bg-[#44624A] text-white flex flex-col md:flex-row justify-between items-center p-10 space-y-8 md:space-y-0 md:space-x-20 font-mono"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="w-full md:w-auto flex justify-center md:justify-start"
        variants={itemVariants}
      >
        <img src={logo} alt="Dar Logo" className="w-16" />
      </motion.div>

      <motion.div
        className="text-center w-full md:w-auto"
        variants={itemVariants}
      >
        <p className="text-lg font-semibold">Drop me a line</p>
        <p className="text-xl font-bold mt-2">
          <a
            href="mailto:darrenanthonybeltham@gmail.com"
            className="underline hover:text-[#D7CCC8] transition-colors duration-300"
          >
            darrenanthonybeltham@gmail.com
          </a>
        </p>
      </motion.div>

      <motion.div
        className="flex justify-center md:justify-end w-full md:w-auto space-x-12"
        variants={itemVariants}
      >
        <div className="text-left">
          <p className="text-lg font-semibold">Link</p>
          <ul className="mt-2 space-y-2">
            <li>
              <Link
                to="skill"
                smooth={true}
                duration={800}
                offset={-70}
                className="underline cursor-pointer hover:text-[#D7CCC8] transition-colors duration-300"
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
                className="underline cursor-pointer hover:text-[#D7CCC8] transition-colors duration-300"
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
                className="underline cursor-pointer hover:text-[#D7CCC8] transition-colors duration-300"
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
              <a
                href="https://instagram.com/darrenab_"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#D7CCC8] transition-colors duration-300"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/darrenab_"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#D7CCC8] transition-colors duration-300"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/6285389970663"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#D7CCC8] transition-colors duration-300"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
