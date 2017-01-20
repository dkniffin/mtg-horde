import Immutable from 'immutable'
import deck from '../../decks/zombie.json'

export default Immutable.fromJS({
  deck: deck, // Contains all cards currently in the deck
  graveyard: [],
  exile: [],
  creatures: [
    /*
    {
      cardData: {}, // From mtgsdk
      tapped: true
    }
    */
  ]
})
