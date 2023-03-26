import React from 'react';
import './App.css';
//import books from './data';
import About from './components/About';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/services';
import Tours from './components/Tours';
import Footer from './components/Footer'; 


const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Services />
    <Tours />
    <Footer />    
    </>
 );
}
  

export default App;
