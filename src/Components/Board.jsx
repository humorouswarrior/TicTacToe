import React from 'react'; //type rafce and press enter
import Square from './Square';
import { useState } from 'react'; //using react hooks here First hook we use is 'state' //see documentation if confused

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null)); //[state, update function]
  const handleSquareClick = () => {
    setBoard(prev => {
      return prev.map((square, pos) => {
        if (pos === position) {
          return 'X';
        }
        return square;
      });
    });
  };

  const renderSquare = position => {
    return (
      <Square
        value={board[position]}
        onclick={() => handleSquareClick(position)}
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
