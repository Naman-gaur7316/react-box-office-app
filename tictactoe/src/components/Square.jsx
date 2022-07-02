/* eslint-disable react/function-component-definition */
import React from 'react';

// import './styles/root.scss';

const Square = ({ value, onClick }) => {
  return (
    <button type="button" className='square' onClick={onClick}>
      {value}
    </button>  
  );
};

export default Square;
