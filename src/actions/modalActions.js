export const closeModal = () => {
  return (dispatch, getState) => {
    dispatch({
      type: "CLOSE_MODAL"
    })
  }
}
