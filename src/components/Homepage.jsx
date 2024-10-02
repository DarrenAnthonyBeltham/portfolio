import React from 'react';
import Header from './Header';
import About from './About';
import Skill from './Skill';
import Project from './Project';
import Experience from './Experience';
import Contact from './Contact';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Homepage = () => {
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [skillRef, skillInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [projectRef, projectInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [experienceRef, experienceInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [contactRef, contactInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div>
      <Header />

      <section id="about">
        <motion.div
          ref={aboutRef}
          initial="hidden"
          animate={aboutInView ? 'visible' : 'hidden'}
          variants={sectionVariants}
        >
          <About />
        </motion.div>
      </section>

      <section id="skill">
        <motion.div
          ref={skillRef}
          initial="hidden"
          animate={skillInView ? 'visible' : 'hidden'}
          variants={sectionVariants}
        >
          <Skill />
        </motion.div>
      </section>

      <section id="project">
        <motion.div
          ref={projectRef}
          initial="hidden"
          animate={projectInView ? 'visible' : 'hidden'}
          variants={sectionVariants}
        >
          <Project />
        </motion.div>
      </section>

      <section id="experience">
        <motion.div
          ref={experienceRef}
          initial="hidden"
          animate={experienceInView ? 'visible' : 'hidden'}
          variants={sectionVariants}
        >
          <Experience />
        </motion.div>
      </section>

      <section id="contact">
        <motion.div
          ref={contactRef}
          initial="hidden"
          animate={contactInView ? 'visible' : 'hidden'}
          variants={sectionVariants}
        >
          <Contact />
        </motion.div>
      </section>
    </div>
  );
};

export default Homepage;
