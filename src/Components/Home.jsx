import React, { useState, useRef } from 'react'

import '../styles/Home.css'

import TypeWriterEffect from 'react-typewriter-effect';
import { animateScroll } from 'react-scroll';
import { saveAs } from "file-saver";

const Home = () => {
  const [number, setNumber] = useState(0);
  const arrayOfWords = ['Tap again', 'Helllo', 'You found this', 'I added this...', 'because it seemed cool', `so here's something`, 'did you know that...', `You can't breathe and talk.`, 'the earth is 71% water.', `It snows in the Sahara Desert
`,]
  const textContent = useRef();
  const handleDownload = () => {
    saveAs(
      "https://drive.google.com/file/d/1qZk2gbWhs67MMQQCd0rbmzN8vGNxFRrq/view?usp=sharing",
      "MeghnaFTEResume.pdf"
    )
  }

  const handleChange = () => {
    textContent.current.style.display = 'inline-block';
    textContent.current.innerText = arrayOfWords[number]
    if ((arrayOfWords.length - 1) !== number) {
      setNumber(number + 1)
    }
    if ((arrayOfWords.length - 1) === number) {
      // something will be here soon
      setTimeout(() => {
        textContent.current.style.display = 'none'
        animateScroll.scrollTo(350)
        setNumber(1)
      }, 1000);
    }
  }


  return (
    <div className='home' id='home'>
      <div className="home-text">
        <h1>
          <span className='gradientText'>
            Hi, I'm meghna!
          </span>
          <span>
            <span onClick={handleChange}>
              👋🏾
            </span>
            <span ref={textContent} style={{ display: 'none' }}>
              Tap again
            </span>
          </span>
        </h1>
        <TypeWriterEffect
          cursorColor="#1da1f2"
          multiText={[
            'Full-stack Developer',
            "UI/UX",
            "Cloud Enthusiast"
          ]}
          multiTextLoop={true}
          multiTextDelay={1500}
          typeSpeed={35}
        />
        <div className="btns">


          <button onClick={handleDownload} className='btn2'>View Resume</button>
        </div>
      </div>
      <img src="https://avatars.githubusercontent.com/u/53735437?v=4" className='hero-img' alt="header" />

    </div >
  )
}

export default Home;
