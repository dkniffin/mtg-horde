const pendingReducer = (pending = [], action) => {
  switch (action.type) {
    case "ADD_CARDS_TO_PENDING":
      return pending.concat(action.cards)
    default:
      return pending
  }
}

export default pendingReducer;
