import React from 'react'

import {  AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { SiGmail } from "react-icons/si";

import '../styles/Socials.css';

const Socials = () => {
  return (
    <div className='socials'>
      <h2>Contact me</h2>
      <div className="social">
        <div className='git'>
          <AiFillGithub />
          <a href="https://github.com/meghnaaallam/" target='_blank' rel='noreferrer'>Github</a>
        </div>
        <div className='gmail'>
          <SiGmail />
          <a href="mailto:rmeghnana04@gmail.com" target='_blank' rel='noreferrer'>Gmail</a>
        </div>
        <div className='link'>
          <AiFillLinkedin />
          <a href="https://www.linkedin.com/in/meghnareddyallam/" target='_blank' rel='noreferrer'>Linkedin</a>
        </div>
      </div>
    </div>
  )
}

export default Socials