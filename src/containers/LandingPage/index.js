import React, { Component } from 'react';
import './style.css';
import GameForm from './GameForm/index'

class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage">
        <h1>Horde Magic</h1>

        <GameForm />
      </div>
    );
  }
}

export default LandingPage;
