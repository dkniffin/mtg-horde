import React, { Component } from 'react';
import './style.css';

import Card from "../Card"

class CreatureZone extends Component {
  render() {
    return (
      <div className="CreatureZone" >
        {
          this.props.cards.map((card, i) => {
            return <Card key={"card-" + i} imageUrl={card.getIn(['cardData', 'imageUrl'])}
                         tapped={card.get('tapped')} />
          })
        }
      </div>
    );
  }
}

export default CreatureZone;
