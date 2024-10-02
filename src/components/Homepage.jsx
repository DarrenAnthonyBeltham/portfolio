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
      <About/>
      <Skill/>
      <Project/>
      <Experience/>
      <Contact/>
    </div>
  )
}

export default Homepage
