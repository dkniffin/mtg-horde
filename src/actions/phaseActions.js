import { phases, nextPhaseIdx } from '../helpers/phaseHelper.js'

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
          Horde Play - The Survivors are done reacting. Move pending cards to permanent zone.
        */
        const pendingCards = getState().get('pending')

        const numPending = pendingCards.size

        const grouped = pendingCards.groupBy((card) => {
          const types = card.getIn(['cardData', 'types'])
          return types.includes('Sorcery') || types.includes('Instant')
        })

        const nonPermanents = grouped.get(true) || []
        const permanents = grouped.get(false) || []

        dispatch ({
          type: "REMOVE_CARDS_FROM_PENDING",
          number: numPending
        })

        dispatch ({
          type: "ADD_CARDS_TO_PERMANENT_ZONE",
          cards: permanents
        })

        dispatch ({
          type: "ADD_CARDS_TO_GRAVEYARD",
          cards: nonPermanents
        })
        break;
      default:
        break;
    }
    dispatch({
      type: "NEXT_PHASE"
    })
  }
}
