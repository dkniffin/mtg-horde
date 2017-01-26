import { phases, nextPhaseIdx } from '../helpers/phaseHelper.js'

console.log(phases)

export const nextPhase = () => {
  return (dispatch, getState) => {
    const nextPhase = phases[nextPhaseIdx(getState().get('phase'))].id

    switch (nextPhase) {
      case 'HORDE_DRAW':
        /*
          Horde Draw - Flip cards from the top of the library, until a non-token is found. All
          revealed cards will be played, but first they must be put in the pending zone, so the
          Survivors have a chance to react.
        */
        const deck = getState().get('deck')

        const nonTokenIdx = deck.findLastIndex((card) => {
          return card.getIn(['cardData', 'layout']) !== "token"
        })

        const numFlipped = deck.size - nonTokenIdx
        const flippedCards = deck.slice(-numFlipped)

        dispatch({
          type: "REMOVE_CARDS_FROM_DECK",
          number: numFlipped
        })

        dispatch({
          type: "ADD_CARDS_TO_PENDING",
          cards: flippedCards
        })
        break;
      case 'HORDE_PLAY':
        /*
          Horde Play - The Survivors are done reacting. Move pending cards to creature zone.
        */
        const pendingCards = getState().get('pending')

        const numPending = pendingCards.size

        dispatch ({
          type: "REMOVE_CARDS_FROM_PENDING",
          number: numPending
        })

        dispatch ({
          type: "ADD_CARDS_TO_CREATURE_ZONE",
          cards: pendingCards
        })

    }
    dispatch({
      type: "NEXT_PHASE"
    })
  }
}
