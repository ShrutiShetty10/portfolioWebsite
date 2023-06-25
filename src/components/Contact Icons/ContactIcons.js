import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import InstagramIcon from '@mui/icons-material/Instagram'
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@emotion/react'
import { useMediaQuery } from '@mui/material';
import './ContactIcons.css'
export default function ContactIcons(props) {
  const theme=useTheme();
  const matches=useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div className={matches?'contact-icons-mobile':'contact-icons'} style={{justifyContent:props.justifyContent}}>
    <IconButton aria-label="gmail" onClick={() => window.open('https://mail.google.com/mail/?view=cm&to=shrutishetty160@gmail.com')}>
      <EmailIcon fontSize='large' color="secondary"/>
    </IconButton>
    <IconButton aria-label="github" onClick={() => window.open('https://github.com/ShrutiShetty10')}>
      <GitHubIcon fontSize='large' color="secondary"/>
    </IconButton>
    <IconButton aria-label="linkendIn" onClick={() => window.open('https://www.linkedin.com/in/shruti-shetty-6b1247195/')}>
      <LinkedInIcon fontSize='large' color="secondary"/>
    </IconButton>
    <IconButton aria-label='instagram' onClick={()=>window.open('https://www.instagram.com/shruti_shetty13/')}>
      <InstagramIcon fontSize='large' color="secondary"/>
    </IconButton>
    </div>
  )
}
