import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Deck from './index.js';

storiesOf('Deck', module)
  .add('with 30 cards', () => (
    <Deck cards="30"></Deck>
  ));
