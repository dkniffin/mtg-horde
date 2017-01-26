import { combineReducers } from "redux-immutable"

import deck from "./deckReducer"
import graveyard from "./graveyardReducer"
import exile from "./exileReducer"
import creatures from "./creaturesReducer"
import phase from "./phaseReducer"
import pending from "./pendingReducer"

export default combineReducers({
  deck,
  pending,
  graveyard,
  exile,
  creatures,
  phase
})
