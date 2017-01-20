import React, { Component } from 'react';
import './style.css';

import CardPile from "../CardPile"
import Card from "../Card"

class Graveyard extends Component {
  render() {
    const topCardImage = this.props.cards.getIn([-1, 'imageUrl'])
    return (
      <div className="Graveyard">
        <CardPile
          label="Graveyard"
          cards={this.props.cards}
          onRemoveCard={this.props.onExile}
          removeCardText="Exile">
          {topCardImage !== undefined &&
            <Card imageUrl={topCardImage} tapped={false} />
          }
        </CardPile>
      </div>
    );
  }
}

export default Graveyard;
