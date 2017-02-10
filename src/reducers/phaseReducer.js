import { nextPhaseIdx } from '../helpers/phaseHelper.js'

const phaseReducer = (phase = 0, action) => {
  switch (action.type) {
    case 'NEXT_PHASE':
      return nextPhaseIdx(phase)
    default:
      return phase
  }
}

export default phaseReducer;
