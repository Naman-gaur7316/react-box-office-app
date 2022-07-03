/* eslint-disable react/function-component-definition */
import React from 'react';

// import './styles/root.scss';

const Square = ({ value, onClick, isWinPosition }) => {
  return (
    <button type="button" 
    className='square' 
    onClick={onClick} 
    style={
      {
        fontWeight: isWinPosition? 'bold': 'normal',
        color: isWinPosition? 'orangered' : 'black',
        transition: 'all 0.5s'
      }
    }>
      {value}
    </button>  
  );
};

export default Square;
