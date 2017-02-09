import React from 'react';
import './style.scss';

const GameForm = function() {
  const handleSubmit = ((event) => {
    event.preventDefault();
  });

  return (
    <div className="GameForm">
      <div className="outer-box">
        <div className="inner-box">
          <form onSubmit={handleSubmit}>
            <label htmlFor="numOfPlayers"># of Players (Max 6):</label>
            <input id="numOfPlayers" type="number" min="1" max="6" value="4" />
            <br />
            <br />
            <input type="submit" value="Play!"/>
          </form>
        </div>
      </div>
    </div>
  );
}

export default GameForm;
