import React, { Component } from 'react';
import Modal from 'react-modal';
import Card from "../Card"

import './style.scss';

class ListModal extends Component {
  render() {
    return (
      <Modal
        isOpen={this.props.cards.size > 0}
        contentLabel="Graveyard">
        <div id={this.props.id} className="ListModal">
          {
            this.props.cards.map((card, i) => {
              return <Card key={"card-" + i}
                           imageUrl={card.getIn(['cardData', 'imageUrl'])}
                           tapped={card.get('tapped')}
                           onClick={() => this.props.onCardClick(this.props.location, card) }/>
            })
          }
        </div>
        <button className="CloseModalButton" onClick={this.props.onClose}>X</button>
      </Modal>
    );
  }
}

export default ListModal;
