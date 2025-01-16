import { useState } from 'react'
import './App.css'

 function Square({value, onSquareClick}) {
  return (
  <button className="square" onClick={onSquareClick}>
    {value}
    </button>
 );
 }
 function Board() {
  const [xIsNext, setXNext] = useState(true);
  const [square, setSquare] = useState(Array(9).fill(null));
  const winner = calculateWinner(square);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }
  function handleClick(i)
  {
    if (square[i] || calculateWinner(square))
    {
      return;
    }
    const nextSquares = square.slice();
    xIsNext ? nextSquares[i] = "X" : nextSquares[i] = "O";
    setSquare(nextSquares);
    setXNext(!xIsNext);
  }

  return (
  <>
    <h1 className={'next ' + (winner ? 'animate' : '')}>{status}</h1>
    <div className='row1'>
      <Square value={square[0]} onSquareClick= {() => handleClick(0)}/>
      <Square value={square[1]} onSquareClick= {() => handleClick(1)}/>
      <Square value={square[2]} onSquareClick= {() => handleClick(2)}/>
    </div>
      <div className='row2'>
      <Square value={square[3]} onSquareClick= {() => handleClick(3)}/>
      <Square value={square[4]} onSquareClick= {() => handleClick(4)}/>
      <Square value={square[5]} onSquareClick= {() => handleClick(5)}/>
      </div>
      <div className='row3'>
      <Square value={square[6]} onSquareClick= {() => handleClick(6)}/>
      <Square value={square[7]} onSquareClick= {() => handleClick(7)}/>
      <Square value={square[8]} onSquareClick= {() => handleClick(8)}/>
      </div>
    </>
  );
 }
 function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
 function App() {
  return (
    <Board/>
  );
}

export default App
