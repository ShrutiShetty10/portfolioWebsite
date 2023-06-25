import React from 'react'
import { HeroImgSectionMobile, HeroStyleSectionMobile } from '../../styles/heroStyle'
import { Colors } from "../../styles/index"
import "./hero.css"
import { Button } from '@mui/material';
import resume from '../../assets/Resume.pdf'
export default function HeroMobile({ matches }) {
  return (

    <div className='main-container-mobile'>
      <HeroStyleSectionMobile >

        <h3 className="heading-mobile" >Hi!&nbsp;  I'm &nbsp;
          <span style={{ color: Colors.secondary, margin: 0 }}>Shruti</span>
        </h3>

        <h2 className="sub-heading" style={{ textAlign: "center",fontSize:"38px" }}>Software Developer</h2>

        <h1 className='para-text-mobile'>Student at Fr. Conceicao Rodrigues College of Engineering</h1>

        <h1 className='para-text'>Get to know me</h1>
        <br />
        <a href={resume} without rel="noopener noreferrer" target="_blank">
          <Button variant="contained" style={{ backgroundColor: `${Colors.secondary}` }}>View Resume</Button>
        </a>
      </HeroStyleSectionMobile>
      <div className='shadow-img'>
        <HeroImgSectionMobile />
      </div>
    </div>

  )
}
