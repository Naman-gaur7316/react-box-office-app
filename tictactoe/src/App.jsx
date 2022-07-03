/* eslint-disable react/function-component-definition */
import React,  { useState } from 'react';
import Board from './components/Board';
import History from './components/History';
import './components/styles/root.scss';
import { calWinner } from './helperCode';


const App = () => {
  const [history, setHistory] = useState([
    {board: Array(9).fill(null), isXNext: true},
  ]);

  console.log("history: ",  history);
  // console.log(setHistory);
  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];
  const winner = calWinner(current.board);
  // console.log(current);

  const message = winner?`Winner is ${winner}`:`Next player is ${current.isXNext?"X":"O"}`;

  const handleSquareClick = position => {
    if (current.board[position] !== null || winner) {
      return;
    }

    setHistory(prev => {
      const lastElem = prev[prev.length - 1];

      const newBoard =  lastElem.board.map((prevVal, pos) => {
        if (pos === position) {
          return lastElem.isXNext ? 'X' : 'O';
        }

        return prevVal;
      });

      return prev.concat({ board: newBoard, isXNext: !lastElem.isXNext })
    });

    setCurrentMove(prev => prev + 1);
  };

  const goBack = (index) => {
    setCurrentMove(index)
  }

  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>{ message }</h2>
      <Board board={current.board} handleSquareClick={handleSquareClick} />
      <History history={history} goBack={ goBack } currentMove={ currentMove } />
    </div>
  );
};

export default App;
