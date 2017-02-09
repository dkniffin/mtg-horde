import React from 'react';
import './style.scss';

const Hand = function({cards, onDiscard, onDraw}) {
  return (
    <div className="Hand">
      <div className="HandSize">
        {cards.size}
      </div>
      <button className="HandButton" onClick={onDiscard}>-</button>
      <button className="HandButton"  onClick={onDraw}>+</button>
    </div>
  );
}

export default Hand;
