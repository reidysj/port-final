import React, {useEffect} from 'react';
import './App.css'

import Header from './Header'
import Nav from './Nav'
import Projects from './Projects'
import Skills from './Skills'
import Footer from './Footer'

import ReactGA from 'react-ga'

const trackingId = 'UA-166256756-1'




function App() {

  useEffect(_ => {
  
    ReactGA.initialize(trackingId)
    ReactGA.event({category: "App", action: "Loaded"})
    }, []) 
    
  return (
    <div className="page-container">
      <Nav />
      <Header />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
