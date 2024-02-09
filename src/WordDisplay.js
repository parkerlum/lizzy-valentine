// WordDisplay.js
import React from 'react';
import './WordDisplay.css';

const WordDisplay = ({ secretWord, guessedLetters }) => {
  const displayWord = secretWord
    .split('')
    .map((letter) => (letter === ' ' ? ' ' : guessedLetters.includes(letter) ? letter : '_'))
    .join('');

  return <div className="word-display">{displayWord}</div>;
};

export default WordDisplay;
