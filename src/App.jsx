import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import Game from './Components/Game';
import Dot from './Components/Dot';

function App() {
  const [validDots, setValidDots] = useState([]);

  const dotPos = [
    { x: 35, y: 4 },
    { x: 620, y: 120 },
    { x: 140, y: 121 },
    { x: 290, y: 20 },
    { x: 820, y: 80 },
    { x: 310, y: 280 },
    { x: 135, y: 4 },
    { x: 720, y: 120 },
    { x: 570, y: 421 },
    { x: 920, y: 80 },
    { x: 410, y: 280 },
    { x: 35, y: 400 },
    { x: 620, y: 320 },
    { x: 140, y: 221 },
    { x: 20, y: 120 },
    { x: 820, y: 290 },
    { x: 310, y: 480 },
    { x: 135, y: 400 },
    { x: 920, y: 320 },
    { x: 740, y: 421 },
    { x: 990, y: 20 },
    { x: 1200, y: 480 },
    { x: 1210, y: 280 },
    { x: 1140, y: 81 },
    { x: 1100, y: 220 },
    { x: 1100, y: 380 },
    { x: 1210, y: 280 },
  ];

  useEffect(() => {
    // Calculate valid dot positions when component mounts
    const updateValidDots = () => {
      const valid = dotPos.filter(item =>
        item.x < window.innerWidth && item.y < window.innerHeight
      );
      setValidDots(valid);
    };

    updateValidDots();

    // Optional: Add event listener to handle window resizing
    window.addEventListener('resize', updateValidDots);
    return () => {
      window.removeEventListener('resize', updateValidDots);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <>
      <div className="bg-black h-screen">
        <div className="text-white text-center text-4xl font-serif font-bold p-5">
          <p className="z-50">DOT-DASH</p>
        </div>
        {validDots.map((item, ind) => (
          <Dot key={ind} x={item.x} y={item.y} ind={ind} />
        ))}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/game" element={<Game />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
