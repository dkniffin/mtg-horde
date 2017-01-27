const graveyardReducer = (graveyard = [], action) => {
  switch (action.type) {
    case "DISCARD_CARDS":
      return graveyard.concat(action.cards)
    case "REMOVE_CARDS_FROM_EXILE":
      return graveyard.slice(0, -action.number)
    default:
      return graveyard
  }
}

export default graveyardReducer;
