const creaturesReducer = (creatures = [], action) => {
  switch (action.type) {
    case "TOGGLE_TAPPED":
      const tapped = creatures.getIn([action.cardIndex, 'tapped'])
      return creatures.setIn([action.cardIndex, 'tapped'], !tapped)
    default:
      return creatures
  }
}

export default creaturesReducer;
