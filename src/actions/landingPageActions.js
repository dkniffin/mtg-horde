export const landingPageSubmit = (formData) => {
  return (dispatch, getState) => {
    debugger
    dispatch({
      type: 'UPDATE_SETTINGS',
      settings: formData
    })
  }
}
