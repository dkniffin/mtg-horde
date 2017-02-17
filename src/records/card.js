import { Record } from 'immutable'

const ABILITIES = [
  'Deathtouch', 'Defender', 'Double Strike', 'Enchant', 'Equip', 'First Strike', 'Flash', 'Flying', 'Haste', 'Hexproof', 'Indestructible', 'Lifelink', 'Menace', 'Prowess', 'Reach', 'Trample', 'Vigilance', 'Absorb', 'Affinity', 'Amplify', 'Annihilator', 'Aura Swap', 'Awaken', 'Banding', 'Battle Cry', 'Bestow', 'Bloodthirst', 'Bushido', 'Buyback', 'Cascade', 'Champion', 'Changeling', 'Cipher', 'Conspire', 'Convoke', 'Cumulative Upkeep', 'Cycling', 'Dash', 'Delve', 'Dethrone', 'Devoid', 'Devour', 'Dredge', 'Echo', 'Entwine', 'Epic', 'Evoke', 'Evolve', 'Exalted', 'Exploit', 'Extort', 'Fading', 'Fear', 'Flanking', 'Flashback', 'Forecast', 'Fortif', 'Frenzy', 'Fuse', 'Graft', 'Gravestorm', 'Haunt', 'Hidden Agenda', 'Hideaway', 'Horsemanship', 'Infect', 'Ingest', 'Intimidate', 'Kicker', 'Landhome', 'Landwalk', 'Level Up', 'Living Weapon', 'Madness', 'Megamorph', 'Miracle', 'Modular', 'Morph', 'Myriad', 'Ninjutsu', 'Offering', 'Outlast', 'Overload', 'Persist', 'Phasing', 'Poisonous', 'Protection', 'Provoke', 'Prowl', 'Rampage', 'Rebound', 'Recover', 'Reinforce', 'Renown', 'Replicate', 'Retrace', 'Ripple', 'Scavenge', 'Shadow', 'Shroud', 'Soulbond', 'Soulshift', 'Splice', 'Split Second', 'Storm', 'Substance', 'Sunburst', 'Surge', 'Suspend', 'Totem Armor', 'Transfigure', 'Transmute', 'Tribute', 'Undying', 'Unearth', 'Unleash', 'Vanishing', 'Wither'
]

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

  // Parse out card text, and return a list of static abilities
  abilities() {
    function cleanupAbility(text) {
      return text.replace(/\(.*\)/, '') // Remove reminder text
                 .replace(/\{.*\}/, '') // Remove the cost
                 .trim() // Remove whitespace from start and end
    }
    const text = this.cardData.get('text');
    const lines = text.split("\n")
    const keywordLines = lines.filter((line) => {
      const firstPossibleAbility = cleanupAbility(line.split(/,/)[0])
      return ABILITIES.includes(firstPossibleAbility)
    })
    const abilities = keywordLines
            .map((line) => line.split(/,/))
            .reduce( ( acc, cur ) => acc.concat(cur), [])
            .map((rawAbilityText) => cleanupAbility(rawAbilityText));
    return abilities
  }
}

export default Card
