import React, { Component } from 'react'
import { connect } from 'react-redux'
import Immutable from 'immutable'
import './style.css'

import Deck from '../../components/Deck'
import Hand from '../../components/Hand'
import Graveyard from '../../components/Graveyard'
import CardZone from '../../components/CardZone'
import PhaseTracker from '../../components/PhaseTracker'
import ListModal from '../../components/ListModal'
import CardModal from '../../components/CardModal'
import TokenCreator from '../../components/TokenCreator'
// import PlaneswalkerCounter from '../../components/PlaneswalkerCounter'

import { discardCards as deckDiscard } from '../../actions/deckActions'
import { exileCards, openGraveyardModal, closeGraveyardModal } from '../../actions/graveyardActions'
import {
  toggleTapped, openCardModal, sendToGraveyard, sendToExile,
  sendToLibrary, sendToHand, sendToBattlefield
} from '../../actions/cardActions'
import { nextPhase } from '../../actions/phaseActions'
import { discardCards as handDiscard, drawCards } from '../../actions/handActions'
import { closeModal } from '../../actions/modalActions'
import { addPlaneswalker, removePlaneswalker } from '../../actions/planeswalkerActions'
import { buffTokenPower, debuffTokenPower, buffTokenToughness, debuffTokenToughness, spawnToken } from '../../actions/tokenActions'

import { phases } from '../../helpers/phaseHelper.js'

class GamePage extends Component {
  render() {
    return (
      <div className="GamePage">
        <PhaseTracker
          phase={this.props.phase}
          onNextPhase={this.props.nextPhase}/>
        <Graveyard
          cards={this.props.graveyard}
          onExile={this.props.exileCards}
          openGraveyardModal={this.props.openGraveyardModal}/>
        <Deck
          cards={this.props.deck}
          onDiscard={this.props.deckDiscard}/>
        <Hand
          cards={this.props.hand}
          onDiscard={this.props.handDiscard}
          onDraw={this.props.drawCards}/>
        <CardZone
          id="PendingZone"
          location='pending'
          cards={this.props.pending}
          onCardClick={this.props.openCardModal} />
        <CardZone
          id="PermanentZone"
          location='permanents'
          cards={this.props.permanents}
          onTap={this.props.toggleTapped}
          onCardClick={this.props.openCardModal} />
        <CardModal
          open={this.props.cardModal.open}
          cardIndex={this.props.cardModal.cardIndex}
          cardLocation={this.props.cardModal.cardLocation}
          card={this.props.cardModal.cardData}
          onClose={this.props.closeModal}
          onGraveyard={this.props.sendToGraveyard}
          onExile={this.props.sendToExile}
          onLibrary={this.props.sendToLibrary}
          onHand={this.props.sendToHand}
          onBattlefield={this.props.sendToBattlefield} />
        <TokenCreator
          onSpawn={this.props.spawnToken}
          onDebuffPower={this.props.debuffTokenPower}
          onBuffPower={this.props.buffTokenPower}
          onDebuffToughness={this.props.debuffTokenToughness}
          onBuffToughness={this.props.buffTokenToughness}
          tokenPower={this.props.tokenPower}
          tokenToughness={this.props.tokenToughness} />
        <ListModal
          cards={this.props.listModal}
          location='graveyard'
          onClose={this.props.closeGraveyardModal}
          onCardClick={this.props.openCardModal} />
      </div>
    )
  }
}

export default connect(
  (state) => {
    const modalCardLocation = state.getIn(['cardModal', 'cardLocation'])
    const modalCardIndex = state.getIn(['cardModal', 'cardIndex'])
    const modalCardData = modalCardLocation ?
      state.get(modalCardLocation).find((card) => card.get('index') === modalCardIndex)
      : Immutable.fromJS({})

    return {
      phase: phases[state.get('phase')],
      planeswalkers: state.get('planeswalkers'),
      deck: state.get('deck'),
      hand: state.get('hand'),
      pending: state.get('pending'),
      permanents: state.get('permanents'),
      graveyard: state.get('graveyard'),
      cardModal: {
        open: state.getIn(['cardModal', 'open']),
        cardLocation: modalCardLocation,
        cardIndex: modalCardIndex,
        cardData: modalCardData
      },
      listModal: state.get('listModal'),
      tokenPower: state.getIn(['tokenSpawner', 'power']),
      tokenToughness: state.getIn(['tokenSpawner', 'toughness'])
    }
  },
  {
    deckDiscard,
    exileCards,
    toggleTapped,
    openCardModal,
    nextPhase,
    handDiscard,
    drawCards,
    closeModal,
    addPlaneswalker,
    removePlaneswalker,
    sendToGraveyard,
    sendToExile,
    sendToLibrary,
    sendToHand,
    sendToBattlefield,
    openGraveyardModal,
    closeGraveyardModal,
    buffTokenPower,
    debuffTokenPower,
    buffTokenToughness,
    debuffTokenToughness,
    spawnToken
  })(GamePage)
