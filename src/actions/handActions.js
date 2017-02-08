export const handDiscard = () => {
  return (dispatch, getState) => {
    const cards = getState().get('hand').slice(-1)
    dispatch({
      type: "REMOVE_CARDS_FROM_HAND",
      number: 1
    })

    dispatch({
      type: "ADD_CARDS_TO_GRAVEYARD",
      cards
    })
  }
}

export const drawCards = () => {
  return (dispatch, getState) => {
    const cards = getState().get('deck').slice(-1)
    dispatch({
      type: "REMOVE_CARDS_FROM_DECK",
      number: 1
    })

    dispatch({
      type: "ADD_CARDS_TO_HAND",
      cards
    })
  }
}
