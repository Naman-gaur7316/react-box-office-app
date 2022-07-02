/* eslint-disable react/function-component-definition */
import React,  { useState } from 'react';
import Board from './components/Board';
import './components/styles/root.scss';
import { calWinner } from './helperCode';


const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isNext, setIsNext] = useState(true);

  const winner = calWinner(board);
  

  const message = winner?`Winner is ${winner}`:`Next player is ${isNext?"X":"O"}`;

  const handleSquareClick = position => {
    if (board[position] !== null || winner) {
      return;
    }

    setBoard(prev => {
      return prev.map((prevVal, pos) => {
        if (pos === position) {
          return isNext ? 'X' : 'O';
        }

        return prevVal;
      });
    });

    setIsNext(prev => !prev);
  };

  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>{ message }</h2>
      <Board board={board} handleSquareClick={handleSquareClick} />
    </div>
  );
};

export default App;
