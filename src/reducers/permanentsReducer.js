import Immutable from 'immutable'

function updateCardTappedTo(permanents, cardIndex, value) {
  return permanents.map((card) => {
    if (card.get('index') === cardIndex) {
      if (value === 'toggle') {
        return card.toggleTapped()
      } else {
        return card.set('tapped', value)
      }
    } else {
      return card
    }
  })
}
// Cards in the permanent zone
const permanentsReducer = (permanents = Immutable.List(), action) => {
  switch (action.type) {
    case 'TOGGLE_TAPPED':
      return updateCardTappedTo(permanents, action.cardIndex, 'toggle')
    case 'TAP_CARD':
      return updateCardTappedTo(permanents, action.cardIndex, true)
    case 'UNTAP_CARD':
      return updateCardTappedTo(permanents, action.cardIndex, false)
    case 'UNTAP_ALL':
      return permanents.map((card) => {
        return card.set('tapped', false)
      })
    case 'ADD_CARDS_TO_BATTLEFIELD':
      return permanents.concat(action.cards)
    case 'REMOVE_CARD':
      if (action.cardLocation === 'permanents') {
        // TODO: Refactor this so all use index
        if (action.i) {
          return permanents.delete(action.i)
        } else {
          return permanents.filterNot((card) => card.get('index') === action.index)
        }
      } else {
        return permanents
      }
    default:
      return permanents
  }
}

export default permanentsReducer;
