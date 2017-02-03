import React, { Component } from 'react';
import './style.css';

import Modal from "react-modal"

class CardModal extends Component {

  constructor(props) {
    super(props);

    this.handleGraveyard = this.handleGraveyard.bind(this);
    this.handleExile = this.handleExile.bind(this);
    this.handleLibrary = this.handleLibrary.bind(this);
    this.handleHand = this.handleHand.bind(this);
    this.handleBattlefield = this.handleBattlefield.bind(this);
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
  handleHand(event) {
    this.props.onHand(this.props.cardLocation, this.props.cardIndex)
    this.props.onClose()
  }
  handleBattlefield(event) {
    this.props.onBattlefield(this.props.cardLocation, this.props.cardIndex)
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
              {this.props.cardLocation !== 'graveyard' &&
                <button onClick={this.handleGraveyard}>Send to Graveyard</button>
              }
              {this.props.cardLocation !== 'exile' &&
                <button onClick={this.handleExile}>Send to Exile</button>
              }
              {this.props.cardLocation !== 'deck' &&
                <button onClick={this.handleLibrary}>Send to Library</button>
              }
              {this.props.cardLocation !== 'hand' &&
                <button onClick={this.handleHand}>Send to Hand</button>
              }
              {this.props.cardLocation !== 'permanents' &&
                <button onClick={this.handleBattlefield}>Send to Battlefield</button>
              }
            </div>
          </div>
        }
      </Modal>
    );
  }
}

export default CardModal;
