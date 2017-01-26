import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import PhaseTracker from './index.js';

import { phases } from '../../helpers/phaseHelper.js'


const stories = storiesOf('PhaseTracker', module);

phases.forEach((phase) => {
  stories.add(phase.id, () => (
    <PhaseTracker phase={phase} />
  ))
})
