import React from 'react';
import './style.scss';

const BoardWipe = function ({all, nonLandPermanents, creatures, tokens}) {
  return (
    <div className='BoardWipe'>
      <span className='boardWipeTitle'>Board Wipe</span>
      <button onClick={all}>All</button>
      <button onClick={nonLandPermanents}>Non-land Permanents</button>
      <button onClick={creatures}>Creatures</button>
      <button onClick={tokens}>Tokens</button>
    </div>
  );
}

export default BoardWipe;
