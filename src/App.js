import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import ProfilePhoto from "./components/ProfilePhoto";



function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div>
      <ProfilePhoto src="/Shreyee.jpg" alt="Shreyas M" />
      {/* ...rest of your portfolio */}
    </div>

      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;