import React, { Component } from 'react'
import { connect } from "react-redux"
import './style.css'

import Deck from "../../components/Deck"
import Graveyard from "../../components/Graveyard"
import CreatureZone from "../../components/CreatureZone"

import { discardCards } from "../../actions/deckActions"
import { exileCards } from "../../actions/graveyardActions"
import { toggleTapped } from "../../actions/cardActions"

class GamePage extends Component {
  render() {
    return (
      <div className="GamePage">
        <Graveyard cards={this.props.graveyard} onExile={this.props.exileCards}/>
        <Deck cards={this.props.deck} onDiscard={this.props.discardCards}/>
        <CreatureZone cards={this.props.creatures} onTap={this.props.toggleTapped} />
      </div>
    )
  }
}

export default connect(
  (state) => {
    return {
      deck: state.get("deck"),
      graveyard: state.get("graveyard"),
      creatures: state.get("creatures")
    }
  },
  { discardCards, exileCards, toggleTapped })(GamePage)
