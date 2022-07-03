/* eslint-disable react/function-component-definition */
import React from 'react';

// import './styles/root.scss';

const Square = ({ value, onClick, isWinPosition }) => {
  return (
    <button type="button" 
    onClick={onClick} 
    className={`square ${isWinPosition? 'winning' : ''} ${value === 'X'? 'text-green' : 'text-orange'}`}
    style={
      {
        fontWeight: isWinPosition? 'bold': 'normal',
      }
    }>
      {value}
    </button>  
  );
};

export default Square;
