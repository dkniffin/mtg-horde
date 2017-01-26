export const phases = [
  {
    id: 'SURVIVORS_TURN',
    title: 'Survivor\'s turn',
    description: 'Survivors (players) take their turn as a group. Any changes to the state of the\
                  Horde board, such as destroying or tapping Horde cards, should be made manually\
                  during this phase. When ready, click the next button to end your turn and move\
                  onto the Horde\'s turn'
  },
  {
    id: 'HORDE_DRAW',
    title: 'Horde Draw',
    description: 'The Horde has revealed cards from it\'s library, until a non-token was revealed.\
                  They are now in the pending state. You may respond to any of these cards before\
                  they are played. When you are done, resolve the non-permanents, then press next\
                  to continue.'
  },
  {
    id: 'HORDE_PLAY',
    title: 'Horde Play',
    description: ''
  },
  {
    id: 'HORDE_ATTACK',
    title: 'Horde Attack',
    description: ''
  }
]

export function nextPhaseIdx(currentPhase) {
  return (currentPhase + 1) % phases.length
}
