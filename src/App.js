import React from "react";
import NavBar from "./components/navbar/NavBar.jsx";
import Home from "./components/home/Home.jsx";
import SocialMedia from "./components/socialmedia/SocialMedia.jsx";
import About from "./components/about/About.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Experience from "./components/experiences/Experience.jsx";
import Contact from "./components/contact/Contact.jsx";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />    
      <Portfolio />  
      <Experience />
      <Contact />

      <SocialMedia />
   
    </div>
  );
}

export default App;
