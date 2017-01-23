import { combineReducers } from "redux-immutable"

import deck from "./deckReducer"
import graveyard from "./graveyardReducer"
import exile from "./exileReducer"
import creatures from "./creaturesReducer"
import phase from "./phaseReducer"

export default combineReducers({
  deck,
  graveyard,
  exile,
  creatures,
  phase
})
