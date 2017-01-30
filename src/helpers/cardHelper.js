export function abilitiesFor(card) {
  switch(card.getIn(['cardData', 'name'])) {
    case 'Rotting Rats':
      return ['unearth']
    case 'Army of the Damned':
    case 'Past in Flames':
      return ['flashback']
    default:
      return []
  }
}
