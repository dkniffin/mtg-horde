import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Playarea from './index.js';

const deck = [
  {name: "Zombie"}
]

storiesOf('Playarea', module)
  .add('main', () => (
    <Playarea deck={deck}/>
  ));
