import React, { Component } from 'react';
import './style.css';

import Modal from "react-modal"

class CardModal extends Component {

  constructor(props) {
    super(props);

    this.handleGraveyard = this.handleGraveyard.bind(this);
    this.handleExile = this.handleExile.bind(this);
    this.handleLibrary = this.handleLibrary.bind(this);
  }

  handleGraveyard(event) {
    this.props.onGraveyard(this.props.cardLocation, this.props.cardIndex)
    this.props.onClose()
  }
  handleExile(event) {
    this.props.onExile(this.props.cardLocation, this.props.cardIndex)
    this.props.onClose()
  }
  handleLibrary(event) {
    this.props.onLibrary(this.props.cardLocation, this.props.cardIndex)
    this.props.onClose()
  }

  render() {
    return (
      <Modal
        className="CardModal"
        isOpen={this.props.open}
        contentLabel="Card">
        {this.props.card &&
          <div
            className="CardHolder">
            <img
              className="CardImg"
              src={this.props.card.getIn(['cardData', 'imageUrl'])} role="presentation" />
            <button className="CloseModalButton" onClick={this.props.onClose}>X</button>
            <div className="controlButtons">
              <button onClick={this.handleGraveyard}>Send to Graveyard</button>
              <button onClick={this.handleExile}>Send to Exile</button>
              <button onClick={this.handleLibrary}>Send to Library</button>
            </div>
          </div>
        }
      </Modal>
    );
  }
}

export default CardModal;
