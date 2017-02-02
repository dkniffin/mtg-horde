import React, { Component } from 'react';
import './style.css';

class TokenCreator extends Component {
  render() {
    return (
      <div className="TokenCreator" >
        <img src="http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=409656&type=card" />
        <span id="tokenStats">{this.props.tokenPower}/{this.props.tokenToughness}</span>
        <button className="tokenStatButton" onClick={this.props.onMinus}>-</button>
        <button className="tokenStatButton" onClick={this.props.onPlus}>+</button>
        <button className="tokenSpawnButton" onClick={this.props.onSpawn}>Spawn</button>
      </div>
    );
  }
}

export default TokenCreator;
