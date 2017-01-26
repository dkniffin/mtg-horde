import React, { Component } from 'react';
import './style.css';

import CardPile from "../CardPile"

class Graveyard extends Component {
  render() {
    const topCardImage = this.props.cards.getIn([-1, 'cardData', 'imageUrl'])
    return (
      <div className="Graveyard">
        <CardPile
          label="Graveyard"
          cards={this.props.cards}
          onRemoveCard={this.props.onExile}
          removeCardText="Exile">
          {topCardImage !== undefined &&
            <img className="cardImage" src={topCardImage} alt="graveyard" />
          }
        </CardPile>
      </div>
    );
  }
}

export default Graveyard;
