import shuffle from 'array-shuffle'
import Immutable from 'immutable'

// Cards in the Horde's hand
const handReducer = (hand = Immutable.List(), action) => {
  switch (action.type) {
    case 'ADD_CARDS_TO_HAND':
      return hand.concat(action.cards)
    case 'REMOVE_CARDS_FROM_HAND':
      return hand.slice(0, -action.number)
    case 'RESHUFFLE_HAND':
      return Immutable.fromJS(shuffle(hand.toArray()));
    default:
      return hand
  }
}

export default handReducer;
