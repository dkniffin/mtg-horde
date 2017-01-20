import Immutable from 'immutable'
import deck from '../../decks/zombie.json'

export default Immutable.fromJS({
  deck: deck, // Contains all cards currently in the deck
  graveyard: [deck[0]], // TODO: Remove the deck[0] once empty graveyard case is handled
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
