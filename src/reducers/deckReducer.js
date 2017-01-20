const deckReducer = (deck = [], action) => {
  switch (action.type) {
    case "DISCARD_CARDS":
      return deck.slice(0, -action.number);
    default:
      return deck
  }
}

export default deckReducer;
