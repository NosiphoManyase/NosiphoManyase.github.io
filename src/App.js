import React from "react";
import About from "./Components/About/About";
import Hero from "./Components/Hero/Hero";
import './scss/main.scss'

function App() {
  return (
    <div className="App">
      <div className="container-xl">
        <Hero />
        <About />
      </div>
    </div>
  );
}

export default App;
