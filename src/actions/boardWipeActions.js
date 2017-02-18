function boardWipe(dispatch, getState, filter) {
  getState().get('permanents')
            .filter(filter)
            .forEach((card) => {

    dispatch({
      type: 'REMOVE_CARD',
      cardLocation: 'permanents',
      index: card.get('index')
    })

    dispatch({
      type: 'ADD_CARDS_TO_GRAVEYARD',
      cards: [card]
    })
  })
}


export const boardWipeAll = () => {
  return (dispatch, getState) => {
    boardWipe(dispatch, getState, (card) => {
      return true
    })
  }
}
export const boardWipenonLandPermanents = () => {
  return (dispatch, getState) => {
    boardWipe(dispatch, getState, (card) => {
      return card.isPermanent()
    })
  }
}
export const boardWipeCreatures = () => {
  return (dispatch, getState) => {
    boardWipe(dispatch, getState, (card) => {
      return card.getIn(['cardData', 'types']).includes('Creature')
    })
  }
}
export const boardWipeTokens = () => {
  return (dispatch, getState) => {
    boardWipe(dispatch, getState, (card) => {
      return card.getIn(['cardData', 'layout']) === 'token'
    })
  }
}
