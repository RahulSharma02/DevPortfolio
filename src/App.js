import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Aboutme from './components/Aboutme';
import Services from './components/Services';
import Intro from './components/Intro';
import Mywork from './components/Mywork';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Aboutme/>
     <Services/>
     <Intro/>
     <Mywork/>
     <Footer/>
       
    </div>
  );
}

export default App;
