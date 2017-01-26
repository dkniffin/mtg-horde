const deckReducer = (deck = [], action) => {
  switch (action.type) {
    case "REMOVE_CARDS_FROM_DECK":
      return deck.slice(0, -action.number);
    default:
      return deck
  }
}

export default deckReducer;
