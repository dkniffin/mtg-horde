import React, { Component } from 'react';
import './style.css';

class GameForm extends Component {
  handleSubmit(event) {

    event.preventDefault();
  }

  render() {
    return (
      <div className="GameForm">
        <div className="outer-box">
          <div className="inner-box">
            <form onSubmit={this.handleSubmit}>
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
}

export default GameForm;
