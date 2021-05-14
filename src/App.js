import React, {useState} from 'react';

import './App.css';

import Board from './components/Board';

const X = "X";
const O = "O";

const boardInitialState = ["", "", "", "", "", "", "", "", ""];

function App() {
  const [board, setBoard] = useState(boardInitialState);
  const [playerTurn, setPlayerTurn] = useState(X);

  const squareClicked = (index) => {
    const valueAtIndex = board[index];
    if (valueAtIndex === "") {
      board[index] = playerTurn;
      setBoard(board);
      setPlayerTurn(playerTurn === X? O: X);
      checkIsWinner();
    } else {
      alert("Already filled");
    }
  }

  const checkIsWinner = () => {
    let hasWon = false;
    if (board[0] === board[1] && board[1] === board[2] && board[0] !== "") {
      alert(`${board[0]} won`);
      hasWon = true;
    }
    else if (board[3] === board[4] && board[4] === board[5] && board[3] !== "") {
      alert(`${board[3]} won`);
      hasWon = true;
    }
    else if (board[6] === board[7] && board[7] === board[8] && board[6] !== "") {
      alert(`${board[6]} won`);
      hasWon = true;
    }
    else if (board[0] === board[3] && board[3] === board[6] && board[0] !== "") {
      alert(`${board[0]} won`);
      hasWon = true;
    }
    else if (board[1] === board[4] && board[4] === board[7] && board[1] !== "") {
      alert(`${board[1]} won`);
      hasWon = true;
    }
    else if (board[2] === board[5] && board[5] === board[8] && board[2] !== "") {
      alert(`${board[2]} won`);
      hasWon = true;
    }
    else if (board[0] === board[4] && board[4] === board[8] && board[0] !== "") {
      alert(`${board[0]} won`);
      hasWon = true;
    }
    else if (board[2] === board[4] && board[4] === board[6] && board[2] !== "") {
      alert(`${board[2]} won`);
      hasWon = true;
    }
    if (hasWon) {
      setBoard(["", "", "", "", "", "", "", "", "",])
      setPlayerTurn(X);
    }
  }

  return (
    <div className="App">
        <Board board={board} squareClicked={squareClicked}  />
    </div>
  );
}

export default App;
