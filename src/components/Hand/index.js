import React, { Component } from 'react';
import './style.css';

class Hand extends Component {
  render() {
    return (
      <div className="Hand">
        <div className="HandSize">
          {this.props.cards.size}
        </div>
        <button className="HandButton" onClick={this.props.onDiscard}>-</button>
        <button className="HandButton"  onClick={this.props.onDraw}>+</button>
      </div>
    );
  }
}

export default Hand;
