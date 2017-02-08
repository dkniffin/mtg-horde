import React, { Component } from 'react';
import './style.scss';

class TokenCreator extends Component {
  render() {
    return (
      <div className='TokenCreator' >
        <img src='http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=409656&type=card' role='presentation'/>
        <span id='tokenStats'>{this.props.tokenPower}/{this.props.tokenToughness}</span>
        <button className='tokenStatButton' onClick={this.props.onDebuffPower}>-</button>
        <button className='tokenStatButton' onClick={this.props.onBuffPower}>+</button>/
        <button className='tokenStatButton' onClick={this.props.onDebuffToughness}>-</button>
        <button className='tokenStatButton' onClick={this.props.onBuffToughness}>+</button>
        <button className='tokenSpawnButton' onClick={this.props.onSpawn}>Spawn</button>
      </div>
    );
  }
}

export default TokenCreator;
