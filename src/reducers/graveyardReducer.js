const graveyardReducer = (graveyard = [], action) => {
  switch (action.type) {
    case "DISCARD_CARDS":
      return graveyard.concat(action.discardedCards)
    default:
      return graveyard
  }
}

export default graveyardReducer;
