const exileReducer = (exile = [], action) => {
  switch (action.type) {
    case "DISCARD_CARDS":
      return exile.concat(action.exiledCards)
    default:
      return exile
  }
}

export default exileReducer;
