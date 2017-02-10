export const landingPageSubmit = (formData) => {
  return (dispatch, getState) => {
    dispatch({
      type: 'UPDATE_SETTINGS',
      settings: formData
    })
  }
}
