import React, { Component } from 'react';
import './style.css';

class Hand extends Component {
  render() {
    return (
      <div className="Hand">
        {this.props.cards.size}
      </div>
    );
  }
}

export default Hand;
