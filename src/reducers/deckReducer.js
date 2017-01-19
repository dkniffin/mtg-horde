const deck = (state = [], action) => {
  switch (action.type) {
    case "DISCARD_CARDS":
      return state.splice(0, action.number)
    default:
      return state
  }
}

export default deck;
