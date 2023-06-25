import React from 'react'
import './AboutMe.css'
import { HeroImgSection } from '../../styles/heroStyle';
import WavingHandIcon from '@mui/icons-material/WavingHand';
import ContactIcons from '../Contact Icons/ContactIcons';
import { Colors } from '../../styles';
export default function AboutMeDesktop() {
  return (
    <div className='about-me-container' id="about">
      <HeroImgSection className='about-me-img'/>
      <div >
        <h1 className='about-me-heading' style={{textDecorationColor:`${Colors.secondary}`}}>ABOUT ME</h1>
        <p><WavingHandIcon />
            Hi! I'm Shruti Shetty and I'm currently a fourth year student pursuing Bachelor in Computer engineering
            at Fr. Conceicao Rodrigues College of Engineering, Bandra, Mumbai.
            I am passionate about Software Development and Machine Learning.<br/>

        </p>

       <ContactIcons/>
        </div>
        
       
          
          
        
    </div>
  )
}
