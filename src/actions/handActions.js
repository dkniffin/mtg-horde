export const discardCards = () => {
  return (dispatch, getState) => {
    dispatch({
      type: "HAND_DISCARD"
    })
  }
}

export const drawCards = () => {
  return (dispatch, getState) => {
    dispatch({
      type: "HAND_DRAW"
    })
  }
}
