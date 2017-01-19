import React, { Component } from 'react';
import { connect } from "react-redux";
import './style.css';

import Playarea from "./Playarea";

class GamePage extends Component {
  render() {
    return (
      <div className="GamePage">
        <Playarea deck={this.props.deck} />
      </div>
    );
  }
}

export default connect((store) => { return store })(GamePage);
