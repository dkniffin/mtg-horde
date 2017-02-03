export const exileCards = (number) =>
  (dispatch, getState) => {
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


export const openGraveyardModal = () =>
  (dispatch, getState) => {
    const cards = getState().get("graveyard");
    dispatch({
      type: "OPEN_LIST_MODAL",
      cards
    })
  }

export const closeGraveyardModal = (location, card) =>
  (dispatch, getState) => {
    dispatch({
      type: 'CLOSE_LIST_MODAL',
      card,
      location
    })
  }
