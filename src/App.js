import React from 'react';
import './App.css'

import Header from './Header'
import Nav from './Nav'
import Projects from './Projects'
import Skills from './Skills'
import Footer from './Footer'

function App() {
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
