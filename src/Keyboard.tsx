const keys = ["a", "b", "c", "d", "e", "f", "g", "h",
              "i", "j", "k", "l", "m", "n", "o", "p",
              "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

export function Keyboard() {
    
    return <div className="keyboard-container">
        {keys.map(key => {
            return (
                <button key={key} className="button inactive">{key}</button>
            )
        })}
    </div>
}