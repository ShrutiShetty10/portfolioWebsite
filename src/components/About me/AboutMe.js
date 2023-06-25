import React from 'react'
import { useTheme } from '@emotion/react'
import { useMediaQuery } from '@mui/material';
import AboutMeDesktop from './AboutMeDesktop';
import AboutMeMobile from './AboutMeMobile';
export default function AboutMe() {
    const theme=useTheme();
    const matches=useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
        {matches?<AboutMeMobile matches={matches}/>:<AboutMeDesktop matches={matches}/>}
    </>
  )
}
