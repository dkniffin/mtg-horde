import React from 'react';
import './style.scss';

import Card from "../Card"

const CardZone = function({id, cards, onTap, onCardClick, location}) {
  return (
    <div id={id} className="CardZone">
      {
        cards.map((card) => {
          const i = card.index

          return <Card key={"card-" + i}
                       imageUrl={card.getIn(['cardData', 'imageUrl'])}
                       tapped={card.get('tapped')}
                       onTap={onTap ? () => onTap(i) : false}
                       power={card.calculatePower()}
                       toughness={card.calculateToughness()}
                       onClick={() => onCardClick(location, card) }/>
        })
      }
    </div>
  );
}

export default CardZone;
