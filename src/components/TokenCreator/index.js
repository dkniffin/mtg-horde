import React from 'react';
import './style.scss';

const TokenCreator = function({tokenPower, tokenToughness, onBuffPower, onDebuffPower, onBuffToughness, onDebuffToughness, onSpawn}) {
  return (
    <div className='TokenCreator' >
      <img src='http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=409656&type=card' role='presentation'/>
      <span id='tokenStats'>{tokenPower}/{tokenToughness}</span>
      <button className='tokenStatButton' onClick={onDebuffPower}>-</button>
      <button className='tokenStatButton' onClick={onBuffPower}>+</button>/
      <button className='tokenStatButton' onClick={onDebuffToughness}>-</button>
      <button className='tokenStatButton' onClick={onBuffToughness}>+</button>
      <button className='tokenSpawnButton' onClick={onSpawn}>Spawn</button>
    </div>
  );
}

export default TokenCreator;
