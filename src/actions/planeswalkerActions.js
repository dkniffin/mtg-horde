export const addPlaneswalker = () => {
  return (dispatch, getState) => {
    dispatch({
      type: 'ADD_PLANESWALKER'
    })
  }
}

export const removePlaneswalker = () => {
  return (dispatch, getState) => {
    dispatch({
      type: 'REMOVE_PLANESWALKER'
    })
  }
}
