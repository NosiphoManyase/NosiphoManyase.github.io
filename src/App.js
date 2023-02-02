import React from "react";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";

import './main.scss'

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Navbar />
        <div className="content">
          <Hero />
          <Skills />
          <Projects />
          <About />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
