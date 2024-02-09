
const MAX_INCORRECT_GUESSES = 6;

const initializeGame = () => {
  const secretWord = "WILL YOU BE MY VALENTINE";
  return {
    secretWord,
    guessedLetters: [],
    incorrectGuesses: 0,
  };
};

const makeGuess = (gameState, letter) => {
  const { secretWord, guessedLetters, incorrectGuesses } = gameState;
  let updatedGuessedLetters = guessedLetters.slice(); 
  let updatedIncorrectGuesses = incorrectGuesses;

  if (secretWord.includes(letter)) {
    updatedGuessedLetters = [...guessedLetters, letter];
  } else {
    updatedGuessedLetters = [...guessedLetters, letter];
    updatedIncorrectGuesses += 1;
  }

  const updatedGameState = {
    secretWord,
    guessedLetters: updatedGuessedLetters,
    incorrectGuesses: updatedIncorrectGuesses,
  };

  return updatedGameState;
};

const isGameOver = (gameState) => {
    const { secretWord, guessedLetters, incorrectGuesses } = gameState;
  
    if (didPlayerWin(gameState)) {
      return true; 
    }
  
    const maxIncorrectGuessesReached = incorrectGuesses >= MAX_INCORRECT_GUESSES;
    return maxIncorrectGuessesReached;
  };




const didPlayerWin = (gameState) => {
    const { secretWord, guessedLetters } = gameState;

    const remainingLettersSet = new Set(secretWord.split('').filter((letter) => letter !== ' '));
    const correctlyGuessedLettersSet = new Set(guessedLetters.filter((letter) => remainingLettersSet.has(letter)));
    
    
    return remainingLettersSet.size === correctlyGuessedLettersSet.size;
};


const isLetterGuessed = (letter, guessedLetters) => {
    return guessedLetters && guessedLetters.includes(letter);
};



export { initializeGame, makeGuess, isGameOver, isLetterGuessed, didPlayerWin };
