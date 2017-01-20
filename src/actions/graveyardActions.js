export const exileCards = (number) => {
  return (dispatch, getState) => {
    const exiledCards = getState().get("graveyard").slice(0, number);
    dispatch({
      type: "EXILE_CARDS",
      number,
      exiledCards
    })
  }
}
