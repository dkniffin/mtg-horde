import React from 'react';
import './style.scss';

import CardPile from "../CardPile"

const Deck = function({cards, onDiscard}) {
  return (
    <div className="Deck" >
      <CardPile
        label="Deck"
        cards={cards}
        onRemoveCard={onDiscard}
        removeCardText="Discard" >
        {cards.size > 0 &&
          <img className="cardImage" src="/card-back.png" alt="deck" />
        }
      </CardPile>
    </div>
  );
}

export default Deck;
