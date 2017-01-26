const creaturesReducer = (creatures = [], action) => {
  switch (action.type) {
    case "TOGGLE_TAPPED":
      const tapped = creatures.getIn([action.cardIndex, 'tapped'])
      return creatures.setIn([action.cardIndex, 'tapped'], !tapped)
    case "ADD_CARDS_TO_CREATURE_ZONE":
      return creatures.concat(action.cards)
    default:
      return creatures
  }
}

export default creaturesReducer;
