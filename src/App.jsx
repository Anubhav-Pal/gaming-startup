import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import GameComponent1 from './components/GameComponent1';
import GameComponent2 from './components/GameComponent2';
import GameComponent3 from './components/GameComponent3';
import music from './assets/main.mp3';

const App = () => {
  useEffect(() => {
    const audio = new Audio(music);

    // Function to handle user interaction and play audio
    const handleUserInteraction = () => {
      audio.play();
      // Remove the event listener after the first interaction
      document.removeEventListener('click', handleUserInteraction);
    };

    // Add click event listener to document for user interaction
    document.addEventListener('click', handleUserInteraction);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('click', handleUserInteraction);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/play1' element={<GameComponent1 />} />
        <Route path='/play2' element={<GameComponent2 />} />
        <Route path='/play3' element={<GameComponent3 />} />
      </Routes>
    </Router>
  );
};

export default App;
