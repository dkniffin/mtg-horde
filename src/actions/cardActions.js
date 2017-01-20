export const toggleTapped = (cardIndex) => {
  return (dispatch, getState) => {
    dispatch({
      type: "TOGGLE_TAPPED",
      cardIndex
    })
  }
}
