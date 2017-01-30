import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import PlaneswalkerCounter from './index.js';

storiesOf('PlaneswalkerCounter', module)
  .add('with one planeswalker', () => (
    <PlaneswalkerCounter count='1' />
  ))
  .add('with ten planeswalker', () => (
    <PlaneswalkerCounter count='10' />
  ));
