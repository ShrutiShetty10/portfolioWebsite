import React from 'react'
import './AboutMe.css'
import WavingHandIcon from '@mui/icons-material/WavingHand';
import ContactIcons from '../Contact Icons/ContactIcons';
export default function AboutMeMobile() {
  return (
    <div className='about-me-container' id="about">
      <div >
        <h1 className='about-me-heading' style={{ textAlign: "center" }}>ABOUT ME</h1>
        <p style={{ alignItems: "center" }}><WavingHandIcon />
          Hi! I'm Shruti Shetty and I'm currently a fourth year student pursuing Bachelor in Computer engineering
          at Fr. Conceicao Rodrigues College of Engineering, Bandra, Mumbai.
          I am passionate about Software Development and Machine Learning.<br />

        </p>

        <ContactIcons />
      </div>
    </div>
  )
}
