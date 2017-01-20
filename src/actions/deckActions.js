export const discardCards = (number) => {
  return (dispatch, getState) => {
    const discardedCards = getState().get("deck").slice(0, number);
    dispatch({
      type: "DISCARD_CARDS",
      number,
      discardedCards
    })
  }
}
