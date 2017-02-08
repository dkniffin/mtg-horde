import React, { Component } from 'react';
import './style.scss';

import CardPile from "../CardPile"

class Deck extends Component {
  render() {
    return (
      <div className="Deck" >
        <CardPile
          label="Deck"
          cards={this.props.cards}
          onRemoveCard={this.props.onDiscard}
          removeCardText="Discard" >
          {this.props.cards.size > 0 &&
            <img className="cardImage" src="/card-back.png" alt="deck" />
          }
        </CardPile>
      </div>
    );
  }
}

export default Deck;
