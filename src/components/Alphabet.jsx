import React, { useState, useEffect, useRef } from 'react';

const getBrightColors = (() => {
  const brightColors = [
    '#FF6633', // Vivid Orange
    '#FFD700', // Gold
    '#66FF66', // Bright Green
    '#6699FF', // Sky Blue
    '#FF66CC', // Rose Pink
    '#CC33FF', // Electric Purple
    '#FF5050', // Coral Red
    '#00CCFF', // Electric Blue
  ];

  let currentIndex = brightColors.length;

  return () => {
    if (currentIndex <= 0) {
      currentIndex = brightColors.length;

      // Shuffle the array to ensure a different order in subsequent rounds
      for (let i = currentIndex - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [brightColors[i], brightColors[j]] = [brightColors[j], brightColors[i]];
      }
    }

    currentIndex--;

    return brightColors[currentIndex];
  };
})();

const Alphabet = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const randomColor = getBrightColors();
  const alphabetRef = useRef(null);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (alphabetRef.current && !alphabetRef.current.contains(event.target)) {
        setIsClicked(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div ref={alphabetRef}>
      <div
        className={`w-24 sm:w-48 p-2 sm:p-4 rounded-lg text-white text-2xl font-bold ${isClicked ? 'border-white border-2' : ''}`}
        style={{ backgroundColor: randomColor }}
        onClick={handleClick}
      >
        <div>{props.letter}</div>
      </div>
    </div>
  );
};

export default Alphabet;
