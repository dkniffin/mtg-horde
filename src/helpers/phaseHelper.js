export const phases = [
  {
    id: 'SURVIVORS_TURN',
    title: 'Survivor\'s turn',
    description: ''
  },
  {
    id: 'HORDE_DRAW',
    title: 'Horde Draw',
    description: ''
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
