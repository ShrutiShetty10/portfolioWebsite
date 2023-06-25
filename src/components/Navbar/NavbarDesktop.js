import React from 'react';
import { NavbarContainer, MyList, NavbarListItem, LinkItem } from '../../styles/navbar/navbarStyle';
import { Box } from '@mui/material'
import Logo from '../../assets/logo_small.jpg'
import { Link } from 'react-scroll'
import AboutMeDesktop from '../About me/AboutMeDesktop';
import SkillsDesktop from '../Skills/SkillsDesktop';
import Projects from '../Projects/Projects';
import ContactMe from '../Contact me/ContactMe';
export default function NavbarDesktop({ matches }) {
 
  return (
    <NavbarContainer>

      <Box
        component="img"
        sx={{
          height: 58,
          width: 80
        }}
        alt="Shruti"
        src={Logo}
      />
      <MyList type="row">
        <LinkItem underline="never" >
          <NavbarListItem component="span"  >
          <Link to="about" spy={true} smooth={true} offset={10} duration={500} >ABOUT ME</Link>
          </NavbarListItem>
        </LinkItem>
        <LinkItem underline="never" >
          <NavbarListItem>
            <Link to="skills" spy={true} smooth={true} offset={10} duration={500} >SKILLS</Link>
          </NavbarListItem>
        </LinkItem>
        <LinkItem underline="never" >
          <NavbarListItem>
            <Link to="projects" spy={true} smooth={true} offset={10} duration={500}>PROJECTS</Link>
          </NavbarListItem>
        </LinkItem>
        <LinkItem underline="never" >
          <NavbarListItem>
            <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>CONTACT ME</Link>
          </NavbarListItem>
        </LinkItem>


      </MyList>
    </NavbarContainer>
  )
}
