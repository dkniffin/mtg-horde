import React, { Component } from 'react';
import './style.scss';

class PlaneswalkerCounter extends Component {
  render() {
    return (
      <div className="PlaneswalkerCounter">
        <div className="NumPlaneswalkers">
          {this.props.count}
        </div>
        <button className="PlaneswalkerButton" onClick={this.props.onRemove}>-</button>
        <button className="PlaneswalkerButton"  onClick={this.props.onAdd}>+</button>
      </div>
    );
  }
}

export default PlaneswalkerCounter;
