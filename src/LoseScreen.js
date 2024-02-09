// LoseScreen.js
import React from 'react';

const LoseScreen = ({ onTryAgainClick }) => {
  return (
    <div className="lose-screen">
      <h1>You lost!</h1>
      <button onClick={onTryAgainClick}>Try Again</button>
    </div>
  );
};

export default LoseScreen;
