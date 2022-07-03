/* eslint-disable react/function-component-definition */
import React from 'react'

const History = ({ history, goBack, currentMove }) => {
  return (
    
    <div className='history-wrapper'>
        <ul className='history'>
        {
            history.map((_, index) => {
                return (
                    <li key={index}>
                        <button
                        className={`btn-move  ${index === currentMove?'active' : ''}`}
                        style={ {
                            fontWeight: index === currentMove? 'bold' : 'normal',
                            // fontFamily: index === currentMove? 
                        }} 
                        type='button' 
                        onClick={() => {
                            goBack(index)
                        }}
                        >
                            { index === 0? 'Start the game':`Go to move #${index}`  }
                        </button>
                    </li>
                )
            })
        }
    </ul>
    </div>
  )
}

export default History