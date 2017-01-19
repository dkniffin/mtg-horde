import React, { Component } from 'react';
import './style.css';

import Deck from "../Deck"

class Playarea extends Component {
  render() {
    return (
      <div className="Playarea">
        <Deck cards={this.props.deck.length} />
      </div>
    );
  }
}

export default Playarea;
