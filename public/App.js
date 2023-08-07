import Home from './Components/Home'
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div>
      <Home isScrolled={isScrolled} setIsScrolled={setIsScrolled} />
    </div>
  );
}

export default App;
