import React, { Component } from 'react';
import './style.css';

import Modal from "react-modal"

class CardModal extends Component {
  render() {
    return (
      <Modal
        className="CardModal"
        isOpen={this.props.open}
        contentLabel="Card">
        <div
          className="CardHolder">
          <img
            className="CardImg"
            src={this.props.card.getIn(['cardData', 'imageUrl'])} role="presentation" />
          <button className="CloseModalButton" onClick={this.props.closeModal}>X</button>
        </div>

      </Modal>
    );
  }
}

export default CardModal;
