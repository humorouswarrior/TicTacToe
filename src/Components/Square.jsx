import React from 'react';

const Square = ({ value }) => {
  return (
    <button type="button" className="square">
      {value}
    </button>
  ); // here for adding class we used className. This is react specific. Get used to it.
};

export default Square;
