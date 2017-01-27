export const toggleTapped = (cardIndex) => {
  return (dispatch, getState) => {
    dispatch({
      type: "TOGGLE_TAPPED",
      cardIndex
    })
  }
}

export const openCardModal = (card) => {
  return (dispatch, getState) => {
    dispatch({
      type: "OPEN_CARD_MODAL",
      card
    })
  }
}
