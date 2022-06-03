import React from 'react';

const Square = ({ value, onClick }) => {
  return (
    <button type="button" className="square" onClick={onclick}>
      {value}
    </button>
  ); // here for adding class we used className. This is react specific. Get used to it.
};

export default Square;
