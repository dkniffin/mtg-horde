const permanentsReducer = (permanents = [], action) => {
  switch (action.type) {
    case "TOGGLE_TAPPED":
      const tapped = permanents.getIn([action.cardIndex, 'tapped'])
      return permanents.setIn([action.cardIndex, 'tapped'], !tapped)
    case "ADD_CARDS_TO_PERMANENT_ZONE":
      return permanents.concat(action.cards)
    default:
      return permanents
  }
}

export default permanentsReducer;
