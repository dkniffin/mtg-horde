function updateCardTappedTo(permanents, cardIndex, value) {
  return permanents.map((card) => {
    if (card.get('index') === cardIndex) {
      if (value === 'toggle') {
        const tapped = card.get('tapped')
        return card.set('tapped', !tapped)
      } else {
        return card.set('tapped', value)
      }
    } else {
      return card
    }
  })
}

const permanentsReducer = (permanents = [], action) => {
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
    case 'ADD_CARDS_TO_PERMANENT_ZONE':
      return permanents.concat(action.cards)
    case 'REMOVE_CARD':
      if (action.cardLocation === 'permanents') {
        return permanents.delete(action.i)
      } else {
        return permanents
      }
    default:
      return permanents
  }
}

export default permanentsReducer;
