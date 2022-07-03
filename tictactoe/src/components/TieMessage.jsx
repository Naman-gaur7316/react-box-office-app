/* eslint-disable react/function-component-definition */
import React from 'react'

const TieMessage = ({ winner, initialCount, current}) => {
    
    // const message1 = "Start";
    // ?`Winner is ${winner}`:`Next player is ${current.isXNext?"X":"O"}`;
    const noMoveLeft = current.board.every((elem) => elem !== null);

    const printMessage = () => {
        let message;
        if(initialCount === 0){
            message = "Start";
        }
        else if(!winner && !noMoveLeft){
            message = `player ${current.isXNext? "X" : "O"} turn`;
        }
        else if(!winner && noMoveLeft){
            message  = `Player X and O tied`;
        }
        else if(winner !== false){
            message = `Winner is ${winner}`;
        }

        return message;
    }

  return (
    <h2>
        {
            printMessage()
        }
    </h2>
  )
}

export default TieMessage