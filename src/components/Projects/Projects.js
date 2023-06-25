import React from 'react'
import './Projects.css'
import ProjectCard from '../ProjectCard/ProjectCard'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Colors } from '../../styles';
export default function Projects() {
  return (
    <div>
      <h1 className='projects-heading' id="projects" style={{textDecorationColor:`${Colors.secondary}`}}>Projects</h1>
      <Box sx={{ flexGrow: 1, display: "flex" }}>
        <Grid container columns={{ xs: 4, sm: 8, md: 12 }} spacing={{ xs: 3, sm: 4, md:3 }}
          direction="row"
          justify="space-evenly"
          alignItems="stretch"
        >
          <Grid item xs={4} sm={8} md={6} >
            <ProjectCard title="Package Delivery System" description="An Android app that lets daily commuters act as delivery personal for package delivery while also serving them an additional source of income" tech="Android Studio, Firebase" href="https://github.com/ShrutiShetty10/Package-Delivery-System"/>
          </Grid>
          <Grid item xs={4} sm={8} md={6} >
            <ProjectCard title="To Do App" description="An web application that lets you create todo tasks and mark them as to start, in progress and completed" tech="Angular" href="https://github.com/ShrutiShetty10/To-Do-App-using-Angular"/>
          </Grid>
          <Grid item xs={4} sm={8} md={6} >
            <ProjectCard title="Feature Selection using WOA" description="Distributed denial-of-service (DDoS) attacks are one of the major threats and possibly the hardest security problem for today's Internet.In this project Whale Optimization Algorithm is used for feature selection on network data which can be used for the detection of Ddos attacks." tech="Dask, numpy, sklearn" href="https://github.com/ShrutiShetty10/Feature-Selection-using-WOA-in-CICIDS-2018-dataset"/>
          </Grid>

          <Grid item xs={4} sm={8} md={6} >
            <ProjectCard title="Preliminary Depression Detector" description="The most common issue faced by quite a few people around the world, is depression and the lack of awareness about it.So we designed a web application that lets user take the PHQ-9 test to detect depression and provide resources according to their test scores." tech="Springboot, React" href="https://github.com/ShrutiShetty10/Preliminary-Depression-Detection-Project"/>
          </Grid>



        </Grid>
      </Box>
    </div>
  )
}
