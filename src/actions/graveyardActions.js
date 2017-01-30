export const exileCards = (number) => {
  return (dispatch, getState) => {
    const exiledCards = getState().get("graveyard").slice(-number);
    dispatch({
      type: "REMOVE_CARDS_FROM_GRAVEYARD",
      number
    })

    dispatch({
      type: "EXILE_CARDS",
      exiledCards
    })
  }
}

export const openGraveyardModal = () => {
  return (dispatch, getState) => {
    const cards = getState().get("graveyard");
    dispatch({
      type: "OPEN_LIST_MODAL",
      cards
    })
  }
}
