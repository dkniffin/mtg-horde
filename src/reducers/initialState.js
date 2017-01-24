import Immutable from 'immutable'
import rawdeck from '../../decks/zombie.json'
import shuffle from 'array-shuffle'

const deck = shuffle(rawdeck)

export default Immutable.fromJS({
  deck: deck, // Contains all cards currently in the deck
  graveyard: [],
  exile: [],
  creatures: [
    {
      cardData: deck[0],
      tapped: true
    },
    {
      cardData: deck[1],
      tapped: false
    }
    /*
    {
      cardData: {}, // From mtgsdk
      tapped: true
    }
    */
  ],
  phase: 0
})
