import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Deck from './index.js';

const deck = [{name: 'Zombie'}]

storiesOf('Deck', module)
  .add('with one card', () => (
    <Deck cards={[{name: 'Zombie'}]}></Deck>
  ));
