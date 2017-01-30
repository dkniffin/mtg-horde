import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Immutable from 'immutable';

storiesOf('ListModal', module)
  .add('is open', () => (
    <ListModal isOpen="isOpen"></ListModal>
  ));
