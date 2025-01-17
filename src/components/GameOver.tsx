import React from "react";

export default function GameOver ({winner, onRestart}: any): React.JSX.Element {
    return <div id="game-over">
        <h2>Game Over!</h2>
        {winner && <p>{winner} won!</p>}
        {!winner && <p>{winner} It is a draw!</p>}
        <p><button onClick={onRestart}>Rematch!</button></p>
    </div>
}