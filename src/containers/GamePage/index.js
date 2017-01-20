import React, { Component } from 'react';
import { connect } from "react-redux";
import './style.css';

import Deck from "../../components/Deck";
import Graveyard from "../../components/Graveyard";

import { discardCards } from "../../actions/deckActions";
import { exileCards } from "../../actions/graveyardActions";

class GamePage extends Component {
  render() {
    return (
      <div className="GamePage">
        <Graveyard cards={this.props.graveyard} onDiscard={this.props.discardCards}/>
        <Deck cards={this.props.deck} onDiscard={this.props.discardCards}/>
      </div>
    );
  }
}

export default connect(
  (state) => {
    return {
      deck: state.get("deck"),
      graveyard: state.get("graveyard")
    }
  },
  { discardCards })(GamePage);
