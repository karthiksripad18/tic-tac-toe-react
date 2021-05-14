import React from 'react';
import './Board.css';

function Board({board, squareClicked}) {
    console.log(board);
    return (
        <div className="grid-container">
            {
                board.map(
                    (square, index) => {
                        return <div key={index} onClick={() => squareClicked(index)} className="grid-item">{square}</div>
                    }
                )
            }
        </div>
    )
}

export default Board;
