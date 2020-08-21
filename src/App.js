import React from 'react';
import './App.css'

import Header from './Header'
import Nav from './Nav'
import Projects from './Projects'
import Footer from './Footer'

function App() {
  return (
    <div className="page-container">
      <Nav />
      <Header />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
