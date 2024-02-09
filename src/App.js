// App.js
import React, { useState } from 'react';
import { initializeGame, makeGuess, isGameOver, didPlayerWin } from './GameLogic';
import Keyboard from './Keyboard';
import WordDisplay from './WordDisplay';
import WinScreen from './WinScreen';
import LoseScreen from './LoseScreen';

import './App.css'; 

const App = () => {
  const [gameState, setGameState] = useState(initializeGame());
  const [winStatus, setWinStatus] = useState(null);

  const handleGuess = (letter) => {
    const updatedGameState = makeGuess(gameState, letter);
    setGameState(updatedGameState);

    if (isGameOver(updatedGameState)) {
      setWinStatus(didPlayerWin(updatedGameState));
    }
  };

  const handleTryAgain = () => {
    setGameState(initializeGame());
    setWinStatus(null);
  };

  const gameOver = isGameOver(gameState);

  return (
    <div className={`app-container ${winStatus !== null ? 'win-background' : ''}`}>
      {gameOver ? (
        winStatus ? (
          <WinScreen />
        ) : (
          <LoseScreen onTryAgainClick={handleTryAgain} />
        )
      ) : (
        <React.Fragment>
          <WordDisplay secretWord={gameState.secretWord} guessedLetters={gameState.guessedLetters} />
          <Keyboard onLetterClick={handleGuess} guessedLetters={gameState.guessedLetters} />
          {/* Display other game components as needed */}
        </React.Fragment>
      )}
    </div>
  );
};

export default App;
