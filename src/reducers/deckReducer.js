function immutableSplice(arr, start, deleteCount, ...items) {
  return [ ...arr.slice(0, start), ...items, ...arr.slice(start + deleteCount) ]
}

const deck = (state = [], action) => {
  switch (action.type) {
    case "DISCARD_CARDS":
      return immutableSplice(state, 0, action.number)
    default:
      return state
  }
}

export default deck;
