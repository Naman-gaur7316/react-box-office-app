/* eslint-disable react/function-component-definition */
import React from 'react';
import Square from './Square';

const Board = ({ board, handleSquareClick, winningPattern }) => {
  

  const renderSquare = (position) => {

    const isWinPosition = winningPattern.includes(position);
    return (
    <Square value={board[position]} 
    onClick={() => handleSquareClick(position)}
    isWinPosition={isWinPosition}
    />
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
