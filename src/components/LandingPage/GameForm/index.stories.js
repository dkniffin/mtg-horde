import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import GameForm from './index.js';

storiesOf('GameForm', module)
  .add('main', () => (
    <GameForm></GameForm>
  ));
