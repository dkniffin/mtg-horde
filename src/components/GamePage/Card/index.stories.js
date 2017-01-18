import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Card from './index.js';

storiesOf('Card', module)
  .add('face up', () => (
    <Card imageUrl="http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=39547&type=card"></Card>
  ))
  .add('face down', () => (
    <Card imageUrl="http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=39547&type=card"
      faceDown="true"></Card>
  ))
  .add('tapped', () => (
    <Card imageUrl="http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=39547&type=card"
      tapped="true"></Card>
  ))
  .add('tapped and face down', () => (
    <Card imageUrl="http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=39547&type=card"
      tapped="true" faceDown="true"></Card>
  ));
