import React from 'react';
import './style.scss';

import Card from "../Card"

const CardZone = function({id, cards, onTap, onCardClick, location}) {
  return (
    <div id={id} className="CardZone">
      {
        cards.map((card) => {
          const i = card.get('index')
          const power = parseInt(card.getIn(['cardData', 'power']), 10) +
                        card.getIn(['counters', 'power']) +
                        card.getIn(['modifiers', 'power'])
          const toughness = parseInt(card.getIn(['cardData', 'toughness']), 10) +
                            card.getIn(['counters', 'toughness']) +
                            card.getIn(['modifiers', 'toughness'])

          return <Card key={"card-" + i}
                       imageUrl={card.getIn(['cardData', 'imageUrl'])}
                       tapped={card.get('tapped')}
                       onTap={onTap ? () => onTap(i) : false}
                       power={power}
                       toughness={toughness}
                       onClick={() => onCardClick(location, card) }/>
        })
      }
    </div>
  );
}

export default CardZone;
