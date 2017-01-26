import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Hand from './index.js';
import Immutable from 'immutable';

const card = {name: 'Zombie', imageUrl: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=409656&type=card'}

storiesOf('Hand', module)
  .add('with no cards', () => (
    <Hand cards={Immutable.fromJS([])} />
  ))
  .add('with one card', () => (
    <Hand cards={Immutable.fromJS([card])} />
  ))
  .add('with 10 cards', () => (
    <Hand cards={Immutable.fromJS([card,card,card,card,card,card,card,card,card,card])} />
  ));
