import React from 'react';
import './style.scss';

import CardPile from "../CardPile"

const Graveyard = function({cards, onExile, openGraveyardModal}) {
  const topCardImage = cards.getIn([-1, 'cardData', 'imageUrl'])
  return (
    <div className="Graveyard">
      <CardPile
        label="Graveyard"
        cards={cards}
        onRemoveCard={onExile}
        removeCardText="Exile">
        {topCardImage !== undefined &&
          <img
            className="cardImage"
            src={topCardImage}
            alt="graveyard"
            onClick={openGraveyardModal}/>
        }
      </CardPile>
    </div>
  );
}

export default Graveyard;
