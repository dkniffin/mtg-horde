import { abilitiesFor } from './cardHelper.js'

export default {
  resolvePending: function(dispatch, getState) {
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
      type: 'ADD_CARDS_TO_BATTLEFIELD',
      cards: permanents
    })

    dispatch ({
      type: 'ADD_CARDS_TO_GRAVEYARD',
      cards: nonPermanents
    })
  },

  castFromGraveyard: function(dispatch, getState) {
    const fromGraveyard = getState().get('graveyard').filter((card) => {
      // TODO: This is a little simplistic. There are other cards that allow you to cast things
      // from the graveyard, like Past in Flames. Really, we need a way to define arbitrary
      // functions that define the behavior of the card, and get called at the appropriate times
      const abilities = abilitiesFor(card)
      return abilities.includes('unearth') || abilities.includes('flashback')
      // return /(flashback|unearth)/i.test(card.getIn(['cardData', 'text']))
    })

    dispatch ({
      type: 'ADD_CARDS_TO_PENDING',
      cards: fromGraveyard
    })
    dispatch({
      type: 'REMOVE_CARDS_FROM_GRAVEYARD',
      cards: fromGraveyard
    })
  },

  castFromHand: function(dispatch, getState) {
    const hand = getState().get('hand')

    dispatch ({
      type: 'ADD_CARDS_TO_PENDING',
      cards: hand
    })

    dispatch ({
      type: 'REMOVE_CARDS_FROM_HAND',
      number: hand.size
    })
  },

  hordeDraw: function(dispatch, getState) {
    const deck = getState().get('deck')

    const numNonTokensToDraw = getState().getIn(['drawCounter', 'draw']);

    const nonTokenIndices = deck.map((card, index) => {
      const isToken = card.getIn(['cardData', 'layout']) !== "token"
      return [isToken, index]
    }).filter(([isToken, index]) => {
      return isToken
    }).map(([isToken, index]) => index)

    const drawToIndex = nonTokenIndices.get(-numNonTokensToDraw);

    const numFlipped = deck.size - drawToIndex
    const flippedCards = deck.slice(-numFlipped)

    dispatch({
      type: 'REMOVE_CARDS_FROM_DECK',
      number: numFlipped
    })

    dispatch({
      type: 'ADD_CARDS_TO_PENDING',
      cards: flippedCards
    })
  },

  declareAttackers: function(dispatch, getState) {
    // TODO: This doesn't take into account cards with defender, or other cards that can't attack
    const creatures = getState().get('permanents').filter((card) => {
      return card.getIn(['cardData', 'types']).includes('Creature')
    })

    creatures.forEach((card) => {
      dispatch({
        type: 'TAP_CARD',
        cardIndex: card.get('index')
      })
    })
  },

  untap: function(dispatch, getState) {
    dispatch({
      type: 'UNTAP_ALL'
    })
  },

  discardHandDown: function(dispatch, getState) {
    const hand = getState().get('hand')

    if (hand.size > 7) {
      const toDiscard = hand.size - 7

      dispatch({
        type: 'RESHUFFLE_HAND'
      })

      dispatch({
        type: 'REMOVE_CARDS_FROM_HAND',
        number: toDiscard
      })
    }
  }
}
