import React, { useEffect, useRef } from 'react';
import FallingHearts from './FallingHearts';
import './WinScreen.css'; // Import the CSS file

const WinScreen = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    // When the WinScreen component mounts, play the music
    audioRef.current.play();
  }, []);

  return (
    <div className="win-screen">
      <h1>Will you be my valentine?</h1>
      {/* Include the audio element */}
      <audio ref={audioRef} src={"/loves_dream.mp3"} loop />
      {/* Render the FallingHearts component */}
      <FallingHearts />
    </div>
  );
};

export default WinScreen;
