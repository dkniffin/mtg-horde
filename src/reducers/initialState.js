import Immutable from 'immutable'
import rawdeck from '../../decks/zombie.json'
import shuffle from 'array-shuffle'

const deckCards = rawdeck.map((cardData) => {
  return {
    cardData: cardData,
    tapped: false
  }
})

const deck = shuffle(deckCards)

export default Immutable.fromJS({
  phase: 0,
  deck: deck, // Cards currently in the library
  pending: [], // Cards that haven't hit the field yet
  permanents: [], // Cards in the permanent zone
  hand: [], // Cards in the Horde's hand
  graveyard: [], // Cards in the graveyard
  exile: [] // Cards in exile
})
