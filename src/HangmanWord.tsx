type HangmanWordProps = {
    guessedLetters: string[]
    wordToGuess: string
}

export function HangmanWord({guessedLetters, wordToGuess}: HangmanWordProps) {
    
    

    return <div className="hangman-word-container">
        
        {wordToGuess.split("").map((letter,index) => (
            <span className="hang-letter-whole" key={index}>
                <span style={{
                    visibility: guessedLetters.includes(letter) 
                    ? "visible" : "hidden"
                }}>{letter}</span>
            </span>
        ))}


    </div>
}