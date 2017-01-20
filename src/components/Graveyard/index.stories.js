import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Graveyard from './index.js';
import Immutable from 'immutable';


storiesOf('Graveyard', module)
  .add('with no cards', () => (
    <Graveyard cards={Immutable.fromJS([])} />
  ))
  .add('with one card', () => (
    <Graveyard cards={Immutable.fromJS([{name: 'Zombie', imageUrl: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=409656&type=card'}])} />
  ));
