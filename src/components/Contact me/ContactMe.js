import React from 'react'
import './ContactMe.css'
import { Colors } from "../../styles/index"
import ContactIcons from '../Contact Icons/ContactIcons'
import { useTheme } from '@emotion/react'
import { useMediaQuery } from '@mui/material';
export default function ContactMe() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (

    <div>
      <h1 className='contact-heading' id="contact" style={{ textDecorationColor: `${Colors.secondary}` }}>Contact Me</h1>
      <h3 className='sub-heading' style={{ color: `${Colors.secondary}` }}>Let's Get in Touch</h3>
      <div className={matches ? 'big-container-mobile' : 'big-container'}>
        <p style={{ textAlign: "center" }}>
          I would love to hear from you!<br />Any feedback on the website is appreciated.<br />You can contact me by connecting through
          <ContactIcons justifyContent="center" />
        </p>
      </div>
    </div>
  )
}
