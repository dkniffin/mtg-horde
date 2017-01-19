import React, { Component } from 'react';
import { connect } from "react-redux";
import './style.css';

import Deck from "../../components/Deck";

class GamePage extends Component {
  render() {
    return (
      <div className="GamePage">
        <Deck cards={this.props.deck} />
      </div>
    );
  }
}

export default connect((store) => { return store })(GamePage);
