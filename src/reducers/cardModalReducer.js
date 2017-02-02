const cardModalReducer = (modal = [], action) => {
  switch (action.type) {
    case 'OPEN_CARD_MODAL':
      return modal.set('open', true)
                  .set('cardIndex', action.card.get('index'))
                  .set('cardLocation', action.location)
    case 'CLOSE_MODAL':
      return modal.set('open', false)
    default:
      return modal
  }
}

export default cardModalReducer;
