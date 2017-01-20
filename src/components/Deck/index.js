import React, { Component } from 'react';
import './style.css';

import CardPile from "../CardPile"

class Deck extends Component {
  render() {
    return (
      <div className="Deck" >
        <CardPile
          cards={this.props.cards}
          onRemoveCard={this.props.onDiscard}
          removeCardText="Discard" />
      </div>
    );
  }
}

export default Deck;
