import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import TokenCreator from './index.js';
import Immutable from 'immutable';

storiesOf('TokenCreator', module)
  .add('main', () => (
    <TokenCreator />
  ));
