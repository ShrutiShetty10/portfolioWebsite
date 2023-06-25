import './App.css';
import {Container, ScopedCssBaseline, ThemeProvider} from '@mui/material';
import Navbar from './components/Navbar/Navbar'
import theme from './styles';
import Hero from './components/Hero/Hero';
import AboutMe from './components/About me/AboutMe';
import SkillsDesktop from './components/Skills/SkillsDesktop';
import ContactMe from './components/Contact me/ContactMe';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';
function App() {
  return (

    <ThemeProvider theme={theme} >
      <ScopedCssBaseline enableColorScheme>
        <Container maxWidth='xl' style={{backgroundColor:"black",color:"white"}} >
          <Navbar/>
          <Hero/>
          <AboutMe/>
          <SkillsDesktop/>
          <Projects/>
          <ContactMe/>
          <Footer/>
        </Container>
      </ScopedCssBaseline>
    </ThemeProvider>
    
  );
}

export default App;
