import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Playarea from './index.js';

storiesOf('Playarea', module)
  .add('main', () => (
    <Playarea></Playarea>
  ));
