export default function reducer(state={}, action) {
  switch (action.type) {
    case "DISCARD_CARDS": {
      var deck = state.deck;
      deck.splice(0, action.number);
      return {...state, deck}
    }
    default: {
      return state
    }
  }
}
