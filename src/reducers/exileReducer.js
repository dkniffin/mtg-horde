const exileReducer = (exile = [], action) => {
  switch (action.type) {
    case 'EXILE_CARDS':
      return exile.concat(action.cards)
    default:
      return exile
  }
}

export default exileReducer;
