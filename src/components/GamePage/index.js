import React, { Component } from 'react';
import './style.css';

import Playarea from "./Playarea";

class GamePage extends Component {
  render() {
    return (
      <div className="GamePage">
        <Playarea>
        </Playarea>
      </div>
    );
  }
}

export default GamePage;
