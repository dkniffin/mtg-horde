const pendingReducer = (pending = [], action) => {
  switch (action.type) {
    case 'ADD_CARDS_TO_PENDING':
      return pending.concat(action.cards)
    case 'REMOVE_CARDS_FROM_PENDING':
      return pending.slice(0, -action.number)
    case 'REMOVE_CARD':
      if (action.cardLocation === 'pending') {
        return pending.delete(action.i)
      } else {
        return pending
      }
    default:
      return pending
  }
}

export default pendingReducer;
