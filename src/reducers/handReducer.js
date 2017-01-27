const handReducer = (hand = [], action) => {
  switch (action.type) {
    case 'ADD_CARDS_TO_HAND':
      return hand.concat(action.cards)
    case 'REMOVE_CARDS_FROM_HAND':
      return hand.slice(0, -action.number)
    default:
      return hand
  }
}

export default handReducer;
