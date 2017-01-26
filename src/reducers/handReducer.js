const handReducer = (hand = [], action) => {
  switch (action.type) {
    case 'ADD_CARDS_TO_HAND':
      return hand.concat(action.cards)
    default:
      return hand
  }
}

export default handReducer;
