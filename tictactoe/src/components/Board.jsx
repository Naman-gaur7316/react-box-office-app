/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import Square from './Square';

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isNext, setIsNext] = useState(true);

  // if(board.indexOf(null) === -1){
  //   console.log(board);
  // }

  const handleSquareClick = (position) => {


    if(board[position] !== null){
      return;
    }



    setBoard(prev => {
      
      return prev.map((prevVal, pos) => {
        if(pos === position){
          return isNext?"X" : "O";

        }

        return prevVal;
      })
    });

    setIsNext(prev => !prev)
  };

  const renderSquare = (position) => {
    return (
    <Square value={board[position]} 
    onClick={() => handleSquareClick(position)} />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
