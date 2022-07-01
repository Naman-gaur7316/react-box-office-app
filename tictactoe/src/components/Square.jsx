/* eslint-disable react/function-component-definition */
import React from 'react';

// import './styles/root.scss';

const Square = ({ value, children }) => {
  return (
    <button type="button" className='square'>
      {value}
    </button>  
  );
};

export default Square;
