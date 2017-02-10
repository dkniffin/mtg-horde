import Immutable from 'immutable'
import Card from '../records/card'

export const buffTokenPower = () => {
  return (dispatch, getState) => {
    dispatch({
      type: 'BUFF_TOKEN_POWER'
    })
  }
}

export const buffTokenToughness = () => {
  return (dispatch, getState) => {
    dispatch({
      type: 'BUFF_TOKEN_TOUGHNESS'
    })
  }
}

export const debuffTokenPower = () => {
  return (dispatch, getState) => {
    dispatch({
      type: 'DEBUFF_TOKEN_POWER'
    })
  }
}

export const debuffTokenToughness = () => {
  return (dispatch, getState) => {
    dispatch({
      type: 'DEBUFF_TOKEN_TOUGHNESS'
    })
  }
}

export const spawnToken = () => {
  return (dispatch, getState) => {
    const nextIndex = getState().get('nextIndex')
    const card = new Card(Immutable.fromJS({
      tapped: false,
      index: nextIndex,
      counters: {
        power: 0,
        toughness: 0
      },
      modifiers: {
        power: 0,
        toughness: 0
      },
      cardData: {
        imageUrl: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=409656&type=card',
        power: getState().getIn(['tokenSpawner', 'power']).toString(),
        toughness: getState().getIn(['tokenSpawner', 'toughness']).toString(),
        layout: 'token',
        types: ['Creature']
      }
    }))

    dispatch({
      type: 'ADD_CARDS_TO_BATTLEFIELD',
      cards: [card]
    })
    dispatch({
      type: 'INC_INDEX'
    })
  }
}
