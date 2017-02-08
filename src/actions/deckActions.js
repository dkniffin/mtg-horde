export const deckDiscard = (number) => {
  return (dispatch, getState) => {
    const discardedCards = getState().get("deck").slice(-number);
    dispatch({
      type: "REMOVE_CARDS_FROM_DECK",
      number
    })

    dispatch({
      type: "ADD_CARDS_TO_GRAVEYARD",
      cards: discardedCards
    })
  }
}
