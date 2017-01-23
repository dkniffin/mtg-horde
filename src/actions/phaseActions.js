export const nextPhase = () => {
  return (dispatch, getState) => {
    dispatch({
      type: "NEXT_PHASE"
    })
  }
}
