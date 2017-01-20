import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Deck from './index.js';
import Immutable from 'immutable';

storiesOf('Deck', module)
  .add('with one card', () => (
    <Deck cards={Immutable.fromJS([{name: 'Zombie'}])} />
  ));
