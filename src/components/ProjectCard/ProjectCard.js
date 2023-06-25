import React from 'react'
import './ProjectCard.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import { Colors } from '../../styles/index';
import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

const customTheme = createTheme({
  palette: {
    dark_grey: {
      main: '#3B444B',
    },
    secondary: {
      main: `${Colors.secondary}`,
    },
    white: {
      main: "#ffffff",
    }
  },
});

const StyledCard = styled(Card)`
  ${({ theme }) => `
  cursor: pointer;
  background-color: ${theme.palette.dark_grey.main};
 
  color:black;
  transition: ${theme.transitions.create(['background-color', 'transform', 'color'], {

})};
  &:hover {
    background-color: ${theme.palette.secondary.main};
    transform: scale(1.1);
    
  },
  &:hover .MuiTypography-root {
    color: white;
  }
  `}`;


export default function ProjectCard(props) {

  return (
    <div>

      <ThemeProvider theme={customTheme}>
        <StyledCard className="gradient"  >
          <CardContent>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <FolderOpenIcon fontSize='large' style={{ color: 'white' }} />
              <IconButton aria-label="github-project-link" onClick={() => window.open(`${props.href}`)}>
                <LaunchOutlinedIcon fontSize='large' style={{ color: 'white' }} />
              </IconButton>
            </div>
            <br />
            <Typography variant="h5" component="div" fontFamily={"Sora"} fontWeight={600}>
              {props.title}
            </Typography>

            <Typography variant='body2'>
              {props.description}
            </Typography>

            <br />

            <Typography color="white">
              {props.tech}
            </Typography>
          </CardContent>
        </StyledCard>
      </ThemeProvider>
    </div>
  )
}
