import React from 'react';
import About from './components/About';
import Certifications from './components/Certifications';
import Volunteering from './components/Volunteering';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div class="bg-stone-100 min-h-screen">
        <About/>
        <Certifications/>
        <Volunteering/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
