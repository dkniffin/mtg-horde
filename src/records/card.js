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
}

export default Card
