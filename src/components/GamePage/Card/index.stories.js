import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Card from './index.js';

storiesOf('Card', module)
  .add('main', () => (
    <Card></Card>
  ));
