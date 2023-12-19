const HEAD = (
    <div className="head" />
)
const BODY = (
    <div className="body" />
)

const RIGHT_ARM = (
    <div className="right-arm" />
)

const LEFT_ARM = (
    <div className="left-arm" />
)

const LEFT_LEG = (
    <div className="left-leg" />
)

const RIGHT_LEG = (
    <div className="right-leg" />
)


export function HangmanDrawing() {
    return <div className="hangman-drawing-container">

        {HEAD}
        {BODY}
        {RIGHT_ARM}
        {LEFT_ARM}
        {LEFT_LEG}
        {RIGHT_LEG}
    
        <div className="rope" />
        <div className="top-bar" />
        <div className="pole" />
        <div className="bottom-bar" />

    </div>
}