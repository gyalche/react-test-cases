import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home';
import About from './About';
import Blog from './Blog';
import Navbar from './Navbar';
import { ThemeProvider } from './theme-context';
import AdsComponent from './adsComponent';
function App() {


  return (

    <ThemeProvider>
      <BrowserRouter>
        {/* navbar */}
        <Navbar />
        {/* routes */}
        <AdsComponent dataAdSlot='X7XXXXXX5X' />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />

        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
