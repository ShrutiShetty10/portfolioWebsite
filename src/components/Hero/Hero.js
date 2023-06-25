import { useTheme } from '@emotion/react'
import { useMediaQuery } from '@mui/material';
import React from 'react'
import HeroMobile from './HeroMobile';
import HeroDesktop from './HeroDesktop';

export default function Hero() {
    const theme=useTheme();
    const matches=useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      {matches?<HeroMobile matches={matches}/>:<HeroDesktop matches={matches}/>}
    </>
  )
}
