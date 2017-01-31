import React, { Component } from 'react'
import { connect } from "react-redux"
import './style.css'

import Deck from "../../components/Deck"
import Hand from "../../components/Hand"
import Graveyard from "../../components/Graveyard"
import CardZone from "../../components/CardZone"
import PhaseTracker from "../../components/PhaseTracker"
import CardModal from "../../components/CardModal"
import PlaneswalkerCounter from "../../components/PlaneswalkerCounter"

import { discardCards as deckDiscard } from "../../actions/deckActions"
import { exileCards } from "../../actions/graveyardActions"
import { toggleTapped, openCardModal } from "../../actions/cardActions"
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
        <Graveyard cards={this.props.graveyard} onExile={this.props.exileCards}/>
        <Deck cards={this.props.deck} onDiscard={this.props.deckDiscard}/>
        <Hand cards={this.props.hand} onDiscard={this.props.handDiscard} onDraw={this.props.drawCards}/>
        <CardZone id="PendingZone"
                  cards={this.props.pending}
                  onCardClick={this.props.openCardModal} />
        <CardZone id="PermanentZone"
                  cards={this.props.permanents}
                  onTap={this.props.toggleTapped}
                  onCardClick={this.props.openCardModal} />
        <CardModal open={this.props.cardModalOpen}
                   card={this.props.cardModalData}
                   closeModal={this.props.closeModal} />
      </div>
    )
  }
}

export default connect(
  (state) => {
    return {
      phase: phases[state.get("phase")],
      planeswalkers: state.get("planeswalkers"),
      deck: state.get("deck"),
      hand: state.get("hand"),
      pending: state.get("pending"),
      permanents: state.get("permanents"),
      graveyard: state.get("graveyard"),
      cardModalOpen: state.getIn(["cardModal", "open"]),
      cardModalData: state.getIn(["cardModal", "card"])
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
    removePlaneswalker
  })(GamePage)
