import React, { Component } from 'react'
import { connect } from "react-redux"
import './style.css'

import Deck from "../../components/Deck"
import Graveyard from "../../components/Graveyard"
import CardZone from "../../components/CardZone"
import PhaseTracker from "../../components/PhaseTracker"

import { discardCards } from "../../actions/deckActions"
import { exileCards } from "../../actions/graveyardActions"
import { toggleTapped } from "../../actions/cardActions"
import { nextPhase } from "../../actions/phaseActions"

import { phases } from '../../helpers/phaseHelper.js'

class GamePage extends Component {
  render() {
    return (
      <div className="GamePage">
        <PhaseTracker currentPhaseText={this.props.phaseText} onNextPhase={this.props.nextPhase}/>
        <Graveyard cards={this.props.graveyard} onExile={this.props.exileCards}/>
        <Deck cards={this.props.deck} onDiscard={this.props.discardCards}/>
        <CardZone id="PendingZone" cards={this.props.pending} />
        <CardZone id="CreatureZone" cards={this.props.creatures} onTap={this.props.toggleTapped} />
      </div>
    )
  }
}

export default connect(
  (state) => {
    return {
      deck: state.get("deck"),
      pending: state.get("pending"),
      creatures: state.get("creatures"),
      graveyard: state.get("graveyard"),
      phaseText: phases[state.get("phase")]['title']
    }
  },
  {
    discardCards,
    exileCards,
    toggleTapped,
    nextPhase
  })(GamePage)
