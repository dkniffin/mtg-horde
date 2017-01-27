const graveyardReducer = (graveyard = [], action) => {
  switch (action.type) {
    case "ADD_CARDS_TO_GRAVEYARD":
      return graveyard.concat(action.cards)
    case "REMOVE_CARDS_FROM_GRAVEYARD":
      return graveyard.slice(0, -action.number)
    default:
      return graveyard
  }
}

export default graveyardReducer;
