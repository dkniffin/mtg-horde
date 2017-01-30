import { phases, nextPhaseIdx } from '../helpers/phaseHelper.js'
import { resolvePending, castFromGraveyard, castFromHand, hordeDraw } from '../helpers/gameHelper.js'

export const nextPhase = () => {
  return (dispatch, getState) => {
    const nextPhase = phases[nextPhaseIdx(getState().get('phase'))].id

    switch (nextPhase) {
      case 'HORDE_DRAW':
        /*
          Horde Draw - Flip cards from the top of the library, until a non-token is found. All
          revealed cards will be played, but first they must be put in the pending zone, so the
          Survivors have a chance to react.
        */
        hordeDraw(dispatch, getState)
        break;

      case 'HORDE_PLAY':
        /*
          Horde Play - Resolve pending cards, then play cards from hand, and cards from the
          graveyard with flashback or unearth
        */
        resolvePending(dispatch, getState)
        castFromGraveyard(dispatch, getState)
        castFromHand(dispatch, getState)
        break;

      case 'HORDE_ATTACK':
        /*
          Horde Attack - Resolve pending cards, then all creatures attack. Tap them, and indicate
          which player or planeswalker they are targeting.
        */
        resolvePending(dispatch, getState)
        break;

      default:
        break;
    }
    dispatch({
      type: "NEXT_PHASE"
    })
  }
}
