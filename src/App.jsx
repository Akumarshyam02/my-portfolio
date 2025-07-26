// src/App.jsx
import React from 'react';
import './index.css'; // Tailwind CSS
import Headers from './pages/Headers.jsx';
import Home from './Pages/Home.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Skills from './pages/Skills.jsx';
import ContactUs from './pages/ContactUs.jsx';
import Footer from './components/Footer.jsx';
const App = () => {
  return (
    <div>
      <Headers />
      <Home/>
      <About/>
      <Projects/>
      <Skills/>
      <ContactUs/>
      <Footer/>

    </div>
  );
};

export default App;
