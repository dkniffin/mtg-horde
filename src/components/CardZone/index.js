import React, { Component } from 'react';
import './style.css';

import Card from "../Card"

class CardZone extends Component {
  render() {
    return (
      <div id={this.props.id} className="CardZone">
        {
          this.props.cards.map((card, i) => {
            const onTap = this.props.onTap ? () => this.props.onTap(i) : false
            return <Card key={"card-" + i}
                         imageUrl={card.getIn(['cardData', 'imageUrl'])}
                         tapped={card.get('tapped')}
                         onTap={onTap}
                         onClick={() => this.props.onCardClick(card) }/>
          })
        }
      </div>
    );
  }
}

export default CardZone;
