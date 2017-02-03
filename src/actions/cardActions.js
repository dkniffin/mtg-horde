export const toggleTapped = (cardIndex) => {
  return (dispatch, getState) => {
    dispatch({
      type: 'TOGGLE_TAPPED',
      cardIndex
    })
  }
}

export const openCardModal = (location, card) => {
  return (dispatch, getState) => {
    dispatch({
      type: 'CLOSE_LIST_MODAL'
    })
    dispatch({
      type: 'OPEN_CARD_MODAL',
      card,
      location
    })
  }
}

function pullCardFromCurrentLocation(dispatch, getState, cardLocation, cardIndex) {
  const [i, card] = getState().get(cardLocation).findEntry((card) => card.get('index') === cardIndex)

  dispatch({
    type: 'REMOVE_CARD',
    cardLocation,
    i
  })

  return card
}

export const sendToGraveyard = (cardLocation, cardIndex) => {
  return (dispatch, getState) => {
    const card = pullCardFromCurrentLocation(dispatch, getState, cardLocation, cardIndex)

    dispatch({
      type: 'ADD_CARDS_TO_GRAVEYARD',
      cards: [card]
    })
  }
}

export const sendToExile = (cardLocation, cardIndex) => {
  return (dispatch, getState) => {
    const card = pullCardFromCurrentLocation(dispatch, getState, cardLocation, cardIndex)

    dispatch({
      type: 'EXILE_CARDS',
      cards: [card]
    })
  }
}

export const sendToLibrary = (cardLocation, cardIndex) => {
  return (dispatch, getState) => {
    const card = pullCardFromCurrentLocation(dispatch, getState, cardLocation, cardIndex)

    dispatch({
      type: 'ADD_CARDS_TO_DECK',
      cards: [card]
    })
    dispatch({
      type: 'SHUFFLE_DECK'
    })
  }
}
