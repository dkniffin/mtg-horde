import Immutable from 'immutable'

export default Immutable.fromJS({
  settings: {},
  nextIndex: 0,
  phase: 0,
  planeswalkers: 0,
  cardModal: {
    open: false,
    cardIndex: null,
    cardLocation: null
  },
  deck: null, // Cards currently in the library
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
