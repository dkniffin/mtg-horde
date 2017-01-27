export const phases = [
  {
    id: 'SURVIVORS_TURN',
    title: 'Survivors\' turn',
    description: 'Survivors (players) take their turn as a group. Any changes to the state of the Horde board, such as destroying or tapping Horde cards, should be made manually during this phase. When ready, click the next button to end your turn and move onto the Horde\'s turn'
  },
  {
    id: 'HORDE_DRAW',
    title: 'Horde Draw',
    description: 'The Horde has revealed cards from it\'s library, until a non-token was revealed. They are now in the pending state. You may respond to any of these cards before they are played. When you are done, manually resolve any effects, then press next to continue to the Horde play phase.'
  },
  {
    id: 'HORDE_PLAY',
    title: 'Horde Play',
    description: 'The cards revealed from the Horde\'s library have been resolved. Any cards the Horde can play from it\'s hand or graveyard are currently in the pending zone. Respond to those cards now, then manually resolve any effects, then press next to continue to the Horde attack phase.'
  },
  {
    id: 'HORDE_ATTACK',
    title: 'Horde Attack',
    description: 'The Horde is attacking. Each of it\'s creatures has been tapped, and has a number on it, representing which planeswalker or player it is targeting. You may respond to the combat now, then resolve combat damage. Press next to continue to the Survivors\' turn.'
  }
]

export function nextPhaseIdx(currentPhase) {
  return (currentPhase + 1) % phases.length
}
