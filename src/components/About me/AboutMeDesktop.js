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
        Hi! I'm Shruti Shetty and I'm currently working as Testing Analyst at TIAA Global Capabilities
            in Mumbai.I graduated from Father Conceicao Rodrigues College popularly known as Father Agnels with a Bachelor in Computer Engineering in 2023.
            I have always been passionate about exploring and learning about new technologies and continue to do so both at work and in my free time.<br/>

        </p>

       <ContactIcons/>
        </div>
        
       
          
          
        
    </div>
  )
}
