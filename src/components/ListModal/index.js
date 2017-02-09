import React from 'react';
import Modal from 'react-modal';
import Card from "../Card"

import './style.scss';

const ListModal = function ({cards, id, location, onClose, onCardClick}) {
  return (
    <Modal
      isOpen={cards.size > 0}
      contentLabel="Graveyard">
      <div id={id} className="ListModal">
        {
          cards.map((card, i) => {
            return <Card key={"card-" + i}
                         imageUrl={card.getIn(['cardData', 'imageUrl'])}
                         tapped={card.get('tapped')}
                         onClick={() => onCardClick(location, card) }/>
          })
        }
      </div>
      <button className="CloseModalButton" onClick={onClose}>X</button>
    </Modal>
  );
}

export default ListModal;
