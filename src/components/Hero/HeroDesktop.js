import React from 'react';
import { HeroImgSection, HeroStyleSection } from '../../styles/heroStyle';
import { Colors } from "../../styles/index"
import "./hero.css"
import { Button } from '@mui/material';
import resume from '../../assets/Resume.pdf'
export default function HeroDesktop({ matches }) {
  return (
    <div className='main-container'>
      <HeroStyleSection >

        <h3 className="heading">Hi!&nbsp;  I'm &nbsp;
          <span style={{ color: Colors.secondary, margin: 0 }}>Shruti</span>
        </h3>

        <h2 className="sub-heading">Software Developer</h2>

        <h1 className='para-text'>Student at Fr. Conceicao Rodrigues College of Engineering</h1>

        <h1 className='para-text'>Get to know me</h1>
        <br />
        <a href={resume} without rel="noopener noreferrer" target="_blank">
          <Button variant="contained" style={{ backgroundColor: `${Colors.secondary}` }} >View Resume</Button>
        </a>
      </HeroStyleSection>
      <div className='shadow-img'>
        <HeroImgSection />
      </div>
    </div>
  )
}
