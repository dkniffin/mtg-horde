import phases from '../constants/phases.js'

function nextPhaseIdx(currentPhase) {
  return (currentPhase + 1) % phases.length
}

const phaseReducer = (phase = [], action) => {
  switch (action.type) {
    case "NEXT_PHASE":
      return nextPhaseIdx(phase)
    default:
      return phase
  }
}

export default phaseReducer;
