export const discardCards = (number) => {
  return (dispatch, getState) => {
    const discardedCards = getState().get("deck").slice(-number);
    dispatch({
      type: "REMOVE_CARDS_FROM_DECK",
      number
    })

    dispatch({
      type: "DISCARD_CARDS",
      discardedCards
    })
  }
}
