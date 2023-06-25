import React from 'react'
import { NavbarContainer } from '../../styles/navbar/navbarStyle'
import { IconButton, Box } from '@mui/material'
import MenuIcon from "@mui/icons-material/Menu"
import Logo from '../../assets/logo_small.jpg'
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-scroll'
import AboutMeDesktop from '../About me/AboutMeDesktop';
import SkillsDesktop from '../Skills/SkillsDesktop';
import Projects from '../Projects/Projects';
import ContactMe from '../Contact me/ContactMe';
export default function NavbarMobile({ matches, classes }) {
  const [state, setState] = React.useState({

    right: false,
  });
  const linkids = ["about", "skills", "projects", "contact"]

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
    // onKeyDown={toggleDrawer(anchor, false)}
    >

      <List>
        {['About Me', 'Skills', 'Projects', 'Contact Me'].map((text, index) => (

          <ListItem key={text} disablePadding>
            <ListItemButton>
              <Link to={linkids[index]} spy={true} smooth={true} offset={10} duration={500} onClick={toggleDrawer(anchor, false)}>
                <ListItemText primary={text} sx={{ textAlign: 'center', fontFamily: "Lora" }} />
              </Link>

            </ListItemButton>
          </ListItem>

        ))}
      </List>
    </Box>
  );

  return (
    <NavbarContainer style={{ display: 'flex', justifyContent: "space-between", width: '100%' }}>
      <Box display='flex'
        component="img"
        sx={{
          height: 58,
          width: 80
        }}
        alt="Shruti"
        src={Logo}
      />
      <IconButton  >
        <MenuIcon onClick={toggleDrawer("right", true)} />
        <SwipeableDrawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
          onOpen={toggleDrawer("right", true)}
        >
          {list("right")}
        </SwipeableDrawer>
      </IconButton>
    </NavbarContainer>
  )
}
