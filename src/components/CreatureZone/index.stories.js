import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import Immutable from 'immutable'

import CreatureZone from './index.js'

const cards = Immutable.fromJS([
  {
    cardData: {imageUrl: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=39547&type=card'},
    tapped: true
  },
  {
    cardData: {imageUrl: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=39547&type=card'},
    tapped: false
  },
  {
    cardData: {imageUrl: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=39547&type=card'},
    tapped: true
  },
  {
    cardData: {imageUrl: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=39547&type=card'},
    tapped: true
  }
])

storiesOf('CreatureZone', module)
  .add('with some creatures', () => (
    <CreatureZone cards={cards} />
  ));
