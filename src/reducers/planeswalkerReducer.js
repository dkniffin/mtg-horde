const planeswalkerReducer = (planeswalkers = 0, action) => {
  switch (action.type) {
    case 'ADD_PLANESWALKER':
      return planeswalkers + 1
    case 'REMOVE_PLANESWALKER':
      return planeswalkers - 1
    default:
      return planeswalkers
  }
}

export default planeswalkerReducer;
