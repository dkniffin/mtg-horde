import React, { Component } from 'react';
import './style.css';

import CardPile from "../CardPile"

class Graveyard extends Component {
  render() {
    console.log(this.props.cards.get(-1).get('imageUrl'));
    const topCardImage = this.props.cards.get(-1).get('imageUrl');
    return (
      <div className="Graveyard">
        <CardPile
          cards={this.props.cards}
          onRemoveCard={this.props.onExile}
          removeCardText="Exile">
          <img className="cardImage" src={topCardImage} alt="graveyard" />
        </CardPile>
      </div>
    );
  }
}

export default Graveyard;
