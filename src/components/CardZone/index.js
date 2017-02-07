import React, { Component } from 'react';
import './style.css';

import Card from "../Card"

class CardZone extends Component {
  render() {
    return (
      <div id={this.props.id} className="CardZone">
        {
          this.props.cards.map((card) => {
            const i = card.get('index')
            const power = parseInt(card.getIn(['cardData', 'power']), 10) +
                          card.getIn(['counters', 'power']) +
                          card.getIn(['modifiers', 'power'])
            const toughness = parseInt(card.getIn(['cardData', 'toughness']), 10) +
                              card.getIn(['counters', 'toughness']) +
                              card.getIn(['modifiers', 'toughness'])

            const onTap = this.props.onTap ? () => this.props.onTap(i) : false
            return <Card key={"card-" + i}
                         imageUrl={card.getIn(['cardData', 'imageUrl'])}
                         tapped={card.get('tapped')}
                         onTap={onTap}
                         power={power}
                         toughness={toughness}
                         onClick={() => this.props.onCardClick(this.props.location, card) }/>
          })
        }
      </div>
    );
  }
}

export default CardZone;
