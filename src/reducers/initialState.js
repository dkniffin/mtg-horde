import Immutable from 'immutable'
import rawdeck from '../../decks/zombie.json'
import shuffle from 'array-shuffle'

const deckCards = rawdeck.map((cardData, i) => {
  return {
    cardData: cardData,
    tapped: false,
    index: i,
    counters: {
      power: 0,
      toughness: 0
    },
    modifiers: {
      power: 0,
      toughness: 0
    }
  }
})

const deck = shuffle(deckCards)

export default Immutable.fromJS({
  settings: {},
  nextIndex: deck.length,
  phase: 0,
  planeswalkers: 0,
  cardModal: {
    open: false,
    cardIndex: null,
    cardLocation: null
  },
  deck: deck, // Cards currently in the library
  pending: [], // Cards that haven't hit the field yet
  permanents: [], // Cards in the permanent zone
  hand: [], // Cards in the Horde's hand
  graveyard: [], // Cards in the graveyard
  exile: [], // Cards in exile,
  listModal: [],
  // https://github.com/dkniffin/mtg-horde/issues/7
  drawCounter: {
    counter: 0,
    draw: 1
  },
  tokenSpawner: {
    power: 2,
    toughness: 2
  }
})
