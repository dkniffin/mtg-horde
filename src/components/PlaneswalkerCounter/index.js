import React from 'react';
import './style.scss';

const PlaneswalkerCounter = function({count, onRemove, onAdd}) {
  return (
    <div className="PlaneswalkerCounter">
      <div className="NumPlaneswalkers">
        {count}
      </div>
      <button className="PlaneswalkerButton" onClick={onRemove}>-</button>
      <button className="PlaneswalkerButton"  onClick={onAdd}>+</button>
    </div>
  );
}

export default PlaneswalkerCounter;
