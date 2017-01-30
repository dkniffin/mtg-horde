import React, { Component } from 'react';
import Modal from 'react-modal';
import Card from "../Card"

import './style.css';

class ListModal extends Component {
  render() {
    return (
      <Modal isOpen={this.props.cards.size > 0} contentLabel="Graveyard">
        <div id={this.props.id} className="ModalCardList">
          {
            this.props.cards.map((card, i) => {
              return <Card key={"card-" + i}
                           imageUrl={card.getIn(['cardData', 'imageUrl'])}
                           tapped={card.get('tapped')}
                           onTap={() => this.props.onTap(i)} />
            })
          }
        </div>
      </Modal>
    );
  }
}

export default ListModal;
