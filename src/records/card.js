import { Record } from 'immutable'

class Card extends Record({ cardData: {}, tapped: false, index: 0, counters: {}, modifiers: {} }) {
  calculatePower() {
    return parseInt(this.cardData.get('power'), 10) +
           this.counters.get('power') +
           this.modifiers.get('power')
  }
  calculateToughness() {
    return parseInt(this.cardData.get('toughness'), 10) +
           this.counters.get('toughness') +
           this.modifiers.get('toughness')
  }
  toggleTapped() {
    return this.set('tapped', !this.tapped)
  }

  /* TODO: Refactor this to do this:
    Get list of known abilities (manually compiled list from the rulebook)
    Look a line that starts with any of the provided abilities with either a \n or , following after them.
    Take those lines and split it by ,
    With the resulting arrays, loop over each and do whatever formatting voodoo is needed to make sensible objects.
    Combine the resulting array of keywords into one big keyword object list.

    Source: https://github.com/mtgjson/mtgjson/issues/285#issuecomment-276043626
  */

  abilities() {
    switch(this.getIn(['cardData', 'name'])) {
      case 'Rotting Rats':
        return ['unearth']
      case 'Army of the Damned':
      case 'Past in Flames':
        return ['flashback']
      default:
        return []
    }
  }
}

export default Card
