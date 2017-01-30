import React, { Component } from 'react'
import { connect } from "react-redux"
import Immutable from 'immutable'
import './style.css'

import Deck from "../../components/Deck"
import Hand from "../../components/Hand"
import Graveyard from "../../components/Graveyard"
import CardZone from "../../components/CardZone"
import PhaseTracker from "../../components/PhaseTracker"
import ListModal from "../../components/ListModal"
import CardModal from "../../components/CardModal"
import TokenCreator from "../../components/TokenCreator"
// import PlaneswalkerCounter from "../../components/PlaneswalkerCounter"

import { discardCards as deckDiscard } from "../../actions/deckActions"
import { exileCards, openGraveyardModal } from "../../actions/graveyardActions"
import { toggleTapped, openCardModal, sendToGraveyard, sendToExile, sendToLibrary } from "../../actions/cardActions"
import { nextPhase } from "../../actions/phaseActions"
import { discardCards as handDiscard, drawCards } from "../../actions/handActions"
import { closeModal } from "../../actions/modalActions"
import { addPlaneswalker, removePlaneswalker } from "../../actions/planeswalkerActions"

import { phases } from '../../helpers/phaseHelper.js'

class GamePage extends Component {
  render() {
    return (
      <div className="GamePage">
        <PhaseTracker phase={this.props.phase} onNextPhase={this.props.nextPhase}/>
        <Graveyard cards={this.props.graveyard} onExile={this.props.exileCards} openGraveyardModal={this.props.openGraveyardModal}/>
        <Deck cards={this.props.deck} onDiscard={this.props.deckDiscard}/>
        <Hand cards={this.props.hand} onDiscard={this.props.handDiscard} onDraw={this.props.drawCards}/>
        <CardZone id="PendingZone"
                  location='pending'
                  cards={this.props.pending}
                  onCardClick={this.props.openCardModal} />
        <CardZone id="PermanentZone"
                  location='permanents'
                  cards={this.props.permanents}
                  onTap={this.props.toggleTapped}
                  onCardClick={this.props.openCardModal} />
        <CardModal open={this.props.cardModal.open}
                   cardIndex={this.props.cardModal.cardIndex}
                   cardLocation={this.props.cardModal.cardLocation}
                   card={this.props.cardModal.cardData}
                   onClose={this.props.closeModal}
                   onGraveyard={this.props.sendToGraveyard}
                   onExile={this.props.sendToExile}
                   onLibrary={this.props.sendToLibrary} />
        <TokenCreator onSpawn={this.props.spawnToken}
                      onPlus={this.props.buffToken}
                      onMinus={this.props.debuffToken}
                      tokenPower="3"
                      tokenToughness="3" />
        <ListModal cards={this.props.listModal}/>
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
      phase: phases[state.get("phase")],
      planeswalkers: state.get("planeswalkers"),
      deck: state.get("deck"),
      hand: state.get("hand"),
      pending: state.get("pending"),
      permanents: state.get("permanents"),
      graveyard: state.get("graveyard"),
      cardModal: {
        open: state.getIn(["cardModal", "open"]),
        cardLocation: modalCardLocation,
        cardIndex: modalCardIndex,
        cardData: modalCardData
      },
      phase: phases[state.get("phase")],
      listModal: state.get("listModal")
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
    openGraveyardModal
  })(GamePage)
