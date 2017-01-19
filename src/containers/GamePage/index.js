import React, { Component } from 'react';
import { connect } from "react-redux";
import './style.css';

import Deck from "../../components/Deck";

import { discardCards } from "../../actions/deckActions";

class GamePage extends Component {
  render() {
    return (
      <div className="GamePage">
        <Deck cards={this.props.deck} onDiscard={this.props.discardCards}/>
      </div>
    );
  }
}

export default connect(
  (state) => { return { deck: state.get("deck") } },
  { discardCards })(GamePage);
