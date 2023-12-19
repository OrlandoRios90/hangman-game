import { useState } from "react"
import "./styles.css";
import words from "./wordList.json";
import { HangmanDrawing } from "./HangmanDrawing";
import { HangmanWord } from "./HangmanWord";
import { Keyboard } from "./Keyboard";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])


  return (
    <div className="main">
      <div className="lose-win">Lose Win</div>
      <HangmanDrawing />
      <HangmanWord />
      <Keyboard />
      <h1>{wordToGuess}</h1>
    </div>
  )
}

export default App
