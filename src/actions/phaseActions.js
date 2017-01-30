import { phases, nextPhaseIdx } from '../helpers/phaseHelper.js'
import { abilitiesFor } from '../helpers/cardHelper.js'

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
          Horde Play - The Survivors are done reacting. Move pending cards to permanent zone, and
          play cards from hand, and cards from the graveyard with flashback or unearth
        */

        // Move pending to field
        const pendingCards = getState().get('pending')

        const numPending = pendingCards.size

        const grouped = pendingCards.groupBy((card) => {
          const types = card.getIn(['cardData', 'types'])
          return types.includes('Sorcery') || types.includes('Instant')
        })

        const nonPermanents = grouped.get(true) || []
        const permanents = grouped.get(false) || []

        dispatch ({
          type: 'REMOVE_CARDS_FROM_PENDING',
          number: numPending
        })

        dispatch ({
          type: 'ADD_CARDS_TO_PERMANENT_ZONE',
          cards: permanents
        })

        dispatch ({
          type: 'ADD_CARDS_TO_GRAVEYARD',
          cards: nonPermanents
        })

        // Cast any cards from graveyard or hand
        const fromGraveyard = getState().get('graveyard').filter((card) => {
          // TODO: This is a little simplistic. There are other cards that allow you to cast things
          // from the graveyard, like Past in Flames. Really, we need a way to define arbitrary
          // functions that define the behavior of the card, and get called at the appropriate times
          const abilities = abilitiesFor(card)
          return abilities.includes('unearth') || abilities.includes('flashback')
          // return /(flashback|unearth)/i.test(card.getIn(['cardData', 'text']))
        })
        const hand = getState().get('hand')

        dispatch ({
          type: 'ADD_CARDS_TO_PENDING',
          cards: fromGraveyard.concat(hand)
        })

        dispatch ({
          type: 'REMOVE_CARDS_FROM_HAND',
          number: hand.size
        })

        dispatch({
          type: 'REMOVE_CARDS_FROM_GRAVEYARD',
          cards: fromGraveyard
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
