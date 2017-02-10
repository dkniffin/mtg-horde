import Immutable from 'immutable'

// Cards in exile
const exileReducer = (exile = Immutable.List(), action) => {
  switch (action.type) {
    case 'EXILE_CARDS':
      return exile.concat(action.cards)
    default:
      return exile
  }
}

export default exileReducer;
