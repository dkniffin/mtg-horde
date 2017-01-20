import React, { Component } from 'react';
import './style.css';

import CardPile from "../CardPile"

class Graveyard extends Component {
  render() {
    return (
      <div className="Graveyard">
        <CardPile
          cards={this.props.cards}
          onRemoveCard={this.props.onExile}
          removeCardText="Exile" />
      </div>
    );
  }
}

export default Graveyard;
