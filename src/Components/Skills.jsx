import React from 'react'

import '../styles/Skills.css'

import { SiJavascript, SiTailwindcss, SiHtml5, SiCss3, SiReact, SiNodedotjs, SiMongodb, SiTypescript, SiAmazonaws, SiRedux,SiGraphql, SiGit, SiDjango, SiSass } from 'react-icons/si'

const Skills = () => {
  return (
    <div className='skills'>
      <h2>My Skills</h2>
      <div className="skill">
        <div className="js">
          <SiJavascript />
          <p>JavaScript</p>
        </div>
        <div className="ts">
          <SiTypescript />
          <p>TypeScript</p>
        </div>
        <div className="html">
          <SiHtml5 />
          <p>HTML</p>
        </div>
        <div className="css">
          <SiCss3 />
          <p>CSS</p>
        </div>
        <div className="sass">
          <SiSass />
          <p>SASS</p>
        </div>
        <div className="tailwind">
          <SiTailwindcss />
          <p>Tailwind CSS</p>
        </div>
        <div className="react">
          <SiReact />
          <p>React</p>
        </div>
        <div className="redux">
          <SiRedux />
          <p>Redux</p>
        </div>
        <div className="node">
          <SiNodedotjs />
          <p>Node JS</p>
        </div>
        <div className="mon">
          <SiMongodb />
          <p>MongoDB</p>
        </div>
        <div className="django">
          <SiDjango />
          <p>Django</p>
        </div>
        <div className="graph">
          <SiGraphql />
          <p>GraphQL</p>
        </div>
        <div className="git">
          <SiGit />
          <p>Git</p>
        </div>
        <div className="aws">
          <SiAmazonaws />
          <p>AWS</p>
        </div>
      </div>
    </div>
  )
}

export default Skills;