export const exileCards = (number) => {
  return (dispatch, getState) => {
    const exiledCards = getState().get("graveyard").slice(-number);
    dispatch({
      type: "EXILE_CARDS",
      number,
      exiledCards
    })
  }
}
