import React from 'react'
import Header from './Header'
import About from './About'
import Skill from './Skill'
import Project from './Project'
import Experience from './Experience'
import Contact from './Contact'

const Homepage = () => {
  return (
    <div>
      <Header/>
      <section id="about"><About/></section>
      <section id="skill"><Skill/></section>
      <section id="project"><Project/></section>
      <section id="experience"><Experience/></section>
      <section id="contact"><Contact/></section>
    </div>
  )
}

export default Homepage
