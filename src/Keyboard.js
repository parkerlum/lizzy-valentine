import React from 'react';
import './Keyboard.css';
import { isLetterGuessed } from './GameLogic';

const Keyboard = ({ onLetterClick, guessedLetters }) => {
  const alphabet = 'QWERTYUIOPASDFGHJKLZXCVBNM';
  const rows = 3; // Number of rows
  const lettersPerRow = Math.ceil(alphabet.length / rows);

  const createRows = () => {
    const rowsArray = [];
    for (let i = 0; i < rows; i++) {
      const rowStart = i * lettersPerRow;
      const rowEnd = (i + 1) * lettersPerRow;
      const rowLetters = alphabet.slice(rowStart, rowEnd);

      rowsArray.push(
        <div className="keyboard-row" key={i}>
          {rowLetters.split('').map((letter, index) => (
            <button
              key={index}
              onClick={() => onLetterClick(letter)}
              disabled={isLetterGuessed(letter, guessedLetters)}
            >
              {letter}
            </button>
          ))}
        </div>
      );
    }
    return rowsArray;
  };

  return <div className="keyboard">{createRows()}</div>;
};

export default Keyboard;
