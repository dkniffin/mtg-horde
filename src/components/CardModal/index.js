import React from 'react';
import './style.scss';

import Modal from "react-modal"

const CardModal = function({
    card, cardLocation, cardIndex, open,
    onClose, onGraveyard, onExile, onLibrary, onHand, onBattlefield}) {
  const handleGraveyard = function(event) {
    onGraveyard(cardLocation, cardIndex)
    onClose()
  }
  const handleExile = function(event) {
    onExile(cardLocation, cardIndex)
    onClose()
  }
  const handleLibrary = function(event) {
    onLibrary(cardLocation, cardIndex)
    onClose()
  }
  const handleHand = function(event) {
    onHand(cardLocation, cardIndex)
    onClose()
  }
  const handleBattlefield = function(event) {
    onBattlefield(cardLocation, cardIndex)
    onClose()
  }

  return (
    <Modal
      className="CardModal"
      isOpen={open}
      contentLabel="Card">
      {card &&
        <div
          className="CardHolder">
          <img
            className="CardImg"
            src={card.getIn(['cardData', 'imageUrl'])} role="presentation" />
          <button className="CloseModalButton" onClick={onClose}>X</button>
          <div className="controlButtons">
            {cardLocation !== 'graveyard' &&
              <button onClick={handleGraveyard}>Send to Graveyard</button>
            }
            {cardLocation !== 'exile' &&
              <button onClick={handleExile}>Send to Exile</button>
            }
            {cardLocation !== 'deck' &&
              <button onClick={handleLibrary}>Send to Library</button>
            }
            {cardLocation !== 'hand' &&
              <button onClick={handleHand}>Send to Hand</button>
            }
            {cardLocation !== 'permanents' &&
              <button onClick={handleBattlefield}>Send to Battlefield</button>
            }
          </div>
        </div>
      }
    </Modal>
  );
}

export default CardModal;
