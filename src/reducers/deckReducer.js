export default function reducer(state={}, action) {
  switch (action.type) {
    case "BUILD_DECK": {

    }
    case "DISCARD_CARD": {
      return {...state} // TODO
    }
    default: {
      return {...state}
    }
  }
}
