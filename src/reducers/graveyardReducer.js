const graveyardReducer = (graveyard = [], action) => {
  switch (action.type) {
    case 'ADD_CARDS_TO_GRAVEYARD':
      return graveyard.concat(action.cards)
    case 'REMOVE_CARDS_FROM_GRAVEYARD':
      if (action.cards) {
        return graveyard.filterNot((card) => {
          return action.cards.includes(card)
        })
      } else {
        return graveyard.slice(0, -action.number)
      }
    default:
      return graveyard
  }
}

export default graveyardReducer;
