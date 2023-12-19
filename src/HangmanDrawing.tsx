const HEAD = (
    <div className="head" />
)
const BODY = (
    <div className="body" />
)

export function HangmanDrawing() {
    return <div className="hangman-drawing-container">

        {HEAD}
        {BODY}
        <div className="rope" />
        <div className="top-bar" />
        <div className="pole" />
        <div className="bottom-bar" />

    </div>
}