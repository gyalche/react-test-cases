import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home';
import About from './About';
import Blog from './Blog';
import Navbar from './Navbar';
import { ThemeProvider } from './theme-context';
import AdsComponent from './adsComponent';
import User from './User';
import cusomeThrottle from './hooks/use-throttle';
function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    })

    //any expensize operation or API call
  }

  const customeThrottle = cusomeThrottle(handleResize, 10000)
  useEffect(() => {
    window.addEventListener('resize', customeThrottle)

    return () => {
      window.removeEventListener('resize', customeThrottle)
    }
  })
  return (

    <ThemeProvider>

      <BrowserRouter>
        {/* navbar */}
        <Navbar />
        {/* routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
