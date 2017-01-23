import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import PhaseTracker from './index.js';

storiesOf('PhaseTracker', module)
  .add('main', () => (
    <PhaseTracker currentPhaseText="Survivor's turn"/>
  ));
