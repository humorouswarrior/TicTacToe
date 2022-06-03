import React from 'react';
import Board from './Components/Board';

//may also be written as
// export default () => (
//   <>
//     <h1>Welcome to React Vite Micro App!</h1>
//     <p>Hard to get more minimal than this React app.</p>
//   </>
// );

const app = () => {
  return (
    <div>
      <h1>TIC-TAC-TOE</h1>
      <Board />
    </div>
  );
};

export default app;
