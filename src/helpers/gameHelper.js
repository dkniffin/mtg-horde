import { abilitiesFor } from './cardHelper.js'

export function resolvePending(dispatch, getState) {
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
}

export function castFromGraveyard(dispatch, getState) {
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
}

export function castFromHand(dispatch, getState) {
  const hand = getState().get('hand')

  dispatch ({
    type: 'ADD_CARDS_TO_PENDING',
    cards: hand
  })

  dispatch ({
    type: 'REMOVE_CARDS_FROM_HAND',
    number: hand.size
  })

}

export function hordeDraw(dispatch, getState) {
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
}
