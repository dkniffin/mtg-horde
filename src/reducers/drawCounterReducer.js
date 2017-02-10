import Immutable from 'immutable'

const INITIAL_STATE = Immutable.fromJS({
  counter: 0,
  draw: 1
})

// https://github.com/dkniffin/mtg-horde/issues/7
const drawCounterReducer = (drawCounter = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'NEXT_PHASE':
      if (action.phaseKey === 'SURVIVORS_TURN') {
        const oldCounter = drawCounter.get('counter')
        const oldDraw = drawCounter.get('draw')

        const counter = (oldCounter + 1) % 10
        const draw = counter === 0 ? oldDraw + 1 : oldDraw

        return Immutable.Map({ counter, draw })
      } else {
        return drawCounter
      }
    default:
      return drawCounter
  }
}

export default drawCounterReducer;
