import Immutable from 'immutable'
import shuffle from 'array-shuffle'

// Cards currently in the library
const deckReducer = (deck = null, action) => {
  switch (action.type) {
    case 'IMPORT_DECK':
      return Immutable.fromJS(action.deck)
    case 'ADD_CARDS_TO_DECK':
      return deck.concat(action.cards)
    case 'REMOVE_CARDS_FROM_DECK':
      return deck.slice(0, -action.number)
    case 'SHUFFLE_DECK':
      const shuffled = shuffle(deck.toArray())
      return Immutable.List(shuffled)
    default:
      return deck
  }
}

export default deckReducer;
